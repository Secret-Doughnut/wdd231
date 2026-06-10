import { bunnyfacts } from "../data/bunnyfacts.mjs";
import { snakefacts } from "../data/snakefacts.mjs";

const hamburger = document.querySelector('#hamburger');
const navigation = document.querySelector('#navigation');
const currentyear = document.querySelector('#currentyear');
const modified = document.querySelector('#lastModified');
const modal = document.querySelector('#details');
const close = document.querySelector('#close');


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

close.addEventListener('click', () => {
    modal.close();
})


if (bunnyCard) {
    createAnimalFactCard(bunnyfacts);
}
else if (snakeCard) {
    createAnimalFactCard(snakefacts);
}

function createAnimalFactCard(animals) {
    animals.forEach(animal => {
        let cardContainer = document.createElement("div");
        let redBox = document.createElement("div");
        let imageContainer = document.createElement("img");
        let textContainer = document.createElement("p");
        let learnMoreButton = document.createElement("button");

        cardContainer.classList.add("card");
        redBox.classList.add("fact");
        learnMoreButton.classList.add(animal.extraClass);
        learnMoreButton.classList.add("info-button");


        learnMoreButton.textContent = `Learn More`
        textContainer.textContent = `${animal.text}`
        imageContainer.setAttribute("src", animal.image);
        imageContainer.setAttribute("alt", animal.alt);
        imageContainer.setAttribute("loading", "lazy");

        redBox.appendChild(textContainer);
        redBox.appendChild(learnMoreButton);

        cardContainer.appendChild(imageContainer);
        cardContainer.appendChild(redBox);

        cardHolder.appendChild(cardContainer);
    });
}

const infoButton = document.querySelectorAll('.info-button');

infoButton.forEach((button) => {
    button.addEventListener('click', (event) => {

        console.log(button);
        modal.showModal();


    })
})