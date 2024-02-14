// if condition (one), if else (two), else if (multiple), switch (multiple cond.)

//let items =60;

// if () {
//     code block
// }

// if (items > 50) {
// console.log("stock available");    
// }

let items = 40;
//items greater than or equal to 50
if (items >= 50) {
    console.log("stock available");  //false cond. not shown    
    }

// if else
if (items >= 50) {
console.log(" stock is available");
}
else{
    console.log(" limited stock available");
}

// else if : multiple condition

// if (items >= 50) {
//     console.log(" stock is available");
//     }    
// else if ( items >= 20) {
//     console.log(" few items left");
// }
// else if (items >= 10) {
//     console.log(" hurry up few items available");
// }
// else{
//     console.log(" out of stock");
// }

if (items >= 50) {
    document.write(" stock is available");
    }    
else if ( items >= 20 && items <=50) {
    document.write(" few items left");
}
else if (items >= 1 && items <=20) {
    document.write(" hurry up few items available");
}
else{
    document.write(" out of stock");
}
document.write('<br>','<br>');

//equality

let marks = 60
switch (marks) {
    case 50:
        document.write('Pass');
        break;  //if we don't write break it will continue execute all the cases
    case 60:
        document.write('Second Class');
        break;
    case 75:
        document.write('First Class');
        break;
    case 80:
        document.write('Dictinction');
        break;
    default:
        document.write('Fail');
        break;
}







