//filter method-


/*const myArray = [1,2,3,4,5,6,7,8]
const myFilterArray = myArray.filter((item) => {
      return item > 4
})
console.log(myFilterArray);*/

/*const filterArray = myArray.forEach((data)=> {
    if(data>5){
        return data
    }
})
console.log(filterArray);
*/

/*const filterArray = myArray.forEach((data)=> {
    if(data>5){
        console.log(data)
    }
})*/



//MAP MATHOD 

/*const arrayNum =[2,4,6,8,10]
const changeArray = arrayNum.map((value) => {
    return value + 2;
})
console.log(changeArray); */


//chaining

/*const chainingArray = [3,4,6,7,8,9,10]
const updateArray = chainingArray
                             .map((data) => data + 10)
                             .map((data) => data *10)
                             .filter((data) => data>150)
 console.log(updateArray);    */
 
 
 const arrofNum = [1,2,3,4,5]
//  const reduceArray = arrofNum.reduce(function(accumulator , currentValue){
//     console.log(`accumulator ${accumulator} and ${currentValue}`)
//     return accumulator+currentValue
//  },5)
//  console.log(`our final valie = ${reduceArray}`);




 //reduce method using arrow funtion

 const modifiedArray = arrofNum.reduce((acc , currval) => acc + currval , 0)
 console.log(`our reduce array = ${modifiedArray}`);


 const books ={
    { title : 'Book one',genre:'fiction',pub}
 }