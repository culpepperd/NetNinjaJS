// callbacks & foreach

// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 5;
//     callbackFunc(value);
// };

// // When we pass in a function as an argument,
// // it's called a callback function
// myFunc( value => {
//         console.log(value);
//         }
// );

let people = ['Daniel', 'Tracy', 'Monica', 'Renee', 'Leyla'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson);