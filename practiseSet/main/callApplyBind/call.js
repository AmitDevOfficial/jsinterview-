let obj = {
    yourName: "Amit",
    age: 28,
    profession: "Web developer"
}

let myFunc = function(state){
    console.log(this.yourName, state)
}

// myFunc.call(obj, "Delhi")

// myFunc.apply(obj, ["Ratna"])

let yourFunc = myFunc.bind(obj, "Rewa")
yourFunc();