// objects

// Objects in JavaScript are collections of key-value pairs that allow you to store and organize related data
// They are one of the fundamental data types and can contain properties and methods
// Objects are mutable, meaning their properties can be changed after creation

// var obj = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
// console.log(obj.name); // Output: John
// console.log(obj.age); // Output: 30
// console.log(obj.city); // Output: New York

// console.log(obj["name"]); // Output: John
// console.log(obj["age"]); // Output: 30
// console.log(obj["city"]); // Output: New York


// // update, add, delete, ascess key value pairs and entries

// // Update - modifying existing property values
// obj.age = 31;
// console.log(obj.age); // Output: 31 

// // Add - adding new properties to the object
// obj.country = "USA";
// console.log(obj.country); // Output: USA

// // Delete - removing properties from the object using delete operator
// delete obj.city;
// console.log(obj.city); // Output: undefined

// // Access key - Object.keys() returns an array of all property names
// console.log(Object.keys(obj)); // Output: ["name", "age", "country"]

// // Access value - Object.values() returns an array of all property values
// console.log(Object.values(obj)); // Output: ["John", 31, "USA"]

// // Access entries - Object.entries() returns an array of [key, value] pairs
// console.log(Object.entries(obj)); // Output: [["name", "John"], ["age", 31], ["country", "USA"]]

// add a list of things inside an object

// Objects can contain arrays as property values, allowing you to store lists of related items
// var obj = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     hobbies: ["reading", "traveling", "cooking"]
// }

// console.log(obj.hobbies); // Output: ["reading", "traveling", "cooking"]
// console.log(obj.hobbies[1]); // using indexing i got "traveling" as output

// add a nested object inside an object

// Objects can contain other objects as properties, creating nested structures for complex data organization
// var obj = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     hobbies: ["reading", "traveling", "cooking"],
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         zipCode: "10001"
//     }
// }

// // Accessing nested object properties using dot notation
// console.log(obj.address); // Output: {street: "123 Main St", city: "New York", zipCode: "10001"}
// console.log(obj.address.street); // Output: 123 Main St.   
// console.log(obj.address.city); // Output: New York
// console.log(obj.address.zipCode); // Output: 10001

// // Accessing nested object properties using bracket notation - alternative syntax
// console.log(obj["address"]["street"]); // Output: 123 Main St. this is another way of ascessing the nested object values using bracket notation.

// // Object methods work on the main object level, showing all top-level properties
// console.log(Object.keys(obj)); // Output: ["name", "age", "city", "hobbies", "address"]
// console.log(Object.values(obj)); // Output: ["John", 30, "New York", ["reading", "traveling", "cooking"], {street: "123 Main St", city: "New York", zipCode: "10001"}]
// console.log(Object.entries(obj)); // Output: [["name", "John"], ["age", 30], ["city", "New York"], ["hobbies", ["reading", "traveling", "cooking"]], ["address", {street: "123 Main St", city: "New York", zipCode: "10001"}]]

// // Working with arrays inside objects - accessing array properties and methods
// console.log(obj.hobbies.length); // Output: 3 this is how we can find the length of the hobbies array inside the object.

// // Modifying arrays inside objects - push() adds new element and returns new length
// console.log(obj.hobbies.push("swimming")); // this is how we can add a new hobby to the hobbies array inside the object.
// console.log(obj.hobbies); // Output: ["reading", "traveling", "cooking", "swimming"] this is the updated hobbies array after adding a new hobby.
// console.log(obj.hobbies[3]); // Output: swimming this is how we can access the newly added hobby using indexing.


// Q.

// Creating an object with nested properties and arrays to demonstrate the example
// var user = {
//     name: "Alice",
//     age: 20,
//     city: "Boston",
//     collage: {
//         name: "MIT",
//         totalStudents: 11520,
//         courses: ["Mathematics", "Physics", "Computer Science", "Engineering", "Biology"]
//     }
// };

// // Breaking down the example: console.log((user.collage.totalStudents-user.age) + user.collage.courses[3]);

