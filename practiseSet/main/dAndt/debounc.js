console.log("JS Debounce");


function getData(){
    console.log("Fetching Data")
}


function myDebounce(call, d) {
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            call();
        }, d)
    }
}

let betterFunc = myDebounce(getData, 2000)