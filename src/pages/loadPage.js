function createNavBar() {
    const content = document.getElementById('content');

    const nav = document.createElement('nav');
    nav.setAttribute('class', 'nav-container');

    const ul = document.createElement('ul');
    
    const navItems = ['Home', 'Menu'];
    navItems.forEach((item) => {
        const list = document.createElement('li');
        ul.appendChild(list);
        list.setAttribute('id', item);
        list.classList.add('navBtn');
        list.textContent = item;
    });

    nav.appendChild(ul);
    return nav;
}

function createFooter() {
    const content = document.getElementById('content');

    const footer = document.createElement('footer');
    const signature = document.createElement('div');
    signature.setAttribute('class', 'signature');

    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.href = "https://github.com/JasonGeee";
    link.textContent = "Made By Master Jedi Jason";

    signature.appendChild(link);
    footer.appendChild(signature);

    return footer;
}

function createMain(id) {
    const main = document.createElement('main');
    main.setAttribute('id', id);
    return main;
}

function loadPage() {
    console.log('loading loadPage function');

    const content = document.getElementById('content');

    //Nav bar
    const topNav = createNavBar();
    content.appendChild(topNav);

    // main tab content
    const tabContent = createMain('tab-content');
    content.appendChild(tabContent);

    // footer
    const bottomFooter = createFooter();
    content.appendChild(bottomFooter);
}

export default loadPage;