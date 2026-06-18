// Create an array
let fruits = ["Apple", "Banana", "Orange", "Mango"];

// Display all elements
function showArray() {
    let result = "<strong>All Fruits:</strong><br>";

    for (let i = 0; i < fruits.length; i++) {
        result += `${i}: ${fruits[i]}<br>`;
    }

    document.getElementById("output").innerHTML = result;
}

// Access first element
function showFirstFruit() {
    document.getElementById("output").innerHTML =
        `First fruit: <strong>${fruits[0]}</strong>`;
}

// Display array length
function showLength() {
    document.getElementById("output").innerHTML =
        `Array length: <strong>${fruits.length}</strong>`;
}

// Add an element
function addFruit() {
    fruits.push("Pineapple");

    document.getElementById("output").innerHTML =
        `After push():<br>${fruits.join(", ")}`;
}

// Remove the last element
function removeFruit() {
    const removed = fruits.pop();

    document.getElementById("output").innerHTML =
        `Removed: <strong>${removed}</strong><br><br>
         Current Array:<br>${fruits.join(", ")}`;
}

// Show the initial array when the page loads
showArray();