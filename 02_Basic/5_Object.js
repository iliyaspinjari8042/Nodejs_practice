/************Destructuring Objects:********** */
// Object destructuring is a JavaScript expression that allows you to extract values from arrays or properties from objects into distinct variables. It is a concise and convenient way of accessing and unpacking values from data structures into their own variables.
/********Destructuring object:********** */

// const person = {
//     name: 'John Doe',
//     age: 30,
//     city: 'New York'
//   };
  
//   // Destructuring object properties into variables
//   const { name, age, city } = person;
  
//   console.log(name); // Output: 'John Doe'
//   console.log(age); // Output: 30
//   console.log(city); // Output: 'New York'
//   const { name: fullName, age: personAge } = person;

// console.log(fullName); // Output: 'John Doe'
// console.log(personAge); // Output: 30
// /********Destructuring Arrays:********** */
// const colors = ['red', 'green', 'blue'];

// // Destructuring array elements into variables
// const [firstColor, secondColor] = colors;

// console.log(firstColor); // Output: 'red'
// console.log(secondColor); // Output: 'green'
// /********Destructuring with Default Values:**************** */
// const person = {
//     name: 'John Doe',
//     age: 30
//   };
  
//   // Destructuring with default values
//   const { name, age, city = 'London' } = person;
  
//   console.log(name); // Output: 'John Doe'
//   console.log(age); // Output: 30
//   console.log(city); // Output: 'London'