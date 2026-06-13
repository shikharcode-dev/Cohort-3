// ATTRIBUTES vs PROPERTIES IN JAVASCRIPT
// ========================================

// CONCEPT EXPLANATION:
// Attributes are defined in HTML markup and represent the initial state of an element
// Properties are defined in the DOM (Document Object Model) and represent the current state of an element

// Example HTML: <input type="text" value="Hello" id="myInput" class="input-field" data-user="john">

// ATTRIBUTES:
// - Attributes are written in HTML and are always strings
// - They represent the initial/default values set in HTML
// - Accessed using getAttribute(), setAttribute(), hasAttribute(), removeAttribute()
// - Attributes are case-insensitive in HTML

// PROPERTIES:
// - Properties are JavaScript object properties of DOM elements
// - They represent the current/live state of the element
// - Can be any JavaScript data type (string, number, boolean, object, etc.)
// - Accessed using dot notation (element.property) or bracket notation (element['property'])
// - Properties are case-sensitive

// ==========================================
// ATTRIBUTE METHODS WITH DETAILED EXAMPLES:
// ==========================================

// 1. getAttribute(name) - Retrieves the value of an attribute
const input = document.querySelector('#myInput');
const initialValue = input.getAttribute('value'); // Returns "Hello" (initial HTML value)
const dataUser = input.getAttribute('data-user'); // Returns "john"
const classAttr = input.getAttribute('class'); // Returns "input-field"

// 2. setAttribute(name, value) - Sets or updates an attribute value
input.setAttribute('value', 'New Value'); // Changes the HTML attribute
input.setAttribute('placeholder', 'Enter text'); // Adds new attribute
input.setAttribute('data-id', '123'); // Sets custom data attribute
input.setAttribute('maxlength', '50'); // Sets maxlength attribute

// 3. hasAttribute(name) - Checks if an attribute exists (returns boolean)
const hasValue = input.hasAttribute('value'); // Returns true
const hasPlaceholder = input.hasAttribute('placeholder'); // Returns true after setAttribute above
const hasTitle = input.hasAttribute('title'); // Returns false if not set
if (input.hasAttribute('data-user')) {
    console.log('User data exists');
}

// 4. removeAttribute(name) - Removes an attribute completely
input.removeAttribute('placeholder'); // Removes the placeholder attribute
input.removeAttribute('data-user'); // Removes custom data attribute
// After removal, hasAttribute('placeholder') would return false

// ==========================================
// DATA-* ATTRIBUTES (Custom Data Attributes):
// ==========================================

// data-* attributes allow you to store custom data on HTML elements
// They are used to embed custom data that doesn't have semantic meaning
// Syntax: data-[name]="value" in HTML

// HTML Example: <div id="user" data-user-id="12345" data-role="admin" data-active="true"></div>

const userDiv = document.querySelector('#user');

// Accessing data-* attributes using getAttribute:
const userId = userDiv.getAttribute('data-user-id'); // Returns "12345" (string)
const userRole = userDiv.getAttribute('data-role'); // Returns "admin"

// Accessing data-* attributes using dataset property (modern approach):
const userIdDataset = userDiv.dataset.userId; // Returns "12345" (camelCase conversion)
const userRoleDataset = userDiv.dataset.role; // Returns "admin"
const isActive = userDiv.dataset.active; // Returns "true" (string, not boolean)

// Setting data-* attributes:
userDiv.setAttribute('data-status', 'online');
userDiv.dataset.lastLogin = '2024-01-15'; // Automatically converts to data-last-login

// Removing data-* attributes:
userDiv.removeAttribute('data-status');
delete userDiv.dataset.lastLogin; // Alternative way using dataset

// ==========================================
// MOST IMPORTANT: input.value vs input.getAttribute("value")
// ==========================================

// Consider this HTML: <input type="text" id="myInput" value="Initial">

const inputElement = document.querySelector('#myInput');

// SCENARIO 1: Initial state (no user interaction)
console.log(inputElement.value); // "Initial" (current property value)
console.log(inputElement.getAttribute('value')); // "Initial" (HTML attribute value)
// Both return the same value initially

// SCENARIO 2: User types "Hello World" in the input field
// (Simulating user input: inputElement.value = "Hello World")

