// DOM
// The DOM (Document Object Model) is a programming interface for HTML and XML documents
// It represents the page structure as a tree of objects that can be manipulated with JavaScript
// Each HTML element becomes a node in the DOM tree that can be accessed, modified, added, or removed
// Common DOM methods include: document.getElementById(), querySelector(), createElement(), appendChild()
// The DOM allows JavaScript to dynamically change content, structure, and styling of web pages



// DOM INTERNAL WORKFLOW - SIMPLE EXPLANATION

// 1. HTML PARSING PHASE
// When browser loads HTML, it reads the code line by line
// Example: <div><p>Hello</p></div>
// Browser converts this text into tokens (tags, attributes, content)

// 2. DOM TREE CONSTRUCTION
// Browser creates a tree structure from tokens
// HTML Structure:        DOM Tree:
// <html>                 Document
//   <body>              └── html
//     <div>             └── body
//       <p>Text</p>         └── div
//     </div>                    └── p
//   </body>                         └── "Text"
// </html>

// 3. DOM ARCHITECTURE (Node Types)
// - Document Node: Root of entire tree (document object)
// - Element Nodes: HTML tags like <div>, <p>, <span>
// - Text Nodes: Actual text content inside elements
// - Attribute Nodes: Element attributes like id, class, src

// 4. HTML TO JAVASCRIPT CONVERSION
// Each HTML element becomes a JavaScript object with properties and methods
// Example:
// HTML: <div id="box" class="container">Content</div>
// Becomes JS Object: {
//   tagName: "DIV",
//   id: "box",
//   className: "container",
//   innerHTML: "Content",
//   methods: getElementById(), querySelector(), etc.
// }

// 5. JAVASCRIPT INTERACTION
// JS can now access and manipulate these objects
// document.getElementById('box') - Returns the div object
// element.innerHTML = 'New Content' - Changes content
// element.style.color = 'red' - Changes styling

// 6. RENDERING UPDATES
// When JS modifies DOM, browser re-renders affected parts
// DOM changes → CSSOM (CSS) applied → Render Tree → Paint on screen
// ============================================
// BROWSER RENDERING PIPELINE - COMPLETE DETAILED EXPLANATION
// ============================================

// CORRECT ORDER OF BROWSER RENDERING PIPELINE:
// 1. HTML Parsing → DOM Tree Construction
// 2. CSS Parsing → CSSOM Tree Construction
// 3. Render Tree Construction (DOM + CSSOM)
// 4. Layout (Reflow) - Calculate positions and sizes
// 5. Paint - Fill in pixels
// 6. Composite - Layer composition and display

// ============================================
// STEP 1: HTML PARSING → DOM TREE CONSTRUCTION
// ============================================
// What happens: Browser reads HTML file and converts it into DOM tree
// Process:
// - Browser receives HTML as raw bytes from server
// - Converts bytes to characters based on encoding (UTF-8, etc.)
// - Tokenization: Converts characters into tokens (start tags, end tags, content)
// - Tokens are converted into nodes (objects)
// - Nodes are assembled into DOM tree structure

// Example HTML:
// <html>
//   <head>
//     <title>Page</title>
//   </head>
//   <body>
//     <div class="container">
//       <h1>Hello</h1>
//       <p>World</p>
//     </div>
//   </body>
// </html>

// Becomes DOM Tree:
//          Document
//             |
//           html
//          /    \
//       head    body
//        |        |
//      title    div.container
//        |      /    \
//     "Page"  h1      p
//             |       |
//          "Hello" "World"

// ============================================
// STEP 2: CSS PARSING → CSSOM TREE CONSTRUCTION
// ============================================
// What happens: Browser reads CSS and creates CSSOM (CSS Object Model)
// Process:
// - Browser downloads CSS files (external, internal, inline)
// - Parses CSS rules and converts them into CSSOM tree
// - CSSOM contains all style information for each element
// - CSS parsing is render-blocking (page won't render until CSS is parsed)

// Example CSS:
// body { font-size: 16px; }
// .container { width: 100%; padding: 20px; }
// h1 { color: blue; font-size: 24px; }
// p { color: gray; }

// Becomes CSSOM Tree:
//          body
//      (font-size: 16px)
//            |
//       .container
//   (width: 100%, padding: 20px)
//          /    \
//        h1      p
// (color: blue) (color: gray)
// (font-size: 24px)

