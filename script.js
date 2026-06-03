// OOPs in JS

// OBJECT-ORIENTED PROGRAMMING (OOP) IN JAVASCRIPT
// OOP is a programming paradigm based on the concept of "objects"
// Objects contain data (properties) and code (methods)
// Main concepts: Encapsulation, Inheritance, Polymorphism, Abstraction

// CONSTRUCTOR
// A constructor is a special function used to create and initialize objects
// It acts as a blueprint for creating multiple objects with similar properties
// In JS, constructors are regular functions called with the 'new' keyword

// SIMPLE EXAMPLE OF CONSTRUCTOR
// Creating a Person constructor
function Person(name, age) {
    this.name = name;  // 'this' refers to the new object being created
    this.age = age;
    this.greet = function() {
        console.log("Hello, I'm " + this.name);
    };
}

// Creating objects using the constructor
const person1 = new Person("John", 25);
const person2 = new Person("Sarah", 30);

// Using the objects
person1.greet();  // Output: Hello, I'm John
console.log(person2.age);  // Output: 30

// SHORT NOTES:
// 1. Constructor function names start with capital letter (convention)
// 2. Use 'new' keyword to create objects from constructor
// 3. 'this' keyword refers to the object being created
// 4. Each object created is independent with its own properties
// 5. Modern JS also uses 'class' syntax (ES6) as alternative to constructor functions



// SPOTIFY-LIKE APP EXAMPLE USING CONSTRUCTORS

// Constructor for creating Song objects
// This acts as a blueprint for all songs in our app
function Song(title, artist, duration, genre) {
    this.title = title;        // Song name
    this.artist = artist;      // Artist name
    this.duration = duration;  // Duration in minutes (e.g., "3:45")
    this.genre = genre;        // Music genre (e.g., "Pop", "Rock")
    this.isPlaying = false;    // Track if song is currently playing
    
    // Method to play the song
    this.play = function() {
        this.isPlaying = true;
        console.log("🎵 Now playing: " + this.title + " by " + this.artist);
    };
    
    // Method to pause the song
    this.pause = function() {
        this.isPlaying = false;
        console.log("⏸️ Paused: " + this.title);
    };
    
    // Method to display song information
    this.getInfo = function() {
        console.log("Song: " + this.title);
        console.log("Artist: " + this.artist);
        console.log("Duration: " + this.duration);
        console.log("Genre: " + this.genre);
    };
}

// CREATING SONGS USING THE SONG CONSTRUCTOR
const song1 = new Song("Blinding Lights", "The Weeknd", "3:20", "Pop");
const song2 = new Song("Shape of You", "Ed Sheeran", "3:53", "Pop");

// USING THE SONG OBJECTS
console.log("\n=== TESTING SONGS ===");
song1.getInfo();  // Display song information
song1.play();     // Play the song
song1.pause();    // Pause the song

song2.play();     // Play another song

// EXPLANATION:
// 1. Song Constructor: Creates song objects with properties (title, artist, etc.) and methods (play, pause, getInfo)
// 2. We create song objects using 'new Song()'
// 3. Each object is independent and has its own data
// 4. This shows how constructors work as blueprints for creating multiple similar objects



// CLASSES IN JAVASCRIPT (ES6)
// A class is a modern way to create objects in JavaScript
// It's like a blueprint or template for creating objects
// Classes are easier to read and write than constructor functions
// They do the same thing as constructors but with cleaner syntax

// BASIC CLASS SYNTAX
class Animal {
    // constructor method runs when we create a new object
    constructor(name, sound) {
        this.name = name;   // property
        this.sound = sound; // property
    }
    
    // method (function inside a class)
    makeSound() {
        console.log(this.name + " says " + this.sound);
    }
}

// Creating objects from the class
const dog = new Animal("Dog", "Woof");
const cat = new Animal("Cat", "Meow");

// Using the objects
dog.makeSound();  // Output: Dog says Woof
cat.makeSound();  // Output: Cat says Meow

// KEY POINTS ABOUT CLASSES:
// 1. Use 'class' keyword to create a class
// 2. constructor() method is special - it runs automatically when creating new object
// 3. Methods are written without 'function' keyword
// 4. Use 'new' keyword to create objects from class
// 5. Classes make code cleaner and easier to understand




// SPOTIFY-LIKE APP EXAMPLE USING CLASSES

