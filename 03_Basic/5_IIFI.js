// IIFE stands for Immediately Invoked Function Expression. It's a JavaScript function that runs as soon as it's defined. The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world.

//Here's the syntax for an IIFE:
// (function() {
//     // Function body
//   })();
//(function(a,b){console.log(a+b);})(10,20);
//(function(){console.log('hii i am iliyas');})();
//global scope ke pollution se problem hoti h kahi bar jo bhi us global ke varable or uske declaration ko hatane k liye iska use kiya.
// Avoiding Polluting the Global Namespace: By wrapping code inside an IIFE, developers could avoid polluting the global namespace with variables and functions, which could lead to naming conflicts and potential bugs.
// (function(name){
//     console.log(`hi i am bug and my name is ${name}`);
// })('iliyas');
// ((name)=>{
//     console.log(`hi i am bug and my name is ${name}`);

// })('kasim');
// (name=>console.log(`my name is ${name}`))('raj');
// //with paranthesis
// (function(name){
//     console.log(`my name is ${name}`
//     )}('aaqib'));
//with return value
//paranthesiss around the function
(function(){
    console.log('hii i am iliyas')
})();
//paranthesis around the entite expression
(function(){
    console.log('hii i am kasim');
}());
//using arrow function
(()=>{
    console.log("hii i am raj");
})();
//with parameter
(function(name){
    console.log(`hii i am ${name}`);
})('kumawat');
//with return value
const number=(function(){
    return 'iliyas';
})();
console.log(number);
//assigning to the variable
const make=(name=> `hii  i am ${name}`)('kasim');
console.log(make);
//name the function expression
(function add(a,b){
   console.log(a+b);
})(10,20);
//using object
({
    name:function(name)
    {
        console.log(`my name is ${name}`);
    }
}.name('shadab'));
//using array
([
    function(km){
        console.log(`hii i am ${km}`);
    }('nihal')
]);
//using new keyword
new function(a,b)
{
    console.log(`hii my name is ${a} and i am from ${b}`);

}('iliyas','khirdi khurd')