console.log(inputElement.value); // "Hello World" (CURRENT value - what user sees)
console.log(inputElement.getAttribute('value')); // "Initial" (ORIGINAL HTML attribute - unchanged)

// KEY DIFFERENCES:

// input.value (PROPERTY):
// - Returns the CURRENT, LIVE value of the input field
// - Reflects what the user has typed or what JavaScript has set
// - Changes dynamically as user types
// - This is what you typically want to use to get user input
// - Type: Can be string, number, etc. depending on input type

// input.getAttribute("value") (ATTRIBUTE):
// - Returns the INITIAL value from HTML markup
// - Does NOT change when user types in the field
// - Remains the same as defined in HTML unless explicitly changed with setAttribute()
// - Always returns a string or null if attribute doesn't exist
// - Represents the default/reset value

// PRACTICAL EXAMPLE:
const emailInput = document.querySelector('#email');
// HTML: <input type="email" id="email" value="default@example.com">

// Initial state:
console.log(emailInput.value); // "default@example.com"
console.log(emailInput.getAttribute('value')); // "default@example.com"

// User changes input to "user@example.com":
emailInput.value = "user@example.com"; // Simulating user input

console.log(emailInput.value); // "user@example.com" (current value)
console.log(emailInput.getAttribute('value')); // "default@example.com" (still original)

// If you change the attribute:
emailInput.setAttribute('value', 'new@example.com');
console.log(emailInput.getAttribute('value')); // "new@example.com" (attribute updated)
console.log(emailInput.value); // "user@example.com" (property unchanged by setAttribute)

// RESET FUNCTIONALITY:
// The attribute value is useful for reset functionality
function resetInput() {
    const defaultValue = emailInput.getAttribute('value'); // Get original value
    emailInput.value = defaultValue; // Reset to original
}

// WHEN TO USE WHICH:

// Use input.value when:
// - Getting current user input
// - Setting the displayed value programmatically
// - Validating form data
// - Working with the live state of the input

// Use input.getAttribute('value') when:
// - You need the original/default value from HTML
// - Implementing reset functionality
// - Checking what was initially set in markup
// - Working with the static HTML definition

// SUMMARY TABLE:
// ┌─────────────────────┬──────────────────────┬─────────────────────────┐
// │ Aspect              │ input.value          │ getAttribute('value')   │
// ├─────────────────────┼──────────────────────┼─────────────────────────┤
// │ Type                │ Property (DOM)       │ Attribute (HTML)        │
// │ Returns             │ Current value        │ Initial/HTML value      │
// │ Updates on typing   │ Yes                  │ No                      │
// │ Data type           │ Various types        │ Always string           │
// │ Use case            │ Get user input       │ Get default value       │
// └─────────────────────┴──────────────────────┴─────────────────────────┘

// ADDITIONAL EXAMPLES WITH OTHER INPUT TYPES:

// Checkbox example:
// HTML: <input type="checkbox" id="agree" checked>
const checkbox = document.querySelector('#agree');
console.log(checkbox.checked); // true (property - current state)
console.log(checkbox.getAttribute('checked')); // "" or "checked" (attribute - initial state)
console.log(checkbox.hasAttribute('checked')); // true

// After user unchecks:
checkbox.checked = false;
console.log(checkbox.checked); // false (property updated)
console.log(checkbox.hasAttribute('checked')); // true (attribute still exists)

// Select element example:
// HTML: <select id="country"><option value="us" selected>USA</option></select>
const select = document.querySelector('#country');
console.log(select.value); // "us" (current selected value)
console.log(select.getAttribute('value')); // null (select doesn't have value attribute)

// BEST PRACTICES:
// 1. Use properties (element.property) for dynamic, current values
// 2. Use attributes (getAttribute/setAttribute) for initial values or when working with HTML
// 3. Use data-* attributes for custom data storage
// 4. Remember: properties are live, attributes are static (unless explicitly changed)
// 5. Always use .value for form inputs to get user input
// 6. Use getAttribute('value') only when you need the original HTML value 








// ==========================================
// CREATING, INSERTING, AND REMOVING DOM ELEMENTS
// ==========================================

// CONCEPT EXPLANATION:
// The DOM (Document Object Model) provides methods to dynamically create, insert, and remove HTML elements
// There are OLD (traditional) and NEW (modern) APIs for manipulating the DOM
// Modern APIs are more flexible, intuitive, and support multiple nodes and strings