// // Step 1: user.collage.totalStudents accesses the totalStudents property (11520) from the nested collage object
// // Step 2: user.age accesses the age property (20) from the main user object
// // Step 3: (user.collage.totalStudents-user.age) performs subtraction: 11520 - 20 = 11500
// // Step 4: user.collage.courses[3] accesses the element at index 3 from the courses array, which is "Engineering"
// // Step 5: The + operator concatenates the number 11500 with the string "Engineering"
// // Step 6: Result will be "11500Engineering" - JavaScript converts the number to string for concatenation

// console.log((user.collage.totalStudents-user.age) + user.collage.courses[3]); // Output: "11500Engineering"

// // Additional examples to show how the object works:
// console.log(user.name); // Output: "Alice"
// console.log(user.collage.name); // Output: "MIT"
// console.log(user.collage.courses); // Output: ["Mathematics", "Physics", "Computer Science", "Engineering", "Biology"]
// console.log(user.collage.courses[0]); // Output: "Mathematics"
// console.log(user.collage.totalStudents); // Output: 11520



// Q. creating method inside obj add also 2 nested objects inside the main object and list also 

// This example demonstrates a complex object structure with nested objects, arrays, and methods
// The company object contains:
// - Basic properties (name, location, employees, skills array)
// - Nested objects (departments with engineering and marketing sub-objects)
// - A method (totalEmployees function) that calculates total department employees
// var company = {
//     name: "Tech Solutions",
//     location: "San Francisco",
//     employees: 500,
//     skills: ["JavaScript", "Python", "Java", "C++"],
//     departments: {
//         engineering: {
//             head: "Alice",
//             employees: 200
//         },
//         marketing: {
//             head: "Bob",
//             employees: 100
//         }
//     },

//     // Original method - calculates total employees from both departments using this keyword
//     totalEmployees: function() {
//         return this.departments.engineering.employees + this.departments.marketing.employees;
//     },

//     // Simple alternative method - directly adds the two department employee counts
//     // addEmployees: function() {
//     //     return 200 + 100;
//     // }
// };

// // Demonstrating different types of operations we learned:

// // 1. Accessing basic object properties using dot notation
// console.log(company.name); // Output: "Tech Solutions"
// console.log(company.location); // Output: "San Francisco"
// console.log(company.employees); // Output: 500

// // 2. Accessing array properties and using array indexing
// console.log(company.skills); // Output: ["JavaScript", "Python", "Java", "C++"]
// console.log(company.skills[0]); // Output: "JavaScript"
// console.log(company.skills.length); // Output: 4

// // 3. Accessing nested object properties using dot notation
// console.log(company.departments); // Output: {engineering: {head: "Alice", employees: 200}, marketing: {head: "Bob", employees: 100}}
// console.log(company.departments.engineering); // Output: {head: "Alice", employees: 200}
// console.log(company.departments.engineering.head); // Output: "Alice"
// console.log(company.departments.marketing.employees); // Output: 100

// // 4. Accessing nested objects using bracket notation (alternative syntax)
// console.log(company["departments"]["engineering"]["head"]); // Output: "Alice"

// // 5. Calling object methods - functions defined inside the object
// console.log(company.totalEmployees()); // Output: 300 (200 + 100)

// // 6. Using Object methods to get keys, values, and entries
// console.log(Object.keys(company)); // Output: ["name", "location", "employees", "skills", "departments", "totalEmployees"]
// console.log(Object.values(company)); // Output: ["Tech Solutions", "San Francisco", 500, ["JavaScript", "Python", "Java", "C++"], {engineering: {...}, marketing: {...}}, function]

// // 7. Modifying object properties (Update operation)
// company.location = "New York";
// console.log(company.location); // Output: "New York"

// // 8. Adding new properties to the object (Add operation)
// company.founded = 2020;
// console.log(company.founded); // Output: 2020

// // 9. Working with arrays inside objects - adding new elements
// company.skills.push("React");
// console.log(company.skills); // Output: ["JavaScript", "Python", "Java", "C++", "React"]

