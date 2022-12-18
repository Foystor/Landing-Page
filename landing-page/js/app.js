/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = [...document.querySelectorAll('section')];


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// get corresponding Nav link of the section
function getCurrentNavLink(hrefText) {
    const navLinks = document.querySelectorAll('.menu__link');

    for (const navLink of navLinks) {
        if (navLink.getAttribute('href') === hrefText) return navLink;
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
    const navList = document.querySelector('#navbar__list');
    const fragment = document.createDocumentFragment();

    for (const section of sections) {
        const newNavItem = document.createElement('li');
        newNavItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;

        fragment.appendChild(newNavItem);
    }

    navList.appendChild(fragment);
}


// Add class 'active' to section when near top of viewport
function makeActive() {
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        const VALUE = 150;

        if (box.top <= VALUE && box.bottom >= VALUE) {
            //apply active state on current section and corresponding Nav link
            section.classList.add('active');
            getCurrentNavLink(`#${section.id}`).classList.add('active');
        } else {
            //Remove active state from current section and corresponding Nav link
            section.classList.remove('active');
            getCurrentNavLink(`#${section.id}`).classList.remove('active');
        }
    }
}


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
document.addEventListener('scroll', () => { makeActive();});


buildNav();