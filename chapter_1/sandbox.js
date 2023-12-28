// returning values

// const speak = function(name = 'Obi-Wan', planet = 'Tatooine'){
//     console.log(`${name} is on planet ${planet}.`);
// };

const calcArea = function(radius){
    return (3.14 * radius**2);
};

let area = calcArea(1);
console.log(area);