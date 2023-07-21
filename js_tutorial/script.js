

///Rest Parameter
// function func(...input){
//     let sum=0;
//     for(let i of input){
//         sum += i;
//     }
//     return sum;
// }
// console.log(func(2,4,5,6,7))


///Sprea Operator
// let arr = [1,2,3,4,]
// let arr2 = [5,6,7,8,9]
// let arrr = [...arr, ...arr2]
// console.log(arrr)


///SetTimeOut
// function sunday(a,s){
//     return a + s;
// }

// let me = sunday(0,1);

// console.log(setTimeout(me))

///Binding



///Nested function
// let a = 10;

// function outer() {
//     let b = 30;

//     function inner(){
//         let c = 13;
//         console.log(a, b, c);
//     }

//     inner()
// }

// console.log(outer())

///Closure



///This

///prototype

// function Person(fname, lname){
//     this.firstName = fname
//     this.lastName = lname
// }

// const person1 = new Person('John', 'Doe')
// const person3 = new Person('Jane', 'Boo')

// Person.prototype.getFullName = function (){
//     return this.firstName + ' ' + this.lastName
// }

// const ref = person3.getFullName()

// console.log(person1.getFullName())
// console.log(ref)

///Prototype Inheritance
// function SuperHero(fname, lname){
//     Person.call(this, fname, lname)
//     this.isSuperHero = true
// }

// SuperHero.prototype.fightCrime = function() {
//     console.log('Fighting crime')
// }

// SuperHero.prototype = Object.create(Person.prototype)

// const batman = new SuperHero('james', 'bot')
// SuperHero.prototype.constructor = SuperHero  //superhero is not made from perosn

// console.log(batman.getFullName())


///CLASS

// class Person {
//     constructor(fName, lName){
//         this.firstName = fName
//         this.lastName = lName

//     }

//     sayMyName = function() {
//         return this.firstName + ' ' + this.lastName
//     }
// }

// const person1 = new Person('james', 'Koko')
//console.log(person1.sayMyName())

///Class Inheritance
// class SuperHero extends Person {
//     constructor(fName, lName){
//         super(fName, lName)
//         this.isSuperHero = true
//     }

//     fightCrime(){
//         console.log('Figthing crime')
//     }
// }

// const batman = new SuperHero('Jame', 'Bongo')

// console.log(batman.sayMyName())


///iterators

