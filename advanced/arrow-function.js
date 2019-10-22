const squareLong = (num) => num * num;


const square = (num) => {
    return num * num;
}

// const under30 = people.filter(function(person){
//     return person.age < 30;
// })

const people = [{
    name: 'Andrew',
    age: 27
}, {
    name: 'Vikram',
    age: 31
}, {
    name: 'Jess',
    age: 22
}]

const under30 = people.filter((person) => person.age < 30);

console.log(under30);

const age22 = people.find((person) => person.age === 22)
console.log(age22);