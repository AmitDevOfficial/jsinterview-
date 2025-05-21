// console.log("Closer js")

function parentFunction(name){
    // let name = "Amit Vishwakarma";
        function childFunction(){
            return name;
        }
        return childFunction();
}
parentFunction();

let myFun = parentFunction('Amit');

console.log(myFun)