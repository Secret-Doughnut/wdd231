const navbutton = document.querySelector('#ham-btn');
const navbar = document.querySelector('#nav-bar');
const currentyear = document.querySelector('#currentyear');
const modified = document.querySelector('#lastModified');
const fictional = document.querySelector('#fictional');
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#description');
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');
const nextWeek = document.querySelector('#next-week');

const currentDate = new Date();
let counter = 0;
let random = [];

async function getBusinessData() {
    const response = await fetch("./data/members.json");
    const data = await response.json();
    // console.table(data.businessData);
    correct = await getMembership(data);

    for (let i = 0; i < 3; i++) {
        let correctThing = random[counter];
        await displayBusinesses(data.businessData[correctThing]);
        counter += 1;
    }
    
}

async function getMembership(data) {

    while (random.length != 3) {
        let number = Math.floor(Math.random() * 10);

        if (number < 7 && !random.includes(number) && data.businessData[number].membershipLevel != 1) {
            random.push(number);
        }
    }
}

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navbar.classList.toggle('show');
})

currentyear.innerHTML = `<span> ©${currentDate.getFullYear()} Helsingborg - Chamber of Commerce<span>`

modified.innerHTML = document.lastModified


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=56.0462749441902&lon=12.698996902487108&units=metric&appid=8946bff2610278f45cf6e5ba9630a44f';

const forecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=56.0462749441902&lon=12.698996902487108&units=metric&appid=8946bff2610278f45cf6e5ba9630a44f'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

async function forecastFetch() {
    try {
        const response = await fetch(forecast);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayForecast(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    temperature.innerHTML = `Temperature: ${data.main.temp}&deg;C`;
    description.innerHTML = `Description: ${data.weather[0].description}`;
    today.innerHTML = `Today: ${data.main.temp}&deg;C`
}

function displayForecast(data) {
    tomorrow.innerHTML = `Tomorrow: ${data.list[1].main.temp}&deg;C`;
    nextWeek.innerHTML = `After Tomorrow: ${data.list[2].main.temp}&deg;C`
}

const displayBusinesses = (businessData) => { 
    const card = document.createElement('section');
    const businessThings = document.createElement('ul');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    let businessName = document.createElement('h2');
    let businessImage = document.createElement('img');
    let businessCatchphrase = document.createElement('p');
    let businessLevel = document.createElement('p');
    let businessEmail = document.createElement('li');
    let businessPhone = document.createElement('li');
    let businessWebsite = document.createElement('li');
    
    businessName.textContent = `${businessData.companyName}`;
    businessCatchphrase.textContent = `${businessData.catchphrase}`;
    businessEmail.textContent = `EMAIL: ${businessData.companyEmail}`;
    businessPhone.textContent = `PHONE: ${businessData.companyNumber}`;
    businessWebsite.textContent = `URL: ${businessData.companyWebsite}`;
    businessLevel.textContent = `Membership Level: ${businessData.membershipLevel}`;

    businessImage.setAttribute('src', businessData.companyImage);
    businessImage.setAttribute('alt', `Drawing of ${businessData.companyName} at work!`);
    businessImage.setAttribute('loading', 'lazy');
    businessImage.setAttribute('width', 100);
    businessImage.setAttribute('height', 100);

    businessThings.appendChild(businessEmail);
    businessThings.appendChild(businessPhone);
    businessThings.appendChild(businessWebsite);

    div1.appendChild(businessName);
    div1.appendChild(businessCatchphrase);
    div1.appendChild(businessLevel);
    div1.classList.add("businessname");

    div2.appendChild(businessImage);
    div2.appendChild(businessThings);
    div2.classList.add("businessdata");

    card.appendChild(div1);
    card.appendChild(div2);
    
    fictional.appendChild(card);
    } 



getBusinessData();
apiFetch();
forecastFetch();