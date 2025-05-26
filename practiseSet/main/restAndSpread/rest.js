console.log("JS rest operator");

function mySum(a, b, c, ...other){
    let sum = a + b + c;
    console.log(sum, other)
}

mySum(2, 3, 4, 5, 6, 7)