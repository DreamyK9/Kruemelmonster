async function sendreport(params) {
    document.getElementById("report").addEventListenerListener("click", function () {
        var xhr = new XMLHttpRequest();
        xhr.open("Get", "http://localhost:3000", true);
        xhr.send();
    });
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    let data = await response.json();
    document.getElementById('toll').innerHTML = data.value;
}


document.getElementById('report').addEventListener('click', sendreport)

sendreport()
