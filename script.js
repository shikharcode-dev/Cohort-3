// H.W. = create a proper detailed documentation for JS internally work and all things that i study niche topic in JS.

// how JS work internally
// Execution Context = Global Execution Context + Function Execution Context + Eval Execution Context
// Global Execution Context = Creation Phase + Execution Phase. code is scanned for variable and function declaration. memory is allocated for variables and functions. variables are initialized with undefined and functions are stored in memory.


// call stack = Global Execution Context + Function Execution Context + Eval Execution Context
// stack = [Global Execution Context, Function Execution Context, Eval Execution Context]
// queue = [callback function, event listener, setTimeout, setInterval]

// hoisting = variable and function declaration are moved to the top of their scope before code execution. variables are initialized with undefined and functions are stored in memory. this is why we can call a function before its declaration and access a variable before its declaration without getting an error.

// example of hoisting
// console.log(a); // undefined
// var a = 10;
// console.log(a); // 10

// Q gusss the output of the following code
// console.log(x);
// console.log(y);

// var x = 5;
// let y = 10;
// console.log(x);
// console.log(y);

// output = undefined, ReferenceError: Cannot access 'y' before initialization, 5, 10


// TDZ = Temporal Dead Zone. it is the time between the start of the block and the point where the variable is declared. during this time, the variable is in a "dead zone" and cannot be accessed. if we try to access the variable before its declaration, we will get a ReferenceError.

// example of TDZ
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a = 10;
// console.log(a); // 10

// scope = Global Scope + Function Scope + Block Scope
// Global Scope = variables and functions declared outside of any function or block. they are accessible from anywhere in the code.
// Function Scope = variables and functions declared inside a function. they are only accessible within that function.
// Block Scope = variables and functions declared inside a block (e.g. if, for, while). they are only accessible within that block.

// example of block scope
// if (true) {
//     var a = 10; // function scope

//     let b = 20; // block scope
//     console.log(a); // 10
//     console.log(b); // 20
// }
// console.log(a); // 10
// console.log(b); // ReferenceError: b is not defined

// example of scope
// var a = 10; // global scope
// function foo() {
//     var b = 20; // function scope
//     console.log(a); // 10
//     console.log(b); // 20
// }
// foo();
// console.log(a); // 10
// console.log(b); // ReferenceError: b is not defined

// Lexical Scope = the scope of a variable is determined by its position in the source code. a function can access variables from its own scope and from the scopes of its parent functions. this is also known as static scope.

// example of lexical scope
// function outer() {
//     var a = 10; // outer scope
//     function inner() {
//         var b = 20; // inner scope
//         console.log(a); // 10
//         console.log(b); // 20
//     }
//     inner();
// }
// outer();

// stack overflow = when the call stack exceeds its maximum size. this can happen when a function calls itself recursively without a base case, or when there is an infinite loop in the code. when this happens, we get a RangeError: Maximum call stack size exceeded.

// example of stack overflow
// function foo() {
//     foo(); // recursive call without a base case or call itself forever, never returning, causing the call stack to grow indefinitely until it exceeds its maximum size
// }
// foo(); // RangeError: Maximum call stack size exceeded



// clouser = a function that has access to its own scope, the scope of its parent function, and the global scope. a closure is created when a function is defined inside another function and the inner function has access to the variables of the outer function. closures are often used to create private variables and functions.

// example of closure
// function outer() {
//     var a = 10;
//     function inner() {
//         console.log(a); // 10
//     }
//     return inner;
// }
// var closure = outer();
// closure(); // 10
// console.log(closure); // [Function: inner]
// console.log(outer()); // [Function: outer]

// some use cases of closure in above code is? =
// 1. Data Privacy/Encapsulation: The variable 'a' is private to the outer function and cannot be accessed directly from outside. Only the inner function has access to it, creating a private variable that is protected from external modification.
// 2. Maintaining State: The inner function 'remembers' the value of 'a' even after the outer function has finished executing. When we call closure(), it still has access to 'a = 10' from its lexical scope.
// 3. Function Factory Pattern: The outer function acts as a factory that creates and returns functions with access to specific data. Each time outer() is called, it creates a new closure with its own independent copy of the variable 'a'.
// 4. Callback Functions: The returned inner function can be passed around and executed later, while still maintaining access to the outer function's variables. This is useful for event handlers, setTimeout, and asynchronous operations.
// 5. Module Pattern: This closure pattern forms the basis of the module pattern in JavaScript, where we can create public and private methods/variables. The inner function acts as a public interface to access private data.
// 6. Memory Persistence: The closure keeps the variable 'a' in memory even after outer() completes execution. This allows data to persist between function calls without using global variables. 






// js is interpreted and jit compiled language. expalin that in detail with example.
// JS is interpreted and JIT compiled language. it means that JS code is first interpreted by the engine and then compiled to machine code. the engine first parses the code and then executes it. the engine also optimizes the code at runtime by compiling frequently executed code to machine code. this is done to improve performance.

// example of JS engine working
// 1. parsing: the engine parses the code and converts it to an Abstract Syntax Tree (AST).
// 2. compilation: the engine compiles the AST to machine code.
// 3. execution: the engine executes the machine code.

// JS engine = Parser + Compiler + Interpreter + Optimizer + Garbage Collector

// Parser = converts the source code into an Abstract Syntax Tree (AST).
// Compiler = converts the AST into machine code.
// Interpreter = executes the machine code.
// Optimizer = optimizes the machine code at runtime.
// Garbage Collector = frees up memory by removing unused objects.

