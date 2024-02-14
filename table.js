

function addNumber(){
    let Number =parseInt(prompt("Enter a Number"));
    for(let i = 1; i <= 10; i++){
        res = Number * i;
        console.log(res);
        document.write(res, "<br>");
    }
        //document.getElementById("table").innerHTML = res + '<br>'
}