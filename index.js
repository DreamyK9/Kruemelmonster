// Code, der auf der Seite ausgeführt wird
// Hier kommt der Code zum drücken der Cookie-Banner hin

let buttonClicked = false;
let declineButton;

// URL überprüfen und passenden Button auswählen
switch (window.location.host) {
    case "www.google.de":
        declineButton = document.querySelector("#W0wltc");
        break;
    case "www.google.com":
        declineButton = document.querySelector("#W0wltc");
        break;
    case "www.ecosia.org":
        declineButton = document.querySelector(".cookie-consent__action");
        break;
}


if (!buttonClicked) {
    // Automatisches Klicken des "Ablehnen"-Buttons
    declineButton.click();
    buttonClicked = true;
}
