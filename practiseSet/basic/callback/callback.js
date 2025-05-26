// console.log("JS Callback");
// callback is a highOrder Function


function myName(name, callback){
    console.log("Hello", name);
    callback();
}

function greet(){
    console.log("Good Morning...!")
}
myName("Amit", greet)