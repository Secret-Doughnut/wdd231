import { membership } from "./membership.js";

const navbutton = document.querySelector('#ham-btn');
const navbar = document.querySelector('#nav-bar');
const currentyear = document.querySelector('#currentyear');
const modified = document.querySelector('#lastModified');
const modal = document.querySelector('#details');
const close = document.querySelector('#close');
const modalTitle = document.querySelector('#details h2');
const modalPrice = document.querySelector('#price');
const modalSpotlight = document.querySelector('#spotlight');
const modalDiscount = document.querySelector('#discount');
const infoButton = document.querySelectorAll('.info-button');

const today = new Date();
currentyear.innerHTML = `<span> ©${today.getFullYear()}<span>`;
modified.innerHTML = document.lastModified;

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navbar.classList.toggle('show');
})

close.addEventListener('click', () => {
    modal.close();
})

infoButton.forEach((button) => {

    button.addEventListener('click', (event) => {
    
        modal.showModal();
        let answer = event.target;
    
        console.log(answer);
    
        if (answer.className.includes("profit")) {
            modalTitle.textContent = `${membership[0].title}`
            modalPrice.textContent = `Price for membership: ${membership[0].price}`
            modalSpotlight.textContent = `Spotlight: ${membership[0].spotlight}`
            modalDiscount.textContent = `Future Discounts: ${membership[0].discount}`
        }
        else if (answer.className.includes("bronze")) {
            modalTitle.textContent = `${membership[1].title}`
            modalPrice.textContent = `Price for membership: ${membership[1].price}`
            modalSpotlight.textContent = `Spotlight: ${membership[1].spotlight}`
            modalDiscount.textContent = `Future Discounts: ${membership[1].discount}`
        }
        else if (answer.className.includes("silver")) {
            modalTitle.textContent = `${membership[2].title}`
            modalPrice.textContent = `Price for membership: ${membership[2].price}`
            modalSpotlight.textContent = `Spotlight: ${membership[2].spotlight}`
            modalDiscount.textContent = `Future Discounts: ${membership[2].discount}`
        }
        else if (answer.className.includes("gold")) {
            modalTitle.textContent = `${membership[3].title}`
            modalPrice.textContent = `Price for membership: ${membership[3].price}`
            modalSpotlight.textContent = `Spotlight: ${membership[3].spotlight}`
            modalDiscount.textContent = `Future Discounts: ${membership[3].discount}`
        }
    })
})
