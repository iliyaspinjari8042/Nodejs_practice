//sum of the array
// let myArray=[1,2,3,4,5,6,7,8]
// let code=myArray.reduce(function(acc,cuval){
//     console.log(`acc is ${acc} and cuval is ${cuval}`)
//     return acc+cuval;
// })
//console.log(code)
// const nestedArray = [1, [2, 3], [4, [5, 6]]];
// let nam=nestedArray.reduce(function(acc,cur){
//     return acc.concat(cur);
// },[]);
//console.log(nam)
// let superHero=['superman','badman','spiderman','hulk','thor']
// let marvel=superHero.reduce((accu,currvalue)=>accu.concat(currvalue),[])
//console.log(marvel);
let course=[
    {
        langauge:'java',
        price:2999
       
    },
    {
        langauge:'data scince',
        price:12999

    },
    {
        langauge:'front end',
        price:3999

    }
]
let total=course.reduce((acc,current)=>acc+current.price,0)
console.log(total);