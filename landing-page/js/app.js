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


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


buildNav();