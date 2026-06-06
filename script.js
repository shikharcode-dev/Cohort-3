// Client-Server Architecture Definition - Simple Notes:
// 
// 1. What is it?
//    - A distributed computing model where tasks are divided between service providers (servers) and service requesters (clients)
//
// 2. Client:
//    - The device/application that requests services or resources
//    - Examples: Web browsers, mobile apps, desktop applications
//    - Initiates communication with the server
//
// 3. Server:
//    - The device/application that provides services or resources
//    - Examples: Web servers, database servers, file servers
//    - Waits for and responds to client requests
//
// 4. How it works:
//    - Client sends a request to the server
//    - Server processes the request
//    - Server sends a response back to the client
//    - Client receives and displays/uses the response
//
// 5. Key Benefits:
//    - Centralized data management
//    - Easy maintenance and updates
//    - Better security control
//    - Resource sharing among multiple clients
//
// 6. Common Examples:
//    - Email (client: email app, server: email server)
//    - Web browsing (client: browser, server: web server)
//    - Online banking (client: banking app, server: bank's server)





// JavaScript Promises - Detailed Explanation:
//
// 1. What is a Promise?
//    - A Promise is an object representing the eventual completion or failure of an asynchronous operation
//    - It's a placeholder for a value that will be available in the future
//    - Promises help avoid "callback hell" and make asynchronous code more readable
//
// 2. Promise States:
//    - Pending: Initial state, neither fulfilled nor rejected
//    - Fulfilled: Operation completed successfully
//    - Rejected: Operation failed
//    - Settled: Either fulfilled or rejected (no longer pending)
//
// 3. Creating a Promise:
//    - Syntax: new Promise((resolve, reject) => { })
//    - resolve(value): Call when operation succeeds
//    - reject(error): Call when operation fails

// This is the correct way of creating promises in JavaScript
// The Promise constructor takes an executor function with resolve and reject parameters
// resolve() is called when the operation succeeds, reject() is called when it fails
let p1 = new Promise(function(resolve, reject) {
    if (true){ // if i use false here so else work
      resolve ("Success! Everything worked!")
    } else{
      reject("Error! Something went wrong")
    }
})



// Simple example showing promise states using setTimeout
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise completed after 2 seconds");
    }, 2000);


  // Check promise state
  console.log(p2); // Pending
  p2.then(result => console.log(result)) // Fulfilled after 2 seconds
    .catch(error => console.log(error)) // Handles rejection if promise is rejected
    .finally(() => console.log("Promise settled - cleanup or final operations"));
});










// Zomato Food Order Example - Promise Implementation
// This example demonstrates how promises work with a real-world food ordering scenario

// Step 1: Create a promise for ordering food
// This simulates placing an order on Zomato
let orderFood = new Promise((resolve, reject) => {
    let orderPlaced = true; // Change to false to simulate order failure
    
    setTimeout(() => {
        if (orderPlaced) {
            resolve("Order confirmed! Your food is being prepared.");
        } else {
            reject("Order failed! Restaurant is closed or unavailable.");
        }
    }, 2000); // 2 second delay to simulate order processing
});

// Step 2: Handle the promise with .then(), .catch(), and .finally()
orderFood
    .then((message) => {
        // This runs when order is successful (resolve is called)
        console.log(message);
        console.log("Waiting for food to arrive...");
        
        // Step 3: Create another promise for payment after food arrives
        return new Promise((resolve, reject) => {
            let foodArrived = true; // Change to false to simulate food not arriving
            
            setTimeout(() => {
                if (foodArrived) {
                    resolve("Food delivered successfully!");
                } else {
                    reject("Food did not arrive!");
                }
            }, 3000); // 3 second delay to simulate delivery time
        });
    })
    .then((deliveryMessage) => {
        // This runs when food is delivered successfully
        console.log(deliveryMessage);
        
        // Step 4: Make payment after receiving food
        return new Promise((resolve, reject) => {
            let paymentSuccess = true; // Change to false to simulate payment failure
            
            setTimeout(() => {
                if (paymentSuccess) {
                    resolve("Payment successful! Thank you for ordering.");
                } else {
                    reject("Payment failed! Please try again.");
                }
            }, 1000); // 1 second delay to simulate payment processing
        });
    })
    .then((paymentMessage) => {
        // This runs when payment is successful
        console.log(paymentMessage);
        console.log("Enjoy your meal!");
    })
    .catch((error) => {
        // This runs if any promise in the chain is rejected
        console.log("Error occurred: " + error);
        console.log("Filing a complaint with Zomato customer service...");
        
        // Simulate complaint filing with timeout
        setTimeout(() => {
            console.log("Complaint registered. You will receive a refund.");
        }, 2000);
    })
    .finally(() => {
        // This always runs regardless of success or failure
        console.log("Order process completed. Thank you for using Zomato!");
    });

