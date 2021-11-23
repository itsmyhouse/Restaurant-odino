function createMenu() {
    const page = document.querySelector("#content");

    const title = document.createElement("h2");
    title.innerText = "MENU";
    page.appendChild(title);

    const list = document.createElement("ul");
    const item_1 = document.createElement("li");
    item_1.innerText = "Pizza";
    list.appendChild(item_1);
    const item_2 = document.createElement("li");
    item_2.innerText = "Hamburger";
    list.appendChild(item_2);
    page.appendChild(list);

    const para_1 = document.createElement("p");
    para_1.innerText = "Beverage";
    page.appendChild(para_1);

    const para_2 = document.createElement("p");
    para_2.innerText = "Water";
    page.appendChild(para_2);
}

export { createMenu };