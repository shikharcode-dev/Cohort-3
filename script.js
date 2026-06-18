// 
// LOCAL STORAGE IN JAVASCRIPT - COMPLETE GUIDE

// WHAT IS LOCAL STORAGE?
// Local Storage is a web storage API that allows you to store data in the browser
// Data persists even after closing the browser (unlike Session Storage)
// Storage limit is typically 5-10MB depending on the browser
// Data is stored as key-value pairs in string format

// SETTING DATA IN LOCAL STORAGE
// Use setItem() method to store data
// Syntax: localStorage.setItem(key, value)

// Example 1: Storing a simple string
localStorage.setItem('username', 'JohnDoe');

// Example 2: Storing a number (will be converted to string)
localStorage.setItem('userAge', '25');

// Example 3: Storing an object (must convert to JSON string first)
const user = {
    name: 'John Doe',
    email: 'john@example.com',
    age: 25
};
localStorage.setItem('userObject', JSON.stringify(user));

// Example 4: Storing an array (must convert to JSON string)
const favorites = ['apple', 'banana', 'orange'];
localStorage.setItem('favoritesFruits', JSON.stringify(favorites));

// GETTING DATA FROM LOCAL STORAGE
// Use getItem() method to retrieve data
// Syntax: localStorage.getItem(key)
// Returns null if key doesn't exist

// Example 1: Getting a simple string
const username = localStorage.getItem('username');
console.log(username); // Output: 'JohnDoe'

// Example 2: Getting a number (remember to parse if needed)
const userAge = localStorage.getItem('userAge');
const ageAsNumber = parseInt(userAge);
console.log(ageAsNumber); // Output: 25

// Example 3: Getting an object (must parse JSON string back to object)
const userObjectString = localStorage.getItem('userObject');
const userObject = JSON.parse(userObjectString);
console.log(userObject.name); // Output: 'John Doe'

// Example 4: Getting an array (must parse JSON string back to array)
const favoritesString = localStorage.getItem('favoritesFruits');
const favoritesArray = JSON.parse(favoritesString);
console.log(favoritesArray[0]); // Output: 'apple'

// CHECKING IF A KEY EXISTS
// getItem() returns null if key doesn't exist
if (localStorage.getItem('username') !== null) {
    console.log('Username exists in local storage');
}

// REMOVING DATA FROM LOCAL STORAGE
// Use removeItem() method to delete a specific item
localStorage.removeItem('username');

// CLEARING ALL LOCAL STORAGE
// Use clear() method to remove all items
localStorage.clear();

// GETTING THE NUMBER OF ITEMS IN LOCAL STORAGE
const itemCount = localStorage.length;
console.log('Number of items:', itemCount);

// GETTING A KEY BY INDEX
// Use key() method to get the key name at a specific index
const firstKey = localStorage.key(0);
console.log('First key:', firstKey);

// ITERATING THROUGH ALL LOCAL STORAGE ITEMS
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
}

// SECURITY CONSIDERATIONS FOR LOCAL STORAGE
// 1. Never store sensitive data like passwords, credit cards, or tokens
// 2. Data is NOT encrypted and can be accessed via browser DevTools
// 3. Vulnerable to XSS (Cross-Site Scripting) attacks
// 4. Data is accessible to any JavaScript code on the same domain
// 5. Use HTTPS to prevent man-in-the-middle attacks

// BEST PRACTICES FOR SECURE LOCAL STORAGE
// 1. Validate and sanitize data before storing
// 2. Use encryption for sensitive data (though still not recommended)
// 3. Set appropriate Content Security Policy (CSP) headers
// 4. Implement proper input validation to prevent XSS
// 5. Use session storage for temporary data instead
// 6. Consider using secure cookies with HttpOnly flag for sensitive data

