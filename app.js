// Pages
const loginPage = document.getElementById("login-page");
const signupPage = document.getElementById("signup-page");
const driverDashboard = document.getElementById("driver-dashboard");
const adminLoginPage = document.getElementById("admin-login-page");
const adminDashboard = document.getElementById("admin-dashboard");

// Links and buttons
const signupLink = document.getElementById("signup-link");
const loginLink = document.getElementById("login-link");
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const logoutBtn = document.getElementById("logout-btn");
const driverForm = document.getElementById("driver-form");

const adminLink = document.getElementById("admin-link");
const backToLogin = document.getElementById("back-to-login");
const adminLoginBtn = document.getElementById("admin-login-btn");
const adminLogoutBtn = document.getElementById("admin-logout-btn");

// Admin panel elements
const driversList = document.getElementById("drivers-list");
const alertsList = document.getElementById("alerts-list");

// Temporary storage
let users = []; // {phone, password, name, info:{}}
let alerts = ["Document missing", "Vehicle not verified"];

// Switch between login and signup pages
signupLink.addEventListener("click", () => {
    loginPage.classList.add("hidden");
    signupPage.classList.remove("hidden");
});

loginLink.addEventListener("click", () => {
    signupPage.classList.add("hidden");
    loginPage.classList.remove("hidden");
});

// Switch to admin login
adminLink.addEventListener("click", () => {
    loginPage.classList.add("hidden");
    adminLoginPage.classList.remove("hidden");
});

backToLogin.addEventListener("click", () => {
    adminLoginPage.classList.add("hidden");
    loginPage.classList.remove("hidden");
});

// Sign up new user
signupBtn.addEventListener("click", () => {
    const phone = document.getElementById("signup-phone").value.trim();
    const password = document.getElementById("signup-password").value.trim();

    if (!phone || !password) {
        alert("Please fill in all fields");
        return;
    }

    if (users.find(u => u.phone === phone)) {
        alert("Phone number is already registered");
        return;
    }

    users.push({ phone, password, name: "", info: {} });
    alert("Account created successfully!");
    signupPage.classList.add("hidden");
    loginPage.classList.remove("hidden");
});

// User login
loginBtn.addEventListener("click", () => {
    const phone = document.getElementById("login-phone").value.trim();
    const password = document.getElementById("login-password").value.trim();

    const user = users.find(u => u.phone === phone && u.password === password);
    if (!user) {
        alert("Incorrect phone number or password");
        return;
    }

    document.getElementById("driver-name").textContent = phone;
    loginPage.classList.add("hidden");
    driverDashboard.classList.remove("hidden");
});

// User logout
logoutBtn.addEventListener("click", () => {
    driverDashboard.classList.add("hidden");
    loginPage.classList.remove("hidden");
});

// Save driver info
driverForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Information saved successfully!");
});

// Admin login (Demo credentials: admin / admin123)
adminLoginBtn.addEventListener("click", () => {
    const username = document.getElementById("admin-user").value.trim();
    const password = document.getElementById("admin-pass").value.trim();

    if (username === "admin" && password === "admin123") {
        adminLoginPage.classList.add("hidden");
        adminDashboard.classList.remove("hidden");
        renderDrivers();
        renderAlerts();
    } else {
        alert("Invalid admin credentials");
    }
});

// Admin logout
adminLogoutBtn.addEventListener("click", () => {
    adminDashboard.classList.add("hidden");
    adminLoginPage.classList.remove("hidden");
});

// Render drivers list in admin panel
function renderDrivers() {
    if (users.length === 0) {
        driversList.innerHTML = "<p>No drivers registered.</p>";
        return;
    }

    driversList.innerHTML = "";
    users.forEach((user, index) => {
        const div = document.createElement("div");
        div.textContent = `${index + 1}. ${user.phone} - ${user.info.fullName || "No Name"}`;
        driversList.appendChild(div);
    });
}

// Render alerts
function renderAlerts() {
    if (alerts.length === 0) {
        alertsList.innerHTML = "<p>No alerts.</p>";
        return;
    }

    alertsList.innerHTML = "";
    alerts.forEach((alertMsg, index) => {
        const div = document.createElement("div");
        div.textContent = `${index + 1}. ${alertMsg}`;
        alertsList.appendChild(div);
    });
}
