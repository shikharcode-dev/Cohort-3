// Advance JS
// TYPES OF ERRORS IN JAVASCRIPT - Easy Guide with Examples

// 1. SYNTAX ERROR
// What it is: Mistakes in writing code that break JavaScript rules
// When it happens: Before code runs, during parsing
// Example:
// console.log("Hello World"  // Missing closing parenthesis - SYNTAX ERROR!
// Fix: console.log("Hello World");

// 2. REFERENCE ERROR  
// What it is: Trying to use a variable that doesn't exist
// When it happens: During code execution
// Example:
console.log(myName); // myName is not defined - REFERENCE ERROR!
// Fix: First declare the variable: let myName = "John";

// 3. TYPE ERROR
// What it is: Using wrong data type for an operation
// When it happens: During code execution
// Example:
let number = 5;
number.toUpperCase(); // Numbers don't have toUpperCase method - TYPE ERROR!
// Fix: Use correct method: let text = "hello"; text.toUpperCase();

// 4. RANGE ERROR
// What it is: Using a number outside allowed range
// When it happens: During code execution  
// Example:
let arr = new Array(-1); // Array size cannot be negative - RANGE ERROR!
// Fix: Use positive number: let arr = new Array(5);

// 5. URI ERROR
// What it is: Wrong format in web address functions
// When it happens: During code execution
// Example:
decodeURIComponent('%'); // Invalid URI format - URI ERROR!
// Fix: Use proper format: decodeURIComponent('%20');

// 6. EVAL ERROR (Rare)
// What it is: Problems with eval() function
// When it happens: During code execution
// Note: Modern JavaScript rarely throws this error

// HOW TO HANDLE ERRORS - TRY-CATCH
// Use try-catch to prevent errors from breaking your program
try {
    // Code that might cause error
    let result = riskyFunction();
    console.log(result);
} catch (error) {
    // What to do if error happens
    console.log("Oops! Something went wrong:", error.message);
} finally {
    // This always runs, error or no error
    console.log("Cleanup code here");
}

// THROWING CUSTOM ERRORS
// You can create your own error messages
function checkAge(age) {
    if (age < 0) {
        throw new Error("Age cannot be negative!");
    }
    if (age > 150) {
        throw new Error("Age seems too high!");
    }
    return "Valid age";
}

// COMMON ERROR PROPERTIES
// error.name - Type of error (like "TypeError")
// error.message - Description of what went wrong
// error.stack - Shows where error happened in code

// TIPS TO AVOID ERRORS:
// 1. Always declare variables before using them
// 2. Check data types before operations
// 3. Use try-catch for risky operations
// 4. Test your code with different inputs
// 5. Use console.log() to debug step by step






// STRICT MODE IN JAVASCRIPT - Easy Guide with Examples

// What is Strict Mode?
// Strict mode is a way to make JavaScript more strict and catch common mistakes
// It helps you write better, safer code by throwing errors for things that would normally be ignored

// HOW TO ENABLE STRICT MODE

// Method 1: For entire script (put at very top of file)
"use strict";

// Method 2: For specific function only
function myFunction() {
    "use strict";
    // strict mode only applies inside this function
}

// WHAT STRICT MODE DOES - EXAMPLES

// 1. PREVENTS CREATING VARIABLES WITHOUT DECLARATION
// Without strict mode: Creates global variable (bad!)
// myName = "John"; // This would work but create problems

// With strict mode: Throws ReferenceError
try {
    myAge = 25; // ERROR! Must use let, const, or var
} catch (error) {
    console.log("Error:", error.message); // "myAge is not defined"
}
// Fix: let myAge = 25;

// 2. PREVENTS DUPLICATE PARAMETER NAMES
// Without strict mode: Last parameter wins (confusing!)
// With strict mode: Throws SyntaxError
// function badFunction(a, a) { // ERROR in strict mode!
//     return a;
// }
// Fix: Use different parameter names
function goodFunction(a, b) {
    return a + b;
}

// 3. PREVENTS DELETING VARIABLES
// Without strict mode: Silently fails
// With strict mode: Throws SyntaxError
let myVar = "test";
try {
    // delete myVar; // ERROR! Cannot delete variables
} catch (error) {
    console.log("Cannot delete variables in strict mode");
}

// 4. PREVENTS USING RESERVED WORDS AS VARIABLES
// These words are reserved for future JavaScript features
// let let = 5;        // ERROR!
// let class = "test"; // ERROR!
// let static = true;  // ERROR!

// 5. MAKES 'this' UNDEFINED IN FUNCTIONS (not window object)
function regularFunction() {
    "use strict";
    console.log(this); // undefined (safer!)
}
// Without strict mode, 'this' would be the window object (dangerous!)

// 6. PREVENTS OCTAL NUMBERS (numbers starting with 0)
// Without strict mode: 010 = 8 (confusing!)
// With strict mode: Throws SyntaxError
try {
    // let octalNumber = 010; // ERROR! Octal not allowed
} catch (error) {
    console.log("Octal numbers not allowed in strict mode");
}
// Fix: Use decimal: let number = 8; or hex: let number = 0x8;

