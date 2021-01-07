function closeSidebar() {
    document.getElementById("closeIcon").addEventListener('click', function(){
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("mySidebarSection").style.width = "0";
        document.getElementById("sidebarNav").style.display = "none";
    })
    return true;
}

export { closeSidebar }