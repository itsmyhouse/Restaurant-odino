export default function createHomePage() {
    const page = document.querySelector("#content");

    const heading = document.createElement("h2");
    heading.innerText = "Welcome to our Restaurant";

    const img = document.createElement("img");
    img.src = "./restaurant.jpeg";
    img.width = 400;
    img.alt = "";

    const para = document.createElement("p");
    para.innerText = "Come and spend a few evening with us";

    page.appendChild(heading);
    page.appendChild(img);
    page.appendChild(para);
}