// Hàm thêm nhân viên  
function addEmployee() {  
    const nameInput = document.getElementById('name');  
    const positionInput = document.getElementById('position');  

    const name = nameInput.value;  
    const position = positionInput.value;  

    if (name && position) {  
        const employees = JSON.parse(localStorage.getItem('employees')) || [];  
        employees.push({ name, position });  
        localStorage.setItem('employees', JSON.stringify(employees));  

        nameInput.value = '';  
        positionInput.value = '';  

        displayEmployees();  
    } else {  
        alert("Vui lòng nhập đầy đủ thông tin!");  
    }  
}  

// Hàm hiển thị danh sách nhân viên  
function displayEmployees() {  
    const employees = JSON.parse(localStorage.getItem('employees')) || [];  
    const employeeList = document.getElementById('employeeList');  
    
    employeeList.innerHTML = ''; // Xóa danh sách cũ  

    employees.forEach((employee, index) => {  
        const row = document.createElement('tr');  
        row.innerHTML = `  
            <td>${index + 1}</td>  
            <td>${employee.name}</td>  
            <td>${employee.position}</td>  
        `;  
        employeeList.appendChild(row);  
    });  
}  

// Hiển thị danh sách nhân viên khi tải trang  
window.onload = displayEmployees;  