// // 10. Deleting properties from the object (Delete operation)
// delete company.founded;
// console.log(company.founded); // Output: undefined







// very important question
// create an obj and inside that perform maths operations like add, sub, etc... using method or function. This example demonstrates how to create an object with methods that perform basic mathematical operations. use fat arrow function to define the methods inside the object.

// This calculator object demonstrates various JavaScript concepts:
// - Object creation with properties and methods
// - Fat arrow functions for method definitions
// - Conditional logic for error handling
// - Mathematical operations encapsulated within an object
// var calculator = {
//     // Basic properties to store calculator information
//     name: "Advanced Calculator",
//     version: "1.0",
//     operations: ["add", "subtract", "multiply", "divide", "power", "sqrt"],
//     history: [], // Array to store calculation history

//     // Method for addition using fat arrow function
//     add: (a, b) => a + b,

//     // Method for subtraction using fat arrow function
//     subtract: (a, b) => a - b,

//     // Method for multiplication using fat arrow function
//     multiply: (a, b) => a * b,

//     // Method for division using fat arrow function with error handling
//     divide: (a, b) => {
//         if (b === 0) {
//             return "Error: Division by zero is not allowed.";
//         }
//         return a / b;
//     },

//     // Additional mathematical operations using fat arrow functions
//     power: (a, b) => Math.pow(a, b),
//     sqrt: (a) => Math.sqrt(a),
    
//     // Method to add calculation to history using regular function (to access 'this')
//     addToHistory: function(operation, result) {
//         this.history.push(`${operation} = ${result}`);
//     },

//     // Method to clear history
//     clearHistory: function() {
//         this.history = [];
//     }
// };

// // Demonstrating different console.log approaches and object operations we learned:

// // 1. Accessing basic object properties using dot notation
// console.log(calculator.name); // Output: "Advanced Calculator"
// console.log(calculator.version); // Output: "1.0"

// // 2. Accessing and working with arrays inside objects
// console.log(calculator.operations); // Output: ["add", "subtract", "multiply", "divide", "power", "sqrt"]
// console.log(calculator.operations[0]); // Output: "add"
// console.log(calculator.operations.length); // Output: 6

// // 3. Using bracket notation to access properties
// console.log(calculator["name"]); // Output: "Advanced Calculator"
// console.log(calculator["operations"][1]); // Output: "subtract"

// // 4. Calling object methods and performing mathematical operations
// console.log(calculator.add(10, 5)); // Output: 15
// console.log(calculator.subtract(10, 5)); // Output: 5
// console.log(calculator.multiply(10, 5)); // Output: 50
// console.log(calculator.divide(10, 5)); // Output: 2
// console.log(calculator.divide(10, 0)); // Output: "Error: Division by zero is not allowed."
// console.log(calculator.power(2, 3)); // Output: 8
// console.log(calculator.sqrt(16)); // Output: 4

// // 5. Working with arrays inside objects - push() method to add new operations
// calculator.operations.push("modulus");
// console.log(calculator.operations); // Output: ["add", "subtract", "multiply", "divide", "power", "sqrt", "modulus"]

// // 6. Adding new properties to the object (Add operation)
// calculator.author = "JavaScript Developer";
// calculator.modulus = (a, b) => a % b; // Adding new method
// console.log(calculator.author); // Output: "JavaScript Developer"
// console.log(calculator.modulus(10, 3)); // Output: 1

// // 7. Using Object methods to get keys, values, and entries
// console.log(Object.keys(calculator)); // Output: Array of all property names
// console.log(Object.values(calculator)); // Output: Array of all property values
// console.log(Object.entries(calculator)); // Output: Array of [key, value] pairs

// // 8. Working with the history array - demonstrating array methods
// calculator.addToHistory("10 + 5", calculator.add(10, 5));
// calculator.addToHistory("10 - 5", calculator.subtract(10, 5));
// calculator.addToHistory("10 * 5", calculator.multiply(10, 5));
// console.log(calculator.history); // Output: ["10 + 5 = 15", "10 - 5 = 5", "10 * 5 = 50"]

