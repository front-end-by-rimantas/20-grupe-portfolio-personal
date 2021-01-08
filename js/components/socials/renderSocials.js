import { isValidSocials } from './isValidSocials.js';
import { findIfValidSelector } from './findIfValidSelector.js';
import { isValidSocialItem } from './isValidSocialItem.js';

function renderSocials(params) {
    if (!isValidSocials(params)) {
        return false;
    }

    const { selector, data, limit } = params;

    const DOM = findIfValidSelector(selector);
    if (!DOM) {
        return false;
    }

    let HTML = '';
    for (const item of data) {
        if (!isValidSocialItem(item)) {
            continue;
        }
        HTML += `<a href="${item.href}" class="fa fa-${item.icon}"></a>`;
    }

    DOM.innerHTML = HTML;

    return true;
}

export { renderSocials }