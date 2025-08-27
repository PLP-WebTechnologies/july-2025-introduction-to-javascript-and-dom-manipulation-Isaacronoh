let attempts = 0;  
const maxAttempts = 3;

function validateForm(name, email, pass, repeat) {
    if (!name || !email || !pass || !repeat) {
        return "All fields are required!";
    }
    if (pass !== repeat) {
        return "Passwords do not match!";
    }
    return "Success";
}

function greetUser(name) {
    return `Welcome, ${name}! You have logged in successfully.`;
}

function countAtSymbols(email) {
    let count = 0;
    for (let char of email) {
        if (char === "@") {
            count++;
        }
    }
    return count;
}

function lockAccount() {
    let message = "Too many attempts! Please wait: ";
    for (let i = 5; i > 0; i--) {
        message += i + " ";
    }
    return message;
}

document.getElementById("log").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value;
    let repeat = document.getElementById("repeat").value;
    let msg = document.getElementById("message");
    let form = document.getElementById("log");

    let result = validateForm(name, email, pass, repeat);

    if (result === "Success") {
        msg.textContent = greetUser(name);
        msg.style.color = "white";
        msg.style.fontSize = "40px";
        document.body.style.background = "#0e89f5ff";

        form.style.display = "none"; 
        head.style.display = "none";
    } else {
        attempts++;
        msg.textContent = result ;
        msg.style.color = "white";
        msg.style.fontSize = "40px";
        document.body.style.background = "red";
        head.style.display = "none";
        form.style.display = "none";  

        if (attempts >= maxAttempts) {
            msg.textContent = lockAccount();
        }
    }
});