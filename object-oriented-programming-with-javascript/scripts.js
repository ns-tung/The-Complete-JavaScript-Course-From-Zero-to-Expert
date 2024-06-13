'use strict';

/* CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR ==================================================
    1. New {} is created
    2. function is called, this = {}
    3. {} linked to prototype
    4. function automatically return {}
*/

const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person); // true

/* PROTOTYPES ==================================================

*/

Person.prototype.calcAge = function () {
    console.log(2034 - this.birthYear);
}

jonas.calcAge(); // 43
matilda.calcAge(); // 17

console.log(jonas.__proto__); // {calcAge: f}
console.log(jonas.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species); // Homo Sapiens Homo Sapiens
console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false

console.log(Person.prototype); // ▶ {species: 'Homo Sapiens', calcAge: ƒ}

/* PROTOTYPAL INHERITANCE AND THE PROTOTYPE CHAIN ==================================================

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

*/

console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 3, 5, 5, 7, 9, 9];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.uniqueArray = function () {
    return [...new Set(this)]
};

console.log(arr.uniqueArray()); // ▶ (5) [1, 3, 5, 7, 9]
console.dir(x => x + 1);

/* CODING CHALLENGE #1 ==================================================

    1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
    2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
    3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
    4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

    DATA CAR 1: 'BMW' going at 120 km/h
    DATA CAR 2: 'Mercedes' going at 95 km/h

*/

const Car = function (make, speed) {
    this.make = make; this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();