# Messeplaner (Praktikum 1 & 2)

---

## Einleitung: allgemeine Beschreibung der Aufgabenstellung

Bei dem Messeplaner handelt es sich um eine Webanwendung, in der kommende Messen, ihre Hallen und -belegungen von Aussenstehenden eingesehen und nach Ausstellern sortiert, von Ausstellern einzelne Standplätze gebucht oder storniert und von Mitarbeitern bearbeitet werden können.

---

## Nutzungsszenario: Messeveranstalter

### Allgemeine Beschreibung

Die Messeveranstalter oder Mitarbeiter sind eine der drei Gruppen in diesem Szenario.

### Beschreibung Persona

Die Intention des Messeveranstalters ist die, für kommende Messen jeweils Hallen zu planen, diese einzuteilen und alle bereits getätigten Buchungen zu bearbeiten.

### Interaktionsdesign

![Zustandsdiagramm Messeveranstalter](Zustandsdiagramme/Desktop/mitarbeiter.png)
*Zustandsdiagramm Messeveranstalter/ -mitarbeiter*

Die Interaktion des Mitarbeiters beginnt, wenn er sich eingeloggt hat.
Wenn er sich eingeloggt hat, sieht er zu allererst die Übersicht aller Buchungen für die gesamte Messe.
Dabei besteht die Möglichkeit, einzelne Buchungen zu stornieren.
Eine weitere Möglichkeit der Interaktion ist die Einteilung der einzelnen Hallen für die Aussteller.

### Übersicht Interaktionen (Desktop)

#### Übersicht

![Wireframe Buchungsübersicht](Wireframes/Desktop/mitarbeiteruebersicht.png)
*Übersicht aller Buchungen*

#### Hallenbearbeitung

![Wireframe Hallenbearbeitung](Wireframes/Desktop/mitarbeiter.png)
*Bearbeitungsmöglichkeit einer Halle zum Bearbeiten*

### Übersicht Interaktionen (Mobile)

#### Übersicht

![Wireframe Buchungsübersicht](Wireframes/Mobile/Mobile_Homescreen_Mitarbeiter.png)
*Übersicht aller Buchungen*

#### Menu

![Wireframe Menu](Wireframes/Mobile/Mobile_Menu_Mitarbeiter.png)
*Ausgeklapptes Menu*

#### Hallenbearbeitung

![Wireframe Hallenbearbeitung](Wireframes/Mobile/Mobile_Bearbeiten_Mitarbeiter.png)
*Bearbeitungsmöglichkeit einer Halle zum Bearbeiten*

---

## Nutzungsszenario: Aussteller

### Allgemeine Beschreibung

Der Aussteller ist ein registrierter Benutzer des Messeplanners. Er kann freie Flächen buchen, um dort seine Produkte und Leistungen zu präsentieren.

### Beschreibung Persona

### Interaktionsdesign

![Zustandsdiagramm Aussteller](Zustandsdiagramme/Desktop/aussteller.png)
*Zustandsdiagramm Aussteller*

Nachdem sich der Aussteller eingeloggt hat, wird er auf eine neue Seite geleitet. Auf dieser Seite werden ihm seine bisherigen Buchungen angezeigt, die er bis dahin erstellt hat. Diese Seite dient lediglich als Übersicht. Möchte der Aussteller weitere Flächen buchen oder bereits erstellte Buchungen bearbeiten, so muss er zu der jeweiligen Hallenübersicht gehen.
In der Hallenübersicht werden gebuchte Flächen grün angezeigt. Flächen die nicht zur Auswahl stehen sind rot oder grau markiert. Der Aussteller kann freie oder gebuchte Flächen auswählen um nähere Informationen zu der Auswahl zu bekommen und entscheiden, ob er diese Fläche buchen bzw. stornieren möchte.

### Übersicht Interaktionen (Desktop)

#### Übersicht

![Wireframe Buchungsübersicht](Wireframes/Desktop/austelleruebersicht.png)
*Übersicht der getätigten Buchungen*

#### Standbuchung

![Wireframe Standbuchung](Wireframes/Desktop/aussteller.png)
*Standbuchungsmöglichkeit pro Halle*

### Übersicht Interaktionen (Mobile)

#### Übersicht

![Wireframe Buchungsübersicht](Wireframes/Mobile/Mobile_Homescreen_Aussteller.png)
*Übersicht der getätigten Buchungen*

#### Menu

![Wireframe Menu](Wireframes/Mobile/Mobile_Menu_Aussteller.png)
*Ausgeklapptes Menu*

#### Standbuchung

![Wireframe Hallenbearbeitung](Wireframes/Mobile/Mobile_Buchen_Aussteller.png)
*Standbuchungsmöglichkeit pro ausgewählter Halle*

---

## Nutzungsszenario: Besucher

### Allgemeine Beschreibung

Der Besucher ist kein registrierter Benutzer. Er kann auf die Hallenpläne zugreifen und kann nach Ausstellern suchen.

### Beschreibung Persona

### Interaktionsdesign

![Zustandsdiagramm Besucher](Zustandsdiagramme/Desktop/besucher.png)
*Zustandsdiagramm Besucher*

Dem Besucher ist es möglich sich über die Angebote einer Messe einen Überblick zu machen. Er kann zwischen den verschiedenen Hallen navigieren und sich Detailinformationen zu einer ausgewählten Fläche anzeigen lassen. Außerdem kann der Besucher gezielt nach Ausstellern suchen. Wenn der gesuchte Aussteller eine Fläche gebucht hat, so wird diese farblich hervorgehoben.

### Übersicht Interaktionen (Desktop)

#### Übersicht + Suchen

![Wireframe Hallenübersicht + Suchent](Wireframes/Desktop/besucher.png)
*Übersicht der Halle mit eingebauter Suchfunktion*

#### Login

![Wireframe Login](Wireframes/Desktop/login.png)
*Login-Seite, führt in Mitarbeiter-/ Ausstellerbereicht*

### Übersicht Interaktionen (Mobile)

#### Übersicht

![Wireframe Hallenübersicht](Wireframes/Mobile/Mobile_Homescreen.png)
*Übersicht der Halle / Homescreen*

#### Menu

![Wireframe Menu](Wireframes/Mobile/Mobile_Menu.png)
*Ausgeklapptes Menu*

#### Suchen

![Wireframe Suchen](Wireframes/Mobile/Mobile_Search.png)
*Suchen-Seite*

##### Ergebnis gefunden

![Wireframe Suchen Gefunden](Wireframes/Mobile/Mobile_Search_Found.png)
*Suchen-Seite mit gefundenen Ergebnissen*

#### Login

![Wireframe Login](Wireframes/Mobile/Mobile_Login.png)
*Login-Seite, führt in Mitarbeiter-/ Ausstellerbereicht*
