let count = 0;

function getData() {
    console.log("Fetch data" + count++)
}

function myDebounce(call, d){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            call();
        }, d)
    }
}

const BetterFunc = myDebounce(getData,1000);