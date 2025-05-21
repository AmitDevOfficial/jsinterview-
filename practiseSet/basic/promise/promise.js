// console.log("Promise js")

let myPromise = new Promise((resolve, reject)=> {
    let success = true;
    if (success){
        resolve("Promise resolved")
    }else{
        reject("Promise reject")
    }
})

// myPromise.then((message) => {
//     console.log("Then ka msg", message)
// }).catch((error) => {
//     console.log("Catch ka msg", error)
// })