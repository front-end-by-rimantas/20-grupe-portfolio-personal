function openCloseSidebarDropdown() {
    let dropdownBlog = document.querySelectorAll('.dropdown-link-blog');
    let dropdownPages = document.querySelectorAll('.dropdown-link-pages');
    for (let i = 0; i < dropdownBlog.length; i++){
        dropdownBlog[i].addEventListener('click', function () {
            let dropdownContentBlog = document.querySelector('.sidebar-dropdown-content-blog');
            console.log(dropdownContentBlog);
            if (dropdownContentBlog.style.display === 'none'){
                dropdownContentBlog.style.display = 'flex';
            } else {
                dropdownContentBlog.style.display = 'none';
            }
        })
    }
    for (let i = 0; i < dropdownPages.length; i++){
        dropdownPages[i].addEventListener('click', function () {
            let dropdownContentPages = document.querySelector('.sidebar-dropdown-content-pages');
            let dropdownLevel2 = document.querySelector('.sidebar-dropdown-level-2');
            console.log(dropdownContentPages);
            if (dropdownContentPages.style.display === 'none' && dropdownLevel2.style.display === 'none'){
                dropdownContentPages.style.display = 'flex';
                dropdownLevel2.style.display = 'flex';
            } else {
                dropdownContentPages.style.display = 'none';
                dropdownLevel2.style.display = 'none';
            }
        })
    }
}

export { openCloseSidebarDropdown }