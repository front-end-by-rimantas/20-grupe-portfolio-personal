function closeSidebar() {
    document.querySelector('#closeIcon, #mySidebarSection').addEventListener('click', function () {
        document.querySelector('#mySidebar').style.width = '0';
        document.querySelector('#mySidebarSection').style.width = '0';
        document.querySelector('#sidebarNav').style.display = 'none';
        document.querySelector('body').style.overflow = 'initial';
    });
    return true;
}

export { closeSidebar };