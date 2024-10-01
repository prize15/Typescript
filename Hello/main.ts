
/*
Datatypes:
Number: Represents numerical values (e.g., let age: number = 30;)
String: Represents textual data (e.g., let name: string = "Alice";)
Boolean: Represents true or false values (e.g., let isStudent: boolean = true;)
Array: Represents ordered collections of elements (e.g., let numbers: number[] = [1, 2, 3];)
Tuple: Represents fixed-length arrays with elements
 of specific types (e.g., let person: [string, number] = ["John", 35];)
Any: Represents values of any type (e.g., let value: any = "hello";)
Void: Represents the absence of a value (e.g., function greet(): void { console.log("Hello!"); })
Never: Represents values that never occur (e.g., function throwError(): never { throw new Error("Error!"); })

Type Inference:

TypeScript can often infer types from the context, reducing the need for explicit type annotations.
For example, if you assign a number to a variable, TypeScript will infer its type as number.

4. Interfaces:

Interfaces define the structure of objects, specifying their properties and their types.
They are used to enforce consistency and maintainability in your code.
Example:
*/
{
interface Person {
  name: string;
  age: number;
}

let john: Person = {
  name: "John",
  age: 30
};
}
/* Classes:

Classes are blueprints for creating objects in TypeScript.
They can have properties, methods, and constructors.
Example:
*/
{
class Dog {
  name: string;
  breed: string;

  constructor(name: string, breed: string) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    console.log("Woof!");   

  }
}

let max: Dog = new Dog("Max", "Golden Retriever");
max.bark();

}
/* Generics:

Generics allow you to write reusable code that can work with different types.
They are often used with functions, classes, and interfaces.
Example: */
{
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("hello");

}
/* Modules:

Modules are used to organize your code into separate files.
They can be exported and imported using export and import statements.
Example:

myModule.ts:
*/
/*
export function greet(name: string) {
  console.log("Hello, " + name + "!");
}


//main.ts:

import { greet } from "./myModule";

greet("Alice");

*/
/* Type Guards:

Type guards are used to check the type of a variable at runtime.
They are often used with typeof, instanceof, or custom type predicates.
Example: */


function isNumber(value: any): value is number {
  return typeof value === "number";
}

function printValue(value: any) {
  if (isNumber(value)) {
    console.log("The  value is a number: " + value);
  } else {
    console.log("The value is not a number.");
  }
}


/* Decorators:

Decorators are a way to add metadata to classes, methods, and properties.
They are used for tasks like dependency injection, logging, and more.
Example: */
{
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling   
 ${propertyKey} with arguments:   
 ${args}`);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

class MyClass {
  //@log
  greet(name: string) {
    console.log("Hello, " + name   
 + "!");
  }
}

}
/* Advanced Concepts:

Mapped Types: Create new types based on existing types by mapping their properties.
Conditional Types: Define types that depend on conditions.
Intersection Types: Combine multiple types into a single type.
Union Types: Represent values that can be of multiple types.
Inference Rules: Understand how TypeScript infers types in different scenarios. */

//======================================

/*Promises:

A promise represents an asynchronous operation that may complete successfully or fail. */
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully');
    }, 2000);
  });
}

fetchData().then((data) => {
  console.log(data);   
 // Output: Data fetched successfully
}).catch((error) => {
  console.error(error);   

});


/*async/await:

async keyword indicates that a function is asynchronous and returns a promise.
await keyword can only be used within an async function and pauses execution until the promise resolves. */

async function fetchDataAsync() {
  const data = await fetchData();
  console.log(data); // Output: Data fetched successfully
}

fetchDataAsync();


/*Callbacks:

A callback function is a function that is passed as an argument to another function
 and is called when the first function completes its task . */   

function fetchDataWithCallback(callback) {
  setTimeout(() => {
    callback('Data fetched successfully');
  }, 2000);
}

fetchDataWithCallback((data) => {
  console.log(data); // Output: Data fetched successfully
});



/*Destructuring:

Destructuring is a syntax that allows you to extract values from arrays or objects into variables.*/

const person = { name: 'Alice', age: 30 };
const { name, age } = person;
console.log(name, age); // Output: Alice 30

const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first, second, third); // Output: 1 2 3


//Combining async/await with destructuring:
/*
async function fetchDataAndDestructure() {
  const { data } = await fetchData();
  console.log(data); // Output: Data fetched successfully
}

fetchDataAndDestructure();
*/

//Functions: Define functions to encapsulate reusable code:
{
function greet(name: string): void {
  console.log("Hello, " + name + "!");
}

greet("Alice");
}


//Classes: Create classes to model objects and their behavior:

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, my name is " + this.name);   

  }
}

let   
 john = new Person("John", 30);
john.greet();


//Interfaces: Define the structure of objects using interfaces:

interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log("Woof!");   

  }
}


//Modules: Organize your code into separate modules using export and import:

// myModule.ts
export function greet(name: string) {
  console.log("Hello, " + name + "!");
}

// main.ts
//import { greet } from "./myModule";

greet("Alice");



//Type Annotations: Use type annotations to specify the types of variables, functions, and properties:

let message: string = "Hello, TypeScript!";


//Generics: Create reusable code that can work with different types:

function identity<T>(arg: T): T {
  return arg;
}


//Decorators: Add metadata to classes, methods, and properties using decorators:

function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  // ...
}



/*Use a linter like ESLint or TSLint to enforce coding standards and catch potential errors.
Consider using a build tool like Webpack or Parcel to manage your TypeScript project and bundle it for deployment.
Explore the rich TypeScript ecosystem for libraries, frameworks, and tools
 that can enhance your development experience.
By following these steps and exploring the various concepts and features of TypeScript,
 you can create robust and well-structured applications. */