/* 00ps concept-->
there are certain fetures or  mechanish which make the lanuage object oriended .
1. object->
as object is a unique entity that contain properties and methods.
the onject can be created in two ways in javascript
1. object loteral
2. object constructor 
2. class
3.inheritance
4. encapsulation
5.polymorphism
6. abstraction
*/

let person= {
    first_Name:"prity",
    last_Name:"singh",

    getfunction: function(){
        return(`the name of the person is ${person.first_Name} ${person.last_Name}`)
    },
    phone_number:{
        mobile:`98765543221`,
        land_line:`123445678`
    }
}
console.log(person.getfunction());
console.log(person.first_Name);
console.log(person.last_Name);
console.log(person.phone_number.mobile);