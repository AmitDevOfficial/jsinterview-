// function myName(name){
    
//     function yourName() {
    
//         console.log(name)
//     }
//     return yourName
// }
// let myFunc = myName("Hello");
// console.log(myFunc())


function myName(name){
    function yourName() {
        return name;
    }
    return yourName;
}
let myFunc = myName("Hello");
console.log(myFunc()); // ab ye "Hello" print karega bina undefined ke

