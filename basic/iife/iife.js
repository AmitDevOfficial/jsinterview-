// console.log("IIFE immediateley invoke function expression");

/*--Jab hum variable banate he to vo global scope me chale jate he jissec confilct hotea hota he isse bachne ke liye hum iiffe ka use krte he iiffe ek private scope banata he taki  varibale bahr access na ho paye--*/

(function myName(name){
    console.log("Hey AMit", name)
})("Web Develoepr")