// Explanation:
// - The code uses promise chaining to handle sequential operations
// - Change the boolean values (orderPlaced, foodArrived, paymentSuccess) to true/false to test different scenarios
// - .then() handles successful operations
// - .catch() handles any errors in the chain
// - .finally() runs cleanup code regardless of outcome
// - setTimeout() is used to simulate real-world delays









// 4. Promise Methods:
//    - .then(onFulfilled, onRejected): Handles fulfilled or rejected promise
//    - .catch(onRejected): Handles only rejected promises
//    - .finally(onFinally): Executes regardless of promise outcome
//
// 5. Promise Static Methods:
//    - Promise.resolve(value): Returns a fulfilled promise with given value
//    - Promise.reject(reason): Returns a rejected promise with given reason
//    - Promise.all(iterable): Waits for all promises to fulfill (or any to reject)
//    - Promise.allSettled(iterable): Waits for all promises to settle
//    - Promise.race(iterable): Returns when first promise settles
//    - Promise.any(iterable): Returns when first promise fulfills
//
// 6. Promise Chaining:
//    - Multiple .then() calls can be chained together
//    - Each .then() returns a new promise
//    - Allows sequential asynchronous operations
//
// 7. Error Handling:
//    - Errors propagate down the chain until caught
//    - Use .catch() at the end of chain to handle errors
//    - Can have multiple .catch() blocks for different error handling
//
// 8. Common Use Cases:
//    - API calls and HTTP requests
//    - File operations
//    - Database queries
//    - Timer operations
//    - Any asynchronous operation
//
// 9. Example Structure:
//    fetch(url)
//      .then(response => response.json())
//      .then(data => console.log(data))
//      .catch(error => console.error(error))
//      .finally(() => console.log('Operation complete'))
//
// 10. Async/Await (Modern Alternative):
//     - Syntactic sugar over promises
//     - Makes asynchronous code look synchronous
//     - Uses 'async' keyword for functions and 'await' for promises







// JSON (JavaScript Object Notation) - Simple Explanation:
//
// 1. What is JSON?
//    - JSON stands for JavaScript Object Notation
//    - It's a lightweight data format for storing and exchanging data
//    - It's easy for humans to read and write
//    - It's easy for machines to parse and generate
//    - Commonly used for sending data between a server and web application
//
// 2. JSON Syntax Rules:
//    - Data is in name/value pairs (key: value)
//    - Data is separated by commas
//    - Curly braces {} hold objects
//    - Square brackets [] hold arrays
//    - Keys must be strings (in double quotes)
//    - Values can be: string, number, object, array, boolean, or null
//
// 3. JSON vs JavaScript Array of Objects - Comparison:
//
//    JavaScript Array of Objects (can use single quotes, no quotes on keys):
//    let students = [
//        {name: 'John', age: 20, city: 'New York'},
//        {name: 'Sarah', age: 22, city: 'London'}
//    ];
//
//    JSON Format (must use double quotes, keys must be strings):
//    [
//        {"name": "John", "age": 20, "city": "New York"},
//        {"name": "Sarah", "age": 22, "city": "London"}
//    ]
//
// 4. Key Differences:
//    - JSON keys MUST be in double quotes: "name" not name or 'name'
//    - JSON values that are strings MUST use double quotes: "John" not 'John'
//    - JSON cannot contain functions, undefined, or comments
//    - JSON is always a string when transmitted
//
// 5. Simple Examples:
//
//    Single JSON Object:
//    {
//        "name": "Pizza",
//        "price": 299,
//        "available": true
//    }
//
//    JSON Array (similar to array of objects):
//    [
//        {"id": 1, "item": "Burger"},
//        {"id": 2, "item": "Pizza"},
//        {"id": 3, "item": "Pasta"}
//    ]
//
// 6. Converting Between JSON and JavaScript:
//    - JSON.stringify(object): Converts JavaScript object to JSON string
//    - JSON.parse(jsonString): Converts JSON string to JavaScript object
//
//    Example:
//    let person = {name: "John", age: 30};
//    let jsonString = JSON.stringify(person);  // '{"name":"John","age":30}'
//    let backToObject = JSON.parse(jsonString); // {name: "John", age: 30}
//
// 7. Real-World Usage:
//    - API responses from servers
//    - Configuration files
//    - Storing data in localStorage
//    - Data exchange between different programming languages
//
// Summary: JSON is like a JavaScript array of objects, but with stricter rules
// (double quotes everywhere, no functions) and it's always stored as a string
// when transmitted between systems. 




