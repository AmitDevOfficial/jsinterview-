// console.log("Functions in js")

// function greet() {
//     console.log("Hey good Morning");
// }

// greet();


// function addSum() {
//     let sum = 2 + 3;
//     console.log(sum)
// }
// addSum();


// function paraFun(myName){
//     console.log("Your Name", myName)
// } 

// paraFun("Amit");


// function multiplyNum(num1, num2) {
//     let num3=num1 + num2;
//     console.log(num3)
// }
// multiplyNum(2, 2)


/*---Function Expression---*/

// let fullName = function() {
//     console.log("hey my Full Name is Vishwakarma")
// }
// fullName();

/*----Function return <value----></value----*/

// function getFullFun(firstName, lastName){
//     let fullName = firstName + lastName;
//     return fullName;
// } 
// let yourFullName = getFullFun("Amit ", "Vishwakarma");
// console.log(yourFullName)



/*---Arrow Function---*/

// let cityName = () => {
//     console.log("Delhi")
// }

// cityName();


// Print Table

let printTable = () => {
    for(i = 1; i<= 10; i++){
        console.log(2*i)
    }
}
printTable();