// ============================================
// STEP 3: RENDER TREE CONSTRUCTION
// ============================================
// What happens: Browser combines DOM and CSSOM to create Render Tree
// Process:
// - Browser walks through DOM tree starting from root
// - For each visible node, finds matching CSSOM rules
// - Combines node with its computed styles
// - Creates render tree with only VISIBLE elements
// - Elements with display: none are NOT included in render tree
// - Elements with visibility: hidden ARE included (they take space)

// DOM Tree + CSSOM Tree = Render Tree
// Render Tree only contains:
// - Visible elements (no <head>, <script>, <meta>)
// - Elements not hidden with display: none
// - Each node has computed styles attached

// Example Render Tree:
//       body (font-size: 16px)
//            |
//       div.container (width: 100%, padding: 20px)
//          /    \
//        h1      p
// (color: blue) (color: gray)
// (font-size: 24px) (font-size: 16px - inherited)

// ============================================
// STEP 4: LAYOUT (REFLOW) - CALCULATE GEOMETRY
// ============================================
// What happens: Browser calculates exact position and size of each element
// Process:
// - Browser starts from root of render tree
// - Calculates exact coordinates (x, y position)
// - Calculates dimensions (width, height)
// - Considers: viewport size, box model, positioning, floats, flexbox, grid
// - Output: Box model for each element with exact pixel values

// Example Layout Calculation:
// Viewport: 1200px wide
// body: x=0, y=0, width=1200px, height=auto
// .container: x=0, y=0, width=1200px, padding=20px (content width=1160px)
// h1: x=20, y=20, width=1160px, height=32px (calculated from font-size)
// p: x=20, y=52, width=1160px, height=24px

// Layout is triggered when:
// - Initial page load
// - Window resize
// - Content changes (adding/removing elements)
// - Style changes affecting geometry (width, height, padding, margin, position)
// - Font loading
// - Scrolling (sometimes)

// ============================================
// STEP 5: PAINT - FILL IN PIXELS
// ============================================
// What happens: Browser converts layout information into actual pixels
// Process:
// - Browser creates paint records (list of drawing operations)
// - Fills in pixels for each element based on layout
// - Paints: backgrounds, borders, text, shadows, images
// - Creates multiple layers for complex elements (z-index, transforms, opacity)
// - Order matters: background → border → content → outline

// Paint operations include:
// - Drawing backgrounds (colors, gradients, images)
// - Drawing borders and outlines
// - Rendering text with correct fonts
// - Drawing shadows (box-shadow, text-shadow)
// - Rendering images and videos

// Example Paint Order for a div:
// 1. Background color/image
// 2. Border
// 3. Child elements (recursively)
// 4. Outline (if any)

// Paint is triggered when:
// - Initial page load
// - Style changes affecting appearance (color, background, visibility)
// - Scrolling (for fixed/sticky elements)
// - Animations

// ============================================
// STEP 6: COMPOSITE - LAYER COMPOSITION
// ============================================
// What happens: Browser combines all painted layers into final image
// Process:
// - Browser has multiple layers (like Photoshop layers)
// - Each layer is painted separately
// - Compositor thread combines layers in correct order
// - Applies transforms, opacity, and other effects
// - Sends final image to GPU for display on screen

// Layers are created for:
// - Elements with CSS transforms (transform: translateX())
// - Elements with opacity less than 1
// - Elements with position: fixed or position: sticky
// - Elements with will-change property
// - Elements with 3D transforms
// - Video and canvas elements

// Compositing is FAST because:
// - Happens on GPU (graphics card)
// - Doesn't require layout or paint recalculation
// - Only layer positions/properties change

// Example Layer Structure:
// Layer 1: Main page content
// Layer 2: Fixed header (position: fixed)
// Layer 3: Modal overlay (z-index: 1000)
// Layer 4: Animated element (transform: translateX())

// ============================================
// COMPLETE PIPELINE SUMMARY
// ============================================
// HTML → DOM Tree (Structure)
//                    ↓
// CSS → CSSOM Tree (Styles)
//                    ↓
//         Render Tree (Visible elements + styles)
//                    ↓
//         Layout/Reflow (Calculate positions and sizes)
//                    ↓
//         Paint (Fill in pixels, create layers)
//                    ↓
//         Composite (Combine layers, display on screen)

