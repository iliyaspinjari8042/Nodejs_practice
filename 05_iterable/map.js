/*In JavaScript, Map is a built-in data structure that allows you to store key-value pairs in an ordered collection. It is similar to an object, but with some important differences:

Key Types: In objects, keys must be strings or symbols, but in a Map, keys can be of any type, including objects, functions, and other primitive types like numbers or booleans.
Key Order: In objects, the order of keys is not guaranteed, but in a Map, the insertion order of key-value pairs is preserved.
Size: Objects have no built-in way to get the number of properties they contain, but Map objects have a size property that returns the number of key-value pairs.
Here's
 how you can create and work with a Map:8
 const myMap = new Map(); // Create an empty Map*/
 //Creating a Map:
 const myMap = new Map(); // Create an empty Map
 //Adding Key-Value Pairs:
 myMap.set('name','ilyas')
 myMap.set('age',25)
 myMap.set({lname:'pinjari'},'muslim')
 myMap.set('key1', 'value1'); // Add a string key-value pair
myMap.set(2, 'value2'); // Add a number key-value pair
myMap.set({ name: 'John' }, 'value3'); // Add an object key-value pair
//Accessing Values:
//console.log(myMap)
 //console.log(myMap.get('name'));
 //Checking if a Key Exists:
 //console.log(myMap.has('name'));//true
 //Removing a Key-Value Pair:
myMap.delete('key1');
//console.log(myMap);
//Getting the Size of a Map:
//console.log(myMap.size);
//Iterating over a Map:
// for (const [key,value] of myMap) {
//     console.log(`key is ${key} : value is ${value}`); 
// }
/*
clear(): The clear() method removes all key-value pairs from the Map object, making it empty. It doesn't return anything.
const myMap = new Map([['a', 1], ['b', 2]]);
console.log(myMap.size); // Output: 2

myMap.clear();
console.log(myMap.size); // Output: 0
**********************************************
keys(): The keys() method returns a new iterator object that contains the keys for each element in the Map object in insertion order.
javascript


Copy code
const myMap = new Map([['a', 1], ['b', 2], ['c', 3]]);
const iterator = myMap.keys();

console.log(iterator.next().value); // Output: 'a'
console.log(iterator.next().value); // Output: 'b'
console.log(iterator.next().value); // Output: 'c'
**********************************************
values(): The values() method returns a new iterator object that contains the values for each element in the Map object in insertion order.
javascript


Copy code
const myMap = new Map([['a', 1], ['b', 2], ['c', 3]]);
const iterator = myMap.values();

console.log(iterator.next().value); // Output: 1
console.log(iterator.next().value); // Output: 2
console.log(iterator.next().value); // Output: 3
****************************************************
entries(): The entries() method returns a new iterator object that contains an array of [key, value] pairs for each element in the Map object, in insertion order.
javascript


Copy code
const myMap = new Map([['a', 1], ['b', 2], ['c', 3]]);
const iterator = myMap.entries();

console.log(iterator.next().value); // Output: ['a', 1]
console.log(iterator.next().value); // Output: ['b', 2]
console.log(iterator.next().value); // Output: ['c', 3]*/