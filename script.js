// EVENTS IN JAVASCRIPT - DETAILED NOTES

// What are Events?
// Events are actions or occurrences that happen in the browser that the system tells you about
// so your code can react to them. Events can be triggered by user interactions or by the browser itself.

// EVENT TYPES IN JAVASCRIPT:

// 1. MOUSE EVENTS
// - click: Fired when an element is clicked
// Example:
// document.getElementById('myButton').addEventListener('click', function() {
//   console.log('Button was clicked!');
// });

// - dblclick: Fired when an element is double-clicked
// Example:
// element.addEventListener('dblclick', function() {
//   console.log('Double clicked!');
// });

// - mousedown: Fired when mouse button is pressed down
// - mouseup: Fired when mouse button is released
// - mousemove: Fired when mouse pointer moves over an element
// - mouseenter: Fired when mouse pointer enters an element
// - mouseleave: Fired when mouse pointer leaves an element
// - mouseover: Similar to mouseenter but bubbles
// - mouseout: Similar to mouseleave but bubbles

// 2. KEYBOARD EVENTS
// - keydown: Fired when a key is pressed down
// Example:
// document.addEventListener('keydown', function(event) {
//   console.log('Key pressed:', event.key);
// });

// - keyup: Fired when a key is released
// Example:
// document.addEventListener('keyup', function(event) {
//   console.log('Key released:', event.key);
// });

// - keypress: Fired when a key is pressed (deprecated, use keydown instead)

// 3. FORM EVENTS
// - submit: Fired when a form is submitted
// Example:
// document.getElementById('myForm').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevents default form submission
//   console.log('Form submitted!');
// });

// - change: Fired when the value of an input element changes
// Example:
// document.getElementById('myInput').addEventListener('change', function(event) {
//   console.log('Input value changed to:', event.target.value);
// });

// - input: Fired when the value of an input element is being changed
// - focus: Fired when an element receives focus
// - blur: Fired when an element loses focus
// - reset: Fired when a form is reset

// 4. WINDOW EVENTS
// - load: Fired when the whole page has loaded
// Example:
// window.addEventListener('load', function() {
//   console.log('Page fully loaded!');
// });

// - resize: Fired when the browser window is resized
// Example:
// window.addEventListener('resize', function() {
//   console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
// });

// - scroll: Fired when the document is scrolled
// Example:
// window.addEventListener('scroll', function() {
//   console.log('Page scrolled to:', window.scrollY);
// });

// - unload: Fired when the page is being unloaded
// - beforeunload: Fired before the page is unloaded

// 5. CLIPBOARD EVENTS
// - copy: Fired when content is copied
// - cut: Fired when content is cut
// - paste: Fired when content is pasted
// Example:
// document.addEventListener('copy', function(event) {
//   console.log('Content copied!');
// });

// 6. DRAG EVENTS
// - drag: Fired when an element is being dragged
// - dragstart: Fired when dragging starts
// - dragend: Fired when dragging ends
// - dragenter: Fired when dragged element enters a drop target
// - dragleave: Fired when dragged element leaves a drop target
// - dragover: Fired when dragged element is over a drop target
// - drop: Fired when dragged element is dropped

// 7. TOUCH EVENTS (for mobile devices)
// - touchstart: Fired when a touch point is placed on the touch surface
// - touchmove: Fired when a touch point is moved along the touch surface
// - touchend: Fired when a touch point is removed from the touch surface
// - touchcancel: Fired when a touch point has been disrupted

// 8. ANIMATION EVENTS
// - animationstart: Fired when a CSS animation starts
// - animationend: Fired when a CSS animation ends
// - animationiteration: Fired when a CSS animation repeats

// 9. TRANSITION EVENTS
// - transitionend: Fired when a CSS transition completes

// EVENT HANDLING METHODS:

// Method 1: Inline HTML attribute (not recommended)
// <button onclick="alert('Clicked!')">Click me</button>

// Method 2: DOM property
// element.onclick = function() { console.log('Clicked!'); };

// Method 3: addEventListener (recommended - allows multiple handlers)
// element.addEventListener('click', function() { console.log('Clicked!'); });

