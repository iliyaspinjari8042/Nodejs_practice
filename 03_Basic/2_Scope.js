function one()
{
    const first='iliyas';
    function two()
    {
        const second='pinjari';
        console.log(first+second);
    }
    console.log(second);
    two();
    
}
// one();
if (true) {
    const username='iliyas';
    if(username=='iliyas')
    {
        const password=' 123ili';
        // console.log(username+password);
    }
    // console.log(password);
    
}
// console.log((username));


/*++++++++++++++++++Interesting++++++++++++++*/
//function declaration
addOne();//successfully execuite
function addOne(){
    return 'iliyas';
}

//function expression
addTwo();//show error
let addTwo=function(){
  return 'kasim';
}
