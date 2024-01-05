// object literals

let user = {
    name: 'Daniel',
    age: 33,
    email: 'ManMythLegend@gmail.com',
    location: 'Kentucky', 
    blogs: ['Star Wars', 'Game of Thrones', 'Marvel'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        
    }
};

user.login();
user.logout();

const name = 'mario';
name.toUpperCase();