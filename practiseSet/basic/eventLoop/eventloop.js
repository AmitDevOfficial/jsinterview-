// console.log("Event Loop");


/*-- Event loop --*/

//--isme phele call stack hota he jisme sync code jata he fr web api hota he jisme async code jayega jese ki settimeout fr callback que hota he jisme setTimout jayega fr jab call stack khali hoga to callstack me jayga fr exccute hoag code

console.log("Welcome")

setTimeout(() => {
    console.log("Please share your contributions")
}, 3000)

console.log("Amit Vishwakrma")