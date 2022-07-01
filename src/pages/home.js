function createHomeSection() {
    //Home Page Section
    const home = document.createElement('div');
    home.classList.add('home-container');

    //Title
    const title = document.createElement('h1');
    title.textContent = "Star Wars Food";

    const title2 = document.createElement('h2');
    title2.textContent = "Galaxy's Best Food!";
    title2.setAttribute('class', 'animate__animated animate__lightSpeedInLeft');
    const span = document.createElement('span');

    home.appendChild(title);
    home.appendChild(title2);
    home.appendChild(span);

    return home;
}

function loadHome() {
    console.log('calling from loadHome function');
    const content = document.getElementById('tab-content');

    content.textContent = ''; //removes all content before loading

    const homeSection = createHomeSection();

    content.appendChild(homeSection);
}

export default loadHome;