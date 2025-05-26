// function add(a){
//     return function(b){
//         return function(c){
//             console.log(a + b + c)
//         }
//     } 
// } 

// add(5)(5)(5)


function sendEmail(to){
    return function (subject){
        return function(body){
            console.log(`Sending Email ${to} and the subject is ${subject} and the is the message ${body}`)
        }
    }
}

let step1 = sendEmail("Amit Vishwakarma");
let step2 = step1("Your new order");
step2("You are very Smart")