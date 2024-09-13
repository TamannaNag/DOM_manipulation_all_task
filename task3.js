const body = document.body;
body.style.display = 'flex';
body.style.justifyContent = 'center'
const div = document.getElementById("bimage")
div.style.backgroundImage ="url('https://getwallpapers.com/wallpaper/full/8/5/b/1257509-download-puerto-rico-scenes-wallpaper-2880x1800-photo.jpg')";
div.style.backgroundSize = 'cover';
div.style.height = '100vh';
div.style.padding = '30px';
div.style.borderColor = 'green';
div.style.borderWidth = '5px';
div.style.borderStyle = 'solid';
body.appendChild(div);

const h1 = document.getElementById("top");

// h1.classList.add('top');
// h1.textContent = "Code is more than some bytes in a file";

h1.style.color = 'beige';
h1.style.fontFamily = 'Bree serif';
h1.style.backgroundColor = 'red';
h1.style.padding = '15px';
h1.style.fontSize = '30px';
div.appendChild(h1)





