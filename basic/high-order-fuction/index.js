const compnies = [
    {name: "Google", category: "Proudct-based", start: "1997", end: "2000"},
    {name: "Chrome", category: "Proudct-based", start: "2000", end: "2015"},
    {name: "MindTree", category: "Proudct-based", start: "1999", end: "2001"},
    {name: "Lemosys", category: "Service-based", start: "1885", end: "1900"},
    {name: "eSign", category: "Service-based", start: "1991", end: "1995"},
]


const age = [23,35,66,55,48,25,62,26,18]

/*---Normal Standerd Loop---*/

// for(let i = 0; i<= compnies.length; i++){
//     console.log(compnies[i].name) 
// }



/*---Es6 Foreach loop---*/ /*---with sync---*/

// compnies.forEach(function(company, index) {
//     console.log(company.name)
// });


// compnies.forEach((company, index) => (console.log(company.name)));


//---Filter---

// for(let i =0; i <= age.length; i++){
//     if(age[i] >= 20){
//         console.log(age[i])
//     }
//         // console.log(age[i])
// }

// const ageOne = age.filter(function(age){
//     if(age >= 20){
//         console.log(age)
//     }
// })

// let myAge = age.filter((age) => (age>=20 ))
// console.log(myAge)


// Filter with company category---

const cate = compnies.filter(function(company){
    if(company.category === "Proudct-based"){
        return true;
    }
})

console.log(cate)