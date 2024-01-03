// object literals

let user = {
    name: 'Daniel',
    age: 33,
    email: 'ManMythLegend@gmail.com',
    location: 'Kentucky', 
    blogs: ['Star Wars', 'Game of Thrones', 'Marvel']
};

console.log(user);

// Can access an object's properties either by
// dot notation or square bracket notation
user.age = 34;
console.log(user.age);

console.log(user['location']);
user['location'] = 'LA';
console.log(user['location']);



