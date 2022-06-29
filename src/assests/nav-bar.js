// Nav Bar
export function navBar() {
    const content = document.getElementById('content');

    const nav = document.createElement('nav');
    nav.setAttribute('class', 'nav-container');

    const ul = document.createElement('ul');
    
    const navItems = ['Home', 'Menu', 'Contact'];
    navItems.forEach((item) => {
        const list = document.createElement('li');
        ul.appendChild(list);
        list.textContent = item;
    });

    nav.appendChild(ul);
    content.appendChild(nav);
}