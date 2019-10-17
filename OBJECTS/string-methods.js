let name = 'Andrew Mead';

// Length property
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());


//Challenge
// isValidPassword

// length is more than 8 and doesn't contain the word password



function isValidPassword(password){
    if (password.length > 8 && !password.includes('password')){
        return true
    } else {
        return false
    }
}

function isValidPassword(password){
    return password.length > 8 && !password.includes('password');
}

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('asdpasswordfp'));
console.log(isValidPassword('asd38(*493fp'));