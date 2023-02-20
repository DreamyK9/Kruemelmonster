Überblick über die Struktur der Extension:
* [manifest.json](src/manifest.json) - Die Manifest-Datei, die die Extension beschreibt. Hier sind alle Infos und Einstellungen der Extension hinterlegt. [Mehr Informationen](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
* [index.js](src/index.js) - Das Herzstück der Extension. Hier wird der Code zum ablehnen der Cookie-Banner ausgeführt.
* [types.js](src/types.js) - Hier sind Typen für Aktionen und Selektoren hinterlegt, um diese überall komfortabel verwenden zu können.
* [rules.js](src/rules.js) - Hier sind die Regeln zum identifizieren und behandeln von Seiten hinterlegt.
* [actions.js](src/actions.js) - Hier sind die Funktionen für Aktionen hinterlegt, die ausgeführt werden können.
* [popup-Ordner](src/popup) - Hier befindet sich der Code für das Popup, das beim Klicken auf das Icon in der Toolbar erscheint (ist genauso wie eine Webseite; mit HTML, CSS und JS).
