function handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Kiểm tra tài khoản và mật khẩu
    if (email === "admin@admin.com" && password === "123") {
      // Đăng nhập thành công, chuyển hướng đến trang chủ
      window.location.href = "/view/view_home.html";
    } else {
      // Đăng nhập không thành công, hiển thị thông báo lỗi
      alert("Tài khoản hoặc mật khẩu không đúng");
    }
  }