localStorage.setItem("authToken", "xyz123");

const token = localStorage.getItem("authToken");

if(token){
    console.log("User LoggedIn");
}else{
    console.log("User not LoggedIn")
}