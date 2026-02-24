import React from "react";
import Accordion from "../components/Accordion";

function Js() {
  const data = [
    {
      question: "What is the difference between == and ===?",
      answer:
        "In JavaScript both are comparison operators but they behave differently. Double equals compares values after doing type conversion if needed, which means JavaScript may convert one datatype to match the other before comparing. Triple equals is strict equality and compares both value and datatype without conversion. Because strict equality is predictable and avoids bugs, we usually prefer using triple equals in real applications. For example, 5 == '5' returns true because the string is converted into a number, but 5 === '5' returns false because the datatypes are different.",
    },

    {
      question: "What are the different datatypes in JavaScript?",
      answer:
        "JavaScript has two main categories of datatypes: primitive and non-primitive.\n\nPrimitive types include string, number, boolean, null, undefined, symbol, and bigint. These store single values and are immutable.\n\nNon-primitive types include objects, arrays, and functions. Objects can store multiple values in key-value form and are mutable. \n\nUnderstanding this difference is important because primitives are copied by value, while objects are copied by reference. For example, let age = 25 is a primitive value, and let user = {name:'Ali'} is an object.",
    },

    {
      question: "What is the difference between let, var and const?",
      answer:
        "var, let, and const are used to declare variables, but they differ mainly in scope and reassignment.\nvar is function-scoped and can be re-declared and updated. It is also hoisted and initialized with undefined.\nlet is block-scoped, meaning it only exists inside the block where it is declared. It can be updated but cannot be re-declared in the same scope.\nconst is also block-scoped but cannot be reassigned after initialization. However, if it is an object or array, its properties can still be changed.\nIn modern JavaScript, we mostly use const by default and let when we know the value will change.",
    },

    {
      question: "Explain this keyword in Javascript",
      answer:
        "The this keyword refers to the object that is currently executing the function. \nIts value depends on how the function is called. \nInside an object method, this refers to that object.\n In a regular function, it depends on the calling context.\n In arrow functions, this does not have its own value and instead inherits from the surrounding scope.",
    },

    {
      question: "What are truthy and falsy values in JavaScript?",
      answer:
        "In JavaScript, values used in conditions are automatically converted into boolean. \nFalsy values include false, 0, empty string, null, undefined, and NaN. \nEverything else is considered truthy. \n\nThis concept is useful when writing conditions and validations. For example, if we check if('hello') it runs because it is truthy, but if(0) does not run because 0 is falsy.",
    },

    {
      question: "What are closures in JavaScript?",
      answer:
        "A closure is created when a function remembers variables from its outer scope even after the outer function has finished executing.\n When a function is defined inside another function, the inner function can access variables of the outer function. Even after the outer function finishes, those variables remain in memory if the inner function still uses them. \n\nClosures are useful for maintaining state and creating private variables. For example, a counter function can keep track of a count variable even after the outer function has returned.",
    },

    {
      question: "Explain Hoisting in JS",
      answer:
        "Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope before execution.\n Only declarations are hoisted, not values. \nVariables declared with var are hoisted and initialized with undefined.\n let and const are hoisted but not initialized, which leads to the temporal dead zone.\n Function declarations are fully hoisted. \nFor example, console.log(a); var a = 10 prints undefined because the declaration is moved to the top but assignment happens later.",
    },

    {
      question: "What is DOM?",
      answer:
        "DOM stands for Document Object Model. It is a tree structure created by the browser that represents the HTML document. Each HTML element becomes a node, and JavaScript can access and modify these nodes.\n\n Using the DOM, we can change content, styles, and structure dynamically. \nFor example, document.getElementById('title').textContent = 'Hello' updates the text of an element on the page.",
    },

    {
      question: "What is type coercion?",
      answer:
        "Type coercion is the automatic conversion of one datatype into another by JavaScript during operations. \nThis happens because JavaScript is loosely typed. \nFor example, in 3 + 2 + '7', JavaScript first adds 3 and 2 to get 5. Then when adding '7', it converts 5 into a string and concatenates, resulting in '57'.",
    },

    {
      question: "What is an event loop in JavaScript?",
      answer:
        "JavaScript is single-threaded, meaning it can execute only one task at a time. It uses a call stack to execute functions. When a function is called, it gets pushed onto the stack, and once it finishes, it gets removed.\n\n For asynchronous tasks like timers, API calls, or event listeners, JavaScript uses browser APIs. Once these tasks are completed, their callbacks are placed into the message queue.\n\n The event loop constantly checks whether the call stack is empty. If it is empty, it takes tasks from the message queue and pushes them onto the stack for execution. This mechanism allows JavaScript to handle asynchronous operations without blocking the main thread. \nFor example, console.log('Start'); setTimeout(()=>console.log('Async'),0); console.log('End'); prints Start, End, then Async.",
    },

    {
      question: "Explain call(), apply() and bind()",
      answer:
        "call, apply, and bind are used to control the value of this in functions.\n\n call invokes the function immediately and takes arguments separately.\n apply invokes immediately but takes arguments as an array.\n bind returns a new function with this permanently set. \n\nThese are useful when borrowing methods from one object to another.",
    },

    {
      question: "Explain map, filter and reduce with an example",
      answer:
        "map creates a new array by transforming elements.\n filter returns elements that match a condition. \nreduce combines elements into a single value. \n\nThese methods help write clean functional code. \nFor example, using reduce we can sum an array: [1,2,3].reduce((a,b)=>a+b,0) returns 6.",
    },

    {
      question: "Why use promises over callbacks?",
      answer:
        "Callbacks were traditionally used for asynchronous operations, but they often led to nested code, known as callback hell. Promises were introduced to solve this problem and make asynchronous code more readable and manageable.\n\nA promise represents a value that may be available now, later, or never. It has three states: pending, fulfilled, and rejected. Promises allow chaining using .then() and .catch() and provide better error handling.\n\nBecause of cleaner structure and better control over async flow, promises are preferred over callbacks.\nfetch('https://api.com/data').then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));",
    },

    {
      question: "What is async/await in Javascript?",
      answer:
        "async/await is built on promises and allows writing asynchronous code in a synchronous style. The async keyword makes a function return a promise. The await keyword pauses execution until the promise resolves. This improves readability and error handling.",
    },

    {
      question: "What is event bubbling and event delegation?",
      answer:
        "Event bubbling means an event starts from the target element and moves up to parent elements. Event delegation is attaching a single event listener to a parent instead of multiple children. This improves performance and works well with dynamic elements.",
    },

    {
      question: "What is a callback function?",
      answer:
        "A callback function is a function passed as an argument to another function and executed later. It is commonly used in asynchronous operations like timers and API calls.",
    },

    {
      question: "What is asynchronous JavaScript?",
      answer:
        "Asynchronous JavaScript allows tasks like API calls and timers to run without blocking the main thread. It uses callbacks, promises, and async/await to handle operations that take time.",
    },

    {
      question: "How does prototypal inheritance work?",
      answer:
        "JavaScript uses prototypal inheritance, which means objects can inherit properties and methods from other objects through the prototype chain.\n\n When we try to access a property on an object, JavaScript first checks that object. If it doesn’t find it, it looks up the prototype chain. This allows sharing methods between objects without duplicating code.\n\n This is the foundation of how classes work internally in JavaScript.",
    },

    {
      question: "What is the Temporal Dead Zone?",
      answer:
        "The Temporal Dead Zone is the time between entering a scope and initializing a variable declared with let or const. During this time, accessing the variable results in an error.\n\nThis happens because let and const are hoisted but not initialized immediately. It helps prevent accidental use before declaration.",
    },

    {
      question: "Define webpack with its purpose",
      answer:
        "Webpack is a module bundler that bundles JavaScript, CSS, and assets into optimized files for production. It helps with dependency management, code splitting, and performance optimization.",
    },

    {
      question: "Promise for even number",
      answer:
        "We can create a promise that resolves if a number is even and rejects if it is odd. This demonstrates basic promise handling and validation before continuing async operations.",
    },

    {
      question: "Difference between forEach and map",
      answer:
        "forEach is used when we simply want to loop through an array and perform some action for each element. It does not return a new array. It is mainly used for side effects like logging, updating UI, or modifying external variables.\n\n map, on the other hand, is used when we want to transform each element of an array and create a new array based on those transformations. It always returns a new array of the same length.",
    },

    {
      question:
        "How does object assignment work with and without the rest operator in JavaScript?",
      answer:
        "When we assign one object to another variable directly, JavaScript copies the reference, not the actual object. This means both variables point to the same memory location. If we change one object, the other also changes.\n\n To avoid this, we can create a shallow copy using the spread operator (...). This creates a new object with the same properties, so modifying the new object does not affect the original.\n\n The rest/spread operator is very commonly used in modern JavaScript to clone objects or merge objects.",
    },

    {
      question: "Difference between method and function",
      answer:
        "n JavaScript, both methods and functions are reusable blocks of code, but the key difference is how they are associated.\n\nA function is a standalone block of code that can be defined independently and called by its name.\n\n A method, on the other hand, is a function that is attached to an object. When a function becomes a property of an object, we call it a method. The important difference is that methods usually operate on the data inside the object and can use the this keyword to refer to that object.\n\n So technically, a method is just a function stored inside an object.",
    },

    {
      question: "What is strict mode?",
      answer:
        "Strict mode is a way to opt into a restricted version of JavaScript. It helps catch common coding mistakes and prevents the use of unsafe features.\n\n We enable strict mode by adding 'use strict' at the top of a file or function.\n When strict mode is enabled:\nYou cannot use undeclared variables.\nthis inside a function is undefined instead of the global object.\nSome silent errors are converted into actual errors.\nDuplicate parameter names are not allowed.\n\nThe main purpose of strict mode is to make code more secure, predictable, and easier to debug. In modern JavaScript modules, strict mode is enabled by default.",
    },

    {
      question: "Explain scope and scope chain",
      answer:
        "In JavaScript, we mainly have: \nGlobal scope\n Function scope\nBlock scope\n\nA variable declared outside any function belongs to the global scope.\nA variable declared inside a function belongs to that function’s scope.\nVariables declared with let or const inside a block belong to block scope.\n\nScope chain is the mechanism by which JavaScript looks for variables. When we try to access a variable, JavaScript first looks in the current scope. If it doesn’t find it, it moves to the outer scope, and continues until it reaches the global scope. This chain of searching is called the scope chain.",
    },

    {
      question: "Explain debouncing and throttling",
      answer:
        "Debouncing and throttling are techniques used to control how often a function is executed, especially in scenarios like scrolling, resizing, or typing events.\n\n Debouncing ensures that a function is executed only after a certain delay has passed since the last time it was triggered. It is commonly used in search inputs where we want to wait until the user stops typing before making an API call.\n\n Throttling ensures that a function is executed at most once within a specified time interval, no matter how many times the event is triggered. It is commonly used in scroll or resize events.",
    },

    {
      question: "Difference between rest and spread",
      answer:
        "The spread operator is used to expand elements of an array or properties of an object into individual elements. It is mainly used when copying arrays or objects, merging them, or passing values into functions.\n\n The rest operator, on the other hand, is used to collect multiple elements into a single array or object. It is commonly used in function parameters when we don’t know how many arguments will be passed.",
    },

    {
      question: "Is JavaScript single-threaded?",
      answer:
        "JavaScript is primarily a single-threaded language, which means it executes one task at a time using a single call stack. Only one piece of code runs at any given moment.\n\n However, JavaScript can still handle asynchronous operations like API calls, timers, and event listeners. This is possible because of the browser’s Web APIs, the message queue, and the event loop. These components allow JavaScript to perform non-blocking operations even though the main thread is single-threaded.",
    },

    {
      question: "Shallow copy vs deep copy",
      answer:
        "When copying objects or arrays in JavaScript, we need to understand how references work.\n\n A normal copy happens when we assign one object to another variable. In this case, both variables point to the same memory location. So if we change one, the other also changes.\n\n A shallow copy creates a new object but only copies the first level of properties. If the object contains nested objects, those nested objects are still referenced.\n\n A deep copy creates a completely independent copy of an object, including all nested levels. Changes in one object do not affect the other.",
    },

    {
      question: "Flatten nested array",
      answer:
        "Flattening an array means converting a nested array into a single-level array. JavaScript provides a built-in method called flat() that helps with this.\n\n The flat() method takes a depth argument, which tells how deep the flattening should go. If we pass Infinity, it will completely flatten the array regardless of how deeply nested it is.",
    },

    {
      question: "How JavaScript works internally?",
      answer:
        "To understand how JavaScript works internally, we need to understand a few core concepts: execution context, call stack, memory creation phase, and event loop.\n\n When a JavaScript program starts running, the engine first goes through a memory creation phase. In this phase, it allocates memory for variables and functions. Variables declared with var are initialized with undefined, and function declarations are stored completely in memory.\n\n After that comes the execution phase, where the code runs line by line.\n\n JavaScript uses a call stack to manage function execution. Whenever a function is called, it is pushed onto the stack, and once it finishes execution, it is removed from the stack.\n\n For asynchronous operations, JavaScript uses Web APIs, the message queue, and the event loop. Async tasks like API calls or timers are handled by the browser, and once they finish, their callbacks are placed into the queue. The event loop then pushes them back into the call stack when it’s empty.\n\n This combination of execution context, call stack, and event loop is what allows JavaScript to handle both synchronous and asynchronous code efficiently.",
    },
  ];
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center">JS Questions</h1>
      <Accordion data={data} />
    </div>
  );
}

export default Js;
