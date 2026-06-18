// Sample values
let a = 10;
let b = 5;

// ----------------------
// Arithmetic Operators
// ----------------------

const arithmetic = [
    ["10 + 5", a + b],
    ["10 - 5", a - b],
    ["10 * 5", a * b],
    ["10 / 5", a / b],
    ["10 % 5", a % b],
    ["10 ** 2", a ** 2]
];

const arithmeticTable = document.getElementById("arithmeticTable");

arithmetic.forEach(item => {
    arithmeticTable.innerHTML += `
        <tr>
            <td>${item[0]}</td>
            <td>${item[1]}</td>
        </tr>
    `;
});

// ----------------------
// Comparison Operators
// ----------------------

const comparison = [
    ["10 > 5", a > b],
    ["10 < 5", a < b],
    ["10 >= 5", a >= b],
    ["10 <= 5", a <= b],
    ["10 == 5", a == b],
    ["10 === 10", a === 10],
    ["10 != 5", a != b]
];

const comparisonTable = document.getElementById("comparisonTable");

comparison.forEach(item => {
    comparisonTable.innerHTML += `
        <tr>
            <td>${item[0]}</td>
            <td>${item[1]}</td>
        </tr>
    `;
});

// ----------------------
// Logical Operators
// ----------------------

const logical = [
    ["true && true", true && true],
    ["true && false", true && false],
    ["true || false", true || false],
    ["false || false", false || false],
    ["!true", !true]
];

const logicalTable = document.getElementById("logicalTable");

logical.forEach(item => {
    logicalTable.innerHTML += `
        <tr>
            <td>${item[0]}</td>
            <td>${item[1]}</td>
        </tr>
    `;
});

// ----------------------
// Assignment Operators
// ----------------------

let x = 10;

const assignment = [];

assignment.push(["Initial value", x]);

x += 5;
assignment.push(["x += 5", x]);

x -= 3;
assignment.push(["x -= 3", x]);

x *= 2;
assignment.push(["x *= 2", x]);

x /= 4;
assignment.push(["x /= 4", x]);

const assignmentTable = document.getElementById("assignmentTable");

assignment.forEach(item => {
    assignmentTable.innerHTML += `
        <tr>
            <td>${item[0]}</td>
            <td>${item[1]}</td>
        </tr>
    `;
});