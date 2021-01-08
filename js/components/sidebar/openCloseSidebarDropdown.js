function openCloseSidebarDropdown() {
    let dropdownBlog = document.querySelectorAll('.dropdown-link-blog');
    let dropdownPages = document.querySelectorAll('.dropdown-link-pages');
    let dropdownPagesLvl2 = document.querySelectorAll('.pages-level-2-link');
    for (let i = 0; i < dropdownBlog.length; i++){
        dropdownBlog[i].addEventListener('click', function () {
            let dropdownContentBlog = document.querySelector('.sidebar-dropdown-content-blog');
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
            if (dropdownContentPages.style.display === 'none' && dropdownLevel2.style.display === 'none'){
                dropdownContentPages.style.display = 'flex';
                dropdownLevel2.style.display = 'block';
            } else {
                dropdownContentPages.style.display = 'none';
                dropdownLevel2.style.display = 'none';
            }
        })
    }
    for (let i = 0; i < dropdownPagesLvl2.length; i++){
        dropdownPagesLvl2[i].addEventListener('click', function () {
            let dropdownLevel2Content = document.querySelector('.sidebar-dropdown-content-lvl-2');
            if (dropdownLevel2Content.style.display === 'none'){
                dropdownLevel2Content.style.display = 'block';
            } else {
                dropdownLevel2Content.style.display = 'none';
            }
        })
    }
}

export { openCloseSidebarDropdown }