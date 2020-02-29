import { choices } from '../api.js';

const body = document.body;
const title = document.getElementById('title');

const param = new URLSearchParams(window.location.search);

let id = param.get('id');

function findById(arr, id) {
    for (let i = 0; i < arr.length; i++) {
        let match = arr[i];
        if (match.title === id) {
            return match;
        }
    }
}

const page = findById(choices, id);

title.textContent = page.title;
body.style.backgroundColor = page.backgroundColor;