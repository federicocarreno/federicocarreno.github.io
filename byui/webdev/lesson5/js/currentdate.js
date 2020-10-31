//footer dates
//document.getElementById('actualyear').appendChild(document.createTextNode(new Date().getFullYear()))
//document.getElementById("lastupdate").innerHTML = document.lastModified

// array day names
var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

//array long months names
const monthsNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December0"
];

const todaysDate = new Date();
const dayName = dayNames[todaysDate.getDay()];
const monthName = monthsNames[todaysDate.getMonth()];
const todayDate = dayName + ", " + todaysDate.getDate() + " " + monthName + " " + todaysDate.getFullYear();

document.getElementById("lastupdate").textContent = todayDate;