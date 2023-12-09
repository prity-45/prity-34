/* 
1. to be able to operate on variable,it is important to know something about the type of data is called datatypes.
2. javascript has 7 types of data types.
i. number-2power53
ii.bigint- 123456789*83768673*n
iii. string-"abcd"
iv.boolean-true/false
v.null-0[]
vi.underfined- not defined
vii.symbol-uniqueness
*/
let name="prity";
let age=21;
let ispresent= true;
let id=Symbol('123');
let Anotherid=Symbol('123');
console.log(typeof name);
console.log(typeof age);
console.log(typeof ispresent);
console.log(id === Anotherid);
