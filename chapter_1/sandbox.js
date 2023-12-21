// else if statements

const password = 'p@ss';

if(password.length >= 12){
    console.log("This password is strong like bull!");
} else if(password.length >= 8){
    console.log("The password you entered is long enough");
} else {
    console.log("Your password is too short.");
}