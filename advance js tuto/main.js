// nested functions
// let a = 10
// function outer() {
//     let b = 20
//     function inner(){
//         let c = 30
//         console.log(a, b, c)
//     }
//     inner()
// }
// outer()

//CURING FUNCTION


// this ............
//Explict binding
// const person = {
//     name: 'Victore',
//     // sayMyName: function () {
//     //     console.log(`My name is ${this.name}`)
//     // }
// }
// person.sayMyName()

//........
// function sayMyName() {
//     console.log(`My name is ${this.name}`)
// }

// sayMyName.call(person)

//.....
// function Person(name) {
//     this.name = name
// }
// const p1 = new Person('John')
// const p2 = new Person('Baptish')

// console.log(p1.name, p2.name)


//PROTOTYPE

// function Person(fName,lName) {
//     this.firstName = fName
//     this.lastName = lName
//     // this.fullName = fName + ' ' + lName
// }
// const person1 = new Person('John', 'James')
// const person2 = new Person('Mat', 'Joks')

// person2.getFullName = function() {
//     return this.firstName + ' ' + this.lastName
// }
// console.log(person1.fullName)

// Person.prototype.getFullName = function() {
//     return this.firstName + ' ' + this.lastName
// }
// console.log(person1.getFullName())

//inheritance

// function SuperHero(fName, lName) {
//     Person.call(this, fName, lName)
//     this.isSuperHero = true
// }

// SuperHero.prototype.fightCrime = function() {
//     console.log('fight crime')
// }

// SuperHero.prototype =  Object.create(Person.prototype)  //get the full name from the person function by check if the person function has a prototype

// const batman = new SuperHero('Jins', 'Babe')
// SuperHero.prototype.constructor = SuperHero //to make sure superhero only inhreited properties from person

// console.log(batman.getFullName())


// CLASS

// class Person {
//     constructor(fName, lName){
//         this.firstName = fName
//         this.lastName = lName
//     }

//     sayMyName() {
//         console.log(this.firstName + ' ' + this.lastName)
//     }
// }
// const classP1 = new Person('Jame', 'Jinks')
// console.log(classP1.sayMyName())


// class SuperHero extends Person {
//     constructor(fName, lName) {
//         super(fName, lName)
//         this.isSuperHero = true
//     }

//     fightCrime() {
//         console.log('Fight Crime')
//     }
// }
// const batman = new SuperHero('jeggy', 'kiki')
// console.log(batman.sayMyName())

/// iterators and iterables 



// RECURSION
// Helps situations where a task can be naturally split into severally tasks of the same kind, but simpler
// function call it self is mostly call recursion

// function pow(x, n) {
//     if (x==1){
//         return x;
//     }
//     else {
//         return x* pow(x, n-1);
//     }
// }
// console.log(pow(2,4))


// Closure
// var add = (function() {
//     var counter = 0;
//     return function() {counter+=1; return counter}
// })();

// console.log(add())
// console.log(add())


// NEW
// let sum = new Function('a', 'b', 'return a + b');
// console.log(sum(2,5))
// console.log(sum(2,10))


// ARROW FUNCTION


/// REST PARAMETERS
// function fun(...input){
//     let sum=0;

//     for(let i of input){
//         sum+=i
//     }
//     return sum
// }
// console.log(fun(1,2,4))
// console.log(fun(1,2))


/// SPREAD OPERATOR - concatination
// let arr = [1, 2, 4];
// let arr2 = [4, 5, 6];

// arr = [...arr, ...arr2];
// console.log(arr)


/// GLOCAL OBJECTS



/// CHAINING JS METHODS
// object.method().method2().method3()
//account.addDeposit(200000).transfer(4000).accountBalance(5)