// EVENT OBJECT PROPERTIES:
// - event.type: The type of event (e.g., 'click', 'keydown')
// - event.target: The element that triggered the event
// - event.currentTarget: The element that the event listener is attached to
// - event.preventDefault(): Prevents the default action of the event
// - event.stopPropagation(): Stops the event from bubbling up the DOM tree
// - event.timeStamp: The time when the event was created

// REMOVING EVENT LISTENERS:
// element.removeEventListener('click', handlerFunction);
// Note: You must pass the same function reference that was used in addEventListener

// CUSTOM EVENTS:
// You can create and dispatch custom events
// Example:
// const customEvent = new CustomEvent('myCustomEvent', { detail: { message: 'Hello!' } });
// element.dispatchEvent(customEvent);
// element.addEventListener('myCustomEvent', function(event) {
//   console.log(event.detail.message);
// });











// EVENT PROPAGATION (EVENT FLOW) IN JAVASCRIPT - DETAILED NOTES

// What is Event Propagation?
// Event propagation is the process of how events travel through the DOM tree when an event occurs.
// It determines the order in which event handlers are executed when multiple elements have listeners
// for the same event type. There are three phases of event propagation:

// THE THREE PHASES OF EVENT PROPAGATION:

// 1. CAPTURING PHASE (Event Capturing / Trickling Down)
//    - The event starts from the root (window/document) and travels DOWN to the target element
//    - Also called "trickling" or "capture phase"
//    - By default, event listeners do NOT execute in this phase unless explicitly specified

// 2. TARGET PHASE
//    - The event reaches the actual target element that triggered the event
//    - Event handlers on the target element are executed

// 3. BUBBLING PHASE (Event Bubbling / Bubbling Up)
//    - The event travels UP from the target element back to the root
//    - This is the DEFAULT phase where most event handlers execute
//    - The event "bubbles up" through parent elements

// DOM TREE FLOW VISUALIZATION:
// 
//          window (root)
//             ↓ ↑
//          document
//             ↓ ↑
//           <html>
//             ↓ ↑
//           <body>
//             ↓ ↑
//           <div>
//             ↓ ↑
//          <button> (TARGET)
//
// ↓ = Capturing Phase (going down)
// ↑ = Bubbling Phase (going up)

// EVENT CAPTURING (CAPTURE PHASE):
// - Events travel from the outermost element to the target element
// - To enable capturing, set the third parameter of addEventListener to true
// - Or use an options object with { capture: true }

// Example of Event Capturing:
// const grandparent = document.getElementById('grandparent');
// const parent = document.getElementById('parent');
// const child = document.getElementById('child');
//
// grandparent.addEventListener('click', function() {
//   console.log('Grandparent - Capturing');
// }, true); // Enable capturing with true
//
// parent.addEventListener('click', function() {
//   console.log('Parent - Capturing');
// }, { capture: true }); // Enable capturing with options object
//
// child.addEventListener('click', function() {
//   console.log('Child - Capturing');
// }, true);
//
// When child is clicked, output will be:
// "Grandparent - Capturing"
// "Parent - Capturing"
// "Child - Capturing"

// EVENT BUBBLING (BUBBLE PHASE):
// - Events travel from the target element up to the outermost element
// - This is the DEFAULT behavior (capture parameter is false by default)
// - Most event handlers execute during this phase

// Example of Event Bubbling:
// const grandparent = document.getElementById('grandparent');
// const parent = document.getElementById('parent');
// const child = document.getElementById('child');
//
// grandparent.addEventListener('click', function() {
//   console.log('Grandparent - Bubbling');
// }); // Default is bubbling (capture: false)
//
// parent.addEventListener('click', function() {
//   console.log('Parent - Bubbling');
// }, false); // Explicitly set to false (same as default)
//
// child.addEventListener('click', function() {
//   console.log('Child - Bubbling');
// });
//
// When child is clicked, output will be:
// "Child - Bubbling"
// "Parent - Bubbling"
// "Grandparent - Bubbling"