// Class for creating Song objects
// This is the same as our previous constructor example, but using class syntax
class Song {
    // constructor runs when we create a new song
    constructor(title, artist, duration, genre) {
        this.title = title;        // Song name
        this.artist = artist;      // Artist name
        this.duration = duration;  // Duration in minutes (e.g., "3:45")
        this.genre = genre;        // Music genre (e.g., "Pop", "Rock")
        this.isPlaying = false;    // Track if song is currently playing
    }
    
    // Method to play the song
    play() {
        this.isPlaying = true;
        console.log("🎵 Now playing: " + this.title + " by " + this.artist);
    }
    
    // Method to pause the song
    pause() {
        this.isPlaying = false;
        console.log("⏸️ Paused: " + this.title);
    }
    
    // Method to display song information
    getInfo() {
        console.log("Song: " + this.title);
        console.log("Artist: " + this.artist);
        console.log("Duration: " + this.duration);
        console.log("Genre: " + this.genre);
    }
}

// CREATING SONGS USING THE SONG CLASS
const song1 = new Song("Blinding Lights", "The Weeknd", "3:20", "Pop");
const song2 = new Song("Shape of You", "Ed Sheeran", "3:53", "Pop");

// USING THE SONG OBJECTS
console.log("\n=== TESTING SONGS WITH CLASS ===");
song1.getInfo();  // Display song information
song1.play();     // Play the song
song1.pause();    // Pause the song

song2.play();     // Play another song

// EXPLANATION:
// 1. Song Class: Same as constructor but cleaner syntax
// 2. constructor() method sets up properties when creating new song
// 3. Methods (play, pause, getInfo) are written without 'function' keyword
// 4. We create songs using 'new Song()' - same as before
// 5. Each song object is independent with its own data
// 6. Classes are the modern, preferred way to create objects in JavaScript

// DIFFERENCE BETWEEN CONSTRUCTOR AND CLASS:
// Constructor Function: function Song() { this.title = title; }
// Class: class Song { constructor() { this.title = title; } }
// Both do the same thing, but classes are cleaner and easier to read




// Simple Song class
class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
    }
    
// play() is a method (function) inside the Song class
// It's called when you want to play a song
// When called, it prints a message showing which song is playing
// The method uses 'this.title' to access the song's title property
// Example: song1.play() will output "🎵 Playing: Blinding Lights"
    play() {
            console.log("🎵 Playing: " + this.title);
    }
}

// External function defined OUTSIDE the class
// This function can work with any song object
function displaySongInfo(song) {
    console.log("Song: " + song.title);
    console.log("Artist: " + song.artist);
}

// Creating objects
const song1 = new Song("Blinding Lights", "The Weeknd");
const song2 = new Song("Shape of You", "Ed Sheeran");

// Using class method
song1.play();

// Using external function
displaySongInfo(song1);
displaySongInfo(song2);

// VIEWING PROTOTYPES - Understanding how JavaScript objects work internally
// Prototype is like a parent object that contains shared methods and properties
// When you create a class, JavaScript automatically creates a prototype object
// All instances (song1, song2) share the same prototype, which saves memory
console.log("\n=== PROTOTYPE INFORMATION ===");
console.log("Song.prototype:", Song.prototype);  // Shows the prototype object of Song class (contains play method)
console.log("song1.__proto__:", song1.__proto__);  // Shows the prototype that song1 inherits from (same as Song.prototype)
console.log("song1.__proto__ === Song.prototype:", song1.__proto__ === Song.prototype);  // Proves they are the same object

// NOTES ABOUT PROTOTYPES:
// 1. Every class/constructor has a 'prototype' property
// 2. Every object has a '__proto__' property that points to its constructor's prototype
// 3. Methods defined in a class are stored in the prototype, not in each object
// 4. This means all song objects share the same play() method (memory efficient)
// 5. Properties like 'title' and 'artist' are unique to each object (stored in the object itself)
// 6. When you call song1.play(), JavaScript first looks in song1, then in song1.__proto__ (Song.prototype)
// 7. This chain is called the "prototype chain" - it's how inheritance works in JavaScript








// PROTOTYPE PROPERTY EXAMPLE - Adding Common Properties to All Objects
// This example shows how to add a property that is shared by ALL student objects
// Instead of adding the same property to each student individually, we add it once to the prototype
// This saves memory and makes it easy to update the property for all students at once

