console.log("JS Promise");

let myObj = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("Promise resolve")
    }else{
        reject("Promise reject")
    }
})

myObj.then((message) => {
    console.log("Then ka msg " + message)
}).catch((error) => {
    console.log("Catch ka msg " + error)
})