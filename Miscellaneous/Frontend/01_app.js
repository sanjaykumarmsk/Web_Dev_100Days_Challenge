// let arr = [1, 2, 3];
// arr1.sayHello = () => {
//     console.log("hello!, i am arr");
// };

// arr2.sayHello = () => {
//     console.log("hello!, i am arr");
// };

//FactoryFunction
// function PersonMaker(name, age ){
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };
//     return person;
// }

//Constructors Function - doesn't return anything & start with capital Letter
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(this);
// };

// Person.prototype.talk = function () {
//     console.log(`Hi, n=my name is ${this.name}`);
// };


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p1 = new Person("adam", 25);
let p2 = new Person("eve", 25);




// let p1 = PersonMaker("adam", 25);
// let p2 = PersonMaker("eve", 25);