// // 9. Array operations - accessing elements and length
// console.log(calculator.history[0]); // Output: "10 + 5 = 15"
// console.log(calculator.history.length); // Output: 3

// // 10. More array methods - pop() removes last element
// var lastCalculation = calculator.history.pop();
// console.log(lastCalculation); // Output: "10 * 5 = 50"
// console.log(calculator.history); // Output: ["10 + 5 = 15", "10 - 5 = 5"]

// // 11. Array methods - unshift() adds element at beginning
// calculator.history.unshift("Welcome to Calculator");
// console.log(calculator.history); // Output: ["Welcome to Calculator", "10 + 5 = 15", "10 - 5 = 5"]

// // 12. Array methods - shift() removes first element
// var firstElement = calculator.history.shift();
// console.log(firstElement); // Output: "Welcome to Calculator"
// console.log(calculator.history); // Output: ["10 + 5 = 15", "10 - 5 = 5"]

// // 13. Updating existing properties (Update operation)
// calculator.version = "2.0";
// console.log(calculator.version); // Output: "2.0"

// // 14. Deleting properties from the object (Delete operation)
// delete calculator.author;
// console.log(calculator.author); // Output: undefined

// // 15. Complex operations combining multiple concepts
// var result = calculator.add(calculator.multiply(5, 3), calculator.divide(20, 4));
// console.log(result); // Output: 20 (15 + 5)

// // 16. Using the clearHistory method
// calculator.clearHistory();
// console.log(calculator.history); // Output: []

// // 17. Checking if property exists using 'in' operator
// console.log('add' in calculator); // Output: true
// console.log('author' in calculator); // Output: false

// // 18. Using hasOwnProperty method
// console.log(calculator.hasOwnProperty('name')); // Output: true
// console.log(calculator.hasOwnProperty('toString')); // Output: false



// destructuring objects and arrays

// Destructuring is a convenient way to extract values from objects and arrays into distinct variables. It allows for cleaner and more readable code when working with complex data structures.

// OBJECT DESTRUCTURING
// Object destructuring allows you to extract properties from objects and assign them to variables with the same name as the property keys

// Example 1: Basic Object Destructuring
var person = {
    name: "John",
    age: 25,
    city: "New York"
};

// Traditional way of accessing object properties
// var name = person.name;
// var age = person.age;
// var city = person.city;

// Using destructuring - much cleaner and shorter
var {name, age, city} = person;
console.log(name); // Output: "John"
console.log(age); // Output: 25
console.log(city); // Output: "New York"

// Example 2: Destructuring with different variable names
var {name: personName, age: personAge} = person;
console.log(personName); // Output: "John"
console.log(personAge); // Output: 25

// Example 3: Destructuring nested objects
var student = {
    name: "Alice",
    details: {
        grade: "A",
        subject: "Math",
        school: {
            name: "ABC High School",
            location: "Boston"
        }
    }
};

// Extracting values from nested objects
var {name, details: {grade, subject, school: {name: schoolName}}} = student;
console.log(name); // Output: "Alice"
console.log(grade); // Output: "A"
console.log(subject); // Output: "Math"
console.log(schoolName); // Output: "ABC High School"

// ARRAY DESTRUCTURING
// Array destructuring allows you to extract elements from arrays and assign them to variables based on their position

// Example 4: Basic Array Destructuring
var colors = ["red", "green", "blue", "yellow"];

// Traditional way of accessing array elements
// var firstColor = colors[0];
// var secondColor = colors[1];
// var thirdColor = colors[2];

// Using destructuring - extracts elements by position
var [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor); // Output: "red"
console.log(secondColor); // Output: "green"
console.log(thirdColor); // Output: "blue"

// Example 5: Skipping elements in array destructuring
var numbers = [1, 2, 3, 4, 5];
var [first, , third, , fifth] = numbers; // Notice the empty spaces to skip elements
console.log(first); // Output: 1
console.log(third); // Output: 3
console.log(fifth); // Output: 5

