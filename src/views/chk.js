let isLoggedIn = true;
let isAdminn = false;

// both are true so left operand is printed
isLoggedIn && console.log("User is logged in.");

// return first falsy operand if false
isLoggedIn && isAdminn && console.log("User is an admin.");
return(isLoggedIn && isAdminn && console.log("User is an admin."));
isAdminn && console.log("User is an admin.");