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
