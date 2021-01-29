import { isValidPrices } from './isValidPrices.js';
import { findIfValidPlansSelector } from './findIfValidPlansSelector.js';
import { isValidPlanItem } from './isValidPlanItem.js';

function renderPlanPrices(params) {
    if (!isValidPrices(params)) {
        return false;
    }

    const { selector, data, limit } = params;

    const DOM = findIfValidPlansSelector(selector);
    if (!DOM) {
        return false;
    }

    let HTML = '';
    for (const item of data) {
        if (!isValidPlanItem(item)) {
            continue;
        }
        HTML += `
        <div class="plans-item">
            <div class="round-element">
                <p>${item.roundElement}</p>
            </div>
            <div class="plans-heading">
                <h2>${item.title}</h2>
                <p>For the individuals</p>
            </div>
            <section class="plans-features">
            <div class=" top-line">
                <p>Secure Online Transfer</p>
            </div>
            <div class=" top-line">
                <p>Unlimited Styles for interface</p>
            </div>
            <div class="top-line">
                <p>Reliable Customer Service</p>
            </div>
        </section>
        <div class="row">
            <div class="col-xs-12">
                <div class="plans-price">
                <p>${item.price}</p>
            </div>
            </div>
        </div>
            <div class="plans-button">
                <div class="btn-div">
                    <p>buy now</p>
                </div>
            </div>
        </div>`;
    }

    DOM.innerHTML = HTML;

    return true;
}

export { renderPlanPrices }