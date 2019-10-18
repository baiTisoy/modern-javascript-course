const todos = ['Kiss my wife', 'Finish this course', 'Walk the dog', 'Install my pipe', 'Watch my show'];

console.log(`You have ${todos.length} todos.`);

// // console.log(`Todo: ${todos[0]}`);
// // console.log(`Todo: ${todos[todos.length - 2]}`);
// console.log(todos);

// // Delete the 3rd item
// // Add a new item onto the end
// //Remove the first item from the list

// console.log(todos.splice(2, 1));
// console.log(todos.push('Adding new item to end'));
// console.log(todos.shift());
// console.log(todos);
// 1. item
// 2. item

todos.forEach(function(item, index){
    console.log(`${index + 1}. ${item}`);
})