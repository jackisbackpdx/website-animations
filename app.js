setTimeout(function() {
    window.scrollTo(0, 0);
}, 200);

let top = document.getElementById('diagonal-1');
let middle = document.getElementById('diagonal-2');
let bottom = document.getElementById('diagonal-3');

let lines = [top, middle, bottom];

top.style.top = '10px';
middle.style.top = '150px';
bottom.style.top = '300px';

function stripeAnimation() {
    for (let i = 0; i < lines.length; i++) {
        let stringToNumber = parseInt(lines[i].style.top);
        if (stringToNumber <= 1150) {
            stringToNumber += 6;
            lines[i].style.top = stringToNumber + 'px';
        } 
        else {
            lines[i].style.opacity = '0.0';
            lines[i].style.top = '-300px';
            lines[i].style.opacity = '1.0';
        }
    }
    requestAnimationFrame(stripeAnimation);
}

stripeAnimation();


let quirk = document.getElementById('quirk');
quirk.style.top = '0px';

const possibleIntervals = [
    5,
    10,
    50
];
const possibleRanges = [
    50,
    100,
    150,
    200,
    250,
    300,
    350,
    400,
    450,
    500,
    550
];

const orangesAndReds = [
    'rgb(255, 153, 102)',
    'rgb(233, 140, 105)',
    'rgb(226, 144, 91)',
    'rgb(183, 65, 14)'
];

let randomSpeed;
let randomRange;

function quirkAnimation() {
    let stringToNumber = parseInt(quirk.style.top);
    
    if (stringToNumber === randomRange) {
        let randomNumber1 = Math.floor(Math.random() * 11);
        let randomNumber2 = Math.floor(Math.random() * 2);
        let colorNumber = Math.floor(Math.random() * 4);
        quirk.style.backgroundColor = orangesAndReds[colorNumber];
        randomRange = possibleRanges[randomNumber1];
        randomSpeed = possibleIntervals[randomNumber2];
    }
    if (stringToNumber <= 0) {
        let randomNumber1 = Math.floor(Math.random() * 12);
        let randomNumber2 = Math.floor(Math.random() * 5);
        randomRange = possibleRanges[randomNumber1];
        randomSpeed = possibleIntervals[randomNumber2];
    }
    if (stringToNumber >= 850) {
        let randomNumber1 = Math.floor(Math.random() * 12);
        let randomNumber2 = Math.floor(Math.random() * 5);
        randomRange = possibleRanges[randomNumber1];
        randomSpeed = possibleIntervals[randomNumber2];
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
louvre.style.top = '1300px';
louvre.style.display = 'none';

window.addEventListener('scroll', function() {
    if (currentScrollPosition > previousScrollPosition) {
        previousScrollPosition = currentScrollPosition;
    }
    currentScrollPosition = window.scrollY;
    decreaseBy = currentScrollPosition - previousScrollPosition;

    if (currentScrollPosition > 600 && decreaseBy > 0 && louvre.style.top < '600px') {
        let numberToString = parseInt(louvre.style.top);

        numberToString -= decreaseBy;
        louvre.style.top = numberToString + 'px';
        louvre.style.display = 'flex';
    } else {
        louvre.style.top = '1300px';
    }
    console.log(louvre.style.top);
    console.log(currentScrollPosition);
});