//
// Error Handling in JavaScript - Simple Notes:
//
// 1. What is Error Handling?
//    - Error handling is the process of catching and managing errors that occur during code execution
//    - It prevents your program from crashing and allows you to handle problems gracefully
//    - Helps provide better user experience by showing meaningful error messages
//
// 2. Why Do We Need Error Handling?
//    - Prevents application crashes
//    - Provides meaningful error messages to users
//    - Helps in debugging and finding issues
//    - Makes code more robust and reliable
//
// 3. Types of Errors in JavaScript:
//
//    a) Syntax Errors:
//       - Errors in the code structure/grammar
//       - Detected before code runs
//       - Example: Missing brackets, semicolons, typos
//       // console.log("Hello"  // Missing closing bracket - Syntax Error
//
//    b) Runtime Errors:
//       - Errors that occur while code is running
//       - Example: Accessing undefined variables, dividing by zero
//       // let x = y + 5;  // y is not defined - Runtime Error
//
//    c) Logical Errors:
//       - Code runs but produces wrong results
//       - Hardest to find because no error message appears
//       // let total = price - discount;  // Should be + not - (Logical Error)
//
// 4. Error Handling Methods:
//
//    a) try...catch...finally
//    b) throw statement
//    c) Error objects
//    d) Promise error handling (.catch())
//
// 5. try...catch...finally Structure:
//    - try: Code that might cause an error
//    - catch: Code that runs if error occurs
//    - finally: Code that always runs (optional)




// Example 1: Basic try...catch
// This shows how to catch and handle errors without crashing the program
try {
    // Code that might cause an error
    let result = 10 / 0;  // This works but gives Infinity
    console.log(result);
    
    // This will cause an error
    let user = undefined;
    console.log(user.name);  // Cannot read property 'name' of undefined
    
} catch (error) {
    // This code runs when an error occurs
    console.log("An error occurred!");
    console.log("Error message: " + error.message);
    console.log("Error type: " + error.name);
}

console.log("Program continues running...");




// Example 2: try...catch...finally
// finally block always executes, whether error occurs or not
try {
    console.log("Trying to connect to database...");
    let data = JSON.parse('{"name": "John", "age": 30}');  // Valid JSON
    console.log("Data parsed successfully:", data);
    
} catch (error) {
    console.log("Error parsing data:", error.message);
    
} finally {
    // This always runs - good for cleanup operations
    console.log("Closing database connection...");
    console.log("Cleanup completed!");
}




// Example 3: Handling Different Types of Errors
// You can check error types and handle them differently
try {
    // Uncomment different lines to test different errors
    
    // ReferenceError: variable not defined
    // console.log(nonExistentVariable);
    
    // TypeError: calling method on undefined
    // let obj = undefined;
    // obj.someMethod();
    
    // SyntaxError: invalid JSON
    JSON.parse('{"name": "John", age: 30}');  // Missing quotes around age
    
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log("Syntax Error: Invalid format");
        console.log("Details: " + error.message);
    } else if (error instanceof ReferenceError) {
        console.log("Reference Error: Variable not found");
        console.log("Details: " + error.message);
    } else if (error instanceof TypeError) {
        console.log("Type Error: Invalid operation");
        console.log("Details: " + error.message);
    } else {
        console.log("Unknown error occurred");
        console.log("Details: " + error.message);
    }
}




// Example 4: Using throw to Create Custom Errors
// You can throw your own errors with custom messages
function checkAge(age) {
    try {
        if (age < 0) {
            throw new Error("Age cannot be negative!");
        }
        if (age < 18) {
            throw new Error("You must be 18 or older!");
        }
        if (age > 120) {
            throw new Error("Invalid age! Too old!");
        }
        
        console.log("Age is valid: " + age);
        return true;
        
    } catch (error) {
        console.log("Error: " + error.message);
        return false;
    }
}

// Test the function with different ages
checkAge(25);   // Valid
checkAge(15);   // Too young
checkAge(-5);   // Negative
checkAge(150);  // Too old




