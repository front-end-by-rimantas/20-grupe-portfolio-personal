function isValidSocialItem(item) {
    if (typeof item !== 'object' ||
        Array.isArray(item) ||
        typeof item.href !== 'string' ||
        typeof item.icon !== 'string' ||
        item.icon === '' ||
        item.title === '') {
        return false;
    }
    return true;
}

export { isValidSocialItem }