//ASYNCHRONOUS Behavior of JS

// SYNCHRONOUS CODE - Executes line by line, one after another
// Each line waits for the previous one to finish
console.log("First");
console.log("Second");
console.log("Third");
// Output: First, Second, Third (in order)


// ASYNCHRONOUS CODE - Doesn't wait, continues executing next lines
// setTimeout is a common async function that delays execution
console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");
// Output: Start, End, This runs after 2 seconds
// Notice "End" prints before the setTimeout callback


// SIMPLE EXAMPLE showing the difference
console.log("1 - Sync");
console.log("2 - Sync");

setTimeout(() => {
  console.log("3 - Async (after 1 second)");
}, 1000);

console.log("4 - Sync");
// Output order: 1, 2, 4, 3
// Async code (setTimeout) doesn't block the rest of the code


// IMPORTANT NOTE
// This demonstrates JavaScript's event loop and asynchronous behavior
// Even though setTimeout has 0ms delay, it's still asynchronous
console.log("Hello"); // 1. Executes first - synchronous, prints immediately
setTimeout(() => console.log("World"), 0); // 2. Registers callback in task queue, doesn't execute yet
console.log("!"); // 3. Executes second - synchronous, prints immediately
// Output: Hello, !, World = because setTimeout callback goes to the task queue
// and only executes after all synchronous code finishes, even with 0ms delay 


// ============================================
// EVENT LOOP, CALLBACK QUEUE - EASY NOTES
// ============================================

// WHAT IS THE EVENT LOOP?
// - The Event Loop is like a traffic controller for JavaScript
// - It constantly checks: "Is the Call Stack empty? Are there tasks waiting?"
// - If Call Stack is empty, it moves tasks from the Callback Queue to the Call Stack
// - This allows JavaScript to handle async operations even though it's single-threaded

// CALL STACK
// - Where JavaScript executes code line by line
// - Works like a stack of plates: Last In, First Out (LIFO)
// - When a function is called, it's added to the stack
// - When a function finishes, it's removed from the stack

// CALLBACK QUEUE (Task Queue)
// - A waiting area for async callbacks (like setTimeout, API calls, etc.)
// - Works like a queue at a store: First In, First Out (FIFO)
// - Callbacks wait here until the Call Stack is empty
// - Event Loop moves them to Call Stack one by one

// WEB APIs
// - Browser provides these (setTimeout, fetch, DOM events, etc.)
// - They handle async operations outside the main JavaScript thread
// - When done, they send callbacks to the Callback Queue

// HOW IT ALL WORKS TOGETHER - STEP BY STEP:
// 1. Synchronous code runs first in the Call Stack
// 2. Async operations (setTimeout, fetch) are sent to Web APIs
// 3. Web APIs handle the async work in the background
// 4. When done, callbacks are placed in the Callback Queue
// 5. Event Loop checks: "Is Call Stack empty?"
// 6. If yes, Event Loop moves callback from Queue to Call Stack
// 7. Callback executes
// 8. Repeat!

// VISUAL EXAMPLE:
console.log("A"); // Goes to Call Stack → Executes → Removed

setTimeout(() => {
  console.log("B"); // Sent to Web API → After 0ms → Goes to Callback Queue → Waits
}, 0);

console.log("C"); // Goes to Call Stack → Executes → Removed
// Now Call Stack is empty, Event Loop moves "B" from Queue to Stack
// Output: A, C, B

// MICROTASK QUEUE (Advanced Note)
// - There's also a Microtask Queue (for Promises, async/await)
// - Microtasks have HIGHER PRIORITY than regular Callback Queue
// - Event Loop checks Microtask Queue first before Callback Queue
// - Order: Call Stack → Microtask Queue → Callback Queue

// EXAMPLE WITH PROMISE (Microtask):
console.log("1");

setTimeout(() => console.log("2"), 0); // Goes to Callback Queue

Promise.resolve().then(() => console.log("3")); // Goes to Microtask Queue

console.log("4");
// Output: 1, 4, 3, 2
// Why? Synchronous first (1, 4), then Microtask (3), then Callback (2)

// KEY TAKEAWAYS:
// ✓ JavaScript is single-threaded but can handle async operations
// ✓ Event Loop coordinates between Call Stack and Queues
// ✓ Async callbacks wait in queues until Call Stack is empty
// ✓ Promises (Microtasks) have priority over setTimeout (Macrotasks)
// ✓ This is why setTimeout with 0ms still runs after synchronous code




// ============================================
// CALLING APIs - ASYNC BEHAVIOR
// ============================================

// When you call an API, JavaScript doesn't wait for the response
// It continues executing the next lines of code
console.log("Before API call");

fetch("https://api.example.com/data") // API call starts (async)
  .then(response => response.json())
  .then(data => console.log("API data:", data)); // Runs when data arrives

console.log("After API call");
// Output: Before API call, After API call, API data: {...}
// The API call doesn't block the code - this is async behavior!


// ============================================
// PROMISES - BETTER WAY TO HANDLE ASYNC
// ============================================

// A Promise is like a "promise" for future data
// It has 3 states: Pending → Fulfilled (success) or Rejected (error)

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received!"); // Success
    // reject("Error occurred!"); // Failure
  }, 1000);
});

// Using a Promise
myPromise
  .then(result => console.log(result)) // Runs on success
  .catch(error => console.log(error)); // Runs on error


// ============================================
// MICROTASK QUEUE vs CALLBACK QUEUE
// ============================================

// CALLBACK QUEUE (Macrotask Queue):
// - For: setTimeout, setInterval, I/O operations
// - Lower priority
// - Executes after Microtask Queue is empty

