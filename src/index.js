import loadPage from "./pages/loadPage.js";
import loadHome from "./pages/home.js";
import menu from "./pages/menu.js";

init(); //initial homepage load
// navButtons();

function navButtons() {
    const homeBtn = document.getElementById('Home');
    // const menu = document.getElementById('Menu');
    // const contact = document.getElementById('Contact');

    homeBtn.addEventListener('click', loadHome);
}

// Opens Home Page
function init() {
    loadPage();
    loadHome();
    navButtons();
}

