document.getElementById('registrationForm').addEventListener('submit', function(event) {  
    event.preventDefault();  

    const email = document.getElementById('email').value;  
    const password = document.getElementById('password').value;  
    const confirmPassword = document.getElementById('confirmPassword').value;  

    // Kiểm tra dữ liệu đầu vào  
    if (email === '') {  
        alert('Email không được bỏ trống.');  
        return;  
    }  
    if (password === '') {  
        alert('Mật khẩu không được bỏ trống.');  
        return;  
    }  
    if (password !== confirmPassword) {  
        alert('Mật khẩu xác nhận không trùng khớp.');  
        return;  
    }  

    // Kiểm tra sự tồn tại của email  
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];  
    if (existingUsers.find(user => user.email === email)) {  
        alert('Email đã tồn tại.');  
        return;  
    }  

    // Lưu tài khoản vào localStorage  
    existingUsers.push({ email, password });  
    localStorage.setItem('users', JSON.stringify(existingUsers));  
    alert('Đăng ký thành công!');  
});  