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
 
 
//  const arrofNum = [1,2,3,4,5]
//  const reduceArray = arrofNum.reduce(function(accumulator , currentValue){
//     console.log(`accumulator ${accumulator} and ${currentValue}`)
//     return accumulator+currentValue
//  },5)
//  console.log(`our final valie = ${reduceArray}`);




 //reduce method using arrow funtion

//  const modifiedArray = arrofNum.reduce((acc , currval) => acc + currval , 0)
//  console.log(`our reduce array = ${modifiedArray}`);


 const books =[
    { title : 'Book one',genre:'fiction',publish:1981,edition:2004},
    { title : 'Book two',genre:'fiction',publish:1981,edition:2004},
    { title : 'Book three',genre:'fiction',publish:1981,edition:2004},
    { title : 'Book four',genre:'fiction',publish:1981,edition:2004},
    { title : 'Book five',genre:'fiction',publish:1981,edition:2004},
    { title : 'Book six',genre:'fiction',publish:1981,edition:2004},
    { title : 'Book one',genre:'fiction',publish:1981,edition:2004},
    { title : 'Book one',genre:'fiction',publish:1981,edition:2004},
    { title : 'Book one',genre:'fiction',publish:1981,edition:2004},
    

 ];
 const findGenre = books.filter ((fg) => fg.genre === 'non-friction')
 //console.log(findGenre);
 const filterData = books.filter((fd) => {return fd.genre === 'history' && fd.edition >=2006})
 console.log(filterData);



//set method 
//how to create a set?
const mySet = new set();
//Add element to the set
mySet.add(4);
mySet.add(6);
mySet.add(6);
mySet.add(7);
mySet.add(6);
mySet.add(8);
mySet.add(7);
mySet.add(9);
mySet.add(10);
console.log(mySet);
//how to get lengtth or size of set.

const mysetSize = mySet.size;
console.log(mysetSize);

//Delte an element from the set.
const deleteElement =(mySet.delete(7));
console.log(deleteElement)
console.log(mySet);

//check element is existing or not
console.log(mySet.has(8));
