//= >>assignment operator --to assign value to the variable,
//== >> equality operator --to compare value of two variable,
//=== >> equality operator --it will compare value as well as data type,

let a = 40; // assignment operator's e.g.

let b= '30';

console.log(a == b); // false //only value == 40 
console.log(a === b); // false //it will strickly check value and data type === number & string 

let c = 20;
var d = 30;
console.log(c != d); // true // ! not operator !true >> false ; !false >> true;
console.log(c == d); //false

let isFav = true;
console.log(!isFav); //false

let e = 40;
let f = 50;
console.log(">", e > f); //false it will only check for values
console.log("<", e < f); //true

console.log("<=", e <= f); //true less than equal to operator

// && AND : T && T --> True, else False
console.log(e < f && f > e);  //doni cond. true asel tar true otherwise false
console.log(e < f && f == e);

// || OR : F || F -- False, else true
console.log(e < f || f == e); //kontihi ek cond. true asel tr true otherwise false
console.log(e < f || f == e && a != b);
console.log( a != b); //value and data type

    let x = 20;
    let y = 30;
    let res = x + y;
    console.log(res);









