let courses = loadFromLocalStorage();  

function saveToLocalStorage() {  
    localStorage.setItem('tasks', JSON.stringify(courses));  
}  

function loadFromLocalStorage() {  
    const savedTasks = localStorage.getItem('tasks');  
    return savedTasks ? JSON.parse(savedTasks) : [];  
}  

function renderTasks() {  
    const taskTable = document.getElementById('taskTable');  
    taskTable.innerHTML = '';  

    courses.forEach((task, index) => {  
        const row = document.createElement('tr');  
        row.innerHTML = `  
            <td>${index + 1}</td>  
            <td>${task.content ? task.content : 'N/A'}</td>  
            <td>${task.dueDate ? task.dueDate : 'N/A'}</td>  
            <td>${task.status ? task.status : 'N/A'}</td>  
            <td>${task.assignedTo ? task.assignedTo : 'N/A'}</td>  
            <td>  
                <button onclick="editTask(${task.id})">Sửa</button>  
                <button onclick="deleteTask(${task.id})">Xóa</button>  
            </td>  
        `;  
        taskTable.appendChild(row);  
    });  
}  

function addTask() {  
    const content = document.getElementById('content').value;  
    const dueDate = document.getElementById('dueDate').value;  
    const status = document.getElementById('status').value;  
    const assignedTo = document.getElementById('assignedTo').value;  

    if (content && dueDate && assignedTo) { // Kiểm tra tính hợp lệ của giá trị  
        const newTask = {  
            id: Date.now(), // Tạo một ID duy nhất  
            content,  
            dueDate,  
            status,  
            assignedTo  
        };  

        courses.push(newTask);  
        saveToLocalStorage();  
        renderTasks();  
        clearInputs();  
    } else {  
        alert("Vui lòng điền đầy đủ thông tin!");  
    }  
}  

function editTask(id) {  
    const task = courses.find(task => task.id === id);  
    if (task) {  
        document.getElementById('content').value = task.content;  
        document.getElementById('dueDate').value = task.dueDate;  
        document.getElementById('status').value = task.status;  
        document.getElementById('assignedTo').value = task.assignedTo;  

        // Xóa công việc để cập nhật lại sau khi chỉnh sửa  
        deleteTask(id);   
    }  
}  

function deleteTask(id) {  
    const index = courses.findIndex(task => task.id === id);  
    if (index !== -1) {  
        courses.splice(index, 1); // Xóa công việc  
        saveToLocalStorage(); // Lưu lại dữ liệu  
        renderTasks(); // Cập nhật hiển thị  
    }  
}  

function clearInputs() {  
    document.getElementById('content').value = '';  
    document.getElementById('dueDate').value = '';  
    document.getElementById('status').value = 'Pending';  
    document.getElementById('assignedTo').value = '';  
}  

document.getElementById('addTaskBtn').addEventListener('click', addTask);  
documen