// EXAMPLE: SAFE DATA STORAGE PATTERN
function safeSetItem(key, value) {
    try {
        // Validate key and value
        if (typeof key !== 'string' || key.trim() === '') {
            throw new Error('Invalid key');
        }
        
        // Store the data
        localStorage.setItem(key, value);
        return true;
    } catch (error) {
        console.error('Error storing data:', error);
        return false;
    }
}

// EXAMPLE: SAFE DATA RETRIEVAL PATTERN
function safeGetItem(key, defaultValue = null) {
    try {
        const value = localStorage.getItem(key);
        return value !== null ? value : defaultValue;
    } catch (error) {
        console.error('Error retrieving data:', error);
        return defaultValue;
    }
}

// EXAMPLE: STORING AND RETRIEVING WITH EXPIRATION
function setItemWithExpiry(key, value, expiryInMinutes) {
    const now = new Date();
    const item = {
        value: value,
        expiry: now.getTime() + (expiryInMinutes * 60 * 1000)
    };
    localStorage.setItem(key, JSON.stringify(item));
}

function getItemWithExpiry(key) {
    const itemString = localStorage.getItem(key);
    if (!itemString) {
        return null;
    }
    
    const item = JSON.parse(itemString);
    const now = new Date();
    
    // Check if item has expired
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    
    return item.value;
}

// EXAMPLE USAGE OF EXPIRY FUNCTIONS
setItemWithExpiry('sessionToken', 'abc123', 30); // Expires in 30 minutes
const token = getItemWithExpiry('sessionToken');






// FETCH API AND AXIOS - COMPLETE GUIDE AND COMPARISON

// ============================================
// WHAT IS FETCH API?
// ============================================
// Fetch is a modern, built-in browser API for making HTTP requests
// It's promise-based and provides a cleaner alternative to XMLHttpRequest
// Available in all modern browsers (no installation needed)
// Returns a Response object that needs to be parsed

// BASIC FETCH SYNTAX
// fetch(url, options)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// EXAMPLE 1: Simple GET request with Fetch
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// EXAMPLE 2: POST request with Fetch
fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com'
    })
})
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));

