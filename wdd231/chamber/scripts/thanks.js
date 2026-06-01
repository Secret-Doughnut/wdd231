const thanksFirst = document.querySelector('#first');
const thanksTitle = document.querySelector('#title');
const thanksEmail = document.querySelector('#email');
const thanksNumber = document.querySelector('#number');
const thanksBusiness = document.querySelector('#business');
const thanksLevel = document.querySelector('#level');
const thanksDesc = document.querySelector('#desc');
const thanksTime = document.querySelector('#time');

const valuableInfo = new URLSearchParams(window.location.search);
console.log(valuableInfo);

const firstName = valuableInfo.get('firstname');
const lastName = valuableInfo.get('lastname');
const title = valuableInfo.get('title');
const email = valuableInfo.get('email');
const phone = valuableInfo.get('phone');
const business = valuableInfo.get('business');
const membership = valuableInfo.get('membership');
const description = valuableInfo.get('description');
const time = valuableInfo.get('timestamp');

console.log(membership)

let timestamp = Number(valuableInfo.get('timestamp'));
let today = new Date(timestamp);
let correctDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

console.log(today)

thanksFirst.textContent = `Name: ${firstName} ${lastName}`;
thanksTitle.textContent = `Business Title: ${title}`;
thanksEmail.textContent = `Email: ${email}`;
thanksNumber.textContent = `Phone: ${phone}`;
thanksBusiness.textContent = `Business Name: ${business}`;
thanksLevel.textContent = `Membership Level: ${membership}`;
thanksDesc.textContent = `Business Description: ${description}`;
thanksTime.textContent = `Date Joined: ${correctDate}`;
