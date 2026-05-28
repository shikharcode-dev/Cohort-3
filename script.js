// // // array 
// // var a = [10,20,30]

// // console.log(a)

// // // indexing allowed
// // console.log(a[0])
// // // ascess last element
// // console.log(a[a.length-1])

// // pop, push, shift, unshift, splice (add and remove element)

// // // push
// var a = [10,20,30,40,50,60,70,80,90]
// a.push(100)
// console.log(a)

// // pop
// a.pop()
// console.log(a)

// // shift
// a.shift()
// console.log(a)


// // unshift
// a.unshift(5)
// console.log(a)

// // splice - add element
// a.splice(2,0,25)
// console.log(a)

// // splice - remove element
// a.splice(2,1)
// console.log(a)

// // if i want to remove more elemnt which are not in the array indexing so output is
// a.splice(0,100)
// console.log(a)

// create an empty array and create place of 5 empty element
// var a = new Array(5)
// console.log(a)

// Creating an array with 5 elements: 10, 20, 30, 40, 50
// Arrays in JavaScript are zero-indexed, so valid indices are 0, 1, 2, 3, 4
// var a = [10,20,30,40,50]
// // Assigning value 100 to index 10 (which is beyond the current array length)
// // This creates sparse array with empty slots from index 5 to 9
// // JavaScript allows this and fills the gaps with undefined values
// a[10] = 100
// // This will output: [10, 20, 30, 40, 50, <5 empty items>, 100]
// // The array length becomes 11, with indices 5-9 being undefined
// console.log(a)

// creating multidimensional array
// var b = ["aman","rahul",[30,40],[50,60]]
// console.log(b[2][0]) // accessing 30
// console.log(b[2][1]) // accessing 40
// console.log(b[3][0]) // accessing 50
// console.log(b[3][1]) // accessing 60

// get addition of elements in multidimensional array
// var b = [
//   [10,20],
//   [30,40],
//   [50,60]
// ]
// console.log(b[2][1] + b[0][0] + b.length) // 60 + 10 + 3 = 73

// sorting an array
// var a = [2,9,2,7,8,1,5,4,6,3]
// a.sort() // sorts in lexicographical order
// console.log(a) // Output: [1, 2, 2, 3, 4, 5, 6, 7, 8, 9]

// // by shorting  a double digit number will come before a single digit number because of lexicographical sorting
// var b = [89,34,12,57,99,5,3,45]
// b.sort((a, b) => a - b) // sorts in ascending numerical order
// console.log(b) // Output: [3, 5, 12, 34, 45, 57, 89, 99]

// itrating an array
// var a = [10,20,30,40]
// // for loop
// for(var i=0; i < a.length; i++){
//   console.log(a[i])
// }

// // method 2 - for of loop
// for(value of a){
//   console.log(value)
// }

// // non mutating methods - does not change the original array
// var a = [10,20,30,40,50]
// // slice - returns a shallow copy of a portion of an array into a new array object
// var b = a.slice(1,4) // from index 1 to index 3 (4 is not included)
// console.log(b) // Output: [20, 30, 40]
// console.log(a) // Original array remains unchanged: [10, 20, 30, 40, 50]

// // concat - used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// var arr1 = [1, 2, 3]
// var arr2 = [4, 5, 6]
// var arr3 = arr1.concat(arr2) // Merging arr1 and arr2 into a new array arr3
// console.log(arr3) // Output: [1, 2, 3, 4, 5, 6]
// console.log(arr1) // Original array remains unchanged: [1, 2, 3]
// console.log(arr2) // Original array remains unchanged: [4, 5, 6]

// // indexOf - returns the first index at which a given element can be found in the array, or -1 if it is not present
// var c = [10,20,30,40,50]
// console.log(c.indexOf(30)) // Output: 2 (index of the first occurrence of 30)
// console.log(c.indexOf(60)) // Output: -1 (60 is not present in the array)

// // includes - determines whether an array includes a certain value among its entries, returning true or false as appropriate
// var d = [10,20,30,40,50]
// console.log(d.includes(30)) // Output: true (30 is present in the array)
// console.log(d.includes(60)) // Output: false (60 is not present in the array)

// // join - creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string
// var str = 'hello world'
// var e = str.split(' ') // Splitting the string into an array of words
// console.log(e) // Output: ['hello', 'world']
// var f = e.join('-') // Joining the array elements into a string with '-' as a separator
// console.log(f) // Output: 'hello-world'





