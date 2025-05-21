const mythrotal = (fn, d) => {
    return function(...args){
        document.getElementById("myBtn").disabled= true;
        setTimeout(() => {
            fn();
        }, d) 
    }
}

const myFunc = mythrotal(() => {
     document.getElementById("myBtn").disabled= false;
    console.log("User Clicked Me..!")
},5000)
