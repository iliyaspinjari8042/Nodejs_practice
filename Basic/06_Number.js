
//************************NUmber method************************ */
// toLocaleString() method it returns a string with a language-sensitive representation of the number.
// let hundred=10000000;
// console.log( typeof hundred.toLocaleString('en-IN'));//1,00,00,000 String
/**
 * number.toExponential(fractionDigits): Returns a string representing the Number object in exponential notation with one digit before the decimal point and fractionDigits digits after the decimal point.
number.toFixed(digits): Returns a string representing the Number object in fixed-point notation with digits digits after the decimal point.
number.toPrecision(precision): Returns a string representing the Number object with a specified precision (the number of significant digits).
number.toString(radix): Returns a string representing the specified Number object with the specified radix (base).
number.valueOf(): Returns the primitive value of the specified Number object.
const num = 123.456;
console.log(num.toExponential(2)); // "1.23e+2"
let id=new Number(234.125);
// console.log(typeof id)
// let id2=id.toString();
// console.log(typeof id2)
// let id3=id.toFixed();
// console.log(id3);//1234.15263=>1234
// let id3=id.toFixed(3);
// console.log(id3);//1234.15263=>12
// console.log(id.toPrecision(3))//234
// console.log(id.toPrecision(2))//234
 */
//************************NUmber property************************ */
// console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // Output: 5e-324
// console.log(Number.POSITIVE_INFINITY); // Output: Infinity
// console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity
// console.log(Number.NaN); // Output: NaN
// console.log(0 / 0); // Output: NaN
// console.log(Math.sqrt(-1)); // Output: NaN
// console.log(Number.EPSILON); // Output: 2.220446049250313e-16
// console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991
// ***************Static Methods**********************
// console.log(Number.isFinite(42)); // true
// console.log(Number.isInteger(3.14)); // false
// console.log(Number.isNaN(NaN)); // true
// console.log(Number.isSafeInteger(Math.pow(2, 53))); // false
// console.log(Number.parseFloat('3.14')); // 3.14
// console.log(Number.parseInt('101', 2)); // 5 (parsed as binary)
//***********Math Function ***************** */
// The Math object in JavaScript is a built-in object that provides a collection of mathematical functions and constants. It is a static object, which means that all properties and methods are accessible directly from the Math object itself, without creating an instance of it.

// Here are some commonly used properties and methods of the Math object:

// Properties:

// Math.PI: The value of π (pi), approximately 3.14159.
// Math.E: The value of e, the base of natural logarithms, approximately 2.718.
// Math.LN2: The natural logarithm of 2, approximately 0.693.
// Math.LN10: The natural logarithm of 10, approximately 2.303.
// Math.LOG2E: The base-2 logarithm of e, approximately 1.443.
// Math.LOG10E: The base-10 logarithm of e, approximately 0.434.
// Math.SQRT2: The square root of 2, approximately 1.414.
// Math.SQRT1_2: The square root of 1/2, approximately 0.707.
// Methods:

// Math.abs(x): Returns the absolute value of x.
// Math.ceil(x): Returns the smallest integer greater than or equal to x.
// Math.floor(x): Returns the largest integer less than or equal to x.
// Math.round(x): Returns the value of x rounded to the nearest integer.
// Math.max(x, y, ...): Returns the maximum value among the arguments.
// Math.min(x, y, ...): Returns the minimum value among the arguments.
// Math.pow(x, y): Returns x raised to the power of y.
// Math.sqrt(x): Returns the square root of x.
// Math.exp(x): Returns the value of e^x (the exponential function).
// Math.log(x): Returns the natural logarithm (base e) of x.
// Math.random(): Returns a pseudo-random number between 0 and 1.
// let ran=Math.floor((Math.random()*100)+1);
// console.log(ran);//1 to 100  range
// function range (min,max)
// {
//    let ran=Math.floor(Math.random()*(max-min+1))+min
//    console.log(ran)
// }
// range(1,10)//1 to 10