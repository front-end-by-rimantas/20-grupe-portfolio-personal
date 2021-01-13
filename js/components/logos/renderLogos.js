import {isValidLogos} from './isValidLogos.js';
import {findIfValidLogoSelector} from './findIfValidLogoSelector.js';
import {isValidLogoItem} from './isValidLogoItem.js';


function renderLogos(params){
        if (!isValidLogos(params)) {
            return false;
        }
    
        const { selector, data, limit } = params;
    
        const DOM = findIfValidLogoSelector(selector);
        if (!DOM) {
            return false;
        }
    
        let HTML = '';
        for (const item of data) {
            if (!isValidLogoItem(item)) {
                continue;
            }
            HTML += `
                <img src="${item.link}" alt="${item.alt}" id="${item.id}">
                ` ;
        }
    
        DOM.innerHTML = HTML;
    
        return true;
    }
    


export { renderLogos }