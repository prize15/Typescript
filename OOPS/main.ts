// Class Definition : In TypeScript, a class is defined using the class keyword.


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("John", 30);
person1.greet();  // Output: Hello, my name is John

// Encapsulation (Public, Private, Protected)
//Encapsulation restricts access to certain properties or methods using access modifiers.


class Employee {
  public name: string;     // Public: Accessible anywhere
  private salary: number;  // Private: Accessible only within the class
  protected role: string;  // Protected: Accessible within the class and subclasses

  constructor(name: string, salary: number, role: string) {
    this.name = name;
    this.salary = salary;
    this.role = role;
  }

  public getSalary() {
    return this.salary;
  }
}

const emp = new Employee("Abhinav", 50000, "Developer");
console.log(emp.name);          // OK
console.log(emp.getSalary());   // OK
// console.log(emp.salary);     // Error: Property 'salary' is private


//Inheritance allows one class to inherit properties and methods from another class.


class Animal {
  move(distance: number) {
    console.log(`Animal moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog();
dog.bark();   // Output: Woof! Woof!
dog.move(10); // Output: Animal moved 10 meters.

// Method Overriding : A subclass can override a method from the parent class.


class Bird extends Animal {
  move(distance: number) {
    console.log(`Bird flew ${distance} meters.`);
  }
}

const bird = new Bird();
bird.move(20);  // Output: Bird flew 20 meters.

// Constructor Overloading :TypeScript doesn't support multiple constructors directly,
// but you can achieve this with optional parameters.


class Vehicle {
  type: string;
  speed: number;

  constructor(type: string, speed: number = 0) {
    this.type = type;
    this.speed = speed;
  }
}

const car = new Vehicle("Car", 120);
const bike = new Vehicle("Bike"); // speed defaults to 0

// Abstract Class : An abstract class cannot be instantiated directly. 
//It defines methods that must be implemented by its subclasses.


abstract class Shape {
  abstract getArea(): number;

  printArea() {
    console.log(`Area: ${this.getArea()}`);
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
circle.printArea();  // Output: Area: 78.53981633974483


//Interfaces are used to define contracts for classes.


interface Flyable {
  fly(): void;
}

class Airplane implements Flyable {
  fly() {
    console.log("The airplane is flying.");
  }
}

const plane = new Airplane();
plane.fly();  // Output: The airplane is flying.

// Static Members : Static members belong to the class rather than instances of the class.


class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }
}

console.log(Calculator.add(5, 3));  // Output: 8

// Getters and Setters : Getters and setters allow you to control access to properties.

{
class Employee {
  private _salary: number;

  constructor(salary: number) {
    this._salary = salary;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error("Invalid salary");
    this._salary = value;
  }
}

const emp = new Employee(5000);
console.log(emp.salary);  // Output: 5000
emp.salary = 6000;        // Setter
console.log(emp.salary);  // Output: 6000
}
// Polymorphism : Polymorphism allows an object to take on many forms, typically via method overriding.

{
class Animal {
  speak() {
    console.log("Animal speaks.");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow!");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}

const animals: Animal[] = [new Cat(), new Dog()];

animals.forEach(animal => animal.speak());
}
// Output: Meow! Woof!

// Composition : Composition allows for reusability by using other objects inside a class.
{

class Engine {
  start() {
    console.log("Engine started.");
  }
}

class Car {
  engine: Engine;

  constructor() {
    this.engine = new Engine();
  }

  start() {
    this.engine.start();
  }
}

const car = new Car();
car.start();  // Output: Engine started.
}
// Interfaces vs. Abstract Classes
//Abstract classes can have implementation details, but interfaces cannot.


interface Drivable {
  drive(): void;
}

abstract class Machine {
  start() {
    console.log("Machine started.");
  }

  abstract operate(): void;
}

class Tractor extends Machine implements Drivable {
  drive() {
    console.log("Tractor is driving.");
  }

  operate() {
    console.log("Operating the tractor.");
  }
}

const tractor = new Tractor();
tractor.start();
tractor.drive();
tractor.operate();

// Multiple Interfaces : A class can implement multiple interfaces.


interface Playable {
  play(): void;
}

interface Watchable {
  watch(): void;
}

class Media implements Playable, Watchable {
  play() {
    console.log("Playing media.");
  }

  watch() {
    console.log("Watching media.");
  }
}

const media = new Media();
media.play();
media.watch();

// Dependency Injection : Dependency Injection is a design pattern where objects are passed into a class.
{

class Engine {
  start() {
    console.log("Engine started.");
  }
}

class Car {
  constructor(private engine: Engine) {}

  start() {
    this.engine.start();
  }
}

const engine = new Engine();
const car = new Car(engine);
car.start();
}
// Singleton Pattern : The Singleton pattern restricts instantiation to one object.


class Singleton {
  private static instance: Singleton;

  private constructor() {}

  static getInstance(): Singleton {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();
console.log(singleton1 === singleton2);  // Output: true

// Factory Pattern : The Factory Pattern provides a way to create objects without exposing the creation logic.
{

class Car {
  drive() {
    console.log("Driving a car.");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck.");
  }
}

class VehicleFactory {
  static createVehicle(type: string): Car | Truck {
    if (type === "car") return new Car();
    else if (type === "truck") return new Truck();
    throw new Error("Unknown vehicle type");
  }
}

const car = VehicleFactory.createVehicle("car");
car.drive();  // Output: Driving a car.
}
// Decorator Pattern : Decorators can modify the behavior of a class or its members.


function Logger(target: any) {
  console.log(`Creating new instance of ${target.name}`);
}

@Logger
class Product {
  constructor() {
    console.log("Product created.");
  }
}

const prod = new Product();
// Output:
// Creating new instance of Product
// Product created.

// Method Chaining : Method chaining allows methods to return the instance of the object,
// making it possible to call multiple methods in a single line.


class Builder {
  private message: string = "";

  addPart(part: string): this {
    this.message += part + " ";
    return this;
  }

  build(): string {
    return this.message.trim();
  }
}

const builder = new Builder();
const message = builder.addPart("Hello").addPart("World").build();
console.log(message);  // Output: Hello World

// Method Overloading : Method overloading allows a method to have multiple signatures.


class Printer {
  print(message: string): void;
  print(value: number): void;
  print(value: any): void {
    console.log(value);
  }
}

const printer = new Printer();
printer.print("Hello World");  // Output: Hello World
printer.print(123);            // Output: 123

// Chaining Constructors
//Constructor chaining allows a class constructor to call another constructor within the same class.

{
class Employee {
  name: string;
  age: number;
  salary: number;

  constructor(name: string, age: number);
  constructor(name: string, age: number, salary: number);
  constructor(name: string, age: number, salary: number = 30000) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
}

const emp1 = new Employee("John", 25);
const emp2 = new Employee("Alice", 30, 50000);

console.log(emp1.salary);  // Output: 30000
console.log(emp2.salary);  // Output: 50000

}