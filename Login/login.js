document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-message");

  // login check
  if (username === "user1" && password === "pass1") {
    errorMsg.textContent = "";
    // Redirect to the bank dashboard page if correct
    window.location.href = "../Dashboard/dashboard.html";
  } else {
    errorMsg.textContent = "Wrong Username or Password. Try again.";
  }
});