// ==========================================
// PART 1: CREATING ELEMENTS
// ==========================================

// 1. createElement(tagName) - Creates a new HTML element
const newDiv = document.createElement('div');
const newParagraph = document.createElement('p');
const newButton = document.createElement('button');
const newImage = document.createElement('img');

// Setting properties and attributes on created elements:
newDiv.className = 'container';
newDiv.id = 'main-container';
newParagraph.textContent = 'This is a new paragraph';
newButton.textContent = 'Click Me';
newButton.setAttribute('type', 'button');
newImage.src = 'image.jpg';
newImage.alt = 'Description';

// 2. createTextNode(text) - Creates a text node (OLD way, rarely used now)
const textNode = document.createTextNode('Hello World');
// Modern alternative: element.textContent = 'Hello World'

// 3. cloneNode(deep) - Creates a copy of an element
const originalDiv = document.querySelector('#original');
const shallowClone = originalDiv.cloneNode(false); // Only clones the element, not children
const deepClone = originalDiv.cloneNode(true); // Clones element and all descendants

// ==========================================
// PART 2: INSERTING ELEMENTS - OLD API vs NEW API
// ==========================================

// Consider this HTML structure for examples:
// <div id="parent">
//   <div id="child1">Child 1</div>
//   <div id="child2">Child 2</div>
// </div>

const parent = document.querySelector('#parent');
const child1 = document.querySelector('#child1');
const child2 = document.querySelector('#child2');
const newElement = document.createElement('div');
newElement.textContent = 'New Element';

// ==========================================
// 1. appendChild() - OLD API
// ==========================================

// appendChild(node) - Adds a node as the LAST child of a parent element
// - Only accepts a single Node object
// - Returns the appended node
// - If the node already exists in DOM, it MOVES it (doesn't create a copy)

// Example 1: Appending a newly created element
const newChild = document.createElement('div');
newChild.textContent = 'Appended Child';
parent.appendChild(newChild);
// Result: <div id="parent">
//           <div id="child1">Child 1</div>
//           <div id="child2">Child 2</div>
//           <div>Appended Child</div>  ← Added at the end
//         </div>

// Example 2: Moving an existing element
const existingElement = document.querySelector('#child1');
parent.appendChild(existingElement); // Moves child1 to the end
// Result: <div id="parent">
//           <div id="child2">Child 2</div>
//           <div id="child1">Child 1</div>  ← Moved to the end
//         </div>

// Example 3: Appending multiple elements (requires multiple calls)
const elem1 = document.createElement('span');
const elem2 = document.createElement('span');
elem1.textContent = 'First';
elem2.textContent = 'Second';
parent.appendChild(elem1);
parent.appendChild(elem2); // Need separate calls for each element

// Limitations of appendChild:
// ❌ Cannot append multiple nodes at once
// ❌ Cannot append text strings directly (need createTextNode)
// ❌ Only adds at the end (no flexibility for position)
// ❌ Only accepts Node objects

// ==========================================
// 2. append() - NEW API (Modern Alternative)
// ==========================================

// append(...nodes) - Adds one or more nodes or strings as the LAST children
// - Accepts multiple arguments (nodes and/or strings)
// - Does not return anything (void)
// - Can append text strings directly without createTextNode
// - More flexible and convenient than appendChild

// Example 1: Appending a single element (same as appendChild)
const singleElement = document.createElement('div');
singleElement.textContent = 'Single Element';
parent.append(singleElement);

// Example 2: Appending multiple elements at once
const span1 = document.createElement('span');
const span2 = document.createElement('span');
const span3 = document.createElement('span');
span1.textContent = 'Span 1';
span2.textContent = 'Span 2';
span3.textContent = 'Span 3';
parent.append(span1, span2, span3); // All added in one call!

// Example 3: Appending text strings directly
parent.append('This is plain text'); // No need for createTextNode!
parent.append('Text 1', 'Text 2', 'Text 3'); // Multiple strings at once

// Example 4: Mixing elements and strings
const mixedElement = document.createElement('strong');
mixedElement.textContent = 'Bold Text';
parent.append('Some text, ', mixedElement, ', and more text');
// Result: Some text, <strong>Bold Text</strong>, and more text