// YES! This is a form of PROTOTYPAL INHERITANCE in JavaScript
// INHERITANCE means: Child objects (student1, student2, etc.) inherit properties from parent (Student.prototype)
// When you access student1.company, JavaScript looks in student1 first, then inherits from Student.prototype
// This is different from class inheritance (extends keyword) - this is PROTOTYPE-BASED INHERITANCE
// All students "inherit" company and location from their shared prototype parent

// Student class - blueprint for creating student objects
class Student {
    constructor(name, age, course) {
        this.name = name;      // Each student has their own name
        this.age = age;        // Each student has their own age
        this.course = course;  // Each student has their own course
    }
    
    // Method to display student info
    study() {
        console.log(this.name + " is studying " + this.course);
    }
}

// ADDING A COMMON PROPERTY TO PROTOTYPE
// This property will be shared by ALL student objects
// We don't need to add it to each student individually
// INHERITANCE EXPLANATION: These properties are added to the "parent" (Student.prototype)
// All student objects (children) will inherit these properties through the prototype chain
// When you access student1.company, JS checks: 1) student1 object, 2) student1.__proto__ (Student.prototype)
// This is called PROTOTYPAL INHERITANCE - objects inherit from their prototype
Student.prototype.company = "Sheryians";  // All students belong to Sheryians company
Student.prototype.location = "Bhopal";    // All students are in Bhopal location

// Creating 5 different students
// Each has different name, age, and course
const student1 = new Student("Rahul", 20, "Web Development");
const student2 = new Student("Priya", 22, "Data Science");
const student3 = new Student("Amit", 21, "UI/UX Design");
const student4 = new Student("Sneha", 23, "Digital Marketing");
const student5 = new Student("Arjun", 19, "Full Stack Development");

// TESTING - Accessing properties
// INHERITANCE IN ACTION: student1 doesn't have 'company' property directly
// But it inherits 'company' from Student.prototype through the prototype chain
// JavaScript automatically looks up the chain: student1 → student1.__proto__ (Student.prototype) → finds 'company'
console.log(student1.name + " - " + student1.company + " - " + student1.location);
console.log(student2.name + " - " + student2.company + " - " + student2.location);

// PROOF - All students share the same prototype
// This proves they all inherit from the same parent (Student.prototype)
console.log("All share same prototype:", student1.__proto__ === student2.__proto__);  // true

// WHY USE PROTOTYPE?
// 1. MEMORY EFFICIENT: Instead of storing "Sheryians" in each of 5 students (5 copies),
//    we store it once in the prototype (1 copy shared by all)
// 2. EASY TO UPDATE: If company name changes, we update it once in prototype,
//    and all students automatically get the new value
// 3. COMMON PROPERTIES: Perfect for properties that are same for all objects
// //    (like company name, location, version number, etc.)

// // EXAMPLE OF UPDATING PROTOTYPE PROPERTY
// Student.prototype.company = "Sheryians Coding School";  // Update once
// console.log("Updated company:", student1.company);  // All students see the change

// // KEY POINTS:
// // - Properties in constructor (name, age, course) = Different for each student
// // - Properties in prototype (company, location) = Same for all students
// // - Prototype properties save memory and are easy to update
// // - Use prototype for properties that should be common to all objects

// INHERITANCE SUMMARY:
// - PROTOTYPAL INHERITANCE: Objects inherit properties/methods from their prototype
// - PROTOTYPE CHAIN: student1 → student1.__proto__ (Student.prototype) → Object.prototype → null
// - When accessing a property, JS searches up the chain until it finds it or reaches null
// - This is different from CLASS INHERITANCE (using 'extends' keyword) which creates parent-child class relationships
// - Prototypal inheritance is the foundation of how JavaScript objects work
// - Think of it as: Children (student objects) inherit traits from Parent (Student.prototype)








// SIMPLE PAPA-BETA INHERITANCE EXAMPLE

// Papa object - has properties
const papa = {
    name: "Rajesh",
    money: 1000000,
    car: "BMW"
};

// Beta object - initially empty, no properties
const beta = {
    age: 25
};

// INHERITANCE: Beta inherits from Papa using __proto__
// Now beta can access papa's properties through prototype chain
beta.__proto__ = papa;

