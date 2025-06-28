// // I have days I don't wanna do it, but I know I'm anna do it.
// function Person(fName, lName)
// {
//   this.firstName = fName,
//   this.lastName = lName
// }
// Person.prototype.gender="Male";
// const person1 = new Person("Elon", "Musk");


// // if a prototype value is changed, all the new objects will have the changed value and all the perviously created objects will have the previous value


// //Object Destructuring  => ES6

// let {firstName:fName, lastName:lName}=person1;
// console.log(fName);

// let {firstName, lastName}=person1;
// console.log(lastName);

// // u can make objects this way. called "latiral way i think"
// let fN = "Rfka";
// let lN = "Anis";
// let getFName= function ()
// {
//   return `${this.fN} ${this.lN}`
// }
// const sis = 
// {
//   fN, lN, getFName
// }
// console.log(sis.getFName());

// // JS Classes

// class Student{
//   constructor(name, age)
//   {
//     this.name = name,
//     this.age = age
//   }
//   get personName()
//   {
//     return this.name;
//   }
//   set personName(newName)
//   {
//     this.name = newName;
//   }
// }
// let student1 = new Student("Ahmed Emad", 17);
// student1.greet;

// //Getters & Setters : man greatStack is actually GREAATT

// student1.name = "Bill Gates";
// console.log(student1.name);


// // class Expression
// let School = class
// {
//   constructor(name)
//   {
//     this.name = name;
//   }
//   get getName()
//   {
//     return this.name;
//   }
// }
// const school1 = new School("STEM");

// console.log(school1.getName)

// console.log("I have days I don't wanna do it, but I know I'm gonna do it");

// class Person{
//   constructor(name)
//   {
//     this.name = name;
//   }
//   get greet(){
//     console.log("Hello "+this.name);
//   };
// }

// class Student extends Person{// inherts all properties and methods of Person.
//   constructor()
//   {
//     super();
//     this.school="stem"
//   }
// }
// const student1 = new Student("Ahmed");
// student1.greet;
// const person1  = new Person("Omar");
// person1.greet;
// console.log(student1.school)

// static method in JavaScript
// class Person{
//   constructor(name)
//   {
//     this.name = name;
//   }
//   static greet(x)
//   {
//     console.log(`Hello, ${x.name}`)
//   }
// }
// const person1 = new Person("Ahmed Emad");
// Person.greet(person1)

// Private Method

class Person{
  constructor(fName, lName)
  {
    this.firstName = fName;
    this.lastName = lName;
  }
  static #fullName(x)
  {
    return `${x.firstName} ${x.lastName}`;
  }
  display()
  {
    console.log(Person.#fullName(this));
  }
}
const person1 = new Person("Ahmed", "E");
person1.display();
