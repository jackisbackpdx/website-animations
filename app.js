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
        if (stringToNumber <= 950) {
            stringToNumber += 4;
            lines[i].style.top = stringToNumber + 'px';
        } 
        else {
            lines[i].style.top = '-200px';
        }
    }
    requestAnimationFrame(stripeAnimation);
}

stripeAnimation();


let quirk = document.getElementById('quirk');
quirk.style.top = '0px';

const possibleIntervals = [
    5,
    1,
    10,
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
    550,
];

let randomSpeed;
let randomRange;

function quirkAnimation() {
    let stringToNumber = parseInt(quirk.style.top);
    
    if (stringToNumber === randomRange) {
        randomNumber1 = Math.floor(Math.random() * 12);
        let randomNumber2 = Math.floor(Math.random() * 5);
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
        quirk.style.top = stringToNumber + 'px';
    }
    if (stringToNumber > randomRange) {
        stringToNumber -= randomSpeed;
        quirk.style.top = stringToNumber + 'px';
    }


        console.log(stringToNumber);
        console.log(randomSpeed);
        console.log(randomRange);
    
    requestAnimationFrame(quirkAnimation);
    
}

quirkAnimation();

let randomNumber1 = Math.floor(Math.random() * 12);
let randomNumber2 = Math.floor(Math.random() * 5);

console.log(randomNumber1);
console.log(randomNumber2);