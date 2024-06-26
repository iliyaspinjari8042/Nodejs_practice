/**
 * The event object in JavaScript is a special object that is automatically passed as the first argument to any event handler function when an event is triggered. This object provides information about the event that has occurred, such as the type of event, the element on which it occurred, and other relevant data and methods.

Here are some of the commonly used properties and methods of the event object:

Properties:
type: A string representing the type of the event (e.g., "click", "submit", "keydown", etc.).
target: The element on which the event was triggered.
currentTarget: The element whose event listener is currently being processed.
preventDefault(): A method that prevents the default action associated with the event (e.g., prevents form submission, link navigation, etc.).
stopPropagation(): A method that stops the propagation of the event through the DOM tree, preventing any additional event handlers from being executed.
Mouse Events:
clientX and clientY: The coordinates of the mouse pointer relative to the viewport.
pageX and pageY: The coordinates of the mouse pointer relative to the entire document.
button: The button that was clicked (0 for left, 1 for middle, 2 for right).
Keyboard Events:
key: A string representing the key that was pressed.
code: A string representing the physical key that was pressed.
shiftKey, altKey, ctrlKey, metaKey: Boolean values indicating if the respective modifier key was pressed during the event.
Form Events:
target.elements: An array-like object containing all form elements within the form.
target.elements[name].value: The value of a specific form field identified by its name attribute.
 */
 // let button=document.querySelector('.btn');
 // button.addEventListener('click',event=>{console.log(event);console.log(event.target);})
 // let link=document.querySelector('#link');
 // console.log(link);
 // link.addEventListener('click',event=>{event.preventDefault();console.log('hii i am link')});
 // let element=document.createElement('div');
 // function fun (event){
 //     console.log('para'+event.target.textContent);
 // }
 // element.addEventListener('click',fun)
 // for(let i=1;i<=20;i++)
 // {
 //     let newElement=document.createElement('p')
 //     newElement.textContent=`component ${i}`;
 //     element.appendChild(newElement)
 // }
 // document.body.appendChild(element)
 // document.addEventListener('DOMContentLoaded',function(){
 
 // })
 // let art=document.querySelector('.wrapper')
 // art.addEventListener('click',event=>{
 //     if(event.target.nodeName==='SPAN')
 //     console.log(event.target.textContent);
 // })
 /***************************************************************************************** */
 //stopPropagation()method
let parent=document.querySelector('.parents')
let child=document.querySelector('.child')
// console.log(parent);
// console.log(child);
parent.addEventListener('click',event=>{
    console.log('hii i am parent');
})
child.addEventListener('click',event=>{
    event.stopPropagation();
    console.log('hii i am child');
})