//Object Literals
//Symbols are a unique and immutable primitive value that can be used as an identifier for object properties. 
const mySym=Symbol('key1');
let student={
    name:'iliyas',
    age:26,
    address:'khirdi khurd taluka raver',
    result:'pass',
    [mySym]:'mySymbole',
    'email address':'iliyas8042@gmail.com'
}
//************************************** */
//to access property in two way 
//Dot notation
// console.log(student.name)
//square bracket notation
// console.log(student['age'])
// console.log(student['email address'])
//To access the property with the symbol key, we need to use the bracket notation person[id]. The dot notation person.id won't work because symbol keys are not part of the regular object properties.
//  console.log(student);
// console.log(student[mySym])
// console.log(typeof student[mySym])
//************************************** */
//update the key value in object
// student.name='kasim';
// student['age']=27;
// console.log(student)
//************************************** */
//new element in existing object
// student['number']=9011491706;
// student[Symbol('ktm')]='manually';
// console.log(student)
//************************************** */
//freez perticular property
// Object.freeze(student);
//  console.log(student)
// student.name='shahid';
// console.log(student)
//************************************** */
//add function existing Object
student.exame=function(){
    console.log(`Exame Start... from  ${this.name}`)
}
 console.log(student.exame())


