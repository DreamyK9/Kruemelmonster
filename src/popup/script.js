// Code for the popup window goes here
async function sendreport(params) {
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    let data = await response.json();
    document.getElementById('toll').innerHTML = data.value;
    //Ab hier wird es wichtig
    var xhr = new XMLHttpRequest();
    xhr.open("Get", "http://localhost:3000", true);
    xhr.send();
}


document.getElementById('report').addEventListener('click', sendreport)
