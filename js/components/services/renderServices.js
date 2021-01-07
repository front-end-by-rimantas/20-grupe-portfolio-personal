import { isValidServices } from './isValidServices.js';
import { findIfValidSelector } from './findIfValidSelector.js';
import { isValidServiceItem } from './isValidServiceItem.js';

function renderServices(params) {
    if (!isValidServices(params)) {
        return false;
    }

    const { selector, data, limit } = params;

    const DOM = findIfValidSelector(selector);
    if (!DOM) {
        return false;
    }

    let HTML = '';
    for (const item of data) {
        if (!isValidServiceItem(item)) {
            continue;
        }
        HTML += `<div class="service-item col-12 col-md-6 col-lg-4">
            <i class="fa fa-${item.icon}"></i>
            <h3>${item.title}</h1>
            <p>${item.info}</p>
        </div>`;

    }

    DOM.innerHTML = HTML;

    return true;
}

export { renderServices }