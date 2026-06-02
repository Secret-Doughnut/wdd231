const navbutton = document.querySelector('#ham-btn');
const navbar = document.querySelector('#nav-bar');
const currentyear = document.querySelector('#currentyear');
const modified = document.querySelector('#lastModified');
const fictional = document.querySelector('#fictional');
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

const today = new Date();

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navbar.classList.toggle('show');
})

currentyear.innerHTML = `<span> ©${today.getFullYear()} Helsingborg - Chamber of Commerce<span>`

modified.innerHTML = document.lastModified

async function getBusinessData() {
    const response = await fetch("./data/members.json");
    const data = await response.json();
    // console.table(data.businessData);
    await displayBusinesses(data.businessData);
}

const displayBusinesses = (businessData) => {
    businessData.forEach((data) => {
        const card = document.createElement('section');
        const businessThings = document.createElement('ul');
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        let businessName = document.createElement('h2');
        let businessImage = document.createElement('img');
        let businessCatchphrase = document.createElement('p');
        let businessEmail = document.createElement('li');
        let businessPhone = document.createElement('li');
        let businessWebsite = document.createElement('li');
        
        businessName.textContent = `${data.companyName}`;
        businessCatchphrase.textContent = `${data.catchphrase}`;
        businessEmail.textContent = `EMAIL: ${data.companyEmail}`;
        businessPhone.textContent = `PHONE: ${data.companyNumber}`;
        businessWebsite.textContent = `URL: ${data.companyWebsite}`;

        businessImage.setAttribute('src', data.companyImage);
        businessImage.setAttribute('alt', `Drawing of ${data.companyName} at work!`);
        businessImage.setAttribute('loading', 'lazy');
        businessImage.setAttribute('width', 100);
        businessImage.setAttribute('height', 100);

        businessThings.appendChild(businessEmail);
        businessThings.appendChild(businessPhone);
        businessThings.appendChild(businessWebsite);

        div1.appendChild(businessName);
        div1.appendChild(businessCatchphrase);
        div1.classList.add("businessname");

        div2.appendChild(businessImage);
        div2.appendChild(businessThings);
        div2.classList.add("businessdata");

        card.appendChild(div1);
        card.appendChild(div2);
        
        fictional.appendChild(card);
    });
}


getBusinessData();

gridButton.addEventListener('click', () => {
    fictional.classList.add('grid');
    fictional.classList.remove('list');
})

listButton.addEventListener('click', () => {
    fictional.classList.add('list');
    fictional.classList.remove('grid');
})
