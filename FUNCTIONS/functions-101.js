// Function - input (argument), code, ouput (return value)

let greetUser = function () {
    console.log('Welcome user!');
    
}

greetUser();

let square = function (num) {
    let result = num * num;
    return result;
}


let value = square(3);
let otherValue = square(10);
console.log(value);
console.log(otherValue);

let convertFahrenheitToCelsius = function(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}

let tempOne = convertFahrenheitToCelsius(32);
let tempTwo = convertFahrenheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo);