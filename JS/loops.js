// Example 1: For Loop
function showForLoop() {
    let result = "For Loop\n\n";

    for (let i = 1; i <= 5; i++) {
        result += `Count: ${i}\n`;
    }

    document.getElementById("output").textContent = result;
}

// Example 2: While Loop
function showWhileLoop() {
    let result = "While Loop\n\n";
    let i = 1;

    while (i <= 5) {
        result += `Count: ${i}\n`;
        i++;
    }

    document.getElementById("output").textContent = result;
}

// Example 3: Do...While Loop
function showDoWhileLoop() {
    let result = "Do...While Loop\n\n";
    let i = 1;

    do {
        result += `Count: ${i}\n`;
        i++;
    } while (i <= 5);

    document.getElementById("output").textContent = result;
}

// Example 4: For...Of Loop
function showForOfLoop() {
    const fruits = ["Apple", "Banana", "Orange", "Mango"];

    let result = "For...Of Loop\n\n";

    for (const fruit of fruits) {
        result += `${fruit}\n`;
    }

    document.getElementById("output").textContent = result;
}

// Display the first example when the page loads
showForLoop();