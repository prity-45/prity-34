/* function -
 definition-a javascript function is a block to perfrom a particular task.
 a js function is excuted when something invoked it (call it)*/

 /*function sayName(){
  console.log("G");
  console.log("i");
  console.log("e");
  console.log("t");
 }
 sayName();    //sayName-reference
 sayName();    // ()-execution


 function addTwoNumber(number1,number2){     //parameter
    console.log(number1+number2)
 }
 addTwoNumber(3,4);    //argument
 

 function addTwoNumber1 (number1,number2){
    let  result = number1+number2;
return result;
 }
 const result=addTwoNumber1(3,5);
 console.log("result :",result);

 function loginuserMessage(username){
    return`$ {username} just logged in `
 }
 console.log (loginuserMessage("giet"));


 function loginuserMessage(username){
    if(username=== undefined)
    {
        console.log("please enter your username")
    }
    else
    {
        return `${username} just logged in`;
    }
 }
 loginuserMessage();*/


/* function loginuserMessage(username="prity"){
    if(!username)  // convert true and flase
    {
        console.log("please enter your name")
        return
    }
    return`${username} just logged in`
 }
 console.log(loginuserMessage("kumari"));   //kumari override prity
 console.log(loginuserMessage("singh"));*/


/* function calculateprice(num1){
    return num1;
 }
 console.log(calculateprice(200,300,400,500));*/


 /*function calculateprice(...num1){   //... -rest operator
    return num1;
 }
 console.log(calculateprice(200,300,400,500));*/



 /*function calculateprice(val1,val2,...num1){   //... -rest operator
    return val1;  // multiple value cant return ones a time
 }
 console.log(calculateprice(200,300,400,500));*/




 const user ={
    username: "giet",
    price : 400
 }

 function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
 }
 handleobject(user);




