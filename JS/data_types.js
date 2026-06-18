// JavaScript Data Types Examples

const stringValue = "Hello JavaScript";
const numberValue = 100;
const decimalValue = 99.99;
const booleanValue = true;
const nullValue = null;
let undefinedValue;

const arrayValue = ["Apple", "Banana", "Orange"];

const objectValue = {
    name: "John",
    age: 25,
    city: "Chennai"
};

const dataTypes = [
    {
        type: "String",
        value: stringValue,
        result: typeof stringValue
    },
    {
        type: "Number",
        value: numberValue,
        result: typeof numberValue
    },
    {
        type: "Decimal Number",
        value: decimalValue,
        result: typeof decimalValue
    },
    {
        type: "Boolean",
        value: booleanValue,
        result: typeof booleanValue
    },
    {
        type: "Null",
        value: String(nullValue),
        result: typeof nullValue
    },
    {
        type: "Undefined",
        value: String(undefinedValue),
        result: typeof undefinedValue
    },
    {
        type: "Array",
        value: JSON.stringify(arrayValue),
        result: typeof arrayValue
    },
    {
        type: "Object",
        value: JSON.stringify(objectValue),
        result: typeof objectValue
    }
];

const tableBody = document.getElementById("tableBody");

dataTypes.forEach((item) => {
    const row = `
        <tr>
            <td>${item.type}</td>
            <td>${item.value}</td>
            <td>${item.result}</td>
        </tr>
    `;

    tableBody.innerHTML += row;
});

console.log("=== JavaScript Data Types ===");
console.log("String:", stringValue);
console.log("Number:", numberValue);
console.log("Decimal:", decimalValue);
console.log("Boolean:", booleanValue);
console.log("Null:", nullValue);
console.log("Undefined:", undefinedValue);
console.log("Array:", arrayValue);
console.log("Object:", objectValue);