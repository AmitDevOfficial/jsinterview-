console.log("JS Throtal");

function myThrotal(fn, d) {
    return function(...args){
        document.getElementById("myBtn").disabled = true;
        setTimeout(() => {
            fn()
        }, d) 
    }
}

const myBtn = myThrotal(() => {
    document.getElementById("myBtn").disabled = false;
    console.log("User Clicked Me")
}, 2000)