import { courses } from "./classes.js";


const navbutton = document.querySelector('#ham-btn');
const navbar = document.querySelector('#nav-bar');
const currentyear = document.querySelector('#currentyear');
const modified = document.querySelector('#lastModified');
const weepingbars = document.querySelector('#weeping-bars');
const finished = document.querySelector('#finished');

const all = document.querySelector('#all');
const cse = document.querySelector('#cse');
const wdd = document.querySelector('#wdd');


const today = new Date();

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navbar.classList.toggle('show');
})


currentyear.innerHTML = `<span> ©${today.getFullYear()}<span>`

modified.innerHTML = document.lastModified

courses.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = `${item.subject} ${item.number}`

    li.appendChild(a);
    weepingbars.appendChild(li);
    if (item.completed == true) {
        a.textContent = `✔ ${item.subject} ${item.number}`
        li.classList.add('completed');
    }

        const sum = courses.reduce((total, numero) => {
            return total + 2;
        }, 0);

        finished.textContent = `(The total credits for course listed above is ${sum})`;
    
    // weepingbars.innerHTML += `<li><a href="#">${item.subject} ${item.number}</a></li>`;
});

all.addEventListener('click', () => {
    weepingbars.innerHTML = '';
    
    courses.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = `${item.subject} ${item.number}`

    li.appendChild(a);
    weepingbars.appendChild(li);
    if (item.completed == true) {
        a.textContent = `✔ ${item.subject} ${item.number}`
        li.classList.add('completed');
        }
        
        const sum = courses.reduce((total, numero) => {
            return total + 2;
        }, 0);

        finished.textContent = `(The total credits for course listed above is ${sum})`;
});
});

cse.addEventListener('click', () => {
    weepingbars.innerHTML = '';
    
    const coding = courses.filter(thing => thing.subject.startsWith('C'));

    coding.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = `${item.subject} ${item.number}`

        li.appendChild(a);
        weepingbars.appendChild(li);
        if (item.completed == true) {
        a.textContent = `✔ ${item.subject} ${item.number}`
        li.classList.add('completed');
        }
        const sum = coding.reduce((total, numero) => {
            return total + 2;
        }, 0);

        finished.textContent = `(The total credits for course listed above is ${sum})`;
    });
});

wdd.addEventListener('click', () => {
    weepingbars.innerHTML = '';
    
    const coding = courses.filter(thing => thing.subject.startsWith('W'));

    coding.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = `${item.subject} ${item.number}`

        li.appendChild(a);
        weepingbars.appendChild(li);
        if (item.completed == true) {
        a.textContent = `✔ ${item.subject} ${item.number}`
        li.classList.add('completed');
        }
        const sum = coding.reduce((total, numero) => {
            return total + 2;
        }, 0);

        finished.textContent = `(The total credits for course listed above is ${sum})`;
    });
});

