 /****************************************************** */
//using this keyword:- its show current context

// let objectOne={
//     username:'iliyas',
//     loginCout:8,
//     singedId:true,
//     getUserDetail:function(){
//         // console.log(`username ${this.username}`);
//         //console.log(this);
//     }
// }
 //objectOne.getUserDetail();
 //console.log(this);
 /****************************************************** */
//  %Global Scope
// If this is used in the global scope (outside of any function), it refers to the global object (window in web browsers, global in Node.js).
 /****************************************************** */
// %Function Invocation
// When a function is called as a regular function (not as an object method), this is bound to the global object (window in web browsers, global in Node.js) in non-strict mode. In strict mode, this will be undefined.
// function printThis() {
//   console.log(this); // Window (non-strict mode), undefined (strict mode)
// }
// printThis();
 /****************************************************** */
// %Method Invocation
// When a function is called as a method of an object, this is bound to the object that the method is a property of.
// const person = {
//   name: 'John',
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}`); // Hello, my name is John
//   }
// };
// person.greet();
 /******************************************************/
 /*constructor function
 In JavaScript, the new keyword is used to create a new instance of an object from a constructor function. When the new keyword is used with a function call, the following happens:

%%A new empty object is created Behind the scenes, JavaScript creates a new empty object when the new keyword is used with a function call.
%%The constructor function is called ,The constructor function is called with the newly created object as the this value. This means that within the constructor function, this refers to the new object being created.
//Properties and methods are added to the new object, Inside the constructor function, properties and methods can be added to the new object using the this keyword. These properties and methods become part of the new object.
//The new object is returned If the constructor function does not explicitly return an object, then the new object that was created in step 1 is returned. If the constructor function does return an object, that object is returned instead.*/ 
  let functionOne = function(username,userCont,userId)
  {
         this.username=username;
         this.userCont=userCont;
         this.userId=userId;
         this.greety=function(){
            console.log(`username ${this.username}`);
         }
         return this;
  }
  let one=new functionOne('iliyas',10,1212); 
  let two=new functionOne('kasim',15,22323)
  //console.log(one);
  //console.log(one.constructor);
  //console.log(one instanceof functionOne);//true
//   console.log(two);
//   1.new empty object will created
//   2.by using new keyword constructor function will e called
//   3.by using this keyword all argument inject instanceof
//   4.return the object