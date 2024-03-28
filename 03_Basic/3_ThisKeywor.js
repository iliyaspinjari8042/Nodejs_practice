//this => represent current context => current value
//in browser window is a globle objact
//console.log(this);in browser is window but
//in other its {}
function chai()
{
    const userName='hitesh';
    console.log(this.userName);//undefine
}
// chai();
//console.log(this)
/**
 * whta is this keyword in javaScript?
 * the javascript this keyword refer th the object it belons to
 * it has defferent value depeding on where it is used
 * 1)Alone , this refer to the global object
 * Global Scope: In the global scope (outside any function), this refers to the global object, which is window in a web browser or global in Node.js.
 * console.log(this)//in nodes {} in web-browser window
 * 2)in a regular function this refer to the global object
 * this is bound to the global object (window in a browser, global in Node.js).
 * function add(){
    console.log(this)
}
add();
3) in method this is refer to the owner object
Method Invocation: When a function is called as a method of an object, this is bound to that object.
const student={
    name:'iliyas',
    age: 25,
    add:function (){
        console.log(this)
    }

}
student.add();//{ name: 'iliyas', age: 25, add: [Function: add] }
4)Constructor Invocation: When a function is invoked with the new keyword, this is bound to the newly created instance object.
function person(name){
        this.name=name;
    }
    let person1=new person('iliyas');
    console.log(person1.name);//iliyas
 */
