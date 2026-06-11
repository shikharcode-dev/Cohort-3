// NodeList vs HTMLCollection - Short Notes with Examples

// NodeList:
// - Returned by querySelectorAll() and childNodes
// - Can contain any node type (elements, text nodes, comments)
// - Static (querySelectorAll) or Live (childNodes)
// - Has forEach() method
// Example:
// const nodeList = document.querySelectorAll('.item'); // Static NodeList
// nodeList.forEach(node => console.log(node));

// HTMLCollection:
// - Returned by getElementsByClassName(), getElementsByTagName(), children
// - Contains only element nodes
// - Always live (auto-updates when DOM changes)
// - No forEach() method (need to convert to array)
// Example:
// const htmlCollection = document.getElementsByClassName('item'); // Live HTMLCollection
// Array.from(htmlCollection).forEach(element => console.log(element));

// Key Difference:
// NodeList can be static or live, HTMLCollection is always live
// NodeList has forEach(), HTMLCollection doesn't 





// Event Listener - Short Explanation:
// - A method that waits for specific events (like clicks, key presses, mouse movements) to occur on an element
// - Syntax: element.addEventListener('event', callbackFunction)
// - Common events: 'click', 'mouseover', 'keydown', 'submit', 'load'
// - Can attach multiple listeners to the same element
// - Example:
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//   console.log('Button clicked!');
// });
// Event Listeners:- 
// - A method that waits for specific events (like clicks, key presses, mouse movements) to occur on an element
// - Syntax: element.addEventListener('event', callbackFunction)
// - Common events: 'click', 'mouseover', 'keydown', 'submit', 'load'
// - Can attach multiple listeners to the same element

// Example 1: Click Event - Triggers when an element is clicked
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//   console.log('Button clicked!');
// });

// Example 2: Mouseover Event - Triggers when mouse pointer enters an element
// const box = document.querySelector('.box');
// box.addEventListener('mouseover', () => {
//   box.style.backgroundColor = 'blue';
// });

// Example 3: Keydown Event - Triggers when a key is pressed down
// document.addEventListener('keydown', (event) => {
//   console.log(`Key pressed: ${event.key}`);
// });

// Example 4: Submit Event - Triggers when a form is submitted
// const form = document.querySelector('form');
// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevents default form submission
//   console.log('Form submitted!');
// });

// Example 5: Input Event - Triggers when input value changes
// const input = document.querySelector('input');
// input.addEventListener('input', (event) => {
//   console.log(`Current value: ${event.target.value}`);
// });

// Example 6: DOMContentLoaded Event - Triggers when HTML document is fully loaded
// document.addEventListener('DOMContentLoaded', () => {
//   console.log('DOM is ready!');
// });

// Example 7: Multiple Listeners on Same Element
// const btn = document.querySelector('#myBtn');
// btn.addEventListener('click', () => console.log('First listener'));
// btn.addEventListener('click', () => console.log('Second listener'));
// Both will execute when button is clicked

// Common Events Summary:
// - Mouse Events: click, dblclick, mouseover, mouseout, mousemove, mousedown, mouseup
// - Keyboard Events: keydown, keyup, keypress
// - Form Events: submit, change, focus, blur, input
// - Window Events: load, resize, scroll, DOMContentLoaded
// - Touch Events: touchstart, touchend, touchmove (for mobile devices)





// light bulb onn off project:- method 1   // in this method bulb just onn not off
// Why the bulb doesn't turn off:
// The current code only sets the bulb to yellow and changes button text to "off"
// It doesn't check the current state or toggle between on/off states
// Once clicked, it always executes the same action (turn yellow) regardless of current state
// To fix this, you need to add conditional logic to check if bulb is already on or off
// const bulb = document.querySelector(".bulb")
// const btn = document.querySelector("button")

// btn.addEventListener('click', ()=>{
//     bulb.style.backgroundColor = "yellow"
//     btn.textContent = "off"
// })




//method- 2 for proper logic
// const bulb = document.querySelector(".bulb")
// const btn = document.querySelector("button")

// let flag = true
// btn.addEventListener('click', ()=>{

//     if(flag){
//         bulb.style.backgroundColor = "yellow"
//         btn.textContent = "off"
//         flag = false
//     }
//     else{
//         bulb.style.backgroundColor = "transparent"
//         btn.textContent = "on"
//         flag = true
//     }

// });





// add throug classlist also method- 3
// const bulb = document.querySelector(".bulb")
// const btn = document.querySelector("button")

// btn.addEventListener('click', () => {
//     bulb.classList.toggle('on')
//     btn.textContent = bulb.classList.contains('on') ? 'off' : 'on'
// })



// method- 4 through creating a extra default class in css .lightup and then classlist work
const bulb = document.querySelector(".bulb")
const btn = document.querySelector("button")

btn.addEventListener('click', () => {
    bulb.classList.toggle('lightup')
    
    if(bulb.classList.contains('lightup')){
        btn.textContent = "on"
    }else{
        btn.textContent = "off"
    }
});