// 7. PREVENTS WRITING TO READ-ONLY PROPERTIES
try {
    "use strict";
    let obj = {};
    Object.defineProperty(obj, "readOnly", {
        value: "cannot change",
        writable: false
    });
    // obj.readOnly = "new value"; // ERROR! Cannot write to read-only property
} catch (error) {
    console.log("Cannot modify read-only property");
}

// PRACTICAL EXAMPLE - COMPARING WITH AND WITHOUT STRICT MODE

// Without strict mode (problems can hide)
function withoutStrict() {
    mistakeVariable = "oops"; // Creates global variable accidentally
    return mistakeVariable;
}

// With strict mode (catches mistakes early)
function withStrict() {
    "use strict";
    try {
        // mistakeVariable = "oops"; // Would throw ReferenceError
        let properVariable = "correct"; // Proper way
        return properVariable;
    } catch (error) {
        return "Error caught: " + error.message;
    }
}

// BENEFITS OF USING STRICT MODE:
// 1. Catches common coding mistakes early
// 2. Prevents accidentally creating global variables
// 3. Makes debugging easier
// 4. Improves performance (JavaScript engines can optimize better)
// 5. Prepares your code for future JavaScript versions

// WHEN TO USE STRICT MODE:
// - Always use it in new projects
// - Use it in functions when updating old code
// - Modern JavaScript (ES6+) modules automatically use strict mode

// HOW TO ADD TO EXISTING CODE SAFELY:
function safeStrictMode() {
    "use strict";
    // Add strict mode gradually to individual functions
    // Test thoroughly before applying to entire file
    let safeVariable = "properly declared";
    return safeVariable;
}

console.log("Strict mode helps you write better JavaScript!");
console.log(withStrict());






// THE 'this' KEYWORD IN JAVASCRIPT - Complete Easy Guide

// What is 'this'?
// 'this' is a special keyword that refers to an object
// The object it refers to depends on HOW and WHERE the function is called

// 1. GLOBAL CONTEXT (outside any function)
// In browser: 'this' refers to window object
// In Node.js: 'this' refers to global object
console.log(this); // In browser: window object

// 2. REGULAR FUNCTION CALLS
// Without strict mode: 'this' refers to window/global object
// With strict mode: 'this' is undefined

function regularFunction() {
    console.log(this); // window object (or undefined in strict mode)
}
regularFunction();

function strictFunction() {
    "use strict";
    console.log(this); // undefined
}
strictFunction();

// 3. OBJECT METHODS
// When function is called as object method, 'this' refers to that object
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(this); // refers to 'person' object
        console.log("Hi, I'm " + this.name); // "Hi, I'm John"
        console.log("I'm " + this.age + " years old"); // "I'm 30 years old"
    }
};
person.greet(); // 'this' = person object

// 4. ARROW FUNCTIONS - SPECIAL BEHAVIOR
// Arrow functions DON'T have their own 'this'
// They inherit 'this' from surrounding scope
const car = {
    brand: "Toyota",
    model: "Camry",
    
    // Regular function - has its own 'this'
    getInfo: function() {
        console.log(this.brand); // "Toyota" - 'this' refers to car object
        
        // Arrow function inside - inherits 'this' from getInfo
        const getFullName = () => {
            console.log(this.brand + " " + this.model); // "Toyota Camry"
        };
        getFullName();
    },
    
    // Arrow function as method - 'this' refers to global object (not car!)
    getBrand: () => {
        console.log(this.brand); // undefined (or window.brand)
    }
};
car.getInfo(); // Works correctly
car.getBrand(); // Doesn't work as expected!

// 5. CONSTRUCTOR FUNCTIONS
// When using 'new' keyword, 'this' refers to the new object being created
function Person(name, age) {
    this.name = name; // 'this' refers to new object
    this.age = age;
    this.sayHello = function() {
        console.log("Hello, I'm " + this.name); // 'this' refers to the instance
    };
}

const john = new Person("John", 25);
const mary = new Person("Mary", 30);
john.sayHello(); // "Hello, I'm John"
mary.sayHello(); // "Hello, I'm Mary"

// 6. EVENT HANDLERS
// In event handlers, 'this' refers to the element that triggered the event
// Example: <button id="myButton">Click me</button>
/*
document.getElementById("myButton").addEventListener("click", function() {
    console.log(this); // refers to the button element
    this.style.color = "red"; // changes button text color to red
});
*/

// 7. CALL, APPLY, AND BIND METHODS
// These methods let you manually set what 'this' refers to

const student = {
    name: "Alice",
    grade: "A"
};

const teacher = {
    name: "Mr. Smith",
    subject: "Math"
};

function introduce() {
    console.log("Hi, I'm " + this.name);
}

// call() - calls function immediately with specified 'this'
introduce.call(student); // "Hi, I'm Alice"
introduce.call(teacher); // "Hi, I'm Mr. Smith"

// apply() - same as call() but takes arguments as array
function greetWithGrade(greeting, punctuation) {
    console.log(greeting + " I'm " + this.name + " and I got " + this.grade + punctuation);
}
greetWithGrade.apply(student, ["Hello,", "!"]); // "Hello, I'm Alice and I got A!"

// bind() - creates new function with specified 'this' (doesn't call immediately)
const boundFunction = introduce.bind(student);
boundFunction(); // "Hi, I'm Alice"

