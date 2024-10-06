// Basic Types
//TypeScript provides types like number, string, boolean, etc.


let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];

//Type Inference
//If you don't specify a type, TypeScript will infer it based on the value you assign.


let name = "John"; // TypeScript infers the type as string
let age = 30;      // TypeScript infers the type as number

// Interfaces :Interfaces are used to define object types.


interface User {
  name: string;
  age: number;
}

let user: User = { name: "Alice", age: 25 };

// Functions and Optional Parameters
//TypeScript allows specifying the types of function parameters and return values.


function greet(name: string, age?: number): string {
  return `Hello, ${name}! ${age ? `You are ${age} years old.` : ''}`;
}

console.log(greet("John"));  // Output: Hello, John!
console.log(greet("Alice", 25));  // Output: Hello, Alice! You are 25 years old.

// Union Types : Union types allow variables to have more than one type.


function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

printId(101);      // OK
printId("202");    // OK

// Type Aliases : Type aliases create a new name for a type.


type ID = number | string;

let userId: ID = 123;  // OK
userId = "ABC123";     // OK

 
//Enums allow us to define a set of named constants.


enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

let dir: Direction = Direction.Up;  // dir = 1

// Classes and Access Modifiers :TypeScript supports object-oriented programming features
// like classes, inheritance, and access modifiers (public, private, protected).


class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public move(distance: number) {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

const cat = new Animal("Cat");
cat.move(5);

// Inheritance : TypeScript supports class inheritance using the extends keyword.



class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog("Rex");
dog.bark();
dog.move(10);


//Generics allow you to define reusable code components with different types.



function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hello");  // Output type is string
let numOutput = identity<number>(10);    // Output type is number

// Arrays with Generics : Generics can also be applied to arrays.

{
let list: Array<number> = [1, 2, 3];
}

//A tuple is an array with fixed size and known types at each index.


let person: [string, number] = ["John", 25];


//The void type is used when a function does not return a value.


function warnUser(): void {
  console.log("This is a warning message.");
}


//The never type represents values that never occur, typically for functions that
// never return or always throw an error.


function error(message: string): never {
  throw new Error(message);
}


//Type assertions allow you to override TypeScript's inferred type.


let someValue: unknown = "This is a string";
let strLength: number = (someValue as string).length;


//Namespaces provide a way to group logically related code.


namespace Utility {
  export function add(a: number, b: number): number {
    return a + b;
  }
}

console.log(Utility.add(5, 3));

// Modules : We can split code into modules and export/import them.

//mathUtils.ts


export function add(a: number, b: number): number {
  return a + b;
}
//main.ts


//import { add } from './mathUtils';

console.log(add(5, 10));

// Readonly Properties :The readonly modifier makes properties immutable after initialization.


class Car {
  readonly brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }
}

let myCar = new Car("Toyota");
console.log(myCar.brand);
// myCar.brand = "Honda";  // Error: Cannot assign to 'brand' because it is a read-only property

// Index Signatures :Index signatures allow an object to have flexible keys.


interface StringMap {
  [key: string]: string;
}

let capitals: StringMap = {
  'France': 'Paris',
  'Germany': 'Berlin',
};
// Intersection Types : Intersection types combine multiple types into one.


interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type EmployeePerson = Person & Employee;

let emp: EmployeePerson = { name: "Alice", employeeId: 101 };

