//The map() method in JavaScript is an array method that creates a new array by applying a provided function to each element of the original array. It does not modify the original array but rather returns a new array with the transformed elements.

//The syntax for map() is:
//array.map(function(currentValue, index, arr), thisValue)
//function(currentValue, index, arr): A function that is called for each element in the array. This function can perform any operation on the element, such as transforming, filtering, or manipulating it.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
const users = [
    { name: 'John', active: true },
    { name: 'Jane', active: false },
    { name: 'Bob', active: true },
    { name: 'Alice', active: false }
  ];
  
  const activeUserNames = users
    .filter(user => user.active)
    .map(user => user.name);
  
  console.log(activeUserNames); // Output: ['John', 'Bob']