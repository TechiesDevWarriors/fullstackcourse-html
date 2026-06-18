// Example 1: if...else
function checkAge() {
    const age = 20;

    if (age >= 18) {
        document.getElementById("result").innerHTML =
            `Age: ${age}<br><strong>You are eligible to vote.</strong>`;
    } else {
        document.getElementById("result").innerHTML =
            `Age: ${age}<br><strong>You are not eligible to vote.</strong>`;
    }
}

// Example 2: if...else if...else
function checkMarks() {
    const marks = 82;
    let grade = "";

    if (marks >= 90) {
        grade = "Grade A";
    } else if (marks >= 75) {
        grade = "Grade B";
    } else if (marks >= 50) {
        grade = "Grade C";
    } else {
        grade = "Fail";
    }

    document.getElementById("result").innerHTML =
        `Marks: ${marks}<br><strong>${grade}</strong>`;
}

// Example 3: switch statement
function showDay() {
    const day = 3;
    let dayName = "";

    switch (day) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        default:
            dayName = "Weekend or Invalid Day";
    }

    document.getElementById("result").innerHTML =
        `Day Number: ${day}<br><strong>${dayName}</strong>`;
}

// Display the first example when the page loads
checkAge();