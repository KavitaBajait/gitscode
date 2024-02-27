let text = 'I live in Pune, I love Pune';  //15 including space, starting with 0

let textlength = text.length;
console.log(textlength);

console.log(text.length);

let slicedText = text.slice(2,6);  //start index- inclusive, end index- exclusive - positive index
console.log(slicedText);
console.log(text.slice(10,14));
console.log(text.slice(7));
console.log(text.slice(-14,-6));  //start index- exclusive, end index- inclusive - negative index
console.log(text.slice(-13));

console.log(text.substring(-1,10));  //negative value is treated as 0 here, end index is exclusive

console.log(text.substr(2,6));  //start index, index

console.log(text.replace('Pune','Mumbai'));  //method replace only the first match
console.log(text.replace('nashik','Mumbai'));  //original string
console.log(text.replace('pune','Mumbai'));  //original string: replace is case sensitive
console.log(text.replace(/pune/i,'Mumbai')); //case insensitive replace first match  //unmatched
console.log(text.replace(/pune/ig,'Mumbai'));  //insensitive, globally replace
console.log(text.replaceAll('Pune','Nashik'));  //case sensitive
console.log(text.replaceAll(/pune/ig,'Nashik'));

console.log(text.replace('I live in Pune, I love Pune','kavita'));
console.log(text.replace(/I live in pune, I love Pune/i,'kavita'));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

//concat()

let firstName = 'kavita';
let lastName = 'bajait';
//let fullName = firstName + lastName;  //kavitabajait
//let fullName = firstName + " " + lastName;  //kavita bajait

let fullName = firstName.concat(' ', lastName, ' ', 2500)
console.log(fullName);

console.log('upr->', text.toUpperCase(), 'lwr->', text.toLowerCase());

//the trim() method removes whitespace from both sides of a string:
let data = 'kavita';
console.log(data.trim());

var string ="     This      should   becomes something                 else to     ";
stringData = string.trim().replace(/\s+/g," ");  //regix patrern (/-forward slas, \backward ,s+-space partially match,/g-forward globally)
console.log(stringData);

//tostring()    number to string convert
let num = 65847562;
let data1 = num.toString(); //number la string madhe convert karnya sathi tostring
console.log(data1);

//parseInt      string to number conver
let num2 = "54896215"
let m = parseInt(num2)
console.log(m);

let text1 ="HELLO WORLD";
let char = text1.charAt(0);
console.log(char);
let d = text1.charAt(20);
console.log(d);  // it will return empty


//split
let date = "10-04-1994";  //only string value perform
let newDate =date.split('-')  // it splits out date and will return array
console.log(newDate);
console.log(newDate[2]);  //1994  //0 for 10, 1 for 04, 2 for 1994

let text4 = "hello how are you";
t5 = text4.split( ) //space
console.log(t5);

let add = "both the right person in the situation";
console.log(add.includes("person"));  // true  //includes mothod return true if valvue is included

// {
// "status":"success",
// "statusCode": "100254",
// massage : "data submited successfully"
// }

let statusCode = "100254";
let a = statusCode.startsWith("100");
console.log(a);  //true
let b = statusCode.endsWith("254");
console.log(b);  //true

let text5 = "Hello world, welcome to the universe.";
//let result = text5.indexOf("welcome");  //it should return first macth of index
let result = text5.indexOf("of");  //-1
console.log(result);  //13 number of 'w' char


let text6 = "Mr Blue, has a blue house";
//let position = text6.search('blue'); //15
let position = text6.search(/blue/i);  // 3  //we can add regex pattern
console.log(position);  //diff betn search and indexof method: we can not pass regex pattern in indexof method

// The search() can not take a start position argument.
// The indexOf() method can not search against a regular expression.
// The search() method return the position of the first match.
// The match() method returns a array of matches.

let text7 = "The rain in SPAIN stays mainly in the plain.";
let g = text7.match("ain");
console.log(g);
console.log(text7.match(/ain/g));











































