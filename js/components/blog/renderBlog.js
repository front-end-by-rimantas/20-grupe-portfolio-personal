import { isValidBlogPost } from "./isValidBlogPost.js";
import { isValidSelector } from "./isValidSelector.js";
import { isValidBlogItem } from "./isValidBlogItem.js";

function renderBlog(params) {
    if (!isValidBlogPost(params)){
        return false;
    }
    const { selector, data, limit } = params;
    
    if (!isValidSelector(selector)){
        return false;
    }
    let DOM = document.querySelector(selector);

    let HTML = '';
    let limitCounter = 0;
    for (let item of data) {
        if (limitCounter === limit) {
            break;
        }
        if (!isValidBlogItem(item)){
            continue;
        }
        HTML += `<div class="blog-item col-xs-12 col-md-4 col-lg-4">
        <div class="blog-img">
            <img src="${item.picture}" alt="image">
        </div>
        <div class="social-info">
            <div class="social-info-left">
                <img src="./img/blog/user.jpg" alt="user">
                <span>Mark Wiens</span>
            </div>
            <div class="social-info-right">
                <p>13th Dec <i class="lnr lnr-heart"></i> 15 <i class="lnr lnr-bubble"></i> 04</p>
            </div>
        </div>
        <div class="img-description">
            <h5>${item.heading}</h5>
            <p>${item.description}</p>
        </div>
    </div>`
        limitCounter++;
    }

    DOM.innerHTML = HTML;

    return true;
}

export { renderBlog }