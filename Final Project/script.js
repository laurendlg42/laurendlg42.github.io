// Function to use Session Storage
function saveVisit() {
    sessionStorage.setItem("hasExplored", "true");
    alert("Exploration session started!");
}

// Function to handle JavaScript Object and Form
function createAthlete() {
    // Creating the JS Object
    const athlete = {
        name: document.getElementById('name').value,
        focus: document.getElementById('focus').value,
        timestamp: new Date().toLocaleTimeString()
    };

    // Displaying the Object data
    const display = document.getElementById('displayArea');
    display.innerHTML = `
        <div class="alert alert-info">
            <strong>Athlete Registered:</strong> ${athlete.name} <br>
            <strong>Specialty:</strong> ${athlete.focus} <br>
            <strong>Log Time:</strong> ${athlete.timestamp}
        </div>
    `;
    
    console.log("Object Created:", athlete);
}