// V8 engine = Parser + Compiler + Interpreter + Optimizer + Garbage Collector
// V8 engine is used by Chrome and Node.js

// example of V8 engine working
// 1. parsing: the engine parses the code and converts it to an AST.
// 2. compilation: the engine compiles the AST to machine code.
// 3. execution: the engine executes the machine code.
// 4. optimization: the engine optimizes the machine code at runtime.

// JIT = Just In Time compilation. it is a technique used by JS engines to compile code at runtime. the engine first interprets the code and then compiles frequently executed code to machine code. this is done to improve performance.

// example of JIT
// function add(a, b) {
//     return a + b;
// }
// add(1, 2); // interpreted
// add(3, 4); // interpreted
// add(5, 6); // compiled to machine code after 3rd call

// what is the difference between interpreter and compiler?
// interpreter = reads and executes code line by line. it does not generate machine code. it is slower but easier to debug.
// compiler = reads the entire code and converts it to machine code. it generates machine code. it is faster but harder to debug.

// what is the difference between JIT and interpreter?
// JIT = compiles code at runtime. it is faster than interpreter but requires more memory.
// interpreter = reads and executes code line by line. it is slower than JIT but requires less memory.






// common myth about JS = JS is single-threaded, JS is synchronous, JS is weakly typed, JS is dynamically typed, JS is loosely typed, JS is interpreted, JS is a scripting language, JS is a client-side language, JS is a server-side language, JS is a functional programming language, JS is an object-oriented programming language, JS is a prototype-based programming language, JS is a multi-paradigm programming language.

// JS is single-threaded = JS has a single call stack and can only execute one task at a time. however, JS can handle asynchronous tasks using the event loop and callback queue. this allows JS to perform non-blocking operations and handle multiple tasks concurrently.


// JS is synchronous = JS executes code in a sequential manner. however, JS can handle asynchronous tasks using the event loop and callback queue. this allows JS to perform non-blocking operations and handle multiple tasks concurrently.

// engin used in = Chrome = V8 engine
// Firefox = SpiderMonkey engine
// Safari = JavaScriptCore engine
// Edge = Chakra engine 

// tokenization = the process of breaking down the source code into smaller units called tokens. tokens are the basic building blocks of the code and can be keywords, identifiers, literals, operators, etc. tokenization is the first step in the parsing process.
// Tokenization (also called Lexical Analysis) is performed by a lexer/tokenizer which scans the source code character by character and groups them into meaningful tokens
// Each token has a type (keyword, identifier, operator, literal, etc.) and a value
// Tokens are the smallest meaningful units of code that the parser can understand
// The tokenizer also removes whitespace, comments, and other non-essential characters during this process

// example of tokenization
// var a = 10;
// tokens = ['var', 'a', '=', '10', ';']
// Detailed tokenization breakdown:
// Token 1: {type: 'KEYWORD', value: 'var'}
// Token 2: {type: 'IDENTIFIER', value: 'a'}
// Token 3: {type: 'OPERATOR', value: '='}
// Token 4: {type: 'NUMBER_LITERAL', value: '10'}
// Token 5: {type: 'SEMICOLON', value: ';'}

// Parse Tree = A concrete syntax tree that represents the exact syntactic structure of the source code according to the grammar rules
// Parse tree includes all the details from the original source code including punctuation, keywords, and intermediate grammar rules
// It's a direct representation of how the parser applied grammar rules to derive the input string
// Parse trees are typically larger and more detailed than ASTs because they include all intermediate parsing steps

// example of Parse Tree for "var a = 10;"
// Parse Tree structure:
//                    Program
//                       |
//                VariableStatement
//                       |
//              VariableDeclarationList
//                       |
//               VariableDeclaration
//                  /    |    \
//            'var'  Identifier  Initializer
//                      |           |
//                     'a'      '=' Literal
//                                    |
//                                  '10'

// ast = Abstract Syntax Tree. it is a tree representation of the source code. it is generated by the parser after tokenization. the AST is used by the compiler to generate machine code.
// AST is a simplified version of the parse tree that removes unnecessary syntactic details and focuses on the semantic structure
// AST eliminates redundant nodes, punctuation, and intermediate grammar rules that don't affect the program's meaning
// Each node in the AST represents a construct occurring in the programming language (statements, expressions, declarations, etc.)
// ASTs are more compact and easier to work with for code analysis, optimization, and code generation
// The transformation from Parse Tree to AST involves removing syntactic sugar and keeping only semantically relevant information

// example of AST for "var a = 10;"
// AST = [VariableDeclaration, Identifier, Literal]
// Detailed AST structure:
// {
//   type: 'VariableDeclaration',
//   declarations: [{
//     type: 'VariableDeclarator',
//     id: {
//       type: 'Identifier',
//       name: 'a'
//     },
//     init: {
//       type: 'Literal',
//       value: 10,
//       raw: '10'
//     }
//   }],
//   kind: 'var'
// }

// Key differences between Parse Tree and AST:
// 1. Parse Tree contains all syntactic details, AST contains only semantic information
// 2. Parse Tree is larger and more verbose, AST is compact and optimized
// 3. Parse Tree follows grammar rules exactly, AST represents program structure logically
// 4. Parse Tree includes punctuation and keywords, AST abstracts them away
// 5. AST is what most compilers and tools work with for further processing
