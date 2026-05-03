// Session Check
if (!localStorage.getItem("loggedInUser")) {
    window.location.href = "login.html";
}

// Logout
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

// Sidebar Toggle
document.getElementById("toggleBtn").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("d-none");
    document.getElementById("mainContent").classList.toggle("col-md-9");
    document.getElementById("mainContent").classList.toggle("col-md-12");
});

// Dark Mode
document.getElementById("darkModeBtn").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// AJAX Fetch Data
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("students").innerText = data.students;
        document.getElementById("faculty").innerText = data.faculty;

        createChart(data.examData);

        // Save to localStorage
        localStorage.setItem("students", data.students);
        localStorage.setItem("faculty", data.faculty);
    });

// Chart.js
function createChart(examData) {
    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Exams Conducted',
                data: examData,
                backgroundColor: 'rgba(13,110,253,0.7)'
            }]
        }
    });
}