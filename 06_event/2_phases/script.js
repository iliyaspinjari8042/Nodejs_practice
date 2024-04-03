/**
 * Event propagation in JavaScript refers to the mechanism by which an event travels or propagates through the Document Object Model (DOM) tree. When an event occurs on an element, it can trigger not only the event handlers attached to that specific element but also the event handlers attached to other elements in the DOM hierarchy.
 */
// bubbling phase
// let div1=document.querySelector('.div1')
// let div2=document.querySelector('.div2')
// let div3=document.querySelector('.div3')
// div1.addEventListener('click',e=>{alert('i am div 1');})
// div2.addEventListener('click',e=>{alert('i am div 2');})
// div3.addEventListener('click',e=>{alert('i am div 3');})
//capturing phase
// let div1=document.querySelector('.div1')
// let div2=document.querySelector('.div2')
// let div3=document.querySelector('.div3')
// div1.addEventListener('click',e=>{alert('i am div 1');},true)
// div2.addEventListener('click',e=>{alert('i am div 2');},true)
// div3.addEventListener('click',e=>{alert('i am div 3');},true)
//event Object
