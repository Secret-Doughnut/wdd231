import { bunnyfacts } from "../data/bunnyfacts.mjs";
import { snakefacts } from "../data/snakefacts.mjs";

const hamburger = document.querySelector('#hamburger');
const navigation = document.querySelector('#navigation');
const currentyear = document.querySelector('#currentyear');
const modified = document.querySelector('#lastModified');

let cardHolder = document.querySelector("#basic-needs");
let bunnyCard = document.querySelector("#bunny");
let snakeCard = document.querySelector("#snake");

const today = new Date();

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    navigation.classList.toggle('show');
})

currentyear.innerHTML = `<span> ©${today.getFullYear()}<span>`

modified.innerHTML = document.lastModified


if (bunnyCard) {
    createAnimalFactCard(bunnyfacts);
}
else if (snakeCard) {
    createAnimalFactCard(snakefacts);
}

function createAnimalFactCard(animals) {
    animals.forEach(animal => {
        let cardContainer = document.createElement("div");
        let imageContainer = document.createElement("img");
        let textContainer = document.createElement("p");

        cardContainer.classList.add("card");

        textContainer.textContent = `${animal.text}`
        imageContainer.setAttribute("src", animal.image);
        imageContainer.setAttribute("alt", animal.alt);
        imageContainer.setAttribute("loading", "lazy");

        
        cardContainer.appendChild(imageContainer);
        cardContainer.appendChild(textContainer);

        cardHolder.appendChild(cardContainer);
    });
}