class Person {
    constructor(name, age) {
        console.log("Person class constructor");
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age, marks) {
        console.log("Students class constructor");
        super(name, age); // parent class constructor is being called
        this.marks = marks;
    }
}

class Teacher extends Person{
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}

