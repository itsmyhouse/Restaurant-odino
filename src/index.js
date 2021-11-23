import createHomePage from "./module/home.js";
import { createMenu } from "./module/menu.js";
import { createContact } from "./module/contact.js";
import './style.css';

createTabs();
createHomePage();

function createTabs() {
    const page = document.querySelector("#content");

    const menuList = document.createElement("ul");
    page.appendChild(menuList);

    const item_home = document.createElement("li");
    item_home.innerText = "home";
    item_home.setAttribute("data-index", "0");
    item_home.addEventListener("click", tabPage);
    menuList.appendChild(item_home);

    const item_menu = document.createElement("li");
    item_menu.innerText = "menu";
    item_menu.setAttribute("data-index", "1");
    item_menu.addEventListener("click", tabPage);
    menuList.appendChild(item_menu);

    const item_contact = document.createElement("li");
    item_contact.innerText = "contact";
    item_contact.setAttribute("data-index", "2");
    item_contact.addEventListener("click", tabPage);
    menuList.appendChild(item_contact);

    function tabPage (event) {

        while(page.firstChild) {
            page.removeChild(page.firstChild);
        }

        const tabNumber = event.target.dataset.index;

        if(tabNumber == 0) {
            createTabs();
            createHomePage();
        }
        else if (tabNumber == 1) {
            createTabs();
            createMenu();
        }
        else if (tabNumber == 2) {
            createTabs();
            createContact();
        }
    }
}