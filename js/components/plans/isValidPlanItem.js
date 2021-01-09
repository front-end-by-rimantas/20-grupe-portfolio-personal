function isValidPlanItem(item) {
    if (typeof item !== 'object' ||
        Array.isArray(item) ||
        typeof item.roundElement !== 'string' ||
        typeof item.title !== 'string' ||
        typeof item.price !== 'string' ||
        item.roundElement === '' ||
        item.title === '' ||
        item.price === '' ) {
        return false;
    }
    return true;
}

export { isValidPlanItem }