// object literals

let user = {
    name: 'Daniel',
    age: 33,
    email: 'ManMythLegend@gmail.com',
    location: 'Kentucky', 
    blogs: ['Star Wars', 'Game of Thrones', 'Marvel'],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        // console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

user.logBlogs();
// console.log(this);