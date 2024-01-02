// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['Daniel', 'Tracy', 'Monica', 'Renee', 'Leyla'];

let html = ``;

people.forEach(name => {
    // create html template
    html += `<li style="color: purple">${name}</li>`;
});

console.log(html);
ul.innerHTML = html;