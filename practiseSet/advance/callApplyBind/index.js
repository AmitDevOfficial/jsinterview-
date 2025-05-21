/*---call---*/

let myObj = {
    name: "Amit Vishwakarma",
    age:  27,
    desgination: "Web Developer",
    
}

let printValue = function(state) {
        console.log(this.name, state)
    }

//call
// printValue.call(myObj, "Delhi")



/*---Apply---*/
// printValue.apply(myObj, ["delhi"]);



/*---bind---*/
let myFunc = printValue.bind(myObj, "india");
myFunc()
