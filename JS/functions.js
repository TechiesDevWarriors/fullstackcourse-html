// 1. Simple Function
function greet() {
    document.getElementById("output").innerHTML =
        "👋 Hello! Welcome to JavaScript Functions.";
}

// 2. Function with Parameters
function welcomeUser(name) {
    document.getElementById("output").innerHTML =
        `Welcome, <strong>${name}</strong>!`;
}

// 3. Function with Return Value
function add(a, b) {
    return a + b;
}

function showAddition() {
    const result = add(10, 20);

    document.getElementById("output").innerHTML =
        `10 + 20 = <strong>${result}</strong>`;
}

// 4. Arrow Function
const square = (number) => number * number;

function showSquare() {
    const result = square(6);

    document.getElementById("output").innerHTML =
        `Square of 6 = <strong>${result}</strong>`;
}