// EXAMPLE 3: Fetch with async/await
async function fetchUsers() {
    try {
        const response = await fetch('https://api.example.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// EXAMPLE 4: Fetch with error handling (checking response status)
async function fetchWithErrorHandling() {
    try {
        const response = await fetch('https://api.example.com/users');
        
        // Fetch doesn't reject on HTTP errors (404, 500, etc.)
        // We need to check response.ok manually
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// ============================================
// WHAT IS AXIOS?
// ============================================
// Axios is a popular third-party HTTP client library
// Must be installed via npm: npm install axios
// Works in both browser and Node.js environments
// Automatically transforms JSON data
// Provides better error handling and more features out of the box

// EXAMPLE 1: Simple GET request with Axios
// Note: You need to import axios first: import axios from 'axios';
axios.get('https://api.example.com/users')
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));

// EXAMPLE 2: POST request with Axios
axios.post('https://api.example.com/users', {
    name: 'John Doe',
    email: 'john@example.com'
})
    .then(response => console.log('Success:', response.data))
    .catch(error => console.error('Error:', error));

// EXAMPLE 3: Axios with async/await
async function axiosGetUsers() {
    try {
        const response = await axios.get('https://api.example.com/users');
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// EXAMPLE 4: Axios with configuration options
axios({
    method: 'post',
    url: 'https://api.example.com/users',
    data: {
        name: 'John Doe',
        email: 'john@example.com'
    },
    headers: {
        'Authorization': 'Bearer token123'
    },
    timeout: 5000 // Request timeout in milliseconds
})
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));

// ============================================
// KEY DIFFERENCES BETWEEN FETCH AND AXIOS
// ============================================

// DIFFERENCE 1: INSTALLATION
// Fetch: Built-in browser API, no installation needed
// Axios: Requires installation via npm (npm install axios)

// DIFFERENCE 2: JSON TRANSFORMATION
// Fetch: Requires manual JSON parsing with response.json()
// Axios: Automatically transforms JSON data

// Fetch example:
fetch('https://api.example.com/users')
    .then(response => response.json()) // Manual parsing needed
    .then(data => console.log(data));

// Axios example:
axios.get('https://api.example.com/users')
    .then(response => console.log(response.data)); // Automatic parsing

// DIFFERENCE 3: ERROR HANDLING
// Fetch: Only rejects on network errors, not HTTP errors (404, 500)
// Axios: Rejects on both network errors AND HTTP errors

// Fetch - requires manual status checking:
fetch('https://api.example.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .catch(error => console.error(error));

// Axios - automatic error handling:
axios.get('https://api.example.com/users')
    .catch(error => {
        if (error.response) {
            // Server responded with error status
            console.log(error.response.status);
        }
    });

// DIFFERENCE 4: REQUEST/RESPONSE INTERCEPTORS
// Fetch: No built-in interceptor support
// Axios: Has built-in interceptors for requests and responses

// Axios interceptor example:
axios.interceptors.request.use(
    config => {
        // Add auth token to every request
        config.headers.Authorization = 'Bearer token123';
        return config;
    },
    error => Promise.reject(error)
);

// DIFFERENCE 5: TIMEOUT SUPPORT
// Fetch: No built-in timeout (requires AbortController)
// Axios: Built-in timeout configuration

// Fetch with timeout (complex):
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 5000);

fetch('https://api.example.com/users', {
    signal: controller.signal
})
    .then(response => response.json())
    .finally(() => clearTimeout(timeoutId));

// Axios with timeout (simple):
axios.get('https://api.example.com/users', {
    timeout: 5000
});

// DIFFERENCE 6: PROGRESS TRACKING
// Fetch: Limited progress tracking support
// Axios: Built-in upload/download progress tracking

// Axios progress tracking example:
axios.post('https://api.example.com/upload', formData, {
    onUploadProgress: progressEvent => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        console.log(`Upload Progress: ${percentCompleted}%`);
    }
});

// DIFFERENCE 7: BROWSER SUPPORT
// Fetch: Not supported in older browsers (IE11)
// Axios: Works in older browsers

// DIFFERENCE 8: REQUEST CANCELLATION
// Fetch: Uses AbortController (more complex)
// Axios: Uses CancelToken (simpler)

// Fetch cancellation:
const abortController = new AbortController();
fetch('https://api.example.com/users', {
    signal: abortController.signal
});
abortController.abort(); // Cancel request

// Axios cancellation:
const cancelTokenSource = axios.CancelToken.source();
axios.get('https://api.example.com/users', {
    cancelToken: cancelTokenSource.token
});
cancelTokenSource.cancel('Request cancelled'); // Cancel request

// ============================================
// WHEN TO USE FETCH VS AXIOS
// ============================================

// USE FETCH WHEN:
// - You want to avoid external dependencies
// - You're building a simple application with basic HTTP needs
// - You need a lightweight solution
// - You're working with modern browsers only

// USE AXIOS WHEN:
// - You need advanced features (interceptors, automatic retries)
// - You want better error handling out of the box
// - You need to support older browsers
// - You're building a complex application with many API calls
// - You need progress tracking for uploads/downloads
// - You want automatic JSON transformation

// ============================================
// COMPARISON TABLE SUMMARY
// ============================================
// Feature              | Fetch                | Axios
// ---------------------|----------------------|----------------------
// Installation         | Built-in             | npm install required
// JSON Parsing         | Manual               | Automatic
// Error Handling       | Manual status check  | Automatic
// Interceptors         | No                   | Yes
// Timeout              | AbortController      | Built-in config
// Progress Tracking    | Limited              | Built-in
// Browser Support      | Modern only          | All browsers
// Request Cancellation | AbortController      | CancelToken
// Size                 | 0 KB (built-in)      | ~13 KB (minified)