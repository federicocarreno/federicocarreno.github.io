document.getElementById('actualyear').appendChild(document.createTextNode(new Date().getFullYear()))

let lastupdate = new Date(document.lastModified);
document.getElementById("lastupdate").textContent = lastupdate;