// Example 5: Real-World Example - ATM Withdrawal
// This shows practical error handling in a banking scenario
function withdrawMoney(balance, amount) {
    try {
        console.log("Processing withdrawal...");
        
        // Check if amount is valid
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero!");
        }
        
        // Check if amount is a number
        if (typeof amount !== 'number') {
            throw new TypeError("Amount must be a number!");
        }
        
        // Check if sufficient balance
        if (amount > balance) {
            throw new Error("Insufficient balance! Your balance is: $" + balance);
        }
        
        // If all checks pass, process withdrawal
        let newBalance = balance - amount;
        console.log("Withdrawal successful!");
        console.log("Amount withdrawn: $" + amount);
        console.log("Remaining balance: $" + newBalance);
        return newBalance;
        
    } catch (error) {
        console.log("Transaction failed!");
        console.log("Reason: " + error.message);
        return balance;  // Return original balance if error
        
    } finally {
        console.log("Thank you for using our ATM!");
        console.log("----------------------------");
    }
}

// Test different scenarios
withdrawMoney(1000, 500);    // Success
withdrawMoney(1000, 1500);   // Insufficient balance
withdrawMoney(1000, -100);   // Invalid amount
withdrawMoney(1000, "abc");  // Invalid type




// Example 6: Error Handling with Promises
// Promises have their own error handling with .catch()
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId <= 0) {
                reject(new Error("Invalid user ID!"));
            } else if (userId > 100) {
                reject(new Error("User not found!"));
            } else {
                resolve({ id: userId, name: "John Doe", email: "john@example.com" });
            }
        }, 1000);
    });
}

// Handle promise errors with .catch()
fetchUserData(50)
    .then(user => {
        console.log("User found:", user);
    })
    .catch(error => {
        console.log("Error fetching user:", error.message);
    })
    .finally(() => {
        console.log("Request completed!");
    });

// Test with invalid ID
fetchUserData(-5)
    .then(user => {
        console.log("User found:", user);
    })
    .catch(error => {
        console.log("Error:", error.message);
    });




// Example 7: Nested try...catch
// You can have try...catch blocks inside other try...catch blocks
function processOrder(orderId) {
    try {
        console.log("Processing order:", orderId);
        
        // First operation: Validate order
        try {
            if (!orderId) {
                throw new Error("Order ID is required!");
            }
            console.log("Order validated");
        } catch (validationError) {
            console.log("Validation Error:", validationError.message);
            throw validationError;  // Re-throw to outer catch
        }
        
        // Second operation: Process payment
        try {
            let paymentSuccess = true;  // Change to false to test
            if (!paymentSuccess) {
                throw new Error("Payment failed!");
            }
            console.log("Payment processed");
        } catch (paymentError) {
            console.log("Payment Error:", paymentError.message);
            throw paymentError;  // Re-throw to outer catch
        }
        
        console.log("Order completed successfully!");
        
    } catch (error) {
        console.log("Order processing failed:", error.message);
        console.log("Sending notification to customer...");
    } finally {
        console.log("Order process ended");
    }
}

processOrder("ORD123");




// 6. Best Practices for Error Handling:
//    - Always use try...catch for code that might fail
//    - Provide meaningful error messages
//    - Don't catch errors you can't handle
//    - Use finally for cleanup operations
//    - Log errors for debugging
//    - Don't expose sensitive error details to users
//
// 7. Common Error Types:
//    - Error: Generic error
//    - SyntaxError: Invalid syntax
//    - ReferenceError: Variable not found
//    - TypeError: Wrong type or invalid operation
//    - RangeError: Number out of range
//    - URIError: Invalid URI encoding
//
// 8. When to Use Error Handling:
//    - File operations
//    - Network requests (API calls)
//    - User input validation
//    - Database operations
//    - JSON parsing
//    - Mathematical operations that might fail
//
// Summary: Error handling helps your program deal with unexpected situations
// gracefully instead of crashing. Use try...catch to catch errors, throw to
// create custom errors, and finally for cleanup code that always runs.






// Simple Promise Example - Student Grade Checker (Simplified Version)
// This checks if a student passed or failed

// Function to check student's grade
function checkStudentGrade(studentName, marks) {
    // Create and return a promise
    return new Promise((resolve, reject) => {
        
        // Wait 2 seconds (simulating checking database)
        setTimeout(() => {
            
            // Check 1: Is marks less than 0 or more than 100?
            if (marks < 0 || marks > 100) {
                reject("Marks must be between 0 and 100");
            }
            // Check 2: Is marks a number?
            else if (typeof marks !== 'number') {
                reject("Please enter a number");
            }
            // Check 3: Did student pass? (40 or more = pass)
            else if (marks >= 40) {
                resolve(`${studentName} PASSED with ${marks} marks! 🎉`);
            }
            // Student failed (less than 40)
            else {
                reject(`${studentName} FAILED with ${marks} marks`);
            }
            
        }, 2000);
    });
}

