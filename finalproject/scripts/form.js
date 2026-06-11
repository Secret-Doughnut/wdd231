const hamburger = document.querySelector('#hamburger');
const navigation = document.querySelector('#navigation');
const currentyear = document.querySelector('#currentyear');
const modified = document.querySelector('#lastModified');
const visit = document.querySelector('#visit');

const today = new Date();

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    navigation.classList.toggle('show');
})

currentyear.innerHTML = `<span> ©${today.getFullYear()}<span>`

modified.innerHTML = document.lastModified

let counter = Number(localStorage.getItem("time-visited")) || 1;

if (localStorage.getItem("time-visited") === null) {
    localStorage.setItem("time-visited", 1);
}
else if (localStorage.getItem("time-visited")) {
    localStorage.setItem("time-visited", counter + 1);
    visit.textContent = `Nice to see you again! You have been here ${localStorage.getItem("time-visited")} times!`;
}