// TESTING INHERITANCE
console.log("Beta's age:", beta.age);           // Output: 25 (beta's own property)
console.log("Beta's name:", beta.name);         // Output: Rajesh (inherited from papa)
console.log("Beta's money:", beta.money);       // Output: 1000000 (inherited from papa)
console.log("Beta's car:", beta.car);           // Output: BMW (inherited from papa)

// WHAT'S HAPPENING:
// 1. Papa has properties: name, money, car
// 2. Beta only has age property
// 3. When we do beta.__proto__ = papa, beta inherits all papa's properties
// 4. When we access beta.name, JavaScript looks:
//    - First in beta object (not found)
//    - Then in beta.__proto__ (which is papa) - FOUND!
// 5. Beta can use papa's properties without having them directly
// 6. This is PROTOTYPAL INHERITANCE - beta inherits from papa through prototype chain

// PROOF
console.log("\nProof of inheritance:");
console.log("beta.__proto__ === papa:", beta.__proto__ === papa);  // true



// CLASS INHERITANCE WITH 'extends' - SHORT NOTES

// WHAT IS INHERITANCE?
// - Parent class has common features
// - Child classes inherit parent features + add their own
// - Use 'extends' keyword to inherit
// - Use 'super()' to call parent constructor

// EXAMPLE 1: ANIMAL INHERITANCE (SIMPLE)

// PARENT CLASS
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    eat() {
        console.log(this.name + " is eating");
    }
}

// CHILD CLASS - inherits from Animal
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);  // MUST call super() first - sets up parent properties
        this.breed = breed;  // Dog's own property
    }
    
    bark() {  // Dog's own method
        console.log(this.name + " says Woof!");
    }
}

// USAGE
const dog1 = new Dog("Buddy", 3, "Golden Retriever");
dog1.eat();   // Inherited from Animal
dog1.bark();  // Dog's own method

// KEY POINTS:
// 1. 'extends Animal' = Dog inherits everything from Animal
// 2. 'super(name, age)' = Calls Animal constructor, MUST be first line
// 3. Dog has: name, age (from Animal) + breed (own property)
// 4. Dog has: eat() (from Animal) + bark() (own method)




// EXAMPLE 2: SPOTIFY APP (PRACTICAL)

// PARENT CLASS - Common media features
class Media {
    constructor(title, creator, duration) {
        this.title = title;
        this.creator = creator;
        this.duration = duration;
    }
    
    play() {
        console.log("▶️ Playing: " + this.title);
    }
}

// CHILD CLASS - Song with extra features
class Song extends Media {
    constructor(title, artist, duration, genre) {
        super(title, artist, duration);  // Inherit title, creator, duration
        this.genre = genre;  // Song's own property
    }
    
    addToPlaylist(playlistName) {  // Song's own method
        console.log("✅ Added to " + playlistName);
    }
}

// CHILD CLASS - Podcast with different features
class Podcast extends Media {
    constructor(title, host, duration, episode) {
        super(title, host, duration);  // Inherit from Media
        this.episode = episode;  // Podcast's own property
    }
    
    download() {  // Podcast's own method
        console.log("⬇️ Downloading episode " + this.episode);
    }
}

// USAGE
const song1 = new Song("Blinding Lights", "The Weeknd", "3:20", "Pop");
const podcast1 = new Podcast("JS Tutorial", "John", "45:00", 5);

song1.play();  // Inherited from Media
song1.addToPlaylist("Favorites");  // Song's own method

podcast1.play();  // Inherited from Media
podcast1.download();  // Podcast's own method




// EXAMPLE 3: USER SYSTEM (REAL-WORLD)

// PARENT CLASS - Basic user
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    
    login() {
        console.log(this.username + " logged in");
    }
}

// CHILD CLASS - Premium user with extra features
class PremiumUser extends User {
    constructor(username, email, subscriptionType) {
        super(username, email);  // Inherit username, email
        this.subscriptionType = subscriptionType;  // Own property
        this.downloadLimit = 100;  // Own property
    }
    
    downloadSong(songName) {  // Own method
        this.downloadLimit--;
        console.log("⬇️ Downloaded: " + songName);
    }
}

// CHILD CLASS - Free user with limitations
class FreeUser extends User {
    constructor(username, email) {
        super(username, email);  // Inherit username, email
        this.downloadLimit = 0;  // Own property
    }
    
