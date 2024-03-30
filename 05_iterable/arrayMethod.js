const superHeros=['ironman','hulk','spiderman','thor','hokay']
//filter(): The filter() method creates a new array with all elements that pass the test implemented by the provided function. It takes a callback function that is executed on each element of the array. The callback function should return a boolean value: true to keep the element, or false to exclude it from the new array.
let myNm=[1,2,3,4,5,6,7,8];
// let num=myNm.filter(num=>num%2==0);//[ 2, 4, 6, 8 ]
let num=myNm.filter(num=>{
    return num%2==0
})
//console.log(num);[ 2, 4, 6, 8 ]
//using for each loop
let newNum=[];
myNm.forEach(num=>{
    if(num%2==0)
    {
        newNum.push(num);
    }
})
console.log(newNum)[ 2, 4, 6, 8 ]