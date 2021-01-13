function isValidSelector(selector) {
    if (typeof selector !== 'string' ||
        selector === ''){
            return false;
        }
    let DOM = document.querySelector(selector);
    if (!DOM){
        return false;
    }
    return true;
}

export { isValidSelector }