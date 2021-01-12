function isValidServiceItem(item) {
    if (typeof item !== 'object' ||
        Array.isArray(item) ||
        typeof item.icon !== 'string' ||
        typeof item.title !== 'string' ||
        typeof item.info !== 'string' ||
        item.icon === '' ||
        item.title === '' ||
        item.info === '' ) {
        return false;
    }
    return true;
}

export { isValidServiceItem }