// ============================================
// PERFORMANCE OPTIMIZATION TIPS
// ============================================
// 1. Minimize Layout (Reflow):
//    - Avoid reading layout properties then writing (causes forced reflow)
//    - Batch DOM changes together
//    - Use CSS classes instead of inline styles
//    - Avoid complex CSS selectors

// 2. Minimize Paint:
//    - Use CSS transforms instead of position changes
//    - Avoid painting large areas
//    - Use will-change for animated elements

// 3. Optimize Compositing:
//    - Use transform and opacity for animations (GPU accelerated)
//    - Avoid too many layers (memory intensive)
//    - Use will-change sparingly

// Example of GOOD performance (only compositing):
// element.style.transform = 'translateX(100px)'; // GPU accelerated, no layout/paint

// Example of BAD performance (triggers layout + paint + composite):
// element.style.left = '100px'; // Triggers full pipeline

// ============================================
// CRITICAL RENDERING PATH
// ============================================
// The sequence of steps browser takes to render initial view:
// 1. Download HTML
// 2. Parse HTML → Build DOM (can be incremental)
// 3. Download CSS (blocks rendering)
// 4. Parse CSS → Build CSSOM (blocks rendering)
// 5. Execute JavaScript (can block DOM construction)
// 6. Build Render Tree
// 7. Layout
// 8. Paint
// 9. Composite
// 10. Display on screen

// Render-blocking resources:
// - CSS files (must be downloaded and parsed before rendering)
// - JavaScript files (block HTML parsing unless async/defer)

// Ways to optimize Critical Rendering Path:
// - Minimize CSS file size
// - Use media queries to load CSS conditionally
// - Inline critical CSS
// - Defer non-critical JavaScript
// - Use async/defer attributes on script tags
// - Minimize DOM depth and complexity

















// DOM MANIPULATION - DETAILED EXPLANATION WITH EXAMPLES

// ============================================
// 1. SELECTING DOM ELEMENTS (Different Methods)
// ============================================

// Method 1: getElementById() - Selects element by ID attribute
// Returns: Single element or null
// Example: <div id="myDiv">Content</div>
// let element = document.getElementById('myDiv');

// Method 2: getElementsByClassName() - Selects all elements with a class
// Returns: HTMLCollection (array-like, live collection)
// Example: <p class="text">Para 1</p> <p class="text">Para 2</p>
// let elements = document.getElementsByClassName('text'); // Returns all paragraphs

// Method 3: getElementsByTagName() - Selects all elements by tag name
// Returns: HTMLCollection (live collection)
// Example: let allDivs = document.getElementsByTagName('div'); // Gets all <div> elements

// Method 4: querySelector() - Selects FIRST element matching CSS selector
// Returns: Single element or null
// Example: let firstBox = document.querySelector('.box'); // First element with class "box"
// Example: let idBox = document.querySelector('#box'); // Element with id "box"

// Method 5: querySelectorAll() - Selects ALL elements matching CSS selector
// Returns: NodeList (static, not live)
// Example: let allBoxes = document.querySelectorAll('.box'); // All elements with class "box"

// ============================================
// 2. CHANGING/MANIPULATING DOM CONTENT
// ============================================

// A) CHANGING TEXT CONTENT
// textContent - Changes only text, ignores HTML tags
// Example: element.textContent = 'New Text'; // Safe, treats HTML as plain text
// innerHTML - Changes HTML content, can include tags
// Example: element.innerHTML = '<strong>Bold Text</strong>'; // Renders HTML
// innerText - Similar to textContent but respects CSS styling (hidden elements ignored)

// B) CHANGING HTML STRUCTURE
// innerHTML - Replaces entire HTML inside element
// Example: div.innerHTML = '<p>New paragraph</p><span>New span</span>';
// outerHTML - Replaces element itself including its tags
// Example: div.outerHTML = '<section>Replaced div with section</section>';

// C) CHANGING ATTRIBUTES
// setAttribute() - Sets or updates an attribute
// Example: img.setAttribute('src', 'newimage.jpg');
// getAttribute() - Gets attribute value
// Example: let source = img.getAttribute('src');
// removeAttribute() - Removes an attribute
// Example: img.removeAttribute('alt');
// Direct property access
// Example: img.src = 'image.jpg'; img.alt = 'Description';

