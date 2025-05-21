console.log("This is Call Apply Bind");

let myObj = {
    myName: "Amit Vishwakarma",
    designation : "Software Engineer",
    // printDetails:function(){
    //     console.log(this.myName);
    // }
}

let printDetails = function(state){
        console.log(this.myName, state);
    }

// myObj.printDetails()

printDetails.call(myObj, "Delhi")


let myObj2 = {
    myName: "Rohan Vishwakarma",
    designation : "RTO Officer",
}
// myObj.printDetails.call(myObj2)


// Function Borrowing in call---
// call() का यूज़ हम तब करते हैं जब किसी function को किसी और object के साथ चलाना हो।

printDetails.call(myObj2, "Indore")

// we can pass values with array---
// apply() भी call() जैसा ही होता है, बस इसमें arguments array में देने होते हैं।
printDetails.apply(myObj2, ["Assam"])

//Bind
// bind() function की copy बनाता है जिसमें this fix हो जाता है।
let newFun = printDetails.bind(myObj2, "Indore")
newFun();