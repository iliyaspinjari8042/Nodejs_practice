// const t1=performance.now();
// for(let i=1;i<=100;i++)
// {
//     let element=document.createElement('p');
//     element.textContent=`i am paragraph ${i}`;
//     document.body.appendChild(element)
// }
// const t2=performance.now();
// console.log('total time taken is '+(t2-t1));
// /**************************************************************** */
// const t3=performance.now();
// let newElement=document.createElement('div');
// for(let i=1;i<=100;i++)
// {
//     let newPara=document.createElement('p');
//     newPara.textContent=`i am paragraph ${i}`;
//     newElement.appendChild(newPara)
// }
// document.body.appendChild(newElement)
// const t4=performance.now();
// console.log('total time taken is '+(t4-t3));
// /**************************************************************** */
// const t5=performance.now();
// const fragment=document.createDocumentFragment();
// for(let i=1;i<=100;i++)
// {
//     let element=document.createElement('p');
//     element.textContent=`i am paragraph ${i}`;
//   fragment.appendChild(element)
// }
// document.body.appendChild(fragment)
// const t6=performance.now();
// console.log('total time taken is '+(t6-t5));
/**************************************************************** */