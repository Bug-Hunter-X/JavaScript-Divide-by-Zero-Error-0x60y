function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

const calculator = {
  add,
  subtract,
  multiply,
  divide
};

// Example usage with error handling
try {
  console.log(calculator.add(5, 3)); // Output: 8
  console.log(calculator.subtract(10, 4)); // Output: 6
  console.log(calculator.multiply(7, 2)); // Output: 14
  console.log(calculator.divide(9, 3)); // Output: 3
  console.log(calculator.divide(5, 0)); // Throws an error
} catch (error) {
  console.error('Error:', error.message); // Handle the error gracefully
}
//Example of try-catch
 try {
    let x = 10;
    let y = 0;
    let z = x/y; 
 }catch(error){
    console.error("Error:", error.message)
 }