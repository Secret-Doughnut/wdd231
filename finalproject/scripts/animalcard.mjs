export function createAnimalFactCard(animals) {

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

let cardHolder = document.querySelector("#basic-needs");