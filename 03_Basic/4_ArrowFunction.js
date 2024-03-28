//simple arrow function
const one=()=>{
  console.log("hiii i am arrow function one");
}
//one()//hiii i am arrow function one
//single line arrow function
let two=(a,b)=>console.log(a+b);
//two(10,20);
//single parameter
let three=name=>console.log(name);
//three('iliyas');
//doesnt have any parameter
let four=()=>console.log("hii i am four");
//four();
//arrow function use as a callback
let number=[1,2,3,4,5,6,7,8,9,10];
//console.log(number.map(num=>num*2).toString().replace(/,/g," "));
/**
 * In JavaScript, the "implicit return" feature is a syntax shorthand introduced with arrow functions. It allows you to omit the return keyword when returning a value directly from an arrow function, making the code more concise.
 * const addNumber=(x,y)=>x+y;
console.log(addNumber(10,40));
++++++++++++++++++++++++++++++++++++++++++++++++++
const addNumber=name=>name;
console.log(addNumber('iliyas'));
++++++++++++++++++++++++++++++++++++++++++++++++++++
const addNumber=(x,y)=>(x+y);
console.log(addNumber(20,70));
+++++++++++++++++++++++++++++++++++++++++++++++++++++
const addNumber=(x,y)=>({username:'iliyas'});
console.log(addNumber(20,70));
 */

const addNumber=(x,y)=>({username:'iliyas'});
console.log(addNumber(20,70));