const todos = [
    {text: 'Kiss my wife', 
    completed: true},
    {text: 'Finish this course', 
    completed: true},
    {text: 'Go to Japan', 
    completed: true},
    {text: 'Install my pipe', 
    completed: true},
    {text: 'Play Boarderlands', 
    completed: true},
]

const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function(todos, filters){
    document.querySelector('#todos').innerHTML = '';

    let filteredTodos = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    if (filters.hideCompleted){
         filteredTodos = todos.filter(function(todo){
            return todo.completed === !filters.hideCompleted;
        })
    };
    
    const summary = document.createElement('h2');
    summary.textContent = `You have ${filteredTodos.length} todos left`;
    document.querySelector('#todos').appendChild(summary);
    
    filteredTodos.forEach(function(todo){
        const p = document.createElement('p');
        p.textContent = todo.text;
        document.querySelector('#todos').appendChild(p);
    })
}

renderTodos(todos, filters);



document.querySelector('#filter-todo').addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderTodos(todos, filters);

})

document.querySelector('#todo-form').addEventListener('submit', function(e){
    e.preventDefault();
    const todoValue = e.target.elements.addTodo.value;
    todos.push({text: todoValue, 
    completed: false});
    renderTodos(todos, filters);
    e.target.elements.addTodo.value='';
})

document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
})