import { navBar } from "./assests/nav-bar";
import { footer } from "./assests/footer";
import { home } from "./pages/home";
import { menu } from "./pages/menu";

init();
// openMenu();

// Opens Menu Page
function openMenu() {
    navBar();
    menu();
    footer();
}
// Opens Contact Page

// Opens About Page


function init() {
    navBar();
    home();
    footer();
}