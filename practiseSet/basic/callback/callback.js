/*--callback defination -- jab hum ek function ke ander dusra function pass krte he as a agraument to vo ek callback function hota he or jiske ander me function pass krte he to vo ek high order fucntion bn jata he--*/ 

// High Order Function (HOF) kya hota hai?
// "Wo function jo ya to kisi aur function ko argument me leta hai ya ek function return karta hai, use High Order Function kehte hain."



function mySum(a, b, c) {
    let result = a + b;
    console.log(result);
    c();
}

function myName(){
    console.log("HEy Amit");
}

mySum(2, 2,  myName)