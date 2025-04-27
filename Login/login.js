let failedAttempts = 0;
const maxAttempts = 3;
let isLocked = false;

// func to ensure inputs are letters and numbers only
function isValidInput(input) {
  return /^[a-zA-Z0-9]*$/.test(input);
}

// real time input validation
document.getElementById("username").addEventListener("input", function(e) {
  if (!isValidInput(this.value)) {
    this.value = this.value.replace(/[^a-zA-Z0-9]/g, '');
  }
});

document.getElementById("password").addEventListener("input", function(e) {
  if (!isValidInput(this.value)) {
    this.value = this.value.replace(/[^a-zA-Z0-9]/g, '');
  }
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-message");

  if (isLocked) {
    errorMsg.textContent = "Too many failed attempts. Please try again in 30 seconds.";
    return;
  }

  // login check
  if (username === "user1" && password === "pass1") {
    errorMsg.textContent = "";
    window.location.href = "../Dashboard/dashboard.html";
  } else {
    failedAttempts++;
    if (failedAttempts >= maxAttempts) {
      isLocked = true;
      errorMsg.textContent = "Too many failed attempts. Please try again in 30 seconds.";
      
      setTimeout(() => {
        failedAttempts = 0;
        isLocked = false;
        errorMsg.textContent = ""; // Optionally clear message after lock expires
      }, 30000); // 30 seconds
    } else {
      errorMsg.textContent = `Wrong Username or Password. Attempts left: ${maxAttempts - failedAttempts}`;
    }
  }
});