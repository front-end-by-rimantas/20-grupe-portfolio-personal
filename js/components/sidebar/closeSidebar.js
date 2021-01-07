function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("mySidebarSection").style.width = "0";
    document.getElementById("sidebarNav").style.display = "none";
}

export { closeSidebar }