// // Q why array showes a refrance behaviour when we assign an array to another variable

// // DETAILED EXPLANATION OF REFERENCE BEHAVIOR IN JAVASCRIPT ARRAYS:
// // 
// // In JavaScript, arrays are objects, and objects are stored by reference, not by value.
// // When you assign an array to a variable, you're not storing the actual array data in that variable.
// // Instead, you're storing a reference (memory address) that points to where the array is located in memory.
// //
// // MEMORY REPRESENTATION (Conceptual):
// // Memory Address: 0x1000 -> [1, 2, 3] (actual array data stored here)
// // Variable arr1: stores reference 0x1000 (points to memory location)
// // Variable arr2: stores reference 0x1000 (points to same memory location)
// //
// // STEP-BY-STEP BREAKDOWN:

// var arr1 = [1, 2, 3]
// // arr1 = reference to memory location (e.g., 0x1000)
// // Memory at 0x1000: [1, 2, 3]

// var arr2 = arr1 // arr2 is now a reference to the same array as arr1
// // arr2 = same reference as arr1 (0x1000)
// // Both arr1 and arr2 point to the same memory location
// // No new array is created - only the reference is copied

// arr2.push(4) // Modifying arr2 also modifies arr1 since they reference the same array
// // Since arr2 points to 0x1000, pushing 4 modifies the array at that location
// // Memory at 0x1000 now contains: [1, 2, 3, 4]
// // Both arr1 and arr2 still point to 0x1000, so both see the change

// console.log(arr1) // Output: [1, 2, 3, 4]
// // arr1 points to 0x1000, which now contains [1, 2, 3, 4]

// console.log(arr2) // Output: [1, 2, 3, 4] (both arr1 and arr2 show the same modified array)
// // arr2 also points to 0x1000, showing the same modified array

// // HOW TO CREATE INDEPENDENT COPIES:
// // Method 1: Using spread operator
// // var arr3 = [...arr1] // Creates new array at different memory location (e.g., 0x2000)

// // Method 2: Using Array.from()
// // var arr4 = Array.from(arr1) // Creates new array at different memory location (e.g., 0x3000)

// // Method 3: Using slice()
// // var arr5 = arr1.slice() // Creates new array at different memory location (e.g., 0x4000)

// // PRIMITIVE vs REFERENCE TYPES:
// // Primitives (number, string, boolean): stored by value
// // Objects (arrays, objects, functions): stored by reference

// // so best way to avoid this reference behaviour is to create a new array using one of the above methods when you want to modify an array without affecting the original.  niche solution diya hai for fix that reference behaviour
// var x = [1, 2, 3]
// var y = [x[0], x[1], x[2]] // Creating a new array with the same values (manual copy)
// y.push(4) // Modifying y does not affect x
// console.log(x) // Output: [1, 2, 3] (original array remains unchanged)
// console.log(y) // Output: [1, 2, 3, 4] (new array with the modification)

// // here is short solution for that reference behaviour to do that is spread operator
// var x = [1, 2, 3]
// var y = [...x] // Using spread operator to create a new array with the same values
// y.push(4) // Modifying y does not affect x
// console.log(x) // Output: [1, 2, 3] (original array remains unchanged)
// console.log(y) // Output: [1, 2, 3, 4] (new array with the modification)



// // using of foreach loop 
// var arr = [1, 2, 3, 4, 5]
// arr.forEach(function(item) {
//     console.log(item)
// }) 

// Q what is the difference between for loop and forEach loop in JavaScript?

// ANSWER: 
// - A `for` loop is a traditional loop that gives you more control over the iteration process, including the ability to modify the loop variable and use break/continue statements.
// - A `forEach` loop is a method specifically designed for arrays, providing a cleaner and more functional approach to iterating over array elements. It does not allow for modifying the array during iteration or using break/continue statements.

// Example of `for` loop:
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// Example of `forEach` loop:
// arr.forEach(function(item) {
//     console.log(item)
// })   



// using of map, filter, reduce
var arr = [1, 2, 3, 4, 5]

// map - creates a new array with the results of calling a provided function on every element in the calling array
var mappedArr = arr.map(function(item) {
    return item * 2 // Example: multiplying each element by 2
})
console.log(mappedArr) // Output: [2, 4, 6, 8, 10]