    showAd() {  // Own method
        console.log("📺 Showing ad...");
    }
}

// USAGE
const premium = new PremiumUser("john", "john@email.com", "Monthly");
const free = new FreeUser("sarah", "sarah@email.com");

premium.login();  // Inherited from User
premium.downloadSong("Song1");  // PremiumUser's own method

free.login();  // Inherited from User
free.showAd();  // FreeUser's own method




// IMPORTANT RULES:
// 1. 'extends' = Creates parent-child relationship
// 2. 'super()' = MUST be called first in child constructor
// 3. Child gets ALL parent properties and methods
// 4. Child can add its own properties and methods
// 5. Avoids code duplication - write common code once in parent

// WHY USE INHERITANCE?
// ✅ Code Reusability - Write once, use in multiple children
// ✅ Easy Maintenance - Update parent, all children get update
// ✅ Organized Code - Related classes grouped together
// ✅ Real-world modeling - Represents real relationships (User → PremiumUser, FreeUser)




// CLASSICAL INHERITANCE vs PROTOTYPAL INHERITANCE - EXPLANATION

// YES! The 'extends' keyword creates CLASSICAL INHERITANCE (also called Class-based Inheritance)
// This is different from the PROTOTYPAL INHERITANCE we saw earlier with __proto__

// CLASSICAL INHERITANCE (Using 'extends' keyword):
// - Uses class syntax with 'extends' keyword
// - Creates a clear parent-child class relationship
// - Child class inherits from parent class at CLASS LEVEL
// - Uses 'super()' to call parent constructor
// - More structured and organized
// - Similar to languages like Java, C++, Python
// - Example: class Dog extends Animal

// PROTOTYPAL INHERITANCE (Using __proto__):
// - Uses prototype chain directly
// - Objects inherit from other objects at OBJECT LEVEL
// - No classes involved, just objects
// - Uses __proto__ or Object.create()
// - More flexible but less structured
// - Native to JavaScript
// - Example: beta.__proto__ = papa

// KEY DIFFERENCES:
// 1. Classical = Class to Class inheritance (Dog extends Animal)
//    Prototypal = Object to Object inheritance (beta.__proto__ = papa)
// 2. Classical = Defined at creation time (when class is defined)
//    Prototypal = Can be changed at runtime (anytime)
// 3. Classical = More readable and maintainable
//    Prototypal = More flexible and dynamic
// 4. Classical = Modern JavaScript (ES6+)
//    Prototypal = Original JavaScript way

// BEHIND THE SCENES:
// Even though we use 'class' and 'extends', JavaScript still uses prototypes internally!
// 'class' is just syntactic sugar (easier syntax) over prototypal inheritance
// When you write: class Dog extends Animal
// JavaScript creates: Dog.prototype.__proto__ = Animal.prototype




// SIMPLE EXAMPLE OF CLASSICAL INHERITANCE

// PARENT CLASS - Vehicle
class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    
    move() {
        console.log(this.brand + " is moving at " + this.speed + " km/h");
    }
}

// CHILD CLASS - Car inherits from Vehicle
class Car extends Vehicle {
    constructor(brand, speed, doors) {
        super(brand, speed);  // Call parent constructor
        this.doors = doors;   // Car's own property
    }
    
    honk() {  // Car's own method
        console.log(this.brand + " says Beep Beep! 🚗");
    }
}

// CHILD CLASS - Bike inherits from Vehicle
class Bike extends Vehicle {
    constructor(brand, speed, type) {
        super(brand, speed);  // Call parent constructor
        this.type = type;     // Bike's own property
    }
    
    ringBell() {  // Bike's own method
        console.log(this.brand + " says Ring Ring! 🚲");
    }
}

// USAGE
const car1 = new Car("Toyota", 120, 4);
const bike1 = new Bike("Hero", 60, "Mountain");

car1.move();   // Inherited from Vehicle
car1.honk();   // Car's own method

bike1.move();  // Inherited from Vehicle
bike1.ringBell();  // Bike's own method

// EXPLANATION:
// - Vehicle is PARENT class with common properties (brand, speed) and method (move)
// - Car and Bike are CHILD classes that inherit from Vehicle
// - Both Car and Bike get move() method automatically
// - Each child adds its own unique properties and methods
// - This is CLASSICAL INHERITANCE - clear parent-child relationship using 'extends'



