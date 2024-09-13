const body = document.body;
body.style.display = 'flex';
body.style.justifyContent = 'center'
const div = document.getElementById("my")
div.style.backgroundImage ="url('https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303525.jpg?w=1380&t=st=1705607469~exp=1705608069~hmac=278471867b312bc0088e9ffac7a2f27addf229e5e57bacefa17334eee38448ad')";
div.style.backgroundSize = 'cover';
div.style.height = '100vh';
div.style.padding = '30px';
body.appendChild(div);

const h1 = document.getElementById("in");

h1.style.backgroundColor = 'brown';
h1.style.padding = '15px';

div.appendChild(h1)
