const hamburger = document.querySelector('#hamburger');
const navigation = document.querySelector('#navigation');
const currentyear = document.querySelector('#currentyear');
const modified = document.querySelector('#lastModified');
const modal = document.querySelector('#details');
const title = document.querySelector('#details h2');
const close = document.querySelector('#close');
const source = document.querySelector('#source');
const credit = document.querySelector('#credit');
const visit = document.querySelector('#visit');


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

function createAnimalFactCard(animals) {

    animals.facts.forEach(animal => {
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

let answer = "";

if (bunnyCard) {
    answer = await bunnyDataFetch();
}
else if (snakeCard) {
    answer = await snakeDataFetch();
}

createAnimalFactCard(answer);
const infoButton = document.querySelectorAll('.info-button');


infoButton.forEach((button) => {
    button.addEventListener('click', async () => {
        let animalCheck = answer.facts.find(item => item.extraClass === button.classList[0]);
        grabAnimalCredit(animalCheck);
        modal.showModal();
    })
})

const grabAnimalCredit = (animal) => {
    title.textContent = animal.title;
    source.textContent = animal.nameOfSource;
    source.href = animal.source;
    credit.textContent = animal.author;
    credit.href = animal.imageCredit;
}

let counter = Number(localStorage.getItem("time-visited")) || 1;

if (localStorage.getItem("time-visited") === null) {
    localStorage.setItem("time-visited", 1);
}
else if (localStorage.getItem("time-visited")) {
    localStorage.setItem("time-visited", counter + 1);
    visit.textContent = `Nice to see you again! You have been here ${localStorage.getItem("time-visited")} times!`;
}