function openCloseSidebarDropdown() {
    let dropdownBlog = document.querySelectorAll('.dropdown-link-blog');
    let dropdownPages = document.querySelectorAll('.dropdown-link-pages');
    let dropdownPagesLvl2 = document.querySelectorAll('.pages-level-2-link');
    for (let i = 0; i < dropdownBlog.length; i++){
        dropdownBlog[i].addEventListener('click', function () {
            let dropdownContentBlog = document.querySelector('.sidebar-dropdown-content-blog');
            if (dropdownContentBlog.style.display === 'flex'){
                dropdownContentBlog.style.display = 'none';
            } else {
                dropdownContentBlog.style.display = 'flex';
            }
        })
    }
    for (let i = 0; i < dropdownPages.length; i++){
        dropdownPages[i].addEventListener('click', function () {
            let dropdownContentPages = document.querySelector('.sidebar-dropdown-content-pages');
            let dropdownLevel2 = document.querySelector('.sidebar-dropdown-level-2');
            if (dropdownContentPages.style.display === 'flex' && dropdownLevel2.style.display === 'block'){
                dropdownContentPages.style.display = 'none';
                dropdownLevel2.style.display = 'none';
            } else {
                dropdownContentPages.style.display = 'flex';
                dropdownLevel2.style.display = 'block';
            }
        })
    }
    for (let i = 0; i < dropdownPagesLvl2.length; i++){
        dropdownPagesLvl2[i].addEventListener('click', function () {
            let dropdownLevel2Content = document.querySelector('.sidebar-dropdown-content-lvl-2');
            if (dropdownLevel2Content.style.display === 'block'){
                dropdownLevel2Content.style.display = 'none';
            } else {
                dropdownLevel2Content.style.display = 'block';
            }
        })
    }
}

export { openCloseSidebarDropdown }