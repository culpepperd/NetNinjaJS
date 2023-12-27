// variables & block scope
const age = 33;

if(true){
    const age = 40;
    const name = "Daniel";
    console.log("Inside 1st code block: ", name, age);

    if(true){
        const age = 50;
        console.log("Inside 2nd code block: ", name, age);
    }
}

console.log("Outside code block: ", name, age);