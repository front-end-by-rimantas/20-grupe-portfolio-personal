function isValidLogoItem(item){
    if (typeof item !== 'object' ||
    Array.isArray(item) ||
    typeof item.link !== 'string' ||
    item.link === '' ||
    typeof item.alt !== 'string' ||
    item.alt === '' ||
    typeof item.id !== 'string' ||
    item.id === '' ){
    return false;
}
return true;

}

export { isValidLogoItem }