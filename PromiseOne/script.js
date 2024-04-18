
// let promisePr=new Promise((resolve,reject)=>{
//    console.log("hii frind kise ho aap sab");
//    resolve("hiiii")
// })
// promisePr.then(event=>{
//     console.log(event)
// })

/******************************************************** */
// let promise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("hii i am synchronized methoed");
//         resolve()
//     },1000)
// })
// promise.then(function(){
//     console.log("Synchronized One");
// })
/******************************************************** */
// new Promise((resolve,reeject)=>{
//     setTimeout(()=>{
//         console.log("i am synchronized operation two")
//         resolve();
//     },2000)
// }).then(()=>{
//     console.log("Synchronized Two");
// })
/******************************************************** */
 
/******************************************************** */
// let promiseFour= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let error=true;
//         if(!error){
//         resolve({username:'noorain',password:'khubri ka beta'})
//         }
//         else{
//             reject(new Error("ERROR : something is wrong"))
//         }
//     }, 2000);
// })
// promiseFour
// .then(user=>{
//     console.log(user);
//     return user.username
// })
// .then(username=>{
//     console.log(username);
// })
// .catch(event=>{
//   console.log(event)
// })
// .finally(()=>{
//     console.log('promise either resolve or rejected');
// })
/******************************************************** */
/*Promise chaining in JavaScript is a technique used to handle asynchronous operations in a more organized and readable way. It allows you to chain multiple .then() calls, each one being executed when the previous promise is resolved.
Promise chaining allows you to break down complex asynchronous operations into a series of steps, with each step handling a specific part of the operation. This can make your code more readable, easier to maintain, and easier to reason about.

It's important to note that each .then() call should return a value (either a new Promise or a resolved value) to continue the chain. If you don't return a value, the chain will effectively stop at that point, and any subsequent .then() calls will not be executed.*/
// let  waada1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("hii i a waada 1 synchronized object")
//     },2000);
//     resolve(true)
// })
// let output=waada1.then(()=>{
//      let waada2=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("hii i a waada 2 synchronized object")
//         },3000)
//         resolve('waada two resolved')
//      })
//   return waada2;
// })
// output.then((event)=>{
//     console.log(event);
// })
/******************************************************** */
// The keyword async before a function makes the function return a promise:

// Async functions, also known as asynchronous functions, are a way to handle asynchronous code in JavaScript. They are introduced to simplify the process of writing and handling asynchronous code, which involves operations that can take some time to complete and do not block the main thread of execution.
// Promise Handling: Async functions automatically return a Promise, which represents the eventual completion (or failure) of the asynchronous operation. This eliminates the need to manually create and handle Promises, as is required when using traditional Promise-based code.
// Await Keyword: Within an async function, you can use the await keyword to pause the execution of the function until an asynchronous operation completes. This allows you to write asynchronous code that looks and behaves more like synchronous code, making it easier to reason about and avoid issues like the "callback hell" (deeply nested callbacks).
/******************************************************** */
// async function FunctionOne()
// {
//     return "hii i am function One";
// }
// console.log(FunctionOne());
//FunctionOne();//type in console
/******************************************************** */
// async function utility(){
//     let delhiMausam=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("delhi tempreture in very heigh");
//         },5000);
//     });
//     let kashmirMausam=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("kashmir temreture in very low");
//         },6000);
//     });
//     let dt= await delhiMausam;
//     let kt=await kashmirMausam;
//     return [dt,kt];
// }
/******************************************************** */
// let promiseSix= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        let error=true;
//        if(!error)
//        {
//         resolve("response sucessfully fulfilled");
//        }else{
//         reject(new Error("Something went to wrong"))
//        }
//     },3000)
// })
// async function consumePromiseSix(){
     
//     try {
//         let response=await promiseSix; 
//         console.log(response)
//     } catch (error) {
//         console.log(error);
//     }
// }
//consumePromiseSix();
/******************************************************** */
// let myPromiseOne=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false;
//         if(!error)
//         {
//             resolve("response successfully fullfilled");
//         }
//         else{
//             reject(new Error("something went to wrong"));
//         }
//     },3000)
// })
// myPromiseOne
// .then(res=>{
//     console.log(res);
// })
// .catch(res=>{
//     console.log(res);
// })
// .finally(()=>{
//     console.log("promise either fullfill or reject");
// })
// async function responseOne(){
//     try{
//         let response= await myPromiseOne;
//         console.log(response);
//     }catch(error)
//     {
//         console.log(error);
//     }
//     finally{
//         console.log("promise either fullfill or reject");
//     }
// }
// responseOne();
/******************************************************** */
// In JavaScript, fetch is a modern web API that provides a clean interface for fetching resources across the network. It is a more powerful and flexible alternative to the older XMLHttpRequest API used for making AJAX requests. Here's an overview of how fetch works:
// The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.
// The fetch() method starts the process of fetching a resource from a server.

// The fetch() method returns a Promise that resolves to a Response object.

//  No need for XMLHttpRequest anymore.
// fetch(file)
// .then(x => x.text())
// .then(y => myDisplay(y));

// Fetch is based on async and await. The example might be easier to understand like this:

// async function getText(file) {
//   let x = await fetch(file);
//   let y = await x.text();
//   myDisplay(y);
// }
// sync function getText(file) {
//     let myObject = await fetch(file);
//     let myText = await myObject.text();
//     myDisplay(myText);
//   }
/*********************************************************** */
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(res=>{
//     let response=res.json();
//     return response;
// }).then(data=>console.log(data.title))
// .catch(err=>console.log(err))
// .finally(()=>console.log("response either fullfilled or rejecty"))
/*********************************************************** */

// async function responseAPI(file){
//     try{
//        let response=await fetch(file);
//        let data=await response.json();
//        console.log(data.completed);
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
//     finally{
//         console.log("responseAPI either fullfilled or rejecty")    }
// }
// responseAPI("https://jsonplaceholder.typicode.com/todos/1");
/*********************************************************** */

// let getData=fetch("https://jsonplaceholder.typicode.com/posts/1");
// getData.then((res)=>{
//     let response=res.json();
//     return response
// }).then(data=>console.log(data))
// .catch(err=>console.log(err))
// .finally(()=>console.log("response either fullfilled or reject"));
async function helper(){
    let position= {
        method: 'POST',
        body: JSON.stringify({
          title: 'iliyas information',
          name:'iliyas',
          marks:78,
          body: 'bodybuilder',
          userId: 1951681612013,

        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
  let response= await fetch('https://jsonplaceholder.typicode.com/posts',position);
  let magic= await response.json();
  return magic.title;
}
async function utility(){
    let  data=helper();
    console.log(data);
}
utility();

  