// Example 6: Destructuring arrays inside objects
var company = {
    name: "Tech Corp",
    employees: ["John", "Jane", "Bob"],
    departments: ["IT", "HR", "Finance"]
};

// Extracting company name and first two employees
var {name: companyName, employees: [firstEmployee, secondEmployee]} = company;
console.log(companyName); // Output: "Tech Corp"
console.log(firstEmployee); // Output: "John"
console.log(secondEmployee); // Output: "Jane"

// Example 7: Default values in destructuring
var user = {
    username: "alice123",
    email: "alice@email.com"
    // Note: no 'phone' property
};

// Using default values when property doesn't exist
var {username, email, phone = "Not provided"} = user;
console.log(username); // Output: "alice123"
console.log(email); // Output: "alice@email.com"
console.log(phone); // Output: "Not provided" (default value used)

// Example 8: Practical use case - Function parameters
var displayUserInfo = function({name, age, city = "Unknown"}) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
};

var userData = {name: "Mike", age: 30};
displayUserInfo(userData); // Output: "Name: Mike, Age: 30, City: Unknown"

// Example 9: Swapping variables using array destructuring
var a = 10;
var b = 20;
console.log(`Before swap: a = ${a}, b = ${b}`); // Output: "Before swap: a = 10, b = 20"

// Swapping values using destructuring
[a, b] = [b, a];
console.log(`After swap: a = ${a}, b = ${b}`); // Output: "After swap: a = 20, b = 10"

// Example 10: Rest operator with destructuring
var fruits = ["apple", "banana", "orange", "grape", "mango"];

// Extract first two fruits and put the rest in a new array
var [firstFruit, secondFruit, ...remainingFruits] = fruits;
console.log(firstFruit); // Output: "apple"
console.log(secondFruit); // Output: "banana"
console.log(remainingFruits); // Output: ["orange", "grape", "mango"]

// Benefits of destructuring:
// 1. Makes code more readable and concise
// 2. Reduces repetitive code when accessing object properties or array elements
// 3. Allows for easy variable swapping
// 4. Enables setting default values
// 5. Works great with function parameters for cleaner function calls







// DEEP COPY vs SHALLOW COPY
// Understanding the difference between deep and shallow copying is crucial when working with objects and arrays in JavaScript

// WHAT IS COPYING?
// Copying means creating a new variable that contains the same data as the original
// However, there are two types of copying: shallow and deep

// SHALLOW COPY
// A shallow copy creates a new object/array, but nested objects/arrays are still referenced (not copied)
// Changes to nested elements will affect both the original and the copy

// DEEP COPY  
// A deep copy creates a completely independent copy where nested objects/arrays are also copied
// Changes to any level won't affect the original

// ==================== SHALLOW COPY EXAMPLES ====================

// Example 1: Shallow Copy with Objects using Object.assign()
var originalUser = {
    name: "John",
    age: 25,
    address: {
        street: "123 Main St",
        city: "New York"
    },
    hobbies: ["reading", "gaming"]
};

// Creating shallow copy using Object.assign()
var shallowCopyUser = Object.assign({}, originalUser);

// Modifying top-level property - this won't affect original
shallowCopyUser.name = "Jane";
console.log(originalUser.name); // Output: "John" (unchanged)
console.log(shallowCopyUser.name); // Output: "Jane" (changed)

// Modifying nested object - this WILL affect original (shallow copy problem)
shallowCopyUser.address.city = "Boston";
console.log(originalUser.address.city); // Output: "Boston" (changed! This is the problem)
console.log(shallowCopyUser.address.city); // Output: "Boston" (changed)

// Modifying nested array - this WILL affect original (shallow copy problem)
shallowCopyUser.hobbies.push("swimming");
console.log(originalUser.hobbies); // Output: ["reading", "gaming", "swimming"] (changed!)
console.log(shallowCopyUser.hobbies); // Output: ["reading", "gaming", "swimming"] (changed)