// 8. CLASS METHODS
// In classes, 'this' refers to the instance of the class
class Animal {
    constructor(name, type) {
        this.name = name; // 'this' refers to the instance
        this.type = type;
    }
    
    speak() {
        console.log(this.name + " the " + this.type + " makes a sound");
    }
    
    // Arrow function in class - inherits 'this' from class instance
    getInfo = () => {
        console.log("This is " + this.name);
    }
}

const dog = new Animal("Buddy", "dog");
dog.speak(); // "Buddy the dog makes a sound"
dog.getInfo(); // "This is Buddy"

// 9. COMMON MISTAKES AND SOLUTIONS

// Mistake 1: Losing 'this' context when passing methods
const calculator = {
    value: 0,
    add: function(num) {
        this.value += num;
        console.log("Current value: " + this.value);
    }
};

// This loses context - 'this' becomes undefined or global object
const addFunction = calculator.add;
// addFunction(5); // Error! 'this' is not calculator object

// Solution 1: Use bind()
const boundAdd = calculator.add.bind(calculator);
boundAdd(5); // Works! "Current value: 5"

// Solution 2: Use arrow function wrapper
const wrappedAdd = (num) => calculator.add(num);
wrappedAdd(3); // Works! "Current value: 8"

// Mistake 2: 'this' in nested functions
const counter = {
    count: 0,
    start: function() {
        // 'this' refers to counter object here
        console.log("Starting count: " + this.count);
        
        // Problem: 'this' in setTimeout refers to global object
        setTimeout(function() {
            this.count++; // This doesn't work! 'this' is not counter
            console.log("Count: " + this.count); // undefined or NaN
        }, 1000);
    }
};

// Solution: Use arrow function or bind
const betterCounter = {
    count: 0,
    start: function() {
        console.log("Starting count: " + this.count);
        
        // Arrow function inherits 'this' from start method
        setTimeout(() => {
            this.count++; // Works! 'this' refers to betterCounter
            console.log("Count: " + this.count);
        }, 1000);
    }
};

// 10. PRACTICAL EXAMPLES

// Example 1: Simple object with methods
const bankAccount = {
    balance: 1000,
    accountNumber: "12345",
    
    deposit: function(amount) {
        this.balance += amount; // 'this' refers to bankAccount
        console.log("Deposited $" + amount + ". New balance: $" + this.balance);
    },
    
    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrew $" + amount + ". New balance: $" + this.balance);
        } else {
            console.log("Insufficient funds!");
        }
    },
    
    getBalance: function() {
        return this.balance; // 'this' refers to bankAccount
    }
};

bankAccount.deposit(200); // "Deposited $200. New balance: $1200"
bankAccount.withdraw(300); // "Withdrew $300. New balance: $900"

// Example 2: Constructor function for multiple objects
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = false;
    
    this.markAsRead = function() {
        this.isRead = true;
        console.log("'" + this.title + "' has been marked as read");
    };
    
    this.getInfo = function() {
        const status = this.isRead ? "read" : "not read";
        console.log("'" + this.title + "' by " + this.author + " (" + this.pages + " pages) - " + status);
    };
}

const book1 = new Book("Harry Potter", "J.K. Rowling", 300);
const book2 = new Book("Lord of the Rings", "J.R.R. Tolkien", 500);

book1.getInfo(); // "'Harry Potter' by J.K. Rowling (300 pages) - not read"
book1.markAsRead(); // "'Harry Potter' has been marked as read"
book1.getInfo(); // "'Harry Potter' by J.K. Rowling (300 pages) - read"

// SUMMARY - SIMPLE RULES TO REMEMBER:
// 1. In object methods: 'this' = the object
// 2. In regular functions: 'this' = global object (or undefined in strict mode)
// 3. In arrow functions: 'this' = inherited from surrounding scope
// 4. In constructors: 'this' = the new object being created
// 5. In event handlers: 'this' = the element that triggered the event
// 6. You can control 'this' with call(), apply(), and bind()

console.log("Understanding 'this' takes practice, but these rules will help!");










// CALL, BIND, APPLY - Easy Explanation with Examples

// These methods let you control what 'this' refers to in functions

// Setup: A function and some objects to work with
function introduce(greeting, punctuation) {
    return greeting + " I'm " + this.name + " and I'm " + this.age + " years old" + punctuation;
}

const person1 = { name: "John", age: 25 };
const person2 = { name: "Sarah", age: 30 };

// 1. CALL() - Calls function immediately, sets 'this', passes arguments one by one
console.log(introduce.call(person1, "Hello,", "!")); 
// Output: "Hello, I'm John and I'm 25 years old!"

console.log(introduce.call(person2, "Hi,", ".")); 
// Output: "Hi, I'm Sarah and I'm 30 years old."

// 2. APPLY() - Same as call() but arguments go in an array
console.log(introduce.apply(person1, ["Hey,", "!!!"])); 
// Output: "Hey, I'm John and I'm 25 years old!!!"

console.log(introduce.apply(person2, ["Greetings,", "."])); 
// Output: "Greetings, I'm Sarah and I'm 30 years old."

// 3. BIND() - Creates a new function with 'this' set, doesn't call immediately
const johnIntroduce = introduce.bind(person1);
console.log(johnIntroduce("Welcome,", "!")); 
// Output: "Welcome, I'm John and I'm 25 years old!"

