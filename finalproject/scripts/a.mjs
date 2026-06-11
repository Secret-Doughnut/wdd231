const hamburger = document.querySelector('#hamburger');
const navigation = document.querySelector('#navigation');
const currentyear = document.querySelector('#currentyear');
const modified = document.querySelector('#lastModified');
const modal = document.querySelector('#details');
const title = document.querySelector('#details h2');
const close = document.querySelector('#close');
const source = document.querySelector('#source');
const credit = document.querySelector('#credit');


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