// Example 5: Practical use case - building a list
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
li1.textContent = 'Item 1';
li2.textContent = 'Item 2';
li3.textContent = 'Item 3';
ul.append(li1, li2, li3); // Add all list items at once
document.body.append(ul);

// Advantages of append:
// ✅ Can append multiple nodes/strings in one call
// ✅ Can append text strings directly
// ✅ More concise and readable code
// ✅ Better performance (fewer DOM operations)

// ==========================================
// 3. insertBefore() - OLD API
// ==========================================

// insertBefore(newNode, referenceNode) - Inserts a node BEFORE a reference node
// - Called on the parent element
// - Requires a reference node (the node before which to insert)
// - Only accepts a single node
// - Returns the inserted node

// Example 1: Inserting before a specific child
const newItem = document.createElement('div');
newItem.textContent = 'Inserted Before';
parent.insertBefore(newItem, child2);
// Result: <div id="parent">
//           <div id="child1">Child 1</div>
//           <div>Inserted Before</div>  ← Inserted before child2
//           <div id="child2">Child 2</div>
//         </div>

// Example 2: Inserting at the beginning (before first child)
const firstItem = document.createElement('div');
firstItem.textContent = 'First Item';
parent.insertBefore(firstItem, parent.firstChild);
// Result: <div id="parent">
//           <div>First Item</div>  ← Inserted at the beginning
//           <div id="child1">Child 1</div>
//           <div id="child2">Child 2</div>
//         </div>

// Example 3: If referenceNode is null, acts like appendChild
parent.insertBefore(newItem, null); // Adds at the end (same as appendChild)

// Limitations of insertBefore:
// ❌ Awkward syntax (called on parent, not the reference element)
// ❌ Only inserts before, not after
// ❌ Cannot insert multiple nodes at once
// ❌ Requires parent element reference
// ❌ No direct way to insert after an element

// ==========================================
// 4. before() - NEW API
// ==========================================

// before(...nodes) - Inserts nodes or strings BEFORE the element
// - Called on the element itself (not parent)
// - Accepts multiple nodes and/or strings
// - More intuitive than insertBefore
// - Does not return anything

// Example 1: Inserting before an element
const beforeElement = document.createElement('div');
beforeElement.textContent = 'Before Child2';
child2.before(beforeElement);
// Result: <div id="parent">
//           <div id="child1">Child 1</div>
//           <div>Before Child2</div>  ← Inserted before child2
//           <div id="child2">Child 2</div>
//         </div>

// Example 2: Inserting multiple elements before
const elem3 = document.createElement('span');
const elem4 = document.createElement('span');
elem3.textContent = 'Element 3';
elem4.textContent = 'Element 4';
child2.before(elem3, elem4); // Both inserted before child2

// Example 3: Inserting text strings
child2.before('Text before child2');

// Example 4: Mixing elements and strings
const strongElement = document.createElement('strong');
strongElement.textContent = 'Important';
child2.before('Note: ', strongElement, ' - Read this');

// Advantages of before:
// ✅ More intuitive (called on the element itself)
// ✅ Can insert multiple nodes/strings at once
// ✅ Cleaner syntax than insertBefore
// ✅ No need to reference parent element

// ==========================================
// 5. after() - NEW API
// ==========================================

// after(...nodes) - Inserts nodes or strings AFTER the element
// - Called on the element itself
// - Accepts multiple nodes and/or strings
// - No OLD API equivalent (had to use insertBefore with nextSibling)
// - Does not return anything

// Example 1: Inserting after an element
const afterElement = document.createElement('div');
afterElement.textContent = 'After Child1';
child1.after(afterElement);
// Result: <div id="parent">
//           <div id="child1">Child 1</div>
//           <div>After Child1</div>  ← Inserted after child1
//           <div id="child2">Child 2</div>
//         </div>

// Example 2: Inserting multiple elements after
const afterElem1 = document.createElement('span');
const afterElem2 = document.createElement('span');
afterElem1.textContent = 'After 1';
afterElem2.textContent = 'After 2';
child1.after(afterElem1, afterElem2);

// Example 3: Inserting text strings
child1.after('Text after child1');

// Example 4: OLD way to insert after (using insertBefore)
// This was the only way before after() existed:
const oldWayElement = document.createElement('div');
oldWayElement.textContent = 'Old Way After';
parent.insertBefore(oldWayElement, child1.nextSibling);
// Much more complex and error-prone!

