const searchInput = document.querySelector('.header-search');
const searchIcon = document.querySelector('.search-icon');
const searchIconText = document.querySelector('.fa-search')
const logoIcon = document.querySelector('.logo-icon');
const logoText = document.querySelector('.logo span');
const headerMenu = document.querySelector('.header-menu');
const searchInputMinimized = document.querySelector('.header-search-minimized');
// Search animation

searchInput.addEventListener('focus', function() {
    searchIcon.classList.toggle('search-icon-right');
    searchInput.style.paddingLeft = 15 + 'px';
});

searchInput.addEventListener('blur', function searchInputBlur() {
    searchIcon.classList.toggle('search-icon-right');
    searchInput.style.paddingLeft = 45 + 'px';

});

if (window.innerWidth <= 500) {
    searchInput.addEventListener('focus', function() {
        searchIcon.classList.toggle('search-icon-right');
        searchInput.style.paddingLeft = 25 + 'px';
    });

    searchInput.addEventListener('blur', function searchInputBlur() {
        searchIcon.classList.toggle('search-icon-right');
        searchInput.style.paddingLeft = 25 + 'px';
    });
}

searchIcon.addEventListener('click', function() {
    searchInput.style.width = '230px';
    
    if (window.innerWidth <= 500) {
        searchInput.style.width = '150px';

    }
});


// if (window.innerWidth <= 400) {
//     searchInput.style.position = 'absolute'
//     searchInput.style.top = '50px'
//     searchInput.style.left = '-50px'
//     searchIcon.style.top = '80px';
//     searchIcon.style.left = '-37px';
// }


// Header fixed and minimized
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
if (window.pageYOffset > sticky) {

    header.classList.add('header-minimized');
    header.classList.remove('header');

    logoText.classList.add('logo-hidden')
    
    logoIcon.classList.remove('logo-icon');
    logoIcon.classList.add('logo-icon-minimized');

    searchInput.classList.add('header-search-minimized');
    searchInput.classList.remove('header-search');

    headerMenu.classList.add('header-menu-minimized');
    headerMenu.classList.remove('header-menu');

} else {

    header.classList.remove("header-minimized");
    header.classList.add("header");
    
    logoText.classList.remove('logo-hidden');
    
    logoIcon.classList.add('logo-icon');
    logoIcon.classList.remove('logo-icon-minimized');
    
    searchInput.classList.remove('header-search-minimized')
    searchInput.classList.add('header-search')

    headerMenu.classList.add('header-menu');
    headerMenu.classList.remove('header-menu-minimized');
}
}