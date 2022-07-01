import loadPage from "./pages/loadPage.js";
import loadHome from "./pages/home.js";
import loadMenu from "./pages/menu.js";

init();

function navButtons() {
    const homeBtn = document.getElementById('Home');
    const menuBtn = document.getElementById('Menu');

    homeBtn.addEventListener('click', loadHome);
    menuBtn.addEventListener('click', loadMenu);
}

// Opens Home Page
function init() {
    loadPage();
    loadHome();
    navButtons();
}

