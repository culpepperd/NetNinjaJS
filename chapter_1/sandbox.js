// logical operators - OR || and AND &&

const password = 'p@ssw';

if(password.length >= 12 && password.includes('@') || password.includes('$')){
    console.log("This password is strong like bull!");
} else if(password.length >= 8 || password.includes('@') && password.length > 4){
    console.log("The password you entered a little strong...");
} else {
    console.log("Your password is too weak.");
}