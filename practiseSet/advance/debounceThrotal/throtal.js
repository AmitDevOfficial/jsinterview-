
function myThrotal(fn, d){
    return function(...args){
        document.getElementById("mybtn").disabled = true;
        setTimeout(() => {
            fn();
        },d)
    }
}

const myDataBtn = myThrotal(() => {
    document.getElementById("mybtn").disabled = false;
    console.log("User Clicked Me...!")
}, 2000) 