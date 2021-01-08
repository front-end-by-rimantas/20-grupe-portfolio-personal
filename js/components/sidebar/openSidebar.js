function openSidebar() {
    document.querySelector("#hamburger").addEventListener('click', function(){
    document.querySelector("#mySidebar").style.width = "250px";
    document.querySelector("#mySidebarSection").style.width = "100%";
    document.querySelector("#sidebarNav").style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
    })
    return true;
}

export { openSidebar }