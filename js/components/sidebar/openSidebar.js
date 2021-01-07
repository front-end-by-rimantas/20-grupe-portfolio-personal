function openSidebar() {
    document.getElementById("hamburger").addEventListener('click', function(){
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("mySidebarSection").style.width = "100%";
        document.getElementById("sidebarNav").style.display = "flex";
    })
    return true;
}

export { openSidebar }