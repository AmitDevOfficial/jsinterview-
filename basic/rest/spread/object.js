/*var obj = {
    myName : "Amit",
    profession : "Web Developer",
    hobby : ["Cricket", "Singing"]
}

const {...rest} = obj;

console.log(rest)


/*---override value with spread operator---*/
/*
var newStudent = {
    ...obj,
    myName: "Rohan Vishwakarma",
}

console.log(newStudent);
*/

var obj = {
    name: "Amit Vishwakarma",
    profession: "Web Devleoper",
    age : 27,
}

const {...rest} = obj

console.log(rest)

var myObj = {
    ...obj,
    name: "Rahul sharma"
}
console.log(myObj)