const sarahIntroduce = introduce.bind(person2, "Hello,"); // Can pre-fill some arguments
console.log(sarahIntroduce(".")); 
// Output: "Hello, I'm Sarah and I'm 30 years old."

// SIMPLE MEMORY TRICK:
// CALL = Call immediately, Comma-separated arguments
// APPLY = Apply immediately, Array of arguments  
// BIND = Bind and save for later, returns new function

// PRACTICAL EXAMPLE - Borrowing methods
const calculator1 = {
    value: 10,
    multiply: function(num) {
        this.value *= num;
        return this.value;
    }
};

const calculator2 = { value: 5 };

// Borrow multiply method from calculator1 and use it on calculator2
console.log(calculator1.multiply.call(calculator2, 3)); // 15 (calculator2.value becomes 15)
console.log(calculator1.multiply.apply(calculator2, [2])); // 30 (calculator2.value becomes 30)

const boundMultiply = calculator1.multiply.bind(calculator2);
console.log(boundMultiply(4)); // 120 (calculator2.value becomes 120)







// PROTOTYPE AND PROTOTYPE CHAINING IN JAVASCRIPT - Complete Easy Guide

// WHAT IS PROTOTYPE?
// Every function in JavaScript has a 'prototype' property
// Every object in JavaScript has a '__proto__' property (also called [[Prototype]])
// Think of prototype as a "blueprint" or "template" that objects can inherit from

// 1. UNDERSTANDING PROTOTYPE PROPERTY
// When you create a function, JavaScript automatically gives it a 'prototype' property
function Person() {
    // This is a constructor function
}

console.log(Person.prototype); // This is an object that exists automatically
console.log(typeof Person.prototype); // "object"

// You can add properties and methods to the prototype
Person.prototype.species = "Homo sapiens";
Person.prototype.walk = function() {
    console.log("Walking on two legs");
};

// 2. UNDERSTANDING __proto__ PROPERTY
// Every object has __proto__ which points to its prototype
const john = new Person();
console.log(john.__proto__); // Points to Person.prototype
console.log(john.__proto__ === Person.prototype); // true

// john can access properties from Person.prototype through __proto__
console.log(john.species); // "Homo sapiens" - inherited from prototype
john.walk(); // "Walking on two legs" - inherited from prototype

// 3. SIMPLE ANALOGY - THINK OF IT LIKE A FAMILY TREE
// Person.prototype = The "family traits" (like eye color, height genes)
// john.__proto__ = john's connection to his family traits
// john can use family traits even though he doesn't own them directly

// 4. DETAILED EXAMPLE - CREATING A CAR BLUEPRINT
function Car(brand, model) {
    // These are instance properties (each car has its own)
    this.brand = brand;
    this.model = model;
    this.isRunning = false;
}

// These are prototype properties (shared by all cars)
Car.prototype.wheels = 4;
Car.prototype.fuelType = "gasoline";

// These are prototype methods (shared by all cars)
Car.prototype.start = function() {
    this.isRunning = true;
    console.log(this.brand + " " + this.model + " is now running!");
};

Car.prototype.stop = function() {
    this.isRunning = false;
    console.log(this.brand + " " + this.model + " has stopped.");
};

Car.prototype.honk = function() {
    console.log(this.brand + " goes BEEP BEEP!");
};

// Create car instances
const toyota = new Car("Toyota", "Camry");
const honda = new Car("Honda", "Civic");

// Each car has its own brand and model
console.log(toyota.brand); // "Toyota"
console.log(honda.brand); // "Honda"

// But they share prototype properties and methods
console.log(toyota.wheels); // 4 (from Car.prototype)
console.log(honda.wheels); // 4 (from Car.prototype)
console.log(toyota.wheels === honda.wheels); // true (same reference)

toyota.start(); // "Toyota Camry is now running!"
honda.honk(); // "Honda goes BEEP BEEP!"

// 5. PROTOTYPE CHAINING - THE INHERITANCE CHAIN
// Objects can inherit from other objects, creating a chain
// Let's create a more specific type of car

function ElectricCar(brand, model, batteryLife) {
    // Call parent constructor
    Car.call(this, brand, model);
    this.batteryLife = batteryLife;
}

// Set up inheritance - ElectricCar inherits from Car
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

// Override parent method
ElectricCar.prototype.start = function() {
    this.isRunning = true;
    console.log(this.brand + " " + this.model + " is silently running on electricity!");
};

// Add new methods specific to electric cars
ElectricCar.prototype.charge = function() {
    this.batteryLife = 100;
    console.log(this.brand + " " + this.model + " is fully charged!");
};

// Override fuel type
ElectricCar.prototype.fuelType = "electricity";

const tesla = new ElectricCar("Tesla", "Model 3", 85);

// Tesla inherits from both ElectricCar and Car prototypes
console.log(tesla.brand); // "Tesla" (own property)
console.log(tesla.wheels); // 4 (inherited from Car.prototype)
console.log(tesla.fuelType); // "electricity" (from ElectricCar.prototype)
tesla.start(); // "Tesla Model 3 is silently running on electricity!" (overridden method)
tesla.charge(); // "Tesla Model 3 is fully charged!" (ElectricCar specific method)
tesla.honk(); // "Tesla goes BEEP BEEP!" (inherited from Car.prototype)

