// console.log("Spread js");

let names = ["Amit", "Rahul", "Anuj", "Divya", "Mohan"]


function myNameFunc(nameOne, nameTwo, nameThree){
   
    console.log(nameOne +" "+ nameTwo +" "+ nameThree); 
    console.log(...names)
}

myNameFunc(...names)