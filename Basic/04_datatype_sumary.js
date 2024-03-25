//there are divind into 2 part basis of how type data will be store in memory and how to access it
//primitive its follow pass by value
// theire are 7 type
// number , String, boolean , null, undifined, symbol , BigInt
//reference type (non primitive)
// its follow passs by refernece
// Array , Object, Function
/**
 * avaScript is a dynamically-typed language, which means that variable data types are determined at runtime, not compile-time.

In statically-typed languages, such as Java, C++, or C#, the type of a variable must be explicitly declared before it is used, and it cannot hold values of a different type during the program's execution.
in dynamically-typed languages like JavaScript, you don't need to declare the data type of a variable explicitly. The type is determined automatically at runtime based on the value assigned to the variable. The same variable can hold different types of values during the course of the program's execution.
let x; // Variable x has no type initially (undefined)
x = 5; // Now x is a number
console.log(typeof x); // Output: "number"

x = "Hello"; // Now x is a string
console.log(typeof x); // Output: "string"

x = true; // Now x is a boolean
console.log(typeof x); // Output: "boolean"
 */
// let id=Symbol('123')
// let userId=Symbol('123')
// console.log(id===userId);
// let bigInt=12345678998765432n;
// console.log(typeof bigInt);
//function typeof is function but its called object Function