// How to use the function:
console.log("Checking grade...");

// Example 1: Student passes (75 marks)
// OUTPUT: After 2 seconds:
// ✅ Rahul PASSED with 75 marks! 🎉
// Done!
checkStudentGrade("Rahul", 75)
    .then((message) => {
        console.log("✅", message);
    })
    .catch((error) => {
        console.log("❌", error);
    })
    .finally(() => {
        console.log("Done!");
    });

// Fixed: Added setTimeout to prevent all promises from running simultaneously
// This ensures each example runs after the previous one completes
setTimeout(() => {
    // Example 2: Student passes (85 marks)
    // OUTPUT: After 2.5 seconds (then 2 more seconds = 4.5 seconds total):
    // ✅ Priya PASSED with 85 marks! 🎉
    checkStudentGrade("Priya", 85)
        .then(msg => console.log("✅", msg))
        .catch(err => console.log("❌", err));
}, 2500);

setTimeout(() => {
    // Example 3: Student fails (30 marks)
    // OUTPUT: After 5 seconds (then 2 more seconds = 7 seconds total):
    // ❌ Amit FAILED with 30 marks
    checkStudentGrade("Amit", 30)
        .then(msg => console.log("✅", msg))
        .catch(err => console.log("❌", err));
}, 5000);

setTimeout(() => {
    // Example 4: Wrong marks (negative number)
    // OUTPUT: After 7.5 seconds (then 2 more seconds = 9.5 seconds total):
    // ❌ Marks must be between 0 and 100
    checkStudentGrade("Sneha", -10)
        .then(msg => console.log("✅", msg))
        .catch(err => console.log("❌", err));
}, 7500);

setTimeout(() => {
    // Example 5: Wrong marks (more than 100)
    // OUTPUT: After 10 seconds (then 2 more seconds = 12 seconds total):
    // ❌ Marks must be between 0 and 100
    checkStudentGrade("Rohan", 150)
        .then(msg => console.log("✅", msg))
        .catch(err => console.log("❌", err));
}, 10000);

setTimeout(() => {
    // Example 6: Wrong type (text instead of number)
    // OUTPUT: After 12.5 seconds (then 2 more seconds = 14.5 seconds total):
    // ❌ Please enter a number
    checkStudentGrade("Kavya", "eighty")
        .then(msg => console.log("✅", msg))
        .catch(err => console.log("❌", err));
}, 12500);

// COMPLETE OUTPUT SEQUENCE (in order of execution):
// 
// Immediately:
// Checking grade...
//
// After 2 seconds:
// ✅ Rahul PASSED with 75 marks! 🎉
// Done!
//
// After 4.5 seconds:
// ✅ Priya PASSED with 85 marks! 🎉
//
// After 7 seconds:
// ❌ Amit FAILED with 30 marks
//
// After 9.5 seconds:
// ❌ Marks must be between 0 and 100
//
// After 12 seconds:
// ❌ Marks must be between 0 and 100
//
// After 14.5 seconds:
// ❌ Please enter a number

// DIFFERENT OUTPUT SCENARIOS:
//
// Scenario 1 - PASS (marks >= 40 and <= 100):
// Input: checkStudentGrade("Name", 75)
// Output: ✅ Name PASSED with 75 marks! 🎉
//
// Scenario 2 - FAIL (marks < 40 but >= 0):
// Input: checkStudentGrade("Name", 30)
// Output: ❌ Name FAILED with 30 marks
//
// Scenario 3 - INVALID RANGE (marks < 0):
// Input: checkStudentGrade("Name", -10)
// Output: ❌ Marks must be between 0 and 100
//
// Scenario 4 - INVALID RANGE (marks > 100):
// Input: checkStudentGrade("Name", 150)
// Output: ❌ Marks must be between 0 and 100
//
// Scenario 5 - INVALID TYPE (not a number):
// Input: checkStudentGrade("Name", "eighty")
// Output: ❌ Please enter a number
//
// Scenario 6 - INVALID TYPE (null, undefined, object, array):
// Input: checkStudentGrade("Name", null)
// Output: ❌ Please enter a number
