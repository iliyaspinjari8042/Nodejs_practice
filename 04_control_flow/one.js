//In programming, control flow refers to the order in which statements or instructions are executed in a program. It determines the flow of execution and the sequence in which different parts of the code are executed.
//In JavaScript, values are considered either truthy or falsy. These concepts are used in conditional statements and other scenarios where a value needs to be evaluated as a Boolean (true or false). The following values are considered falsy:

// Falsy values:

// false (the boolean value)
// 0 (the number zero)
// -0 (the negative number zero)
// 0n (the BigInt zero)
// null
// undefined
// NaN (Not a Number)
// '' (an empty string)
//BIgInt 0n
// All other values are considered truthy. This includes: 
/** Falsy values
if (false) console.log('This will not run');
if (0) console.log('This will not run');
if (null) console.log('This will not run');
if (undefined) console.log('This will not run');
if (NaN) console.log('This will not run');
if ('') console.log('This will not run');

 Truthy values
if (true) console.log('This will run');
if (42) console.log('This will run');
if ('hello') console.log('This will run');
if ([]) console.log('This will run');
if ({}) console.log('This will run');
if (function() {}) console.log('This will run'); 
The truthy/falsy concept is not only used in conditional statements but also in logical operations like && (logical AND), || (logical OR), and ! (logical NOT). For example:
const result = '' || 'default value'; // result is 'default value'
const value = 0 && 42; // value is 0
const isTrue = !false; // isTrue is true
Truthy values:

true (the boolean value)
Any non-zero number (positive or negative), e.g., 42, -3.14
Any non-zero BigInt value, e.g., 42n, -3n
Any non-empty string, e.g., 'hello', 'false' (the string 'false' is truthy)
Arrays, even if empty, e.g., []
Objects, even if empty, e.g., {}
Defined functions and classes*/
let one=[];
if(one.length==0)
{
    //console.log('i am zero');
}else{
    //console.log('i am not empty')
}
const two={

}
if(Object.keys(two).length==0)
{
    //console.log('sorry i am emplty')
}else{
    //console.log('i am not empty');
}
//console.log(false==0);
//console.log(''==0);
//console.log(0=='');
/**In JavaScript, the Nullish Coalescing Operator (??) is a logical operator that was introduced in ECMAScript 2020 (ES11). It is used to provide a fallback value when dealing with null or undefined values. It is often referred to as the "nullish coalescing operator" or the "null coalescing operator".
 * The main advantage of the nullish coalescing operator is that it only considers null and undefined as falsy values, unlike the logical OR operator, which treats all falsy values (such as 0, '', NaN, and false) as falsy.

The nullish coalescing operator provides a more precise way to handle null and undefined values, making code more readable and easier to maintain. It is particularly useful when working with optional function parameters or handling data from APIs that may return null or undefined values.

The syntax for the nullish coalescing operator is: 
value1 ?? value2*/
let value1;
value1=undefined??5;
//console.log(value1);5??10==>5 always select first value
//console.log(value1);10??5=> 10
//console.log(value1);//null??5 =>5
console.log(value1); //undefined??5 => 5
//******************************************************** */
let iceCreame=100;
iceCreame>=100?console.log("this price is affordable"):console.log("this price is out of my bugdet");;