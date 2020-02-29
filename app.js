import randomGeneration from './api.js';

setTimeout(function() {
    window.scrollTo(0, 0);
}, 200);

let top = document.getElementById('diagonal-1');
let middle = document.getElementById('diagonal-2');
let bottom = document.getElementById('diagonal-3');

let lines = [top, middle, bottom];
let pages = document.querySelectorAll('h2');

top.style.top = '10px';
middle.style.top = '150px';
bottom.style.top = '300px';

let clicked = false;
let page;

for (let j = 0; j < pages.length; j++) {
    let navigationItem = pages[j];
    navigationItem.addEventListener('click', function() {
        clicked = true;
        let upperCaseChosen = navigationItem.textContent;
        page = upperCaseChosen.toLowerCase();
    });
}

function stripeAnimation() {
    for (let i = 0; i < lines.length; i++) {
        let stringToNumber = parseInt(lines[i].style.top);
        if (stringToNumber <= 1150 && clicked === false) {
            stringToNumber += 6;
            lines[i].style.top = stringToNumber + 'px';
        } 
        else if (stringToNumber > 1150) {
            lines[i].style.opacity = '0.0';
            lines[i].style.top = '-300px';
            lines[i].style.opacity = '1.0';
        }
        if (clicked === true) {
            lines[i].style.backgroundColor = 'white';
            stringToNumber -= 8;
            lines[i].style.top = stringToNumber + 'px';
            lines[i].style.border = '5px solid black';
            if (parseInt(lines[2].style.top) < -350 && parseInt(quirk.style.top) === 1000) {
                window.location = `../choice/?id=${page}`;
            }
        }
    }
    requestAnimationFrame(stripeAnimation);
}
stripeAnimation();


let quirk = document.getElementById('quirk');
quirk.style.top = '0px';

let randomSpeed;
let randomRange;

function quirkAnimation() {
    let stringToNumber = parseInt(quirk.style.top);
    if (clicked === true) {
        randomRange = 1000;
        quirk.style.backgroundColor = 'grey';
        quirk.style.border = '3px solid black';
        if (quirk.style.top === '1000px') {
            quirk.style.display = 'none';
        }
    }
    if (stringToNumber === randomRange) {
        let randomNumber1 = Math.floor(Math.random() * 15);
        let randomNumber2 = Math.floor(Math.random() * 2);
        let colorNumber = Math.floor(Math.random() * 4);
        quirk.style.backgroundColor = randomGeneration.orangesAndReds[colorNumber];
        randomRange = randomGeneration.possibleRanges[randomNumber1];
        randomSpeed = randomGeneration.possibleIntervals[randomNumber2];
    }
    if (stringToNumber <= 0) {
        let randomNumber1 = Math.floor(Math.random() * 12);
        let randomNumber2 = Math.floor(Math.random() * 5);
        randomRange = randomGeneration.possibleRanges[randomNumber1];
        randomSpeed = randomGeneration.possibleIntervals[randomNumber2];
    }
    if (stringToNumber < randomRange) {
        stringToNumber += randomSpeed;
    }
    if (stringToNumber > randomRange) {
        stringToNumber -= randomSpeed;
    }
    quirk.style.top = stringToNumber + 'px';
    requestAnimationFrame(quirkAnimation);  
}
quirkAnimation();

let previousScrollPosition = 0;
let currentScrollPosition = 0;

let decreaseBy;

let louvre = document.getElementById('louvre');
let louvreText = document.getElementById('louvre-text');

louvre.style.top = '1300px';
louvre.style.display = 'none';
louvreText.style.left = '1300px';

function scrollChange() {
    if (currentScrollPosition > previousScrollPosition) {
        previousScrollPosition = currentScrollPosition;
    }
    currentScrollPosition = window.scrollY;
    decreaseBy = currentScrollPosition - previousScrollPosition;

    if (currentScrollPosition > 600 && decreaseBy > 0 && louvre.style.top !== '600px') {
        let numberToString = parseInt(louvre.style.top);
        let imageStyleLeft = parseInt(louvreText.style.left);
        
        imageStyleLeft -= 25;
        numberToString -= decreaseBy;

        louvre.style.top = numberToString + 'px';
        louvreText.style.left = imageStyleLeft + 'px';
        louvreText.style.transitionDuration = '.5s';
        
        louvre.style.display = 'flex';
    } else {
        louvre.style.top = '1300px';
    }
    requestAnimationFrame(scrollChange);
}

scrollChange();