// Example 5: Practical use case - adding a separator
const separator = document.createElement('hr');
child1.after(separator); // Add horizontal rule after child1

// Advantages of after:
// ✅ Simple and intuitive
// ✅ No OLD API equivalent (fills a gap)
// ✅ Can insert multiple nodes/strings
// ✅ Much cleaner than insertBefore workaround

// ==========================================
// 6. prepend() - NEW API
// ==========================================

// prepend(...nodes) - Inserts nodes or strings as the FIRST children
// - Called on the parent element
// - Accepts multiple nodes and/or strings
// - Opposite of append (adds at beginning instead of end)
// - Does not return anything

// Example 1: Prepending a single element
const prependElement = document.createElement('div');
prependElement.textContent = 'First Child';
parent.prepend(prependElement);
// Result: <div id="parent">
//           <div>First Child</div>  ← Added at the beginning
//           <div id="child1">Child 1</div>
//           <div id="child2">Child 2</div>
//         </div>

// Example 2: Prepending multiple elements
const header = document.createElement('h2');
const subtitle = document.createElement('p');
header.textContent = 'Title';
subtitle.textContent = 'Subtitle';
parent.prepend(header, subtitle); // Both added at the beginning

// Example 3: Prepending text strings
parent.prepend('Header text: ');

// Example 4: OLD way to prepend (using insertBefore)
const oldWayPrepend = document.createElement('div');
oldWayPrepend.textContent = 'Old Way First';
parent.insertBefore(oldWayPrepend, parent.firstChild);
// More verbose than prepend()

// Example 5: Practical use case - adding a header to a container
const container = document.querySelector('.container');
const containerHeader = document.createElement('h3');
containerHeader.textContent = 'Container Title';
container.prepend(containerHeader); // Adds header at the top

// Advantages of prepend:
// ✅ Intuitive method for adding at the beginning
// ✅ Can prepend multiple nodes/strings
// ✅ Cleaner than insertBefore(element, parent.firstChild)
// ✅ Pairs nicely with append()

// ==========================================
// 7. replaceWith() - NEW API
// ==========================================

// replaceWith(...nodes) - Replaces the element with new nodes or strings
// - Called on the element to be replaced
// - Accepts multiple nodes and/or strings
// - The original element is removed from the DOM
// - Does not return anything

// Example 1: Replacing an element with another element
const replacement = document.createElement('div');
replacement.textContent = 'Replacement Element';
child1.replaceWith(replacement);
// Result: <div id="parent">
//           <div>Replacement Element</div>  ← child1 is replaced
//           <div id="child2">Child 2</div>
//         </div>

// Example 2: Replacing with multiple elements
const replace1 = document.createElement('span');
const replace2 = document.createElement('span');
replace1.textContent = 'Replace 1';
replace2.textContent = 'Replace 2';
child1.replaceWith(replace1, replace2);
// Result: <div id="parent">
//           <span>Replace 1</span>
//           <span>Replace 2</span>  ← child1 replaced with two elements
//           <div id="child2">Child 2</div>
//         </div>

// Example 3: Replacing with text string
child1.replaceWith('Plain text replacement');

// Example 4: OLD way to replace (using replaceChild)
const oldReplacement = document.createElement('div');
oldReplacement.textContent = 'Old Way Replacement';
parent.replaceChild(oldReplacement, child1);
// More verbose and requires parent reference

// Example 5: Practical use case - replacing a loading spinner
const spinner = document.querySelector('.loading-spinner');
const content = document.createElement('div');
content.className = 'content';
content.textContent = 'Content loaded!';
spinner.replaceWith(content); // Replace spinner with actual content

// Example 6: Replacing with mixed content
const icon = document.createElement('i');
icon.className = 'icon-check';
child1.replaceWith(icon, ' Task completed');

// Advantages of replaceWith:
// ✅ Intuitive (called on element to be replaced)
// ✅ Can replace with multiple nodes/strings
// ✅ Cleaner than replaceChild
// ✅ No need to reference parent element

// ==========================================
// COMPARISON TABLE: OLD API vs NEW API
// ==========================================

