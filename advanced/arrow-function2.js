const add = function () {
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44));


//arguments only exist in regular functions. 
// Arrow functions do not bind the arugment keyword.

// Arrow functions do not bind their 'this' keyword
// When creating method (functions) on object properties, the
// 'this' keyword is not bound to the object. Stay with regular functions
// or use the method definition syntax

