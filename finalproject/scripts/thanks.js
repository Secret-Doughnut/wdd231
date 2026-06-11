const first = document.querySelector('#first');
const email = document.querySelector('#email');

const thingsToSort = new URLSearchParams(window.location.search);

// const name = thingsToSort.get()
const emailaddress = thingsToSort.get('emailad');
const name = thingsToSort.get('givenname');


first.textContent = name;
email.textContent = emailaddress;