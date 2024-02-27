
let city = ['pune','mumbai','banglore','nagpur', 2000]; //hetrogeneous array   //5
console.log(city.length);  //length operator will return length of an array

//toString()
console.log(city.toString());   //pune,mumbai,banglore,nagpur,2000

//pop()  //pops out delete last item from array and will return the same
console.log(city);  //[ 'pune', 'mumbai', 'banglore', 'nagpur', 2000 ]
let popedOutitems = city.pop();
console.log(popedOutitems);  //2000
console.log(city);      //[ 'pune', 'mumbai', 'banglore', 'nagpur' ]

//push()  //to appened/add items at the end of the array, will return end of the original array
let returnedBypush = city.push(6000,'kavita')
console.log(city);   //[ 'pune', 'mumbai', 'banglore', 'nagpur', 6000, 'kavita' ]
console.log(returnedBypush);  //6

//The shift() method removes the first array element and "shifts" all other elements to a lower index.

let color = ['red','black','blue','purple'];
let shiftMethodReturnedData = color.shift();
console.log(shiftMethodReturnedData);  //red
console.log(color);  //[ 'black', 'blue', 'purple' ]

//unShift()
let color2 = ['pink','red','black','blue','purple'];
let returnedData = color2.unshift('black','orange');
console.log(returnedData); //7
console.log(color2);  //['black','orange','pink','red','black','blue','purple']











