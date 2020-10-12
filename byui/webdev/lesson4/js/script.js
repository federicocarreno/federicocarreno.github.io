//hamburg menu
const hambutton = document.querySelector('.menu');
const mainnav = document.querySelector('.menu-list')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

//footer dates
document.getElementById('actualyear').appendChild(document.createTextNode(new Date().getFullYear()))
document.getElementById("lastupdate").innerHTML = document.lastModified