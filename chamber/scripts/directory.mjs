import { discover } from "../data/discover.mjs";

const navbutton = document.querySelector('#ham-btn');
const navbar = document.querySelector('#nav-bar');
const currentyear = document.querySelector('#currentyear');
const modified = document.querySelector('#lastModified');
const cardHolder = document.querySelector('#thing');

const today = new Date();

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navbar.classList.toggle('show');
})

currentyear.innerHTML = `<span> ©${today.getFullYear()} Helsingborg - Chamber of Commerce<span>`

modified.innerHTML = document.lastModified

const displayLocationData = () => {
    discover.forEach((data) => {
        const card = document.createElement('section');
        const locationName = document.createElement('h2');
        const locationAddress = document.createElement('p');
        const locationDescription = document.createElement('p');
        const imageCredit = document.createElement('a');
        const imageHolder = document.createElement('figure');
        const imageImage = document.createElement('img');
        
        locationName.textContent = `${data.name}`;
        locationAddress.textContent = `${data.address}`;
        locationDescription.textContent = `${data.description}`;


        imageImage.setAttribute('src', data.picture);
        imageImage.setAttribute('alt', `Picture of the ${data.name} location.`);
        imageImage.setAttribute('loading', 'lazy');
        imageImage.setAttribute('width', 300);
        imageImage.setAttribute('height', 200);

        imageCredit.href = `${data.credit}`;
        imageCredit.textContent = `Image Author: ${data.author}`

        imageHolder.appendChild(imageImage);
        card.appendChild(locationName);
        card.appendChild(locationAddress);
        card.appendChild(locationDescription);
        card.appendChild(imageCredit);
        card.appendChild(imageHolder);
        cardHolder.appendChild(card);
    })
}

displayLocationData();