var check = 0; //Kontrolle

//Auszulagerndes(?)
switch (window.location.host) {
    case "www.google.de":
        var declineButton = document.querySelector("#W0wltc")
        check = 1
        break;
    case "www.google.com":
        var declineButton = document.querySelector("#W0wltc")
        check = 1
        break;
    case "www.ecosia.org":
        var declineButton = document.querySelector("#cookie_consent_reject")
        check = 1
        break;
}


if (check == 1) {
    // Automatisches Klicken des "Ablehnen"-Buttons
    declineButton.click()
}
