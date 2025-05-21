localStorage.setItem("authToken", "xyz123");


const token = localStorage.getItem("authToken");

if(token){
    console.log("User logged in");
}else{
    console.log("User Not Logged in")
}