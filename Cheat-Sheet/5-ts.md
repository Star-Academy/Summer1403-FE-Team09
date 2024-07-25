# TypeSript

- [document](https://star-academy.github.io/codestar-documents/docs/frontend/phase05-typescript)

Table Of Content:

- [TypeSript](#typesript)
  - [Primitive Types](#primitive-types)
  - [Other Types](#other-types)
  - [Interfaces](#interfaces)
    - [Implement Class Contracts](#implement-class-contracts)
    - [Extend Interfaces](#extend-interfaces)
  - [Type Aliases](#type-aliases)
    - [Extend Type Aliases](#extend-type-aliases)
  - [Generics](#generics)
    - [Generic Types](#generic-types)
    - [Generic Classes](#generic-classes)
  - [Decorators](#decorators)
    - [enable experimental support for decorators](#enable-experimental-support-for-decorators)
    - [Decorator Factories](#decorator-factories)
    - [Decorator Composition](#decorator-composition)
    - [Decorator Evaluation](#decorator-evaluation)
    - [Class Decorators](#class-decorators)
    - [Method Decorators](#method-decorators)
    - [Accessor Decorators](#accessor-decorators)
    - [Property Decorators](#property-decorators)
    - [Parameter Decorators](#parameter-decorators)

## Primitive Types

|Type | description |
|:--: | :-- |
| `number` |  is for numbers like 42 |
| `string` | represents string values like "Hello, world" |
| `boolean` | is for the two values true and false |
| `null` | null |
| `undefined` | undefined |
| `symbol` | unique property keys ~ Symbol('foo') |
| `bigint` | 9007199254740991n |

## Other Types

|Type | description |
|:--: | :-- |
| `Array` | To specify the type of an array: Array\<number\> or number[] |
| `Tuple` | A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions. |
| `Enum` | Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. |
| `Union Types` | TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators |
| `Intersection Types` | An intersection type combines multiple types into one. |
| `Object` | objects can be seen as a collection of properties |
| `Function Types` | Functions are the primary means of passing data around in JavaScript. |
| `any` | any :) |

## Interfaces

interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

TypeScript interfaces emerge as potent tools for defining contracts within your codebase, ensuring type safety, and fostering code maintainability. By harnessing interfaces, you can establish clear expectations for object structures, function parameters, class contracts, and more.

```ts
interface Shape {
  name: string;
  color: string;
  area(): number;
}

const circle: Shape = {
  name: "Circle",
  color: "Red",
  area() {
    return Math.PI * 2 * 2;
  },
};
```

### Implement Class Contracts

Interfaces also serve as effective means to enforce contracts on classes, ensuring they adhere to specific properties and methods.

```ts
class Circle implements Shape {
  constructor(public name: string, public color: string, public radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}
```

### Extend Interfaces

Interfaces can extend other interfaces, enabling composition and reuse of interface definitions.

```ts
interface ThreeDShape extends Shape {
  volume(): number;
}
```

## Type Aliases

We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

A type alias is exactly that - a name for any type. The syntax for a type alias is:

```ts
type Point = {
  x: number;
  y: number;
};
```

### Extend Type Aliases

In this example, the BaseUser alias encapsulates common user properties. By extending the BaseUser alias, we create an AdminUser type, augmenting it with a specific role property.

TypeScript type aliases improve code readability and maintainability by providing custom names for types. By clarifying code intent and simplifying structure, they streamline development and enhance overall software quality. Embrace type aliases to create cleaner, more maintainable codebases.

```ts
// Base Alias for User
type BaseUser = {
    id: UserID;
    username: string;
    email: string;
};

// Extended Alias for Admin User
type AdminUser = BaseUser & {
    role: "admin";
};
```

## Generics

Generics are a powerful feature of TypeScript that allow you to write reusable, type-safe functions and classes. They enable you to create functions and classes that can work with any data type, rather than a single data type.

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}

let output = identity<string>("myString");
// let output: string

// or 
let output = identity("myString");
// let output: string
```

### Generic Types

The type of generic functions is just like those of non-generic functions, with the type parameters listed first, similarly to function declarations:

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: <Type>(arg: Type) => Type = identity;
```

### Generic Classes

A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter list in angle brackets (<>) following the name of the class.

```ts
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
 
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

## Decorators

Decorators are a design pattern that is used to separate modification or decoration of a class without modifying the original source code. Decorators are a special kind of declaration that can be attached to a class declaration.

For example, given the decorator @sealed we might write the sealed function as follows:

```ts
function sealed(target) {
  // do something with 'target' ...
}
```

### enable experimental support for decorators

Command Line:

```bash
tsc --target ES5 --experimentalDecorators
```

tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true
  }
}
```

### Decorator Factories

We can write a decorator factory in the following fashion:

```ts
function color(value: string) {
  // this is the decorator factory, it sets up
  // the returned decorator function
  return function (target) {
    // this is the decorator
    // do something with 'target' and 'value'...
  };
}
```

### Decorator Composition

Multiple decorators can be applied to a declaration, for example on a single line:

```ts
@f @g x
```

or multiple lines:

```ts
@f
@g
x
```

When multiple decorators apply to a single declaration, their evaluation is similar to function composition in mathematics. In this model, when composing functions f and g, the resulting composite `(f ∘ g)(x)` is equivalent to `f(g(x))`.

1. The expressions for each decorator are evaluated top-to-bottom.
2. The results are then called as functions from bottom-to-top.

### Decorator Evaluation

There is a well defined order to how decorators applied to various declarations inside of a class are applied:

1. Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each instance member.
2. Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each static member.
3. Parameter Decorators are applied for the constructor.
4. Class Decorators are applied for the class.

### Class Decorators

A Class Decorator is declared just before a class declaration. The class decorator is applied to the constructor of the class and can be used to observe, modify, or replace a class definition. A class decorator cannot be used in a declaration file, or in any other ambient context (such as on a declare class).

```ts
@BaseEntity
class User {
  [x: string]: any;
  constructor(public name: string) {}
}

function BaseEntity(ctr: Function) {
  ctr.prototype.created = new Date().toISOString();
}

const user = new User('John')
console.log(user.name, user.created)
```

### Method Decorators

A Method Decorator is declared just before a method declaration. The decorator is applied to the Property Descriptor for the method, and can be used to observe, modify, or replace a method definition.

```ts
// example: 
function configurable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = value;
  };
}
```

```ts
class User {
  constructor(private name: string, private age: number) {}

  @logger
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  @logger
  printAge() {
    console.log(`I am ${this.age} years old`);
  }
}

const user = new User("Ron", 25);
user.greet();
user.printAge();

// Output: 
// start: greet
// Hello, my name is Ron.
// end: greet
// start: printAge
// I am 25 years old
// end: printAge
```

### Accessor Decorators

An Accessor Decorator is declared just before an accessor declaration. The decorator is applied to the Property Descriptor for the accessor and can be used to observe, modify, or replace an accessor’s definition.

```ts
class Point {
  private _x: number;
  constructor(x: number) {
    this._x = x;
  }
 
  @configurable(false)
  get x() {
    return this._x;
  }
}

function configurable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = value;
  };
}
```

The expression for the accessor decorator will be called as a function at runtime, with the following three arguments:

1. Either the constructor function of the class for a static member, or the prototype of the class for an instance member.
2. The name of the member.
3. The Property Descriptor for the member.

### Property Decorators

A Property Decorator is declared just before a property declaration. The decorator is applied to the Property Descriptor for the property, and can be used to observe, modify, or replace a property definition.

```ts
// Property Decorator for Email Validation
function ValidateEmail(target: any, propertyKey: string) {
  const privateFieldName = `_${propertyKey}`;

  // Store the original setter method
  const originalSetter = Object.getOwnPropertyDescriptor(target, propertyKey)?.set;

  // Define a new setter for the property
  const newSetter = function (value: any) {
    if (!isValidEmail(value)) {
      throw new Error(`Invalid email address for property "${propertyKey}".`);
    }
    this[privateFieldName] = value;
  };

  // Replace the property's setter method
  Object.defineProperty(target, propertyKey, {
    set: newSetter,
    get() {
      return this[privateFieldName];
    },
    enumerable: true,
    configurable: true,
  });
}

// Helper function to validate email addresses
function isValidEmail(email: string): boolean {
  // Regular expression for a simple email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

class User {
  @ValidateEmail
  email: string = 'test@example.com';

  constructor(email: string) {
    this.email = email;
  }
}

const user = new User('john@example.com');

console.log(user.email); // john@example.com

try {
  user.email = 'invalid-email'; // This will throw an error
} catch (error) {
  console.error(error.message); // Invalid email address for property "email".
}

// Output: 
// john@example.com
// Invalid email address for property "email".
```

### Parameter Decorators

A Parameter Decorator is declared just before a parameter declaration. The decorator is applied to the function for a class constructor. A parameter decorator cannot be used in a declaration file, an overload, or in any other ambient context (such as in a declare class).

```ts
// Parameter Decorator for Email Validation
function ValidateEmail(target: any, methodName: string, parameterIndex: number) {
  const originalMethod = target[methodName];

  target[methodName] = function (...args: any[]) {
    const paramValue = args[parameterIndex];

    // Regular expression for a simple email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(paramValue)) {
      throw new Error(`Invalid email address provided for parameter at index ${parameterIndex}`);
    }

    return originalMethod.apply(this, args);
  };
}

class ExampleClass {
  // Apply the parameter decorator to validate email parameter
  sendEmail(@ValidateEmail email: string) {
    console.log(`Sending email to ${email}`);
  }
}

const exampleInstance = new ExampleClass();

// This will work
exampleInstance.sendEmail("example@email.com");

// This will throw an error due to email validation
try {
  exampleInstance.sendEmail("invalid-email");
} catch (error) {
  console.error(error.message); // Invalid email address provided for parameter at index 0
}
```
