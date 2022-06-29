// import { openMenu } from "./src/index.js";
export function home() {
    const content = document.getElementById('content');

    const home = document.createElement('main');
    const title = document.createElement('h1');
    title.textContent = "Star Wars Food";

    const title2 = document.createElement('h2');
    title2.textContent = "Galaxy's Best Food!";
    title2.setAttribute('class', 'animate__animated animate__lightSpeedInLeft');
    const span = document.createElement('span');

    // const menuButton = document.createElement('button');
    // menuButton.textContent = "View Menu";

    home.appendChild(title);
    home.appendChild(title2);
    home.appendChild(span);
    content.appendChild(home);
}