console.log("JS Bubbling");

const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const pink = document.querySelector(".pink");


red.addEventListener('click', (e) => {
    console.log("Red Clicked");
    // e.stopPropagation();
})

blue.addEventListener('click', (e) => {
    console.log("blue Clicked");
    // e.stopPropagation();

})

green.addEventListener('click', (e) => {
    console.log("green Clicked");
    // e.stopPropagation();

})

pink.addEventListener('click', (e) => {
    console.log("pink Clicked");
    // e.stopPropagation();     

})