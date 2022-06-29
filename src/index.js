import { navBar } from "./assests/nav-bar";
import { footer } from "./assests/footer";
import { home as homePage } from "./pages/home";
import { menu as menuPage } from "./pages/menu";


init(); //initial homepage load
navButtons();

function navButtons() {
    const home = document.getElementById('Home');
    const menu = document.getElementById('Menu');
    const contact = document.getElementById('Contact');

    home.addEventListener('click', homePage);
    menu.addEventListener('click', menuPage);
    // contact.addEventListener('click', );
}

// Opens Home Page
function init() {
    navBar();
    homePage();
    footer();
}

// Opens Menu Page
export function openMenu() {
    navBar();
    menuPage();
    footer();
}

// Opens Contact Page
function openContact() {
    navBar();
    footer();
}


