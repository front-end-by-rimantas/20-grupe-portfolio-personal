function isValidBlogItem(item) {
    if (typeof item !== 'object'
    || Array.isArray(item)
    || Object.keys(item).length !== 3
    || typeof item.picture !== 'string'
    || typeof item.heading !== 'string'
    || typeof item.description !== 'string'
    || item.picture === '' 
    || item.heading === '' 
    || item.description === '') {
        return false;
    }
    return true;
}

export { isValidBlogItem }