// ┌─────────────────────┬──────────────────────────┬─────────────────────────┐
// │ Operation           │ OLD API                  │ NEW API                 │
// ├─────────────────────┼──────────────────────────┼─────────────────────────┤
// │ Add at end          │ appendChild(node)        │ append(...nodes)        │
// │ Add at beginning    │ insertBefore(node,       │ prepend(...nodes)       │
// │                     │   parent.firstChild)     │                         │
// │ Insert before       │ parent.insertBefore(     │ element.before(         │
// │                     │   node, refNode)         │   ...nodes)             │
// │ Insert after        │ parent.insertBefore(     │ element.after(          │
// │                     │   node, ref.nextSibling) │   ...nodes)             │
// │ Replace element     │ parent.replaceChild(     │ element.replaceWith(    │
// │                     │   new, old)              │   ...nodes)             │
// │ Remove element      │ parent.removeChild(      │ element.remove()        │
// │                     │   element)               │                         │
// ├─────────────────────┼──────────────────────────┼─────────────────────────┤
// │ Multiple nodes      │ ❌ No                    │ ✅ Yes                  │
// │ Text strings        │ ❌ No (need textNode)    │ ✅ Yes                  │
// │ Return value        │ ✅ Returns node          │ ❌ void (no return)     │
// │ Needs parent ref    │ ✅ Yes (most methods)    │ ❌ No                   │
// │ Intuitive syntax    │ ❌ Less intuitive        │ ✅ More intuitive       │
// └─────────────────────┴──────────────────────────┴─────────────────────────┘

// ==========================================
// PART 3: REMOVING ELEMENTS
// ==========================================

// 1. removeChild() - OLD API
// removeChild(child) - Removes a child node from the parent
// - Called on the parent element
// - Requires reference to both parent and child
// - Returns the removed node
// - More verbose and less intuitive

// Example 1: Removing a child element
const parentElement = document.querySelector('#parent');
const childToRemove = document.querySelector('#child1');
parentElement.removeChild(childToRemove);
// Result: child1 is removed from parent

// Example 2: Removing element without parent reference (awkward)
const elementToRemove = document.querySelector('#someElement');
elementToRemove.parentNode.removeChild(elementToRemove);
// Need to access parentNode first

// Example 3: Removing all children (OLD way)
const container = document.querySelector('#container');
while (container.firstChild) {
    container.removeChild(container.firstChild);
}

// Limitations of removeChild:
// ❌ Requires parent reference
// ❌ Verbose syntax
// ❌ Less intuitive
// ❌ Need to access parentNode if parent unknown

// 2. remove() - NEW API
// remove() - Removes the element from the DOM
// - Called directly on the element to be removed
// - No need for parent reference
// - Does not return anything
// - Much simpler and more intuitive

// Example 1: Removing an element
const elementToDelete = document.querySelector('#child1');
elementToDelete.remove();
// Result: element is removed from DOM

// Example 2: Removing multiple elements
const elements = document.querySelectorAll('.remove-me');
elements.forEach(element => element.remove());

// Example 3: Conditional removal
const oldContent = document.querySelector('.old-content');
if (oldContent) {
    oldContent.remove(); // Safe removal with check
}

// Example 4: Removing all children (NEW way)
const parentContainer = document.querySelector('#parent');
parentContainer.replaceChildren(); // Removes all children at once

// Advantages of remove:
// ✅ Simple and intuitive
// ✅ No parent reference needed
// ✅ Called directly on element
// ✅ Cleaner code

// ==========================================
// PRACTICAL EXAMPLES AND USE CASES
// ==========================================

// Example 1: Building a dynamic list with NEW API
function createTodoList(items) {
    const ul = document.createElement('ul');
    ul.className = 'todo-list';
    
    const title = document.createElement('h3');
    title.textContent = 'My Todo List';
    
    const listItems = items.map(item => {
        const li = document.createElement('li');
        li.textContent = item;
        return li;
    });
    
    ul.prepend(title); // Add title at the beginning
    ul.append(...listItems); // Add all items at once
    
    return ul;
}

// Example 2: Inserting notification messages
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.onclick = () => notification.remove();
    
    notification.append(closeButton);
    document.body.prepend(notification); // Add at top of page
    
    // Auto-remove after 3 seconds
    setTimeout(() => notification.remove(), 3000);
}

// Example 3: Replacing loading state with content
function loadContent(containerId) {
    const container = document.querySelector(`#${containerId}`);
    const loader = container.querySelector('.loader');
    
    // Simulate API call
    setTimeout(() => {
        const content = document.createElement('div');
        content.className = 'content';
        content.innerHTML = '<h2>Content Loaded</h2><p>Here is your content</p>';
        
        loader.replaceWith(content); // Replace loader with content
    }, 2000);
}

