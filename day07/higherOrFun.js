// Example of a higher-order function that accepts a function as an argument
function performOperation(operation, x, y) {
    return operation(x, y);
  }
  
  function add(a, b) {
    console.log(a+b);
    return a + b;
  }
  
  function multiply(a, b) {
    console.log(a*b);
    return a * b;
  }
  
  const result1 = performOperation(add, 5, 3); // result1 is 8
  const result2 = performOperation(multiply, 4, 2); // result2 is 8
  
  