// script.js  
document.addEventListener('DOMContentLoaded', () => {  
    const todoInput = document.getElementById('todo-input');  
    const addButton = document.getElementById('add-btn');  
    const todoList = document.getElementById('todo-list');  

    // Load todos from localStorage  
    const todos = JSON.parse(localStorage.getItem('todos')) || [];  
    todos.forEach(todo => addTodoToList(todo));  
    
    // Add Todo  
    addButton.addEventListener('click', () => {  
        const todoText = todoInput.value;  
        if (todoText) {  
            addTodoToList(todoText);  
            todos.push(todoText);  
            localStorage.setItem('todos', JSON.stringify(todos));  
            todoInput.value = '';  
        }  
    });  

    // Remove Todo  
    todoList.addEventListener('click', (e) => {  
        if (e.target.classList.contains('delete-btn')) {  
            const todoItem = e.target.parentElement;  
            const todoText = todoItem.firstChild.textContent;  
            todoList.removeChild(todoItem);  
            const index = todos.indexOf(todoText);  
            if (index > -1) {  
                todos.splice(index, 1);  
            }  
            localStorage.setItem('todos', JSON.stringify(todos));  
        }  
    });  

    function addTodoToList(todo) {  
        const li = document.createElement('li');  
        li.textContent = todo;  
        const deleteButton = document.createElement('button');  
        deleteButton.textContent = 'Xóa';  
        deleteButton.className = 'delete-btn';  
        li.appendChild(deleteButton);  
        todoList.appendChild(li);  
    }  
});  