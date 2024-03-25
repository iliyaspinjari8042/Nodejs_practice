// let a='iliyas';
// let b='pinjari';
// console.log(a+b)
//tring interpolation (also known as template literals or template strings) is a feature in JavaScript that allows you to embed expressions within strings, making it easier to create dynamic strings
// console.log(`my name is ${a} and my sirname is ${b}`)
let name= new String('abcdefg');
// console.log(name.length)//14
// console.log(name.charAt(4))//a
// console.log(name.indexOf('p'))//7
//************************************************* */
// console.log(name.substring(1))//liyas pinjari
// console.log(name.substring(2,6))//iyas
// console.log(name.substring(-5)); // its treat like name.substring(0)
// console.log(name.substring(2,-5))//it is treat like name.substring(2,0)==>ab
// console.log(name.substring(-4,-5))// its is treat like name.substring(0,0)
// console.log(name.substring(5,2))//cde  str.substring(2, 5).
//************************************************* */
// console.log(name.slice(1))//bcdefg
// console.log(name.slice(1,5))//bcde
// console.log(name.slice(0,-4))//abc
// console.log(name.slice(-5))//cdefg
// console.log(name.slice(-5,-3))//cd
// console.log(name.slice(0,-5))//ab
//************************************************* */
// const newString='iliyas'
// // console.log(newString.trim());
// //console.log(newString.trimStart());
// console.log(newString.trimEnd());
//************************************************* */
// const emailAddress='iliyaspinjari8042@gmail.com';
// console.log(emailAddress.replace('.com','.in'))
//************************************************* */
//  const emailAddress='iliyaspinjari8042@gmail.com';
//  console.log(emailAddress.includes("iliyas"))//true
//************************************ */
/**
 * Splite Methods
 * The split() method in JavaScript is used to divide a string into an array of substrings based on a specified separator or regular expression pattern.
 * string.split(separator, limit)
 */
// let address='khirdi-khurd-taluka-raver'
// console.log(address);
// let newAddress=address.split('-');
// console.log(newAddress);//[ 'khirdi', 'khurd taluka', 'raver' ]
// console.log(address.split('-',2));[ 'khirdi', 'khurd' ]
/**
 * charCodeAt(index): Returns the Unicode value of the character at the specified index position in the string.
 * const str = "Hello, World!";
console.log(str.charCodeAt(0)); // Output: 72
*******************************************************************
repeat(count): Returns a new string that repeats the original string the specified number of times.
const str = "Hello, ";
console.log(str.repeat(3)); // Output: "Hello, Hello, Hello, "
 */