let age;

console.log(age, age + 3, `the age is ${age}`);

// The browser automatically assigns the variable
// as undefined when it doesn't have a value.
// When we try to use an undefined variable in a 
// formula, we get NaN (Not a Number)

let ages = null;

console.log(ages, ages + 3, `the age is ${ages}`);