// let mv_SuperHero=['ironman','spiderman','Hulk','Thor'];
// let Dc_SuperHero=['superman','batman','flash','wonderWomen']
// mv_SuperHero.push(Dc_SuperHero); work on same array
// console.log(mv_SuperHero);
// mv_SuperHero.concat(Dc_SuperHero); create new array
// console.log(mv_SuperHero.concat(Dc_SuperHero));
//The spread operator (...) is a JavaScript operator that allows an iterable (such as an array or string)
//*********************************************** */
//Spreading elements into a new array:
// let add_Heros=[...mv_SuperHero,'blackWindow','deadpool','Xman']
// console.log(add_Heros);
//*********************************************** */
//combine Two Array
// let mv_SuperHero=['ironman','spiderman','Hulk','Thor'];
// let Dc_SuperHero=['superman','batman','flash','wonderWomen']
// mv_SuperHero=[...mv_SuperHero,...Dc_SuperHero]
// console.log(mv_SuperHero);
//*********************************************** */
//Spreading elements into function arguments:
// let num=[1,2,3]
// let sum=(a,b,c)=>a+b+c;
// console.log(sum(...num));
//*********************************************** */
//copy of array
// let mv_SuperHero=['ironman','spiderman','Hulk','Thor'];
// let newSuperHero=[...mv_SuperHero]
// console.log(newSuperHero)
//*********************************************** */
//Spreading string characters:
// let name='iliyas';
// let newName=[...name]
// console.log(newName);[ 'i', 'l', 'i', 'y', 'a', 's' ]
//*********************************************** */
//Spreading object properties:
// let student={
//     fname:'iliyas',
//     lname:'pinjari',
//     class:'cs'

// }
// let topStudent={
//     ...student,
//     marks:89,
//     percentage:'85%'
// }
// console.log(topStudent);
// {
//     fname: 'iliyas',
//     lname: 'pinjari',
//     class: 'cs',
//     marks: 89,
//     percentage: '85%'
//   }
//*********************************************** */

// In JavaScript, the flat() method is an array method introduced in ES2019 (ES10) that creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//Flattening a single level of nesting:
// let numberOne=[1,2,3,[4,5,6],7,8];
// let new_NumberOne=numberOne.flat();
// console.log(new_NumberOne);
//  let numberOne=[1,2,3,[4,[10,20,30],6],7,8];
// let new_NumberOne=numberOne.flat(2);
// console.log(new_NumberOne);
// let numberOne=[1,2,3,[4,[10,[100,200,300, ],30],6],7,8, ];
// let new_NumberOne=numberOne.flat(Infinity);
// console.log(new_NumberOne);
//*********************************************** */
//In JavaScript, Array.isArray() is a built-in method that determines whether the passed value is an Array object or not. It returns true if the value is an Array, and false otherwise.
// let num=[1,2,3]
// console.log(Array.isArray(num));//true
// // console.log(Array.isArray('iliyas'));//flase
// const fruits = ['apple', 'banana', 'orange'];
// console.log(Array.isArray(fruits)); // Output: true

// const notAnArray = 42;
// console.log(Array.isArray(notAnArray)); // Output: false
//****************************************** */
// The Array.from() method in JavaScript is a way to create a new array instance from an array-like or iterable object.
// let magic=Array.from(arrayLike, mapFunction, thisValue)
// console.log(magic);
// const arrayLike = {
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     length: 3
//   };
  
//   const arr = Array.from(arrayLike);
//   console.log(arr); // Output: ['a', 'b', 'c']
// console.log(Array.from({name:"iliyas"}))//[]
// let a=200, b=200,c=300;console.log(Array.of(a,b,c));//[ 200, 200, 300 ]
//****************************************** */
// The Array.is() method in JavaScript is used to determine whether two values are the same value. It is similar to the === strict equality operator, but it has some additional checks for certain special cases involving NaN and 0.
// console.log(Array.is(1, 1)); // Output: true
// console.log(Array.is(1, '1')); 