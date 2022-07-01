import loadPage from "./pages/loadPage";
import loadHome from "./pages/home";
import loadMenu from "./pages/menu";

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

