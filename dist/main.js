/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_loadPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/loadPage.js */ \"./src/pages/loadPage.js\");\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu.js */ \"./src/pages/menu.js\");\n\n\n\n\ninit();\n\nfunction navButtons() {\n    const homeBtn = document.getElementById('Home');\n    const menuBtn = document.getElementById('Menu');\n\n    homeBtn.addEventListener('click', _pages_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    menuBtn.addEventListener('click', _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n}\n\n// Opens Home Page\nfunction init() {\n    (0,_pages_loadPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    navButtons();\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHomeSection() {\n    //Home Page Section\n    const home = document.createElement('div');\n    home.classList.add('home-container');\n\n    //Title\n    const title = document.createElement('h1');\n    title.textContent = \"Star Wars Food\";\n\n    const title2 = document.createElement('h2');\n    title2.textContent = \"Galaxy's Best Food!\";\n    title2.setAttribute('class', 'animate__animated animate__lightSpeedInLeft');\n    const span = document.createElement('span');\n\n    home.appendChild(title);\n    home.appendChild(title2);\n    home.appendChild(span);\n\n    return home;\n}\n\nfunction loadHome() {\n    console.log('calling from loadHome function');\n    const content = document.getElementById('tab-content');\n\n    content.textContent = ''; //removes all content before loading\n\n    const homeSection = createHomeSection();\n\n    content.appendChild(homeSection);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/loadPage.js":
/*!*******************************!*\
  !*** ./src/pages/loadPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createNavBar() {\n    const content = document.getElementById('content');\n\n    const nav = document.createElement('nav');\n    nav.setAttribute('class', 'nav-container');\n\n    const ul = document.createElement('ul');\n    \n    const navItems = ['Home', 'Menu'];\n    navItems.forEach((item) => {\n        const list = document.createElement('li');\n        ul.appendChild(list);\n        list.setAttribute('id', item);\n        list.classList.add('navBtn');\n        list.textContent = item;\n    });\n\n    nav.appendChild(ul);\n    return nav;\n}\n\nfunction createFooter() {\n    const content = document.getElementById('content');\n\n    const footer = document.createElement('footer');\n    const signature = document.createElement('div');\n    signature.setAttribute('class', 'signature');\n\n    const link = document.createElement('a');\n    link.setAttribute('target', '_blank');\n    link.href = \"https://github.com/JasonGeee\";\n    link.textContent = \"Made By Master Jedi Jason\";\n\n    signature.appendChild(link);\n    footer.appendChild(signature);\n\n    return footer;\n}\n\nfunction createMain(id) {\n    const main = document.createElement('main');\n    main.setAttribute('id', id);\n    return main;\n}\n\nfunction loadPage() {\n    console.log('loading loadPage function');\n\n    const content = document.getElementById('content');\n\n    //Nav bar\n    const topNav = createNavBar();\n    content.appendChild(topNav);\n\n    // main tab content\n    const tabContent = createMain('tab-content');\n    content.appendChild(tabContent);\n\n    // footer\n    const bottomFooter = createFooter();\n    content.appendChild(bottomFooter);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/loadPage.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createFood(src, alt, text, price) {\n    const menuItem = document.createElement('div');\n    menuItem.classList.add('menu');\n\n    const img = document.createElement('img');\n    img.setAttribute('src', src);\n    img.setAttribute('alt', alt);\n\n    const description = document.createElement('div');\n    description.classList.add('description');\n\n    const foodName = document.createElement('h3');\n    foodName.textContent = text;\n\n    const foodPrice = document.createElement('h3');\n    foodPrice.textContent = price;\n\n    description.appendChild(foodName);\n    description.appendChild(foodPrice);\n\n    menuItem.appendChild(img);\n    menuItem.appendChild(description);\n\n    return menuItem;\n}\n\nfunction loadMenu() {\n    console.log('calling from loadMenu function');\n    const content = document.getElementById('tab-content');\n\n    content.textContent = ''; //removes all content\n\n    const menu = document.createElement('div');\n    menu.setAttribute('class', 'menu-container');\n\n    const foods = [\n        createFood(\n            './imgs/ronto-wrap.jpeg',\n            'ronto-wrap',\n            'Ronto Wrap',\n            '$9.99'\n        ),\n        createFood(\n            './imgs/roasted-chicken.jpeg',\n            'roasted-chicken',\n            'Roasted Chicken',\n            '$12.99'\n        ),\n        createFood(\n            './imgs/Last-Jedi-BB8-Bruscetta-2.jpeg',\n            'Last-Jedi-BB8-Bruscetta-2',\n            'BB8 Bruscetta',\n            '$8.99'\n        ),\n        createFood(\n            './imgs/bright-suns-morning-breakfast-lead.jpeg',\n            'breakfast-lead',\n            'Bright Suns Morning Breakfast Lead',\n            '$12.99'\n        ),\n        createFood(\n            './imgs/Grogu-Apple.jpeg',\n            'Grogu-apple',\n            'Grogu Apple',\n            '$6.99'\n        ),\n        createFood(\n            './imgs/chewbacca-cookies.jpeg',\n            'chewbacca-cookie',\n            'Chewbacca Cookies',\n            '$4.99'\n        )\n    ];\n\n    foods.forEach((food) => {\n        menu.appendChild(food);\n    });\n    content.appendChild(menu);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;