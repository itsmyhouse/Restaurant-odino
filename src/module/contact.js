function createContact() {
    const page = document.querySelector("#content");

    const para_1 = document.createElement("p");
    para_1.innerText = "CONTACT";
    page.appendChild(para_1);

    const address = document.createElement("p");
    address.innerText = "some address";
    page.appendChild(address);

}

export { createContact };