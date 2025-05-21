let count = 0;

function getData() {
    console.log("Fetching Data", count++)
}

function myFunction(call, delay){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            call();
        }, delay)
    }
}

let betterFunction = myFunction(getData, 1000)