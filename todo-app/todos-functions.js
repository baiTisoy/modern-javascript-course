'use strict'

// get todos from local storage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');
    
    try{
        return notesJSON ? JSON.parse(todosJSON) : [];
    } catch (e){
        return [];
    } 
}

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const removeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id)

    if (index > -1){
        todos.splice(index, 1);
    }
    return todos;
}

// Render applicatin todos
const generateTodoDOM = (todos) => {
    todos.forEach( (todo) => {

        //create a parent element for the Todo item
        const todoElement = document.createElement('div');

        //create the checkbox element for the Todo
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', (e) => {
            todo.completed = e.target.checked;
            saveTodos(todos);
            renderTodos(todos, filters);
        })
        
        todoElement.appendChild(checkbox);

        //create text element for the Todo
        const todoText = document.createElement('span');
        todoText.textContent = todo.text;
        todoElement.appendChild(todoText);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'x';
        removeButton.addEventListener('click', () =>{
            todos = removeTodo(todo.id);
            saveTodos(todos);
            renderTodos(todos, filters);
        })
        todoElement.appendChild(removeButton);

        document.querySelector('#todos').appendChild(todoElement);
    })

}

const getSummaryDOM = (todos) => {
    const summary = document.createElement('h2');
    const completedTodos = todos.filter( (todo) => !todo.completed);
    summary.textContent = `You have ${completedTodos.length} todos left`;
    document.querySelector('#todos').appendChild(summary);
}

const renderTodos = (todos, filters) => {
    
    document.querySelector('#todos').innerHTML = '';

    let filteredTodos = todos.filter( (todo) => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()));

    if (filters.hideCompleted){
         filteredTodos = todos.filter((todo) => todo.completed === !filters.hideCompleted);
    };
    getSummaryDOM(todos);
    generateTodoDOM(filteredTodos);
}
