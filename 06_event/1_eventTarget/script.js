// console.log('first');
// const myPara=new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//         console.log('second');
//     },6000)
//     resolve(12345);
// })
// console.log('third')
// console.log('first');
// const myPara=new Promise(function(resolve,reject)
// {
//     setTimeout(()=>{
//         console.log('hii i am para2')
//     },5000)
//     resolve('cool man')
// })
// myPara.then(function(value){console.log(value);})
// console.log('second');
/****************************************************************** */
//addEventListener
// let button=document.querySelector('#btn');
// console.log(button);
// button.addEventListener('click',function(event){
//      button.style.backgroundColor='blue';
//      b
//      console.log('your from submitted')
// })
/****************************************************************** */
/*2)removeEventListener
const button=document.querySelector('#btn');
let fun=()=>{
    button.style.backgroundColor='pink';
    console.log("thank you for register");
}
button.addEventListener('click',fun);
// button.removeEventListener('click',fun)*/
/****************************************************************** */
// dispatchEvent
// The dispatchEvent() method is a method defined by the EventTarget interface in JavaScript. It allows you to manually trigger or dispatch a specific event on an object that implements the EventTarget interface(synchronously)
// also apply to events dispatched manually with dispatchEvent().
// let btn = document.querySelector('#btn');

//  btn.addEventListener('click', function () {
//         alert('Mouse Clicked');
//  });

// let clickEvent = new Event('click');
// btn.dispatchEvent(clickEvent);
/****************************************************************** */
// const myCustomEvent = new CustomEvent('myEvent', {
//     detail: {
//       message: 'This is a custom event'
//     },
//     bubbles: true,
//     cancelable: true
//   });
//   const button = document.querySelector('#btn');

// button.addEventListener('myEvent', function(event) {
//   console.log('Custom event triggered:', event.detail.message);
// });

// button.dispatchEvent(myCustomEvent);