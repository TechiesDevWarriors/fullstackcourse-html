// let: value can be changed later
let studentName = "Alice";
let age = 20;

// const: value cannot be reassigned
const country = "India";

// Display initial values
document.getElementById("studentInfo").innerHTML =
`
Name: ${studentName} <br>
Age: ${age} <br>
Country: ${country}
`;

// Change the value of a let variable
studentName = "Bob";
age = 21;

document.getElementById("changeExample").innerHTML =
`
Updated Name: ${studentName} <br>
Updated Age: ${age}
`;

// Display a constant
document.getElementById("constantExample").innerHTML =
`
Country: ${country} <br>
The value stored in <strong>const</strong> cannot be reassigned.
`;