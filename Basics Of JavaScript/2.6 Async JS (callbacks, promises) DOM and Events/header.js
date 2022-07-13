let header = document.createElement("header");

let logoDiv = document.createElement("div");
logoDiv.classList.add("logo");
let img = document.createElement("img");
img.src = "./images/logo.png";
logoDiv.appendChild(img);
header.appendChild(logoDiv);

let searchDiv = document.createElement("div");
searchDiv.classList.add("search");
let textBox = document.createElement("input");
textBox.setAttribute("type", "text");
textBox.setAttribute("id", "search");
textBox.setAttribute("placeholder", "Search");
searchDiv.appendChild(textBox);
let searchButton = document.createElement("button");
searchButton.setAttribute("id", "searchButton");
searchButton.textContent = '🔎︎';
searchDiv.appendChild(searchButton);
header.appendChild(searchDiv);

let userDiv = document.createElement("div");
userDiv.classList.add("user");
let img2 = document.createElement("img");
userDiv.appendChild(img2);
header.appendChild(userDiv);

document.body.prepend(header);