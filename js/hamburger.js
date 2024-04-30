'use strict';

const checkbox = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

// To toggle classes on the menu based on checkbox state
const toggleMenuClass = () => {

    // If checkbox is checked, add 'open' class and remove 'close' class
    // from menu, otherwise, add 'close' class and remove 'open' class
    checkbox.checked
        ? (menu.classList.remove('close'), menu.classList.add('open'))
        : (menu.classList.remove('open'), menu.classList.add('close'));
};

// Check screen size on page load
window.addEventListener('load', () => {

    // If screen size is less than or equal to 768px,
    // add event listener to checkbox
    window.innerWidth <= 768
        ? checkbox.addEventListener('change', toggleMenuClass)
        : null;
});

// Check screen size on resize
window.addEventListener('resize', () => {

    // If screen size is less than or equal to 768px, add event listener to checkbox,
    // otherwise, remove event listener from checkbox
    window.innerWidth <= 768
        ? checkbox.addEventListener('change', toggleMenuClass)
        : checkbox.removeEventListener('change', toggleMenuClass);
});