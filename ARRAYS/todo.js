// Challenge
const todos = [
    {text: 'Kiss my wife', 
    completed: false},
    {text: 'Finish this course', 
    completed: false},
    {text: 'Go to Japan', 
    completed: true},
    {text: 'Install my pipe', 
    completed: false},
    {text: 'Play Boarderlands', 
    completed: false},
]
const deleteTodo = function (todos, todoText){
    const index =  todos.findIndex(function(todo){
        return todo.text.toLowerCase() === todoText.toLowerCase();
    })
    if (index > -1) {
        todos.splice(index, 1);
    } else {
        console.log('Todo not found!');
    }
    
}

// deleteTodo(todos, 'install my pipe');
// console.log(todos);

// return todos with a completed value of false
const getThingsToDo = function (todos){
    return todos.filter(function(todo){
        return !todo.completed;
    })
}

const sortTodos = function(todos){
    return todos.sort(function(a,b){
        if (a.completed > b.completed){
            return 1;
        } else if (b.completed > a.completed) {
            return -1;
        } else {
            return 0;
        }
    })
}

sortTodos(todos);
console.log(todos);

//console.log(getThingsToDo(todos));