// Example 2: Shallow Copy with Arrays using spread operator
var originalNumbers = [1, 2, [3, 4], {value: 5}];

// Creating shallow copy using spread operator
var shallowCopyNumbers = [...originalNumbers];

// Modifying top-level element - this won't affect original
shallowCopyNumbers[0] = 10;
console.log(originalNumbers[0]); // Output: 1 (unchanged)
console.log(shallowCopyNumbers[0]); // Output: 10 (changed)

// Modifying nested array - this WILL affect original (shallow copy problem)
shallowCopyNumbers[2][0] = 30;
console.log(originalNumbers[2][0]); // Output: 30 (changed! This is the problem)
console.log(shallowCopyNumbers[2][0]); // Output: 30 (changed)

// Modifying nested object - this WILL affect original (shallow copy problem)
shallowCopyNumbers[3].value = 50;
console.log(originalNumbers[3].value); // Output: 50 (changed!)
console.log(shallowCopyNumbers[3].value); // Output: 50 (changed)

// Example 3: Other Shallow Copy Methods
var originalData = {
    name: "Alice",
    scores: [85, 90, 78],
    info: {grade: "A", subject: "Math"}
};

// Method 1: Using spread operator for objects
var copy1 = {...originalData};

// Method 2: Using Object.assign()
var copy2 = Object.assign({}, originalData);

// Method 3: Using Array.from() for arrays
var originalArray = [1, 2, [3, 4]];
var copy3 = Array.from(originalArray);

// All these are shallow copies - nested elements are still referenced

// ==================== DEEP COPY EXAMPLES ====================

// Example 4: Deep Copy using JSON methods (most common approach)
var originalStudent = {
    name: "Bob",
    age: 20,
    address: {
        street: "456 Oak Ave",
        city: "Chicago",
        coordinates: {
            lat: 41.8781,
            lng: -87.6298
        }
    },
    grades: [95, 87, 92],
    subjects: ["Math", "Science"]
};

// Creating deep copy using JSON.parse(JSON.stringify())
var deepCopyStudent = JSON.parse(JSON.stringify(originalStudent));

// Modifying nested object - this WON'T affect original (deep copy success)
deepCopyStudent.address.city = "Miami";
deepCopyStudent.address.coordinates.lat = 25.7617;
console.log(originalStudent.address.city); // Output: "Chicago" (unchanged!)
console.log(deepCopyStudent.address.city); // Output: "Miami" (changed)
console.log(originalStudent.address.coordinates.lat); // Output: 41.8781 (unchanged!)
console.log(deepCopyStudent.address.coordinates.lat); // Output: 25.7617 (changed)

// Modifying nested array - this WON'T affect original (deep copy success)
deepCopyStudent.grades.push(100);
deepCopyStudent.subjects[0] = "Advanced Math";
console.log(originalStudent.grades); // Output: [95, 87, 92] (unchanged!)
console.log(deepCopyStudent.grades); // Output: [95, 87, 92, 100] (changed)
console.log(originalStudent.subjects[0]); // Output: "Math" (unchanged!)
console.log(deepCopyStudent.subjects[0]); // Output: "Advanced Math" (changed)

// Example 5: Deep Copy for Arrays with nested structures
var originalComplexArray = [
    {name: "Item1", details: {price: 100, tags: ["new", "sale"]}},
    {name: "Item2", details: {price: 200, tags: ["popular"]}},
    [1, 2, [3, 4]]
];

// Creating deep copy of complex array
var deepCopyComplexArray = JSON.parse(JSON.stringify(originalComplexArray));

// Modifying deeply nested elements - this WON'T affect original
deepCopyComplexArray[0].details.price = 150;
deepCopyComplexArray[0].details.tags.push("discounted");
deepCopyComplexArray[2][2][0] = 30;

