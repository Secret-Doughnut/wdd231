// import { bunnyfacts } from "../data/bunnyfacts.json";
// import { snakefacts } from "../data/snakefacts.json";

const hamburger = document.querySelector('#hamburger');
const navigation = document.querySelector('#navigation');
const currentyear = document.querySelector('#currentyear');
const modified = document.querySelector('#lastModified');
const modal = document.querySelector('#details');
const title = document.querySelector('#details h2');
const close = document.querySelector('#close');
const source = document.querySelector('#source');
const credit = document.querySelector('#credit');


let cardHolder = document.querySelector("#basic-needs");
let bunnyCard = document.querySelector("#bunny");
let snakeCard = document.querySelector("#snake");


const today = new Date();

async function bunnyDataFetch() {
    try {
        const response = await fetch("./data/bunnyfacts.json");
        if (response.ok) {
            const data = await response.json();
            return await data;
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

async function snakeDataFetch() {
    try {
        const response = await fetch("./data/snakefacts.json");
        if (response.ok) {
            const data = await response.json();
            return await data;
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    navigation.classList.toggle('show');
})

currentyear.innerHTML = `<span> ©${today.getFullYear()}<span>`

modified.innerHTML = document.lastModified

close.addEventListener('click', () => {
    modal.close();
})


async function whichAnimal() {
    if (bunnyCard) {
    let bunnyfacts = await bunnyDataFetch();
    console.log(bunnyfacts);
    createAnimalFactCard(bunnyfacts);
    }
    else if (snakeCard) {
    createAnimalFactCard(snakefacts);
    }
}



function createAnimalFactCard(animals) {
    whichAnimal();
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
        whichAnimal();
        console.log(button.classList[0]);

        modal.showModal();
        let bunnyCheck = bunnyfacts.find(item => item.extraClass === button.classList[0]);
        let snakeCheck = snakefacts.find(item => item.extraClass === button.classList[0]);

        if (bunnyCheck) {
            grabAnimalCredit(bunnyCheck);
        }
        else if (snakeCheck) {
            grabAnimalCredit(snakeCheck);
        }

    })
})

const grabAnimalCredit = (animal) => {
    title.textContent = animal.title;
    source.textContent = animal.nameOfSource;
    source.href = animal.source;
    credit.textContent = animal.author;
    credit.href = animal.imageCredit;
}