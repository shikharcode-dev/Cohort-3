// functons 
// types of function 

// function declaration
function add(a, b) {
  console.log(a+b)
}
add(2, 3)

// function expression
let subtract = function(a, b) {
  console.log(a-b)
}
subtract(5, 2)

// arrow function
let multiply = (a, b) => {
  console.log(a*b)
}
multiply(4, 6)

// one liner function
let divide = (a, b) => console.log(a/b)
divide(10, 2)

// single argument pass functoin
let square = a => console.log(a*a)
square(5)


//IIFE
// IIFE (Immediately Invoked Function Expression) should work fine
// This code doesn't have syntax errors and should execute properly
// If you're getting an error, it might be due to:
// 1. Missing semicolon before IIFE if there's code above it
// 2. Browser console restrictions
// 3. Strict mode issues
// 4. Context where it's being executed
(function() {
  console.log("This is an IIFE")
})();
