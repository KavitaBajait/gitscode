//Data Types
//Premitive(single value holder)
// 1. string (to store alphanumeric value)
// 2. number
// 3. bigint
// 4. boolean
// 5. undefined
// 6. null
// 7. symbol
// 8. object

// The object data types
// The object data types can contain:

//Non-Premitive(multiple value holder)
// 1. An object
// 2. An array
// 3. A date

//console.log('kdkd');

let state = ""; //empty string
let city = "pune"; //string data type
console.log(city);

var marks = 90; //number
console.log('marks', marks);

var mobNo = "9854762153"; //inverted coma string, w/o coma var,number
console.log(mobNo);

var isfavfruit = true; //boolean true/false (white)
console.log(isfavfruit);

//var isfavfruit = 'false'; //string (yellow)
//console.log(isfavfruit);

// typeof()> it gives type of variable
console.log('data type of isfavfruit var', typeof(city));

const match = undefined
console.log(match);

let abc;
console.log(abc);
console.log(typeof(abc));

var myName =null;
console.log(myName);
console.log(typeof(myName));  //null/array value typeoff will return >> object

let a= 999999999999999;  //after 15th number 100000000000000
console.log(a); // begint uselly use in banking

let b= 9999999999999999;
console.log(b);

//let c = '9999999999999999';
//console.log(BigInt(c));

let d = 9999999999999999n
console.log(d);

let k = null //empty null
//array : is use to store multiple items
let name = "I live in pune, pune is big city"
console.log(name);

let cities = []; //empty array
cities = ['pune', 'mumbai', 'banglore','nagpure','nashik']
console.log(cities);
console.log(typeof(cities));  //array data type is always object
console.log(cities[2]);  //banglore
console.log(cities[10]); //undefined
console.log(cities.length);
console.log(cities[cities.length - 1]);

