// MICROTASK QUEUE:
// - For: Promises (.then, .catch, .finally), async/await, queueMicrotask()
// - Higher priority
// - Always executes before Callback Queue

// EXAMPLE showing the difference:
console.log("Start");

setTimeout(() => console.log("Callback Queue - setTimeout"), 0); // Macrotask

Promise.resolve().then(() => console.log("Microtask Queue - Promise")); // Microtask

console.log("End");

// Output: Start, End, Microtask Queue - Promise, Callback Queue - setTimeout
// Order: Synchronous → Microtasks → Macrotasks


// ============================================
// STARVATION - THE PROBLEM
// ============================================

// STARVATION happens when Microtasks keep adding more Microtasks
// This blocks Macrotasks (like setTimeout) from ever executing
// The Callback Queue "starves" because Microtask Queue never empties

// EXAMPLE of Starvation:
console.log("Start");

setTimeout(() => console.log("I will never run!"), 0); // Macrotask waiting

// This creates infinite Microtasks - BAD!
function addMicrotask() {
  Promise.resolve().then(() => {
    console.log("Microtask running...");
    addMicrotask(); // Adds another Microtask - infinite loop!
  });
}
// addMicrotask(); // Don't run this! It will freeze your browser

console.log("End");

// What happens:
// 1. Synchronous code runs (Start, End)
// 2. Microtask Queue keeps getting new tasks
// 3. Event Loop keeps processing Microtasks
// 4. setTimeout in Callback Queue never gets a chance to run
// 5. This is STARVATION - Callback Queue is starved of execution time


// ============================================
// SUMMARY - ASYNC BEHAVIOR OF JS
// ============================================

// 1. JavaScript is single-threaded but handles async operations
// 2. Async operations (API calls, setTimeout) don't block code execution
// 3. Promises are a modern way to handle async operations
// 4. Event Loop manages two queues:
//    - Microtask Queue (Promises) - HIGH PRIORITY
//    - Callback Queue (setTimeout) - LOW PRIORITY
// 5. Starvation = When Microtasks prevent Macrotasks from running
// 6. Execution order: Sync Code → Microtasks → Macrotasks

// REAL-WORLD EXAMPLE:
console.log("Fetching user data..."); // Sync

fetch("https://api.example.com/user") // Async - doesn't block
  .then(response => response.json()) // Microtask
  .then(user => console.log("User:", user)); // Microtask

setTimeout(() => console.log("Timeout"), 0); // Macrotask

console.log("Continuing with other tasks..."); // Sync

// Output order:
// 1. Fetching user data...
// 2. Continuing with other tasks...
// 3. User: {...}
// 4. Timeout





// ============================================
// CALLBACK HELL - EXPLANATION
// ============================================

// WHAT IS CALLBACK HELL?
// - Also called "Pyramid of Doom"
// - Happens when you nest multiple callbacks inside each other
// - Makes code hard to read, maintain, and debug
// - Creates a pyramid/arrow shape due to deep nesting

// SIMPLE EXAMPLE - Callback Hell:
// Imagine ordering food: Order → Pay → Deliver → Eat
// Each step depends on the previous one completing

console.log("Starting food order...");

// Step 1: Order food
setTimeout(() => {
  console.log("1. Food ordered");
  
  // Step 2: Make payment (nested inside step 1)
  setTimeout(() => {
    console.log("2. Payment done");
    
    // Step 3: Deliver food (nested inside step 2)
    setTimeout(() => {
      console.log("3. Food delivered");
      
      // Step 4: Eat food (nested inside step 3)
      setTimeout(() => {
        console.log("4. Enjoying meal!");
        
        // This keeps going deeper and deeper...
        // This is CALLBACK HELL! ↓↓↓
        
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

console.log("Order placed, waiting...");

// Output:
// Starting food order...
// Order placed, waiting...
// 1. Food ordered
// 2. Payment done
// 3. Food delivered
// 4. Enjoying meal!


// PROBLEMS WITH CALLBACK HELL:
// ❌ Hard to read - code goes deeper and deeper to the right
// ❌ Hard to maintain - difficult to add/remove steps
// ❌ Hard to handle errors - need try-catch at each level
// ❌ Hard to debug - difficult to trace where errors occur


// SOLUTION - Using Promises (much cleaner!):
function orderFood() {
  return new Promise(resolve => setTimeout(() => resolve("Food ordered"), 1000));
}

function makePayment() {
  return new Promise(resolve => setTimeout(() => resolve("Payment done"), 1000));
}

function deliverFood() {
  return new Promise(resolve => setTimeout(() => resolve("Food delivered"), 1000));
}

function eatFood() {
  return new Promise(resolve => setTimeout(() => resolve("Enjoying meal!"), 1000));
}

// Clean, readable chain - NO CALLBACK HELL!
orderFood()
  .then(result => {
    console.log(result);
    return makePayment();
  })
  .then(result => {
    console.log(result);
    return deliverFood();
  })
  .then(result => {
    console.log(result);
    return eatFood();
  })
  .then(result => console.log(result))
  .catch(error => console.log("Error:", error));


// EVEN BETTER - Using async/await (cleanest!):
async function orderMeal() {
  try {
    const step1 = await orderFood();
    console.log(step1);
    
    const step2 = await makePayment();
    console.log(step2);
    
    const step3 = await deliverFood();
    console.log(step3);
    
    const step4 = await eatFood();
    console.log(step4);
  } catch (error) {
    console.log("Error:", error);
  }
}

// orderMeal(); // Uncomment to run


// KEY TAKEAWAY:
// Callback Hell = Nested callbacks that make code unreadable
// Solution = Use Promises or async/await for cleaner code