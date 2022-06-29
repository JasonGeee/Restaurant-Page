function createFood(src, alt, text, price) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu');

    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);

    const description = document.createElement('div');
    description.classList.add('description');

    const foodName = document.createElement('h3');
    foodName.textContent = text;

    const foodPrice = document.createElement('h3');
    foodPrice.textContent = price;

    description.appendChild(foodName);
    description.appendChild(foodPrice);

    menuItem.appendChild(img);
    menuItem.appendChild(description);

    return menuItem;
}

export function menu() {
    const content = document.getElementById('content');

    const menu = document.createElement('div');
    menu.setAttribute('class', 'menu-container');

    const foods = [
        createFood(
            './imgs/ronto-wrap.jpeg',
            'ronto-wrap',
            'Ronto Wrap',
            '$9.99'
        ),
        createFood(
            './imgs/roasted-chicken.jpeg',
            'roasted-chicken',
            'Roasted Chicken',
            '$12.99'
        ),
        createFood(
            './imgs/Last-Jedi-BB8-Bruscetta-2.jpeg',
            'Last-Jedi-BB8-Bruscetta-2',
            'BB8 Bruscetta',
            '$8.99'
        ),
        createFood(
            './imgs/bright-suns-morning-breakfast-lead.jpeg',
            'breakfast-lead',
            'Bright Suns Morning Breakfast Lead',
            '$12.99'
        ),
        createFood(
            './imgs/Grogu-Apple.jpeg',
            'Grogu-apple',
            'Grogu Apple',
            '$6.99'
        ),
        createFood(
            './imgs/chewbacca-cookies.jpeg',
            'chewbacca-cookie',
            'Chewbacca Cookies',
            '$4.99'
        )
    ];

    foods.forEach((food) => {
        menu.appendChild(food);
    });
    content.appendChild(menu);
}