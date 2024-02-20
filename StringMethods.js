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
console.log(text.replace(/pune/i,'Mumbai')); //case insensitive replace first match
console.log(text.replace(/pune/ig,'Mumbai'));  //insensitive, globally replace
console.log(text.replaceAll('Pune','Nashik'));  //case sensitive
console.log(text.replaceAll(/pune/ig,'Nashik'));

console.log(text.replace('I live in Pune, I love Pune','kavita'));
console.log(text.replace(/I live in pune, I love Pune/i,'kavita'));






