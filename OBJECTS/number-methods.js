let num = 109.342

console.log(typeof(num.toFixed(2)));

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

// Challenge area

// 1 -5 true if correct - false if not correct



let makeGuess = function(num){
    let min = 1;
    let max = 5;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(random);
    return num === random;
}

console.log(makeGuess(1));