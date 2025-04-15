function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter both fields");
  }
}

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Please fill in all fields");
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

if (window.location.pathname.includes("dashboard.html")) {
  if (!localStorage.getItem("loggedIn")) {
    window.location.href = "login.html";
  }
}
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email && password && email.includes("nnm")) {
      alert("Login successful");
      window.location.href = "index.html";
    } else {
      alert("Invalid credentials or email must contain 'nnm'");
    }
  }
  
  function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email && password && email.includes("nnm")) {
      alert("Signup successful");
      window.location.href = "index.html";
    } else {
      alert("Signup failed: email must contain 'nnm'");
    }
  }
  