// Example 4: Dynamic form builder
function buildForm(fields) {
    const form = document.createElement('form');
    
    fields.forEach(field => {
        const label = document.createElement('label');
        label.textContent = field.label;
        
        const input = document.createElement('input');
        input.type = field.type;
        input.name = field.name;
        input.required = field.required;
        
        const fieldGroup = document.createElement('div');
        fieldGroup.className = 'field-group';
        fieldGroup.append(label, input); // Add both at once
        
        form.append(fieldGroup);
    });
    
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.append(submitButton);
    
    return form;
}

// Example 5: Managing a comment section
function addComment(commentText, username) {
    const commentsSection = document.querySelector('#comments');
    
    const comment = document.createElement('div');
    comment.className = 'comment';
    
    const author = document.createElement('strong');
    author.textContent = username;
    
    const text = document.createElement('p');
    text.textContent = commentText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => comment.remove();
    
    comment.append(author, ': ', text, deleteBtn); // Mix elements and strings
    commentsSection.prepend(comment); // New comments at top
}

// ==========================================
// BEST PRACTICES AND RECOMMENDATIONS
// ==========================================

// 1. PREFER NEW API METHODS:
// ✅ Use append() instead of appendChild()
// ✅ Use prepend() instead of insertBefore(node, parent.firstChild)
// ✅ Use before() and after() for sibling insertion
// ✅ Use replaceWith() instead of replaceChild()
// ✅ Use remove() instead of removeChild()

// 2. BATCH DOM OPERATIONS:
// Good: Add multiple elements at once
parent.append(elem1, elem2, elem3);

// Bad: Multiple separate operations (causes multiple reflows)
parent.append(elem1);
parent.append(elem2);
parent.append(elem3);

// 3. USE DOCUMENT FRAGMENTS FOR LARGE INSERTIONS:
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    const div = document.createElement('div');
    div.textContent = `Item ${i}`;
    fragment.append(div);
}
parent.append(fragment); // Single DOM operation

// 4. CLONE TEMPLATES INSTEAD OF CREATING FROM SCRATCH:
const template = document.querySelector('#item-template');
const clone = template.content.cloneNode(true);
parent.append(clone);

// 5. REMOVE ELEMENTS SAFELY:
const element = document.querySelector('#maybe-exists');
element?.remove(); // Optional chaining prevents errors

// 6. CLEAR CONTAINER EFFICIENTLY:
// Good: Modern way
container.replaceChildren();

// Also good: Set innerHTML (but loses event listeners)
container.innerHTML = '';

// Bad: Loop with removeChild (slower)
while (container.firstChild) {
    container.removeChild(container.firstChild);
}

// ==========================================
// BROWSER COMPATIBILITY NOTES
// ==========================================

// NEW API methods (append, prepend, before, after, replaceWith, remove):
// - Supported in all modern browsers (Chrome 54+, Firefox 49+, Safari 10+, Edge 17+)
// - NOT supported in Internet Explorer
// - Use polyfills if IE support is needed
// - OLD API methods work in all browsers including IE

// ==========================================
// SUMMARY
// ==========================================

// Creating Elements:
// - document.createElement(tagName)
// - element.cloneNode(deep)

// Inserting Elements (NEW API - Recommended):
// - element.append(...nodes) - Add at end
// - element.prepend(...nodes) - Add at beginning
// - element.before(...nodes) - Insert before element
// - element.after(...nodes) - Insert after element
// - element.replaceWith(...nodes) - Replace element

// Inserting Elements (OLD API - Legacy):
// - parent.appendChild(node) - Add at end
// - parent.insertBefore(node, refNode) - Insert before reference
// - parent.replaceChild(newNode, oldNode) - Replace child

// Removing Elements:
// - element.remove() - NEW API (recommended)
// - parent.removeChild(child) - OLD API (legacy)
// - parent.replaceChildren() - Remove all children (NEW)

// Key Advantages of NEW API:
// ✅ More intuitive syntax
// ✅ Can handle multiple nodes at once
// ✅ Can insert text strings directly
// ✅ No need for parent references
// ✅ Cleaner and more readable code
