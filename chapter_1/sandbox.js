// object literals

const blogs = [
    { title: 'Star Wars', likes: 30 },
    { title: 'Game of Thrones', likes: 29 }
];

console.log(blogs);

let user = {
    name: 'Daniel',
    age: 33,
    email: 'ManMythLegend@gmail.com',
    location: 'Kentucky', 
    blogs: [
        { title: 'Star Wars', likes: 30 },
        { title: 'Game of Thrones', likes: 29 }
    
    ],
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
            console.log(blog.title, blog.likes);
        })
    }
};

user.logBlogs();
// console.log(this);