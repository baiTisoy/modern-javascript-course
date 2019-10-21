// get todos from local storage
const getSavedTodos = function (){
    const todosJSON = localStorage.getItem('todos');
    
if (todosJSON !== null){
    return JSON.parse(todosJSON);
    } else {
        return [];
    }
}

// Save todos to localStorage
const saveTodos = function(todos){
    localStorage.setItem('todos', JSON.stringify(todos))
}

const removeTodo = function(id){
    const index = todos.findIndex(function(todo){
        return todo.id === id;
    })

    if (index > -1){
        todos.splice(index, 1);
    }
    return todos;
}

// Render applicatin todos
const generateTodoDOM = function(todos){
    todos.forEach(function(todo){

        //create a parent element for the Todo item
        const todoElement = document.createElement('div');

        //create the checkbox element for the Todo
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', function(e){
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
        removeButton.addEventListener('click', function(){
            todos = removeTodo(todo.id);
            saveTodos(todos);
            renderTodos(todos, filters);
        })
        todoElement.appendChild(removeButton);

        document.querySelector('#todos').appendChild(todoElement);
    })

}

const getSummaryDOM = function(todos){
    const summary = document.createElement('h2');
    const completedTodos = todos.filter(function(todo){
        return !todo.completed;
    })
    summary.textContent = `You have ${completedTodos.length} todos left`;
    document.querySelector('#todos').appendChild(summary);
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
    console.log(filteredTodos);
    getSummaryDOM(todos);
    generateTodoDOM(filteredTodos);
}
