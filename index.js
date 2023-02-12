// Code, der auf der Seite ausgeführt wird
// Hier kommt der Code zum drücken der Cookie-Banner hin

let declineButton = undefined;

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

// Wenn der Button nicht gefunden wird, weil
// - die Seite nicht unterstützt wird
// - der Button schon gedrückt wurde
// - die Seite sich geändert hat
// dann wird der Knopf nicht versucht zu drücken
if (declineButton) {
    // Automatisches Klicken des "Ablehnen"-Buttons
    declineButton.click();
}
