/* 00ps concept-->
there are certain fetures or  mechanish which make the lanuage object oriended .
1. object->
as object is a unique entity that contain properties and methods.
the onject can be created in two ways in javascript
1. object loteral
2. object constructor 
2. class
 => class is a biueprint of object. a class have many objects because the class is template while object are instance of the class or the concrete implementation
3.inheritance
=> it is a property in which in inherit the property of parent class to child class though extend keyword.


4. encapsulation
5.polymorphism
6. abstraction
*/

// let person= {
//     first_Name:"prity",
//     last_Name:"singh",

    /*getfunction: function(){
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
console.log(person.phone_number.mobile);*/

//object constructor

/*function person(first_Name,last_Name){
    this.first_Name=first_Name;
    this.last_Name=last_Name;
}
let person1=new person('prity','singh');
let person2=new person('sita','gita');
console.log(person1.first_Name);
console.log(`${person2.first_Name} ${person2.last_Name}`);*/


//class

/*class vehicle{
    constructor(name,maker,engine){
        this.name=name;
        this.maker=maker;
        this.engine=engine;
    }

    getDetails(){
        return(`the name of the bike is ${this.name}.`)
    }
}
let bike1=new vehicle('hayabhusa','suzuki', '1340cc');
let bike2=new vehicle('x1500','super','1000cc')
console.log(bike1.name);
console.log(bike2.engine);
console.log(bike1.getDetails());*/


//inheritance

class person{
    constructor(name){
        this.name = name;
    }
    tosharing(){
        return(`name of the person:${this.name}`)
    }
}
class student extends person{
    constructor(name,id){
        super(name);
        this.id=id;
    }
    tosharing(){
        return(`${super.tosharing()},student id: ${this.id}`);

    }
}let student1 = new student('prity',22);
console.log(student1.tosharing());