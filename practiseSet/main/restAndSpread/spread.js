console.log("JS rest operator");

let names = ["Amit", "Ankit", "Rahul", "Rohan", "Damini", "Paro"]


function myName(name1, name2, name3, name4) {
    console.log(name1, name2, name3, name4)
}

myName(...names);