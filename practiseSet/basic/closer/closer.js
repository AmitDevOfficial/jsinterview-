// console.log("JS closer");

// closer can presists our parent varibales closer also create lexical environment

function myName(){
    let name = "Rohan vishwakarma";
    // console.log(name)
         function yourName() {
        console.log(name);
    }
    yourName()
}
myName();