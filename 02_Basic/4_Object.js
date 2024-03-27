const user=new Object();//singleton object
// console.log(user);
const newUser={//non-singleton object
};
newUser.email='example@gmail.com';
newUser.age=26;
newUser.isLogin=false;
// console.log(newUser)
//**************************************** */
const regularUser={
    userName:{
           mainName:{
              fullName:{
                name:'iliyas',
                age:27,
                id:1245
              }
           }
    }
}
// console.log(regularUser.userName.mainName.fullName.name)
//**************************************** */
let a={
    1:'a',
    2:'b'
}
let b={
    3:'c',
    4:'d'
}
/**********first approach**************/
// let comp={
//     ...a,...b
// }
// console.log(comp)
/**********second approach**************/
//Object.assign(target, ...sources)
// Object.assign() is a built-in method in JavaScript that is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.
// let comb=Object.assign(a,b);
// console.log(comb);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(a);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
let comb=Object.assign({},a,b);
// console.log(comb);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(a);// '1': 'a', '2': 'b' }
/**********object.key and object.value approach**************/
const tinderUser={
    name:'iliyas',
    age:26,
    acoountId:"iliyas12"
}
console.log(Object.keys(tinderUser));[ 'name', 'age', 'acoountId' ]
console.log(Object.values(tinderUser));[ 'iliyas', 26, 'iliyas12' ]
console.log(Object.entries(tinderUser));[ [ 'name', 'iliyas' ], [ 'age', 26 ], [ 'acoountId', 'iliyas12' ] ]
console.log(tinderUser.hasOwnProperty('age'));//true