// let promiseOne = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("Promise resolved")
//     }else{
//         reject("Promise reject");
//     }
// })

// promiseOne.then((message) => {
//     console.log("Then ka messgae is " + message)
// }).catch((error) => {
//     console.log("Error " + error)
// })


let promiseOne = new Promise((resolve, reject) => {
    let success = false;
    if(success) {
       resolve("Promise resolved")
    }else {
        reject("Promise reject")
    }
})

promiseOne.then((message) => {
    console.log("Then ka message" , message)
}).catch((error) => {
    console.log("Catch ka msg", error)
})