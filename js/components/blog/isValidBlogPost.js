function isValidBlogPost(params) {
    if (!Array.isArray(params.data)
    || params.data.length === 0) {
        return false;
    }
    if (typeof params.limit !== 'number'
    || params.limit % 1 !== 0
    || params.limit < 1){
        return false;
    }
    return true;
}

export { isValidBlogPost }