// D) CHANGING STYLES (CSS)
// style property - Changes inline CSS
// Example: element.style.color = 'red';
// Example: element.style.backgroundColor = 'blue'; // Note: camelCase for CSS properties
// Example: element.style.fontSize = '20px';
// classList - Manages CSS classes
// Example: element.classList.add('active'); // Adds class
// Example: element.classList.remove('hidden'); // Removes class
// Example: element.classList.toggle('show'); // Toggles class on/off
// Example: element.classList.contains('active'); // Checks if class exists

// ============================================
// 3. CREATING AND ADDING NEW ELEMENTS
// ============================================

// createElement() - Creates new element
// Example: let newDiv = document.createElement('div');
// appendChild() - Adds element as last child
// Example: parentElement.appendChild(newDiv);
// append() - Adds multiple nodes/text (modern method)
// Example: parentElement.append(newDiv, 'Some text', anotherDiv);
// prepend() - Adds element as first child
// Example: parentElement.prepend(newDiv);
// insertBefore() - Inserts before specific element
// Example: parentElement.insertBefore(newDiv, existingChild);
// insertAdjacentHTML() - Inserts HTML at specific position
// Example: element.insertAdjacentHTML('beforeend', '<p>New paragraph</p>');
// Positions: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'

// ============================================
// 4. REMOVING ELEMENTS
// ============================================

// remove() - Removes element from DOM
// Example: element.remove();
// removeChild() - Parent removes specific child
// Example: parentElement.removeChild(childElement);

// ============================================
// 5. TRAVERSING THE DOM (Navigation)
// ============================================

// Parent navigation
// parentElement - Gets parent element
// Example: let parent = element.parentElement;
// parentNode - Gets parent node (can be non-element)

// Child navigation
// children - Gets all child elements (HTMLCollection)
// Example: let kids = element.children;
// firstElementChild - Gets first child element
// lastElementChild - Gets last child element
// childNodes - Gets all child nodes including text nodes

// Sibling navigation
// nextElementSibling - Gets next sibling element
// previousElementSibling - Gets previous sibling element






// ============================================
// EXPLANATION OF YOUR SELECTED CODE EXAMPLE
// ============================================

// Line 1: Selecting the element with id "box" using querySelector
// querySelector("#box") searches the entire document for the FIRST element with id="box"
// The "#" symbol indicates we're selecting by ID (CSS selector syntax)
// The selected element is stored in variable h1 (though it might not actually be an h1 tag)
let h1 = document.querySelector("#box");

// Line 2: Changing the text content of the selected element
// textContent property replaces ALL text inside the element
// "DOM IS WORKING" becomes the new text, any previous text is removed
// textContent is safe - it treats everything as plain text, not HTML
// If the element had: <div id="box">Old <span>Text</span></div>
// After this line: <div id="box">DOM IS WORKING</div> (span is gone)
h1.textContent = "DOM IS WORKING";

// Line 3: Logging the element object to console
// This displays the entire DOM element object in browser console
// You can inspect its properties, methods, and current state
// Console will show something like: <div id="box">DOM IS WORKING</div>
console.log(h1);

// ALTERNATIVE WAYS TO ACHIEVE THE SAME RESULT:
// Using getElementById (if selecting by ID):
// let h1 = document.getElementById('box'); // No # needed with getElementById
// h1.textContent = "DOM IS WORKING";

// Using innerHTML (if you want to include HTML tags):
// let h1 = document.querySelector("#box");
// h1.innerHTML = "<strong>DOM IS WORKING</strong>"; // Makes text bold

// Using innerText (respects CSS visibility):
// let h1 = document.querySelector("#box");
// h1.innerText = "DOM IS WORKING";

// COMPLETE EXAMPLE WITH MULTIPLE MANIPULATIONS:
// let box = document.querySelector("#box");
// box.textContent = "DOM IS WORKING"; // Change text
// box.style.color = "green"; // Change text color
// box.style.fontSize = "24px"; // Change font size
// box.classList.add("highlight"); // Add CSS class
// box.setAttribute("data-status", "active"); // Add custom attribute