console.log(originalComplexArray[0].details.price); // Output: 100 (unchanged!)
console.log(deepCopyComplexArray[0].details.price); // Output: 150 (changed)
console.log(originalComplexArray[0].details.tags); // Output: ["new", "sale"] (unchanged!)
console.log(deepCopyComplexArray[0].details.tags); // Output: ["new", "sale", "discounted"] (changed)
console.log(originalComplexArray[2][2][0]); // Output: 3 (unchanged!)
console.log(deepCopyComplexArray[2][2][0]); // Output: 30 (changed)

// Example 6: Custom Deep Copy Function (alternative approach)
function deepCopy(obj) {
    // Handle null, undefined, and primitive types
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    
    // Handle arrays
    if (Array.isArray(obj)) {
        var copyArray = [];
        for (var i = 0; i < obj.length; i++) {
            copyArray[i] = deepCopy(obj[i]); // Recursive call for nested elements
        }
        return copyArray;
    }
    
    // Handle objects
    var copyObject = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            copyObject[key] = deepCopy(obj[key]); // Recursive call for nested properties
        }
    }
    return copyObject;
}

// Testing custom deep copy function
var testObject = {
    name: "Test",
    data: {
        numbers: [1, 2, 3],
        nested: {
            value: "deep"
        }
    }
};

var customDeepCopy = deepCopy(testObject);
customDeepCopy.data.numbers.push(4);
customDeepCopy.data.nested.value = "very deep";

console.log(testObject.data.numbers); // Output: [1, 2, 3] (unchanged!)
console.log(customDeepCopy.data.numbers); // Output: [1, 2, 3, 4] (changed)
console.log(testObject.data.nested.value); // Output: "deep" (unchanged!)
console.log(customDeepCopy.data.nested.value); // Output: "very deep" (changed)

// ==================== IMPORTANT NOTES ====================

// LIMITATIONS OF JSON.parse(JSON.stringify()) METHOD:
// 1. Cannot copy functions, undefined values, or symbols
// 2. Converts dates to strings
// 3. Cannot handle circular references
// 4. Loses prototype chain

// Example showing JSON method limitations:
var objectWithFunction = {
    name: "Test",
    calculate: function() { return this.name; }, // This function will be lost
    date: new Date(), // This will become a string
    undefinedValue: undefined, // This will be lost
    nullValue: null // This will be preserved
};

var jsonCopy = JSON.parse(JSON.stringify(objectWithFunction));
console.log(jsonCopy.calculate); // Output: undefined (function lost!)
console.log(typeof jsonCopy.date); // Output: "string" (date became string!)
console.log(jsonCopy.undefinedValue); // Output: undefined (property lost!)
console.log(jsonCopy.nullValue); // Output: null (preserved)

// WHEN TO USE SHALLOW COPY:
// - When you only need to modify top-level properties
// - When nested objects/arrays won't be modified
// - For better performance (faster than deep copy)

// WHEN TO USE DEEP COPY:
// - When you need complete independence from original
// - When working with complex nested structures
// - When you want to avoid accidental modifications to original data

// SUMMARY:
// Shallow Copy: Creates new container but shares nested references
// Deep Copy: Creates completely independent copy at all levels
// Choose based on your specific needs and data structure complexity



// LOOPING THROUGH OBJECTS - Easy Explanation and Examples

// Objects don't have built-in iteration like arrays, but JavaScript provides several ways to loop through object properties
// Here are the most common and easy methods to understand:

// Sample object for demonstration
var student = {
    name: "Alice",
    age: 20,
    grade: "A",
    subject: "Computer Science",
    city: "Boston"
};

// ==================== METHOD 1: for...in LOOP ====================
// The for...in loop is the most common way to iterate through object properties
// It loops through all enumerable properties of an object

console.log("=== Using for...in loop ===");
for (var key in student) {
    console.log(key); // Prints property names: name, age, grade, subject, city
    console.log(student[key]); // Prints property values: Alice, 20, A, Computer Science, Boston
    console.log(key + ": " + student[key]); // Prints key-value pairs: name: Alice, age: 20, etc.
}

// ==================== METHOD 2: Object.keys() with forEach ====================
// Object.keys() returns an array of property names, then we can use forEach to loop through them

