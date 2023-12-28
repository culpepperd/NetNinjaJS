// regular function
// const calcArea = function(radius){
//     return (3.14 * radius**2);
// };

// area function
// if only ONE parameter, do not need ()
// if only ONE return statement, format like below
const calcArea = radius => 3.14 * radius**2;

const area = calcArea(4);
console.log("The area is:", area);