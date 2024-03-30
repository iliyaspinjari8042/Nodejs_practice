//for loop: The for loop is used when you know the number of iterations in advance
// for (let i = 0; i < 5; i++) {
//     console.log(i); // Output: 0 1 2 3 4
//   }
  //while loop: The while loop executes a block of code as long as a specified condition is true. It is useful when you don't know the exact number of iterations in advance.
//   let count = 0;
// while (count < 5) {
//   console.log(count); // Output: 0 1 2 3 4
//   count++;
// }
//do...while loop: The do...while loop is similar to the while loop, but it executes the block of code at least once, even if the condition is false.
// let count1 = 0;
// do {
//   console.log(count); // Output: 0 1 2 3 4
//   count++;
// } while (count1 < 5);
//for...in loop: The for...in loop is used to iterate over the enumerable properties of an object. It is commonly used to iterate over the keys of an object.
// const obj = { a: 1, b: 2, c: 3 };
// for (const prop in obj) {
//   console.log(prop, obj[prop]); // Output: a 1, b 2, c 3
// }
const lang={
  js:'javaScriot',
  cpp:'c++',
  rb:'ruby'
}
//for (const key in lang) {
//  console.log(`${key} :- $(lang[key])`);
// }
//for...of loop: The for...of loop is used to iterate over the values of an iterable object, such as an array or a string.
// const arr = [1, 2, 3, 4, 5];
// for (const value of arr) {
//   console.log(value); // Output: 1 2 3 4 5
// }
// control+c=>stop infinite loop
// control +d => select duplicate
//forEach(callback, thisArg): The forEach() method executes the provided callback function once for each key-value pair in the Map object, in insertion order.
const myArr=['js','java','py','rb','cpp']
// myArr.forEach(function(item){
//   console.log(item);
// })
// myArr.forEach(function(item,key){
//   console.log(`index number ${key}, and value is ${item}`);
// })
// myArr.map(item=>console.log(item))
//myArr.map((item,key)=>console.log(`${key}:${item}`))
// console.log(myArr.map((item,key)=>`${key}:${item}`));
function arr(item,key,arra){
  console.log(key+" "+item+' '+arr);
}
myArr.forEach((item,key,arra)=>{
  //console.log(key,item,arra);
});
const myCoding=[
  {
    langugeName:'javaScript',
    langaugeFileKey:'js'
  },
  {
    langugeName:'java',
    langaugeFileKey:'java'
  },
  {
    langugeName:'Python',
    langaugeFileKey:'py'
  }
]
myCoding.forEach((item)=>console.log(item.langugeName))