console.log("=== Using Object.keys() with forEach ===");
Object.keys(student).forEach(function(key) {
    console.log(key + ": " + student[key]);
});

// ==================== METHOD 3: Object.keys() with for loop ====================
// Get all keys as an array and use traditional for loop

console.log("=== Using Object.keys() with for loop ===");
var keys = Object.keys(student);
for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    console.log(key + ": " + student[key]);
}

// ==================== METHOD 4: Object.values() ====================
// If you only need the values (not the keys), use Object.values()

console.log("=== Using Object.values() ===");
var values = Object.values(student);
for (var i = 0; i < values.length; i++) {
    console.log(values[i]); // Prints: Alice, 20, A, Computer Science, Boston
}

// ==================== METHOD 5: Object.entries() ====================
// Object.entries() returns an array of [key, value] pairs - very useful for getting both at once

console.log("=== Using Object.entries() ===");
var entries = Object.entries(student);
for (var i = 0; i < entries.length; i++) {
    var key = entries[i][0];    // First element is the key
    var value = entries[i][1];  // Second element is the value
    console.log(key + ": " + value);
}

// Using destructuring with Object.entries() (more advanced but cleaner)
console.log("=== Using Object.entries() with destructuring ===");
for (var [key, value] of Object.entries(student)) {
    console.log(key + ": " + value);
}

// ==================== PRACTICAL EXAMPLES ====================

// Example 1: Finding specific properties
console.log("=== Finding properties that contain specific values ===");
for (var key in student) {
    if (typeof student[key] === "string") {
        console.log(key + " is a string: " + student[key]);
    }
}

// Example 2: Creating a new object with modified values
console.log("=== Creating modified copy ===");
var modifiedStudent = {};
for (var key in student) {
    if (typeof student[key] === "string") {
        modifiedStudent[key] = student[key].toUpperCase(); // Convert strings to uppercase
    } else {
        modifiedStudent[key] = student[key]; // Keep numbers as they are
    }
}
console.log(modifiedStudent);

// Example 3: Counting properties
console.log("=== Counting properties ===");
var propertyCount = 0;
for (var key in student) {
    propertyCount++;
}
console.log("Total properties: " + propertyCount);

// Example 4: Working with nested objects
var company = {
    name: "Tech Corp",
    location: "San Francisco",
    departments: {
        engineering: 50,
        marketing: 20,
        sales: 30
    },
    founded: 2020
};

console.log("=== Looping through nested objects ===");
for (var key in company) {
    if (typeof company[key] === "object" && company[key] !== null) {
        console.log(key + " (nested object):");
        // Loop through the nested object
        for (var nestedKey in company[key]) {
            console.log("  " + nestedKey + ": " + company[key][nestedKey]);
        }
    } else {
        console.log(key + ": " + company[key]);
    }
}

// Example 5: Converting object to array format
console.log("=== Converting object to different formats ===");
var studentArray = [];
for (var key in student) {
    studentArray.push({
        property: key,
        value: student[key]
    });
}
console.log(studentArray);

// ==================== IMPORTANT NOTES ====================

// 1. for...in loop iterates through ALL enumerable properties, including inherited ones
// Use hasOwnProperty() to check if property belongs to the object itself
console.log("=== Using hasOwnProperty() for safety ===");
for (var key in student) {
    if (student.hasOwnProperty(key)) {
        console.log(key + ": " + student[key]);
    }
}

// 2. Object.keys(), Object.values(), and Object.entries() only return own properties (not inherited)
// This makes them safer to use in most cases

// 3. The order of properties in for...in is not guaranteed in older JavaScript versions
// But Object.keys(), Object.values(), and Object.entries() maintain insertion order in modern JavaScript

// ==================== SUMMARY ====================
// - for...in: Most common, loops through all enumerable properties
// - Object.keys(): Gets array of property names, then loop through array
// - Object.values(): Gets array of property values only
// - Object.entries(): Gets array of [key, value] pairs
// - Always consider using hasOwnProperty() with for...in for safety
// - Choose the method based on whether you need keys, values, or both