// Hoisting in javascript


console.log(a);
var a = 10;

sayHello();
function sayHello() {
    console.log("Hello");
}

// O/P : 
        // undefined
        // Hello





















// what is hoisting in javascript? i am totally noob so can you explain me in very simple way by giving a simple example?
// ChatGPT said:
// ChatGPT
// Sure! Let me explain hoisting in JavaScript in the simplest way possible. Think of it as how JavaScript reads your code and handles variables and functions before actually running the code.

// Imagine This:
// When you're in school, your teacher looks at all the assignments submitted before checking the answers. Similarly, JavaScript "hoists" (lifts up) the declarations of variables and functions to the top of the code before it starts running. But it doesn't hoist the values, just the "names."

// Example 1: Variables and Hoisting
// javascript
// Copy code
// console.log(myName); // Output: undefined
// var myName = "John";
// console.log(myName); // Output: John
// What happened here?

// JavaScript moved var myName; to the top like this:
// javascript
// Copy code
// var myName; // Declaration hoisted
// console.log(myName); // undefined because no value is assigned yet
// myName = "John"; // Value assigned now
// console.log(myName); // John
// So, myName exists but is undefined until it gets its value.

// Example 2: Functions and Hoisting
// javascript
// Copy code
// sayHello(); // Output: Hello!
// function sayHello() {
//   console.log("Hello!");
// }
// What happened here?

// JavaScript moved the whole function sayHello to the top:
// javascript
// Copy code
// function sayHello() {
//   console.log("Hello!");
// }
// sayHello(); // Now it works!
// This works because functions are fully hoisted, unlike variables that are only declared, not assigned.

// Key Points to Remember:
// var is hoisted but gets undefined until assigned a value.
// Functions are fully hoisted, so you can use them before they're defined.
// Newer keywords like let and const are also hoisted, but they are not accessible until the code reaches their declaration (this is called the temporal dead zone).
// Example with let:
// javascript
// Copy code
// console.log(myAge); // Error! Cannot access 'myAge' before initialization
// let myAge = 25;
// Here, let is hoisted, but it stays in a "waiting state" until the line where you declare it.

// Think of hoisting like your mom knowing that you'll pack your bag for school in the morning (declaration), but she doesn’t know what books you’ll put in until you do it (assignment). 😊






// You said:
// i have understood the whole upper example but i dont understood the meaning of hoisting. if an interviewer asks me that what is hoisting then what should i answer to him/her in a professinal manner?
// ChatGPT said:
// ChatGPT
// Great question! Let’s frame the explanation of hoisting in a professional yet simple way. Here's how you can explain it in an interview:

// Definition of Hoisting:

// "Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope (global or function scope) during the compilation phase, before the code is executed. This allows you to use variables and functions before they are declared in the code."

// Key Points to Include:
// What is Hoisted?

// Variable declarations (var, let, const).
// Function declarations (not function expressions).
// How It Works:

// Only the declarations are hoisted, not the values assigned to variables.
// For var, the value is undefined until it's assigned.
// let and const are hoisted but remain in a Temporal Dead Zone until the code execution reaches their declaration.
// Practical Example: You can mention this simple example to explain:

// javascript
// Copy code
// console.log(a); // undefined
// var a = 10;

// sayHello(); // Output: Hello!
// function sayHello() {
//     console.log("Hello!");
// }
// Explain that the variable a is hoisted as var a; but its value (10) is not hoisted. For the function, its entire definition is hoisted.

// Short Answer for Interviews:
// "Hoisting is JavaScript's default behavior of moving declarations (variables and functions) to the top of their scope during the compilation phase. This is why we can use variables declared with var as undefined and call functions before their declarations in the code."

// By sticking to this structure, you'll sound both professional and clear in your explanation!






// You said:
// what is function declaration and function expression ?
// ChatGPT said:
// ChatGPT
// Let me explain function declarations and function expressions in a super simple way, with examples.

// Function Declaration:
// A function declaration is when you define a function with a name and the function keyword, and it stands alone in the code. This type of function is hoisted, meaning you can use it before it’s defined in the code.

// Example:
// javascript
// Copy code
// // You can call it before declaring it
// greet();

// function greet() {
//   console.log("Hello from a function declaration!");
// }
// Key Features:
// Named function: It has a name (greet in this case).
// Hoisted: You can call it anywhere in its scope, even before the declaration.
// Used when the function's definition is straightforward and doesn’t need to be assigned to a variable.
// Function Expression:
// A function expression is when you create a function and assign it to a variable. This function can be anonymous (without a name) or named. Unlike function declarations, function expressions are not hoisted.

// Example:
// javascript
// Copy code
// // You can't call this before declaring it
// const sayHi = function () {
//   console.log("Hello from a function expression!");
// };

// sayHi();
// Key Features:
// Assigned to a variable: The function is stored in a variable (sayHi in this case).
// Not hoisted: You can only call it after it’s defined.
// Useful for inline functions, callbacks, or when you need more control (e.g., passing the function as a value).
// Comparison Example:
// Here’s how both look side-by-side:

// javascript
// Copy code
// // Function Declaration
// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 3)); // Output: 5

// // Function Expression
// const subtract = function (a, b) {
//   return a - b;
// };
// console.log(subtract(5, 2)); // Output: 3
// Key Differences:
// Feature	Function Declaration	Function Expression
// Definition	Standalone function definition	Function stored in a variable
// Hoisting	Yes, fully hoisted	No, not hoisted
// Name	Always named	Can be named or anonymous
// When to Use	Simple and reusable functions	For flexibility, callbacks
// Interview Answer:
// "A function declaration is a named function defined with the function keyword and is hoisted, allowing it to be called before it appears in the code. A function expression is when a function is assigned to a variable, and it is not hoisted, so it can only be used after its declaration."






// You said:
// explain me in just one word that what is hoisted means?
// ChatGPT said:
// ChatGPT
// In one word, hoisted means "moved."

// (JavaScript conceptually "moves" declarations to the top of their scope before code execution.)






