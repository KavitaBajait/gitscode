
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

//join()
let v = ['pink','red','black','blue','purple'];
let v1 = v.join('*');  //pink*red*black*blue*purple
console.log(v1);

//let name = ['Kavita','Bajait'];
let name = ["10","04","1992"]
console.log(name);
//let fName = name.join(" ");  // Kavita Bajait
let fName = name.join("/");  // 10/04/1992
console.log(fName);

//concat()
cl2 = ['pink','red'];
cl3 = ['black','blue','purple'];
let cl4 = cl2.concat(cl3,v);
console.log(cl4);  //['pink','red','black','blue','purple','pink','red','black','blue','purple']

//delete : undefined items
//length remains same after deleting item
// const fruits = ["banana", "orange", "apple", "mango"];
// delete fruits[1];
// console.log(fruits);  //[ 'banana', <1 empty item>, 'apple', 'mango' ]
// console.log(fruits.length);  //4

const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
//delete fruits[10];
console.log('>>>',fruits);  //>>> [ <1 empty item>, 'Orange', 'Apple', 'Mango' ]

//Array element can be deleted using the javascript operator delete
// Using delete() leaves undefined holes in the array.
// Use pop() or shift() instead.


//splice(index(where u want to add item), count(how many elements want to delete, elements to be added))
const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
 //fruit1.splice(1,0,'kiwi');  //[ 'Banana', 'kiwi', 'Apple', 'Mango' ]
 fruit1.splice(1,2,'kiwi');  //[ 'Banana', 'kiwi', 'Mango' ]
console.log(fruit1);

const fruit2 = ["Banana", "Orange", "Apple", "Mango",'kiwi'];
let a = fruit2.slice(2,3);  //[ 'Apple' ]
console.log(a);
console.log(fruit2);  //[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]

//number mrthods
let no = 787787;
let no1 = no.toString();  //number to string convert
console.log(no1);  //787787

//toFixed()
let weigth = 4.567496;
let w2 = weigth.toFixed(2);  //to fixed decimal value
console.log(w2);  //4.57

//valueOf()
let r = 5656;
console.log(r.valueOf());  //5656






























