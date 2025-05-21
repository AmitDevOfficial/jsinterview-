// console.log("Rest Operator");

function myRst(a,b,c,...other) {
    console.log(...other)
    return a+b+c;
}
let myFunction = myRst(1, 2, 3, 4, 5, 6)
console.log(myFunction)
