
//this is called function deffination/Function Declaration:
function sayMyName(){
   console.log('name is iliyas');
   console.log('age is 26');
   console.log('number is 11515147');
   console.log('address is NewDelhi rajender Nager');
}
//sayMyName  => reference
//sayMyName()//execution
/***************************** */
function addNumber(number1,number2)
{
    console.log(number1+number2);
}
//addNumber(10,20);//30
//addNumber();//NaN
//addNumber(10);//NaN
//let num=addNumber(10,20);//30
//console.log(num);//undefined
/***************************** */
function multNumber(number1,number2)
{
    let result=number1+number2
    return result;
}
//let result=multNumber(10,null);
// console.log(result);//200
//console.log(result);//10
/***************Function Expression:***** */
//const greet = function(name) {
   // console.log(`Hello, ${name}!`);
 // };
  /***************Arrow Function (ES6)::***** */
  //const greet = (name) => {
  //  console.log(`Hello, ${name}!`);
  //};
  /**************Function Expressions and Anonymous Function*/
  //Function expressions allow you to create anonymous functions, which can be assigned to variables or passed as arguments to other functions. 
//   const multiply = function(a, b) {
//     return a * b;
//   };
  
//   const result = multiply(3, 4); // result will be 12
function company(username)
{
    if(!username)
    {
        return `please fill your username`
    }
    return `the username of emplyee is ${username}`
}
//console.log(company('iliyas'));
/**********deefault paramter value */
function cinemaHallTicket(number=1)
{
    return `you booked ${number} thicket for BahuBali Movie`
}
let ticketBook=cinemaHallTicket(5);
//console.log(ticketBook);
/***********Rest Parameters (for function arguments)******** */
function webSiteVisitePerson(...person)
{   
    return person;
}
//let result=webSiteVisitePerson('iliyas','kasim','salman','raj');
//console.log(result);
function addinfiniteNumber(...number)
{
    let result=0;
    for(let n of number)
    {
        result+=n;
    }
    return result;
}
let ca=addinfiniteNumber(10,20,30,40,50,60);
//console.log(ca);
/****** pass object as a parameter in function */
// const obj={
//     name:'iliyas',
//     age:26,
//     email:'example@gmail.com'
// }
function user(uniqueObject){
   console.log(`the name of the user is ${uniqueObject.name} and his age is ${uniqueObject.age} and emial address is ${uniqueObject.email}`)
}
//user(obj);
user({
    name:'iliyas',
     age:26,
     email:'example@gmail.com'
})