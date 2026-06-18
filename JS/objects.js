// Create an object
const student = {
    name: "Alice",
    age: 22,
    course: "JavaScript"
};

// Display all properties
function showObject() {
    document.getElementById("output").innerHTML = `
        <strong>Student Details</strong><br><br>
        Name: ${student.name}<br>
        Age: ${student.age}<br>
        Course: ${student.course}<br>
        City: ${student.city || "Not Added"}
    `;
}

// Access a property
function showName() {
    document.getElementById("output").innerHTML = `
        Using dot notation: <strong>${student.name}</strong><br>
        Using bracket notation: <strong>${student["name"]}</strong>
    `;
}

// Add a new property
function addProperty() {
    student.city = "Chennai";

    document.getElementById("output").innerHTML = `
        Added a new property:<br><br>
        Name: ${student.name}<br>
        City: ${student.city}
    `;
}

// Update an existing property
function updateProperty() {
    student.age = 23;

    document.getElementById("output").innerHTML = `
        Updated Age:<br><br>
        Name: ${student.name}<br>
        Age: ${student.age}<br>
        Course: ${student.course}
    `;
}

// Display the object when the page first loads
showObject();