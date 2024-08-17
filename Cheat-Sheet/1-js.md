# Js Fundamental

## Variables

- A variable declaration introduces a new identifier.

### Var

With `var` there are only two types of scope for a variable.There is global scope which is where we would place a variable if we define the variable with `var` outside of any function. And then there is function scope for variable defined inside of a function.

- Scope of var

  ```js
  function defineAndPrintName() {
      if (true) {
          var name = 'Codestar';
          console.log(`inner scope -> name: ${name}`);
      }

      console.log(`outer scope -> name: ${name}`);
  }

  defineAndPrintName();
  // inner scope -> name: Codestar
  // outer scope -> name: Codestar
  ```

- var variables can be re-declared and updated

- Hoisting of var

  Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

### Let

let is now preferred for variable declaration. It's no surprise as it comes as an improvement to var declarations. It also solves the problem with var that we just covered. Let's consider why this is so.

- let is block scoped!

  A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.

  ```js
  let greeting = "say Hi";
  let times = 4;

  if (times > 3) {
      let hello = "say Hello instead";
      console.log(hello); // "say Hello instead"
  }
  console.log(hello) // hello is not defined
  ```

- let can be updated but not re-declared.

- Hoisting of let.

  Just like  var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error

### Const

Variables declared with the const maintain constant values. const declarations share some similarities with let declarations.

- const declarations are block scoped
  
  Like let declarations, const declarations can only be accessed within the block they were declared.

- const cannot be updated or re-declared

- Hoisting of const
  
  Just like let, const declarations are hoisted to the top but are not initialized.

## Regular Function vs Arrow Function

**Regular Function:**

- Uses the `function` keyword.
- Has its own `this` context, which can change based on how the function is called.
- Can be used as constructors.
- Can have arguments object.

```js
function RegularFunction() {
  console.log(this); // 'this' refers to the object that called the function
}

const obj1 = {
  method: RegularFunction
};

obj1.method(); // Logs obj1
```

- Constructor Example with Regular Function

```js
function Person(name) {
  this.name = name;
}

const person1 = new Person('John');
console.log(person1.name); // Logs 'John'
```

**Arrow Function:**

- Uses the `=>` syntax.
- Does not have its own `this` context; inherits `this` from the surrounding scope.
- Cannot be used as constructors.
- Does not have an arguments object; use rest parameters instead.

```js
const ArrowFunction = () => {
  console.log(this); // 'this' refers to the surrounding scope
};

const obj2 = {
  method: ArrowFunction
};

obj2.method(); // Logs the global object (or undefined in strict mode)
```

- Constructor Example with Arrow Function (Not Possible)

### Call, Apply, and Bind Functions in JavaScript

**Call:**

- Invokes a function with a specified `this` context and arguments provided individually.
- Syntax: `functionName.call(thisArg, arg1, arg2, ...)`

```js
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Alice' };

greet.call(person, 'Hello', '!'); // Logs: "Hello, Alice!"
```

**Apply:**

- Invokes a function with a specified **this** context and arguments provided as an array.
Syntax: `functionName.apply(thisArg, [arg1, arg2, ...])`

```js
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Bob' };

greet.apply(person, ['Hi', '.']); // Logs: "Hi, Bob."
```

**Bind:**

- Creates a new function that, when called, has its `this` context set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
- Syntax: `const boundFunction = functionName.bind(thisArg, arg1, arg2, ...)`

```js
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Charlie' };

const boundGreet = greet.bind(person, 'Hey');
boundGreet('?'); // Logs: "Hey, Charlie?"
```

### arguments & args

`arguments` is an array-like object accessible inside functions that contains the values of the arguments passed to that function.

```js
function regularFunctionSum() {
    let result = 0;

    for (const n of arguments) {
        if (!isNaN(n)) result += n;
    }

    return result;
}

// for arrow functions
const arrowFunctionSum = (...args) => {
    let result = 0;

    for (const n of args) {
        if (!isNaN(n)) result += n;
    }

    return result;
};

console.log('Regular Function', regularFunctionSum(4, 8, 15, 16, 23, 42)); // 108
console.log('Arrow Function', arrowFunctionSum(4, 8, 15, 16, 23, 42)); // 108
```

## Event Loop

The Event Loop is a fundamental concept in JavaScript that allows for asynchronous programming. It continuously checks the call stack and the task queue. When the call stack is empty, the event loop pushes the first task from the queue to the stack for execution. This mechanism enables non-blocking I/O operations, allowing JavaScript to handle multiple tasks concurrently without waiting for each task to complete before starting the next one.

### Key Concepts

- Call Stack:

  - A stack data structure that keeps track of function calls.
  - Functions are pushed onto the stack when called and popped off when they return.

- Web APIs:

  - Browser-provided APIs (e.g., setTimeout, DOM events, fetch) that handle asynchronous operations.
  - These APIs run in the background and do not block the main thread.

- Callback Queue:

  - A queue where callback functions from asynchronous operations are placed once they are ready to be executed.
  - Also known as the task queue.

- Event Loop:

  - Continuously checks the call stack and the callback queue.
  - If the call stack is empty, it pushes the first callback from the queue onto the stack for execution.

### How It Works

- Synchronous Code Execution:

  - Functions are executed and managed in the call stack.
  - The stack operates in a Last In, First Out (LIFO) manner.

- Asynchronous Code Execution:

  - When an asynchronous operation is initiated (e.g., setTimeout), the callback is sent to the Web APIs.
  - Once the operation completes, the callback is moved to the callback queue.

- Event Loop Mechanism:

  - The event loop checks if the call stack is empty.
  - If empty, it takes the first callback from the callback queue and pushes it onto the call stack.
  - This process repeats, allowing asynchronous code to be executed without blocking the main thread.

Example:

```js
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('End');

// Output:
// Start
// End
// Timeout
```

[Video in The Loop](https://www.youtube.com/watch?v=cCOL7MC4Pl0)  