// 6. THE PROTOTYPE CHAIN VISUALIZATION
// tesla.__proto__ → ElectricCar.prototype
// ElectricCar.prototype.__proto__ → Car.prototype  
// Car.prototype.__proto__ → Object.prototype
// Object.prototype.__proto__ → null

console.log(tesla.__proto__ === ElectricCar.prototype); // true
console.log(ElectricCar.prototype.__proto__ === Car.prototype); // true
console.log(Car.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null (end of chain)

// 7. HOW JAVASCRIPT LOOKS UP PROPERTIES (PROTOTYPE CHAIN LOOKUP)
// When you access tesla.honk(), JavaScript searches:
// 1. tesla object itself - not found
// 2. tesla.__proto__ (ElectricCar.prototype) - not found  
// 3. ElectricCar.prototype.__proto__ (Car.prototype) - FOUND! Uses this
// 4. If not found, continues up the chain until null

// 8. PRACTICAL EXAMPLE - ANIMAL HIERARCHY
function Animal(name) {
    this.name = name;
    this.isAlive = true;
}

Animal.prototype.eat = function() {
    console.log(this.name + " is eating");
};

Animal.prototype.sleep = function() {
    console.log(this.name + " is sleeping");
};

Animal.prototype.breathe = function() {
    console.log(this.name + " is breathing");
};

// Dog inherits from Animal
function Dog(name, breed) {
    Animal.call(this, name); // Call parent constructor
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(this.name + " says WOOF!");
};

Dog.prototype.wagTail = function() {
    console.log(this.name + " is wagging tail happily!");
};

// Cat inherits from Animal
function Cat(name, color) {
    Animal.call(this, name);
    this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.meow = function() {
    console.log(this.name + " says MEOW!");
};

Cat.prototype.purr = function() {
    console.log(this.name + " is purring contentedly");
};

// Create instances
const buddy = new Dog("Buddy", "Golden Retriever");
const whiskers = new Cat("Whiskers", "orange");

// All animals can eat, sleep, breathe (inherited from Animal)
buddy.eat(); // "Buddy is eating"
whiskers.sleep(); // "Whiskers is sleeping"

// Dogs have specific behaviors
buddy.bark(); // "Buddy says WOOF!"
buddy.wagTail(); // "Buddy is wagging tail happily!"

// Cats have specific behaviors  
whiskers.meow(); // "Whiskers says MEOW!"
whiskers.purr(); // "Whiskers is purring contentedly"

// 9. CHECKING THE PROTOTYPE CHAIN
console.log(buddy instanceof Dog); // true
console.log(buddy instanceof Animal); // true (through prototype chain)
console.log(buddy instanceof Object); // true (everything inherits from Object)

console.log(whiskers instanceof Cat); // true
console.log(whiskers instanceof Animal); // true
console.log(whiskers instanceof Dog); // false

// 10. ADDING METHODS TO EXISTING PROTOTYPES
// You can add methods to built-in prototypes (but be careful!)
String.prototype.reverse = function() {
    return this.split('').reverse().join('');
};

console.log("hello".reverse()); // "olleh"

Array.prototype.last = function() {
    return this[this.length - 1];
};

console.log([1, 2, 3, 4].last()); // 4

// 11. PROTOTYPE VS __PROTO__ SUMMARY
// prototype: Property of constructor functions, defines what instances will inherit
// __proto__: Property of objects, points to the prototype they inherit from

function Teacher(name) {
    this.name = name;
}

Teacher.prototype.teach = function() {
    console.log(this.name + " is teaching");
};

const mrSmith = new Teacher("Mr. Smith");

console.log(Teacher.prototype); // The blueprint for all Teacher instances
console.log(mrSmith.__proto__); // Points to Teacher.prototype
console.log(Teacher.prototype === mrSmith.__proto__); // true

// 12. REAL-WORLD EXAMPLE - SOCIAL MEDIA USERS
function User(username, email) {
    this.username = username;
    this.email = email;
    this.posts = [];
    this.followers = [];
}

User.prototype.createPost = function(content) {
    const post = {
        content: content,
        timestamp: new Date(),
        likes: 0
    };
    this.posts.push(post);
    console.log(this.username + " created a new post: " + content);
};

User.prototype.follow = function(otherUser) {
    otherUser.followers.push(this);
    console.log(this.username + " is now following " + otherUser.username);
};

User.prototype.getPostCount = function() {
    return this.posts.length;
};

// Premium user inherits from regular user
function PremiumUser(username, email, subscriptionType) {
    User.call(this, username, email);
    this.subscriptionType = subscriptionType;
    this.canLiveStream = true;
}

PremiumUser.prototype = Object.create(User.prototype);
PremiumUser.prototype.constructor = PremiumUser;

PremiumUser.prototype.startLiveStream = function(title) {
    console.log(this.username + " started live stream: " + title);
};

PremiumUser.prototype.createPost = function(content) {
    // Override parent method with premium features
    const post = {
        content: content,
        timestamp: new Date(),
        likes: 0,
        isPremium: true,
        canPin: true
    };
    this.posts.push(post);
    console.log("⭐ " + this.username + " (Premium) created: " + content);
};

// Create users
const regularUser = new User("john_doe", "john@email.com");
const premiumUser = new PremiumUser("sarah_premium", "sarah@email.com", "Gold");

// Both can use basic user features
regularUser.createPost("Hello world!"); // "john_doe created a new post: Hello world!"
premiumUser.createPost("Premium content!"); // "⭐ sarah_premium (Premium) created: Premium content!"

// Only premium user can live stream
premiumUser.startLiveStream("Cooking Tutorial"); // "sarah_premium started live stream: Cooking Tutorial"

// Both inherit from User prototype
console.log(regularUser.getPostCount()); // 1
console.log(premiumUser.getPostCount()); // 1

// 13. COMMON MISTAKES AND HOW TO AVOID THEM

// Mistake 1: Modifying prototype after creating instances affects all instances
function Product(name) {
    this.name = name;
}

const laptop = new Product("Laptop");
const phone = new Product("Phone");

// Adding method after instances are created - affects all instances
Product.prototype.getInfo = function() {
    return "Product: " + this.name;
};

console.log(laptop.getInfo()); // "Product: Laptop" - works!
console.log(phone.getInfo()); // "Product: Phone" - works!

// Mistake 2: Directly assigning to prototype breaks the chain
function BadExample() {}
BadExample.prototype = { // This breaks the constructor reference
    method1: function() { console.log("method1"); }
};

// Better way:
function GoodExample() {}
GoodExample.prototype.method1 = function() { console.log("method1"); };
// Or use Object.assign
Object.assign(GoodExample.prototype, {
    method2: function() { console.log("method2"); },
    method3: function() { console.log("method3"); }
});

// 14. MODERN ALTERNATIVES - ES6 CLASSES (Still use prototypes under the hood!)
class ModernAnimal {
    constructor(name) {
        this.name = name;
    }
    
    eat() {
        console.log(this.name + " is eating");
    }
    
    sleep() {
        console.log(this.name + " is sleeping");
    }
}

class ModernDog extends ModernAnimal {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }
    
    bark() {
        console.log(this.name + " says WOOF!");
    }
}

const modernDog = new ModernDog("Rex", "German Shepherd");
modernDog.eat(); // "Rex is eating" (inherited)
modernDog.bark(); // "Rex says WOOF!" (own method)

// Classes are just syntactic sugar over prototypes!
console.log(ModernDog.prototype); // Still has prototype
console.log(modernDog.__proto__ === ModernDog.prototype); // true

// SUMMARY - KEY POINTS TO REMEMBER:
// 1. prototype = Blueprint attached to constructor functions
// 2. __proto__ = Link that objects use to access their prototype
// 3. Prototype chain = Series of __proto__ links for inheritance
// 4. JavaScript looks up the prototype chain to find properties/methods
// 5. You can create inheritance by linking prototypes
// 6. ES6 classes are just a cleaner syntax for the same prototype system
// 7. All objects ultimately inherit from Object.prototype
// 8. The chain ends at null (Object.prototype.__proto__ === null)

console.log("Prototypes are the foundation of JavaScript inheritance!");




// __PROTO__ VS PROTOTYPE AND INHERITANCE - Detailed Explanation

// UNDERSTANDING THE DIFFERENCE BETWEEN __proto__ AND prototype

// 1. WHAT IS 'prototype'?
// - 'prototype' is a PROPERTY that exists ONLY on FUNCTIONS (constructor functions)
// - It's an object that serves as a blueprint for instances created by that function
// - When you create a function, JavaScript automatically creates a 'prototype' object for it

function Vehicle(type) {
    this.type = type;
}

console.log(Vehicle.prototype); // This is an object - the blueprint
console.log(typeof Vehicle.prototype); // "object"

// You can add properties and methods to the prototype
Vehicle.prototype.wheels = 4;
Vehicle.prototype.start = function() {
    console.log(this.type + " is starting...");
};

// 2. WHAT IS '__proto__'?
// - '__proto__' is a PROPERTY that exists on ALL OBJECTS (not functions)
// - It's a reference/pointer to the prototype object that the instance inherits from
// - It's the actual link used for inheritance

const car = new Vehicle("Car");
console.log(car.__proto__); // Points to Vehicle.prototype
console.log(car.__proto__ === Vehicle.prototype); // true

// 3. VISUAL REPRESENTATION
// Constructor Function: Vehicle
//     ↓ (has property)
// Vehicle.prototype (object with methods/properties)
//     ↑ (points to via __proto__)
// Instance: car

// 4. DETAILED COMPARISON WITH EXAMPLES

// Example: Creating a Person constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding methods to Person.prototype (the blueprint)
Person.prototype.species = "Homo sapiens";
Person.prototype.greet = function() {
    return "Hi, I'm " + this.name + " and I'm " + this.age + " years old";
};

Person.prototype.walk = function() {
    return this.name + " is walking";
};

// Creating instances
const alice = new Person("Alice", 25);
const bob = new Person("Bob", 30);

// PROTOTYPE (Function Property):
console.log(Person.prototype); // The blueprint object
console.log(Person.prototype.species); // "Homo sapiens"
console.log(Person.prototype.greet); // function

// __PROTO__ (Object Property):
console.log(alice.__proto__); // Points to Person.prototype
console.log(bob.__proto__); // Points to Person.prototype
console.log(alice.__proto__ === Person.prototype); // true
console.log(bob.__proto__ === Person.prototype); // true

// Both instances share the same prototype
console.log(alice.__proto__ === bob.__proto__); // true

// 5. HOW INHERITANCE WORKS THROUGH __proto__

// When you access a property on an object, JavaScript:
// 1. Looks on the object itself
// 2. If not found, looks at object.__proto__
// 3. If not found, looks at object.__proto__.__proto__
// 4. Continues until it reaches null

console.log(alice.name); // "Alice" - found on alice object itself
console.log(alice.species); // "Homo sapiens" - found on alice.__proto__ (Person.prototype)
console.log(alice.greet()); // "Hi, I'm Alice and I'm 25 years old" - method from prototype

// 6. CREATING INHERITANCE CHAIN WITH PROTOTYPES

// Parent constructor
function Animal(name) {
    this.name = name;
    this.isAlive = true;
}

Animal.prototype.eat = function() {
    return this.name + " is eating";
};

Animal.prototype.sleep = function() {
    return this.name + " is sleeping";
};

Animal.prototype.breathe = function() {
    return this.name + " is breathing";
};

// Child constructor
function Dog(name, breed) {
    Animal.call(this, name); // Call parent constructor
    this.breed = breed;
}

// SETTING UP INHERITANCE - This is the key part!
// Make Dog.prototype inherit from Animal.prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Fix constructor reference

// Add Dog-specific methods
Dog.prototype.bark = function() {
    return this.name + " says WOOF!";
};

Dog.prototype.wagTail = function() {
    return this.name + " is wagging tail";
};

// Create a dog instance
const buddy = new Dog("Buddy", "Golden Retriever");

// 7. THE INHERITANCE CHAIN VISUALIZATION
// buddy (instance)
//   ↓ __proto__
// Dog.prototype
//   ↓ __proto__  
// Animal.prototype
//   ↓ __proto__
// Object.prototype
//   ↓ __proto__
// null

console.log(buddy.__proto__ === Dog.prototype); // true
console.log(Dog.prototype.__proto__ === Animal.prototype); // true
console.log(Animal.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null

// 8. HOW PROPERTY LOOKUP WORKS IN THE CHAIN
console.log(buddy.name); // "Buddy" - found on buddy itself
console.log(buddy.breed); // "Golden Retriever" - found on buddy itself
console.log(buddy.bark()); // "Buddy says WOOF!" - found on Dog.prototype
console.log(buddy.eat()); // "Buddy is eating" - found on Animal.prototype
console.log(buddy.toString()); // "[object Object]" - found on Object.prototype

// 9. PRACTICAL EXAMPLE - COMPLETE INHERITANCE HIERARCHY

// Base class
function Shape(color) {
    this.color = color;
}

Shape.prototype.getColor = function() {
    return "This shape is " + this.color;
};

Shape.prototype.getArea = function() {
    return "Area calculation not implemented";
};

// Rectangle inherits from Shape
function Rectangle(color, width, height) {
    Shape.call(this, color); // Call parent constructor
    this.width = width;
    this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function() {
    return this.width * this.height;
};

Rectangle.prototype.getPerimeter = function() {
    return 2 * (this.width + this.height);
};

// Square inherits from Rectangle
function Square(color, side) {
    Rectangle.call(this, color, side, side); // Call parent constructor
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.getSide = function() {
    return this.width; // width and height are the same for square
};

// Create instances
const redRectangle = new Rectangle("red", 10, 5);
const blueSquare = new Square("blue", 7);

// Test inheritance
console.log(redRectangle.getColor()); // "This shape is red" - from Shape
console.log(redRectangle.getArea()); // 50 - from Rectangle
console.log(redRectangle.getPerimeter()); // 30 - from Rectangle

console.log(blueSquare.getColor()); // "This shape is blue" - from Shape
console.log(blueSquare.getArea()); // 49 - from Rectangle
console.log(blueSquare.getSide()); // 7 - from Square

// 10. CHECKING INHERITANCE WITH instanceof
console.log(blueSquare instanceof Square); // true
console.log(blueSquare instanceof Rectangle); // true
console.log(blueSquare instanceof Shape); // true
console.log(blueSquare instanceof Object); // true

// 11. MODIFYING PROTOTYPES AFFECTS ALL INSTANCES
// Adding method to Animal prototype affects all animals
Animal.prototype.makeSound = function() {
    return this.name + " makes a sound";
};

console.log(buddy.makeSound()); // "Buddy makes a sound" - new method available!

// 12. COMMON MISTAKES AND SOLUTIONS

// MISTAKE 1: Assigning prototype directly (breaks inheritance)
function BadParent() {}
BadParent.prototype.method1 = function() { return "method1"; };

function BadChild() {}
// DON'T DO THIS - it breaks the prototype chain
// BadChild.prototype = BadParent.prototype; // Both point to same object!

// CORRECT WAY:
function GoodParent() {}
GoodParent.prototype.method1 = function() { return "method1"; };

function GoodChild() {}
GoodChild.prototype = Object.create(GoodParent.prototype); // Creates new object that inherits
GoodChild.prototype.constructor = GoodChild;

// MISTAKE 2: Forgetting to set constructor
function Parent() {}
function Child() {}
Child.prototype = Object.create(Parent.prototype);
// Child.prototype.constructor is now Parent - WRONG!

// FIX:
Child.prototype.constructor = Child; // Set it back to Child

// 13. ALTERNATIVE INHERITANCE PATTERNS

// Method 1: Object.setPrototypeOf (less performant)
function ModernParent(name) {
    this.name = name;
}
ModernParent.prototype.parentMethod = function() {
    return "Parent method called by " + this.name;
};

function ModernChild(name, age) {
    ModernParent.call(this, name);
    this.age = age;
}

Object.setPrototypeOf(ModernChild.prototype, ModernParent.prototype);

ModernChild.prototype.childMethod = function() {
    return "Child method called by " + this.name;
};

const modernInstance = new ModernChild("Alex", 20);
console.log(modernInstance.parentMethod()); // "Parent method called by Alex"
console.log(modernInstance.childMethod()); // "Child method called by Alex"

// 14. ES6 CLASSES (Still use prototypes under the hood!)
class ES6Animal {
    constructor(name) {
        this.name = name;
    }
    
    eat() {
        return this.name + " is eating";
    }
}

class ES6Dog extends ES6Animal {
    constructor(name, breed) {
        super(name); // Calls parent constructor
        this.breed = breed;
    }
    
    bark() {
        return this.name + " says WOOF!";
    }
}

const modernDog = new ES6Dog("Max", "Labrador");

// Even with classes, prototypes still exist!
console.log(ES6Dog.prototype); // Still has prototype
console.log(modernDog.__proto__ === ES6Dog.prototype); // true
console.log(ES6Dog.prototype.__proto__ === ES6Animal.prototype); // true

// 15. REAL-WORLD EXAMPLE - USER SYSTEM WITH INHERITANCE

// Base User
function User(username, email) {
    this.username = username;
    this.email = email;
    this.createdAt = new Date();
    this.isActive = true;
}

User.prototype.login = function() {
    return this.username + " logged in at " + new Date();
};

User.prototype.logout = function() {
    return this.username + " logged out";
};

User.prototype.getProfile = function() {
    return {
        username: this.username,
        email: this.email,
        createdAt: this.createdAt,
        isActive: this.isActive
    };
};

// Admin inherits from User
function Admin(username, email, permissions) {
    User.call(this, username, email); // Call parent constructor
    this.permissions = permissions || [];
    this.role = "admin";
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.deleteUser = function(targetUser) {
    return this.username + " (admin) deleted user: " + targetUser;
};

Admin.prototype.banUser = function(targetUser) {
    return this.username + " (admin) banned user: " + targetUser;
};

// Override parent method
Admin.prototype.getProfile = function() {
    const baseProfile = User.prototype.getProfile.call(this);
    return Object.assign(baseProfile, {
        role: this.role,
        permissions: this.permissions
    });
};

// Moderator inherits from User
function Moderator(username, email, section) {
    User.call(this, username, email);
    this.section = section;
    this.role = "moderator";
}

Moderator.prototype = Object.create(User.prototype);
Moderator.prototype.constructor = Moderator;

Moderator.prototype.moderatePost = function(postId) {
    return this.username + " moderated post " + postId + " in " + this.section;
};

Moderator.prototype.warnUser = function(targetUser) {
    return this.username + " warned user: " + targetUser;
};

// Create instances
const regularUser = new User("john_doe", "john@email.com");
const adminUser = new Admin("admin_sarah", "sarah@admin.com", ["delete", "ban", "edit"]);
const modUser = new Moderator("mod_mike", "mike@mod.com", "gaming");

// Test inheritance
console.log(regularUser.login()); // "john_doe logged in at [timestamp]"
console.log(adminUser.login()); // "admin_sarah logged in at [timestamp]" - inherited
console.log(modUser.login()); // "mod_mike logged in at [timestamp]" - inherited

console.log(adminUser.deleteUser("spammer")); // "admin_sarah (admin) deleted user: spammer"
console.log(modUser.moderatePost("post123")); // "mod_mike moderated post post123 in gaming"

// Check profiles
console.log(regularUser.getProfile()); // Basic user profile
console.log(adminUser.getProfile()); // Enhanced profile with role and permissions

// SUMMARY - KEY DIFFERENCES:
// 
// PROTOTYPE:
// - Property of constructor functions only
// - Defines what instances will inherit
// - The "blueprint" or "template"
// - You add methods/properties here for sharing
//
// __PROTO__:
// - Property of all objects
// - Points to the prototype the object inherits from
// - The actual "link" in the inheritance chain
// - Used by JavaScript for property lookup
//
// INHERITANCE PROCESS:
// 1. Create parent constructor and add methods to Parent.prototype
// 2. Create child constructor and call parent constructor inside it
// 3. Set Child.prototype = Object.create(Parent.prototype)
// 4. Set Child.prototype.constructor = Child
// 5. Add child-specific methods to Child.prototype
// 6. Instances use __proto__ to access the prototype chain

console.log("Understanding prototype vs __proto__ is key to mastering JavaScript inheritance!");
