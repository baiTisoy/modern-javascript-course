//define an object
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(myBook);

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);


//Challenge area

let person = {
    name: 'Jeremiah',
    age: 39,
    location: 'Memphis'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);

person.age = person.age + 1;

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);