// COMPLETE EXAMPLE - BOTH CAPTURING AND BUBBLING:
// HTML Structure:
// <div id="grandparent">
//   <div id="parent">
//     <button id="child">Click Me</button>
//   </div>
// </div>
//
// const grandparent = document.getElementById('grandparent');
// const parent = document.getElementById('parent');
// const child = document.getElementById('child');
//
// // Capturing phase listeners
// grandparent.addEventListener('click', function() {
//   console.log('1. Grandparent - Capturing Phase');
// }, true);
//
// parent.addEventListener('click', function() {
//   console.log('2. Parent - Capturing Phase');
// }, { capture: true });
//
// child.addEventListener('click', function() {
//   console.log('3. Child - Target Phase (Capturing)');
// }, true);
//
// // Bubbling phase listeners
// child.addEventListener('click', function() {
//   console.log('4. Child - Target Phase (Bubbling)');
// });
//
// parent.addEventListener('click', function() {
//   console.log('5. Parent - Bubbling Phase');
// });
//
// grandparent.addEventListener('click', function() {
//   console.log('6. Grandparent - Bubbling Phase');
// }, false);
//
// When child button is clicked, complete output:
// "1. Grandparent - Capturing Phase"
// "2. Parent - Capturing Phase"
// "3. Child - Target Phase (Capturing)"
// "4. Child - Target Phase (Bubbling)"
// "5. Parent - Bubbling Phase"
// "6. Grandparent - Bubbling Phase"

// CONTROLLING EVENT PROPAGATION:

// 1. event.stopPropagation()
//    - Stops the event from propagating further (both capturing and bubbling)
//    - Prevents parent/child handlers from being called
// Example:
// child.addEventListener('click', function(event) {
//   console.log('Child clicked');
//   event.stopPropagation(); // Stops bubbling to parent
// });

// 2. event.stopImmediatePropagation()
//    - Stops propagation AND prevents other listeners on the same element from executing
// Example:
// child.addEventListener('click', function(event) {
//   console.log('First handler');
//   event.stopImmediatePropagation();
// });
// child.addEventListener('click', function(event) {
//   console.log('This will NOT execute');
// });

// 3. event.preventDefault()
//    - Prevents the default browser action (e.g., form submission, link navigation)
//    - Does NOT stop propagation
// Example:
// link.addEventListener('click', function(event) {
//   event.preventDefault(); // Prevents navigation
//   console.log('Link clicked but not followed');
// });

// ENABLING CAPTURING - SYNTAX OPTIONS:

// Option 1: Boolean parameter (third parameter)
// element.addEventListener('click', handler, true); // true = capturing, false = bubbling

// Option 2: Options object (recommended for clarity)
// element.addEventListener('click', handler, { capture: true });

// Option 3: Additional options with capture
// element.addEventListener('click', handler, {
//   capture: true,    // Enable capturing phase
//   once: true,       // Remove listener after first execution
//   passive: true     // Indicates handler won't call preventDefault()
// });

// PRACTICAL USE CASES:

// Use Case 1: Event Delegation (using bubbling)
// Instead of adding listeners to many child elements, add one to the parent
// document.getElementById('parent').addEventListener('click', function(event) {
//   if (event.target.matches('.child-button')) {
//     console.log('Child button clicked:', event.target.textContent);
//   }
// });

// Use Case 2: Capturing for early interception
// Useful when you need to handle events before they reach the target
// document.addEventListener('click', function(event) {
//   console.log('Intercepted before reaching target');
// }, true);

// EVENTS THAT DON'T BUBBLE:
// Some events do not bubble by default:
// - focus / blur (use focusin / focusout instead, which do bubble)
// - load / unload
// - mouseenter / mouseleave (use mouseover / mouseout instead)
// - scroll (in some cases)

// KEY POINTS TO REMEMBER:
// - Default behavior is BUBBLING (capture: false)
// - Capturing happens BEFORE bubbling
// - Use { capture: true } to enable capturing phase
// - event.stopPropagation() stops further propagation
// - event.preventDefault() prevents default action but doesn't stop propagation
// - Event delegation leverages bubbling for efficient event handling
// - Understanding propagation is crucial for complex DOM interactions 