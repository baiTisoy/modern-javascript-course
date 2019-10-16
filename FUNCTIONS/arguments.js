// Multiple arguments
let add = function (a, b, c) {
    return a + b + c;
}

let result = add(10, 1, 5)
console.log(result);

// Default arguments
let getScoreText = function (name = 'Jeremiah', score = 0){
    return `Name: ${name} - Score: ${score}`
    // return 'Name: ' + name + ' - Score: ' + score;
}

let scoreText = getScoreText();
console.log(scoreText);
scoreText = getScoreText(undefined, 99);
console.log(scoreText);
scoreText = getScoreText('Andrew', 78);
console.log(scoreText);

//Challenge area

let getTip = function(total, tipPercent = 15){
    let result = (tipPercent/100 * total);
    return `A ${tipPercent}% tip on $${total} would be $${result}.`
    // return '$ ' + total * tipPercent;
}

let tip = getTip(100, undefined);
let tip2 = getTip(150, 20)
console.log(tip);
console.log(tip2);

let name = 'Jen';
let age = 12;

console.log(`Hey, my name is ${name}. I am ${age} years old.`);