//for loop
//for in loop
//for of loop
//do while loop

//for loop

console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');
console.log('6');
console.log('7');
console.log('8');
console.log('9');
console.log('10');

for (let a = 1; a <= 10; a++){
    console.log(a);
}

// for(;;){
//     console.log('kavita'); //infinite loop, page will crash out
// }

let student = {
    name : 'kanak',
    age : 25,
    city : 'pune'
}
// for in loop - it is used to itterate object (ES1 version feature)

for( let x in student){
    console.log(student[x]);  //[] property access symbol [x]
}

//for of loop - it is used for array
let color = ['orange','pink','red','purple','blue'];
for( let item of color){
    console.log(item);
}

//do while loop
let a=0;
do{
    console.log(a);
    a++
}
while(a<=5){
    console.log(a);
}







