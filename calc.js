// Array to store calculation history
let history = [];

// Functions for basic operations
function add(a, b) {
  let result = a + b;
  saveHistory(a, b, "+", result);
  return result;
}

function subtract(a, b) {
  let result = a - b;
  saveHistory(a, b, "-", result);
  return result;
}

function multiply(a, b) {
  let result = a * b;
  saveHistory(a, b, "*", result);
  return result;
}

function divide(a, b) {
  if (b === 0) {
    console.log("Error: Division by zero");
    return null;
  }
  let result = a / b;
  saveHistory(a, b, "/", result);
  return result;
}

// Helper function to store each calculation
function saveHistory(a, b, operator, result) {
  history.push(`${a} ${operator} ${b} = ${result}`);
}

// Function to display history
function showHistory() {
  console.log("Calculation History:");
  history.forEach((entry, index) => {
    console.log(`${index + 1}: ${entry}`);
  });
}

// Example usage
console.log(add(5, 3));        // 8
console.log(subtract(10, 4));  // 6
console.log(multiply(7, 2));   // 14
console.log(divide(20, 5));    // 4

showHistory();