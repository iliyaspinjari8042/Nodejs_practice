
/*
In JavaScript, you can create a Date object using the new Date() constructor. This will give you the current date and time according to the user's system clock.
const currentDate = new Date();
You can also create a Date object for a specific date and time by passing arguments for the year, month (0-indexed), day, hour, minute, second, and millisecond to the constructor.
const specificDate = new Date(2024, 2, 26, 10, 30, 0, 0);
*/
//************************************************************* */
// const currentDate = new Date('2023-10-5');
// console.log(currentDate)//2023-10-05T00:00:00.000Z
//************************************************************* */
// const currentDate = new Date('1-15-2010');
// console.log(currentDate);2010-01-15T00:00:00.000Z
//************************************************************* */
// console.log(date)//1997-07-31T04:30:15.000Z
// console.log(currentDate.toString())//Tue Mar 26 2024 09:50:25 GMT+0000 (Coordinated Universal Time)
// console.log(date.toDateString())//Thu Jul 31 1997
//console.log(currentDate.toLocaleString())//3/26/2024, 9:52:12 AM
// const dateString = currentDate.toDateString(); // e.g., "Sat Mar 26 2024"
// const isoString = currentDate.toISOString(); // e.g., "2024-03-26T10:30:00.000Z"
// const localeDateString = currentDate.toLocaleDateString(); // e.g., "3/26/2024"
// const localeTimeString = currentDate.toLocaleTimeString(); // e.g., "10:30:00 AM"
//******************************************************** */
// let currentDate=new Date();
// console.log(currentDate.getTime())
// console.log(Math.floor(Date.now()/1000));
//******************************************************** */
// const currentDate=new Date();
// console.log(currentDate.getFullYear());
// console.log(currentDate.getMonth());
// console.log(currentDate.getDate());
// console.log(currentDate.getHours());
// console.log(currentDate.getMinutes());
//  console.log(currentDate.getSeconds());
// console.log(currentDate.getMilliseconds());
//Setting Date and Time Components:
// let currentDate=new Date();
// currentDate.toLocaleString('default',
// {
//     weekday:'long'
// })
// console.log(currentDate)//2024-03-26T10:15:36.177Z