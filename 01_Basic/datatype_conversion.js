
/**
 * "123"=>123
 * "123abc"=>NaN
 * true=>1 false=>0
 * **********************************
 * conversion String to Number
 * let num='123';
console.log(typeof num);//String
console.log(typeof(num))//String
let newNUm=Number(num)
console.log(newNUm)//123
let num='123abc';
console.log(typeof num);//String
console.log(typeof(num))//String
let newNUm=Number(num)
console.log(newNUm)//NaN

**********************************************
let num=true;
console.log(typeof num);//boolean
console.log(typeof(num))//bolean
let newNUm=Number(num)
console.log(newNUm)//1
let num=false;
console.log(typeof num);//boolean
console.log(typeof(num))//bolean
let newNUm=Number(num)
console.log(newNUm)//0
*****************************
boolean coversion
1=>true 0=>fales
''=>false 'iliyas'=>true
123=>true
let num=1;
let newNum=Boolean(num);
console.log(newNum)//true
let num=0;
let newNum=Boolean(num);
console.log(newNum)//false
let num=123;
let newNum=Boolean(num);
console.log(newNum)//true
let num='';
let newNum=Boolean(num);
console.log(newNum)//false
let num='iliyas';
let newNum=Boolean(num);
console.log(newNum)//true
**************************************
String conversion
let num=123;
let newNum=String(num);
console.log(newNum)//123
console.log(typeof newNum)//String

 */
let num=123;
let newNum=String(num);
console.log(newNum)//123
console.log(typeof newNum)//String

