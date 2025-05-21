/*----rest opreator----*/

// function myNum(a,b,c, ...other){
//     console.log(other)
//     return a + b + c;
// }

// let rest = myNum(1, 2 ,3, 5, 6, 7)
// console.log(rest)


function myNum(a, b, c,...other){
    console.log(other);
    return a + b + c;
}

let num = myNum(1, 2, 3, 5, 6, 7);
console.log(num)