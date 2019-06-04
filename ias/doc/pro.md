<link rel="stylesheet" type="text/css" media="all" href="pro.css" />

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

![Zustandsdiagramm Messeveranstalter/ -mitarbeiter](Zustandsdiagramme/Desktop/mitarbeiter.png)

Die Interaktion des Mitarbeiters beginnt, wenn er sich eingeloggt hat.
Wenn er sich eingeloggt hat, sieht er zu allererst die Übersicht aller Buchungen für die gesamte Messe.
Dabei besteht die Möglichkeit, einzelne Buchungen zu stornieren.
Eine weitere Möglichkeit der Interaktion ist die Einteilung der einzelnen Hallen für die Aussteller.

### Übersicht Interaktionen (Desktop)

#### Übersicht

![Übersicht aller Buchungen](Wireframes/Desktop/mitarbeiteruebersicht.png)

#### Hallenbearbeitung

![Bearbeitungsmöglichkeit einer Halle zum Bearbeiten](Wireframes/Desktop/mitarbeiter.png)

### Übersicht Interaktionen (Mobile)

#### Übersicht

![Übersicht aller Buchungen](Wireframes/Mobile/Mobile_Homescreen_Mitarbeiter.png)

#### Menu

![Ausgeklapptes Menu](Wireframes/Mobile/Mobile_Menu_Mitarbeiter.png)

#### Hallenbearbeitung

![Bearbeitungsmöglichkeit einer Halle zum Bearbeiten](Wireframes/Mobile/Mobile_Bearbeiten_Mitarbeiter.png)

---

## Nutzungsszenario: Aussteller

### Allgemeine Beschreibung

Die Aussteller sind eine der drei Gruppen in diesem Szenario.

### Beschreibung Persona

Die Intention des Ausstellers ist die, für kommende Messen Stände zu buchen, auf denen er seine Produkte und Leistungen präsentiert.

### Interaktionsdesign

![Zustandsdiagramm Aussteller](Zustandsdiagramme/Desktop/aussteller.png)

Nachdem sich der Aussteller eingeloggt hat, wird er auf eine neue Seite geleitet. Auf dieser Seite werden ihm seine bisherigen Buchungen angezeigt, die er bis dahin erstellt hat. Diese Seite dient lediglich als Übersicht. Möchte der Aussteller weitere Flächen buchen oder bereits erstellte Buchungen bearbeiten, so muss er zu der jeweiligen Hallenübersicht gehen.
In der Hallenübersicht werden gebuchte Flächen grün angezeigt. Flächen die nicht zur Auswahl stehen sind rot oder grau markiert. Der Aussteller kann freie oder gebuchte Flächen auswählen um nähere Informationen zu der Auswahl zu bekommen und entscheiden, ob er diese Fläche buchen bzw. stornieren möchte.

### Übersicht Interaktionen (Desktop)

#### Übersicht

![Übersicht der getätigten Buchungen](Wireframes/Desktop/austelleruebersicht.png)

#### Standbuchung

![Standbuchungsmöglichkeit pro Halle](Wireframes/Desktop/aussteller.png)

### Übersicht Interaktionen (Mobile)

#### Übersicht

![Übersicht der getätigten Buchungen](Wireframes/Mobile/Mobile_Homescreen_Aussteller.png)

#### Menu

![Ausgeklapptes Menu](Wireframes/Mobile/Mobile_Menu_Aussteller.png)

#### Standbuchung

![Standbuchungsmöglichkeit pro ausgewählter Halle](Wireframes/Mobile/Mobile_Buchen_Aussteller.png)

---

## Nutzungsszenario: Besucher

### Allgemeine Beschreibung

Der Besucher ist kein registrierter Benutzer. Er kann auf die Hallenpläne zugreifen und kann nach Ausstellern suchen.

### Beschreibung Persona

### Interaktionsdesign

![Zustandsdiagramm Besucher](Zustandsdiagramme/Desktop/besucher.png)

Dem Besucher ist es möglich sich über die Angebote einer Messe einen Überblick zu machen. Er kann zwischen den verschiedenen Hallen navigieren und sich Detailinformationen zu einer ausgewählten Fläche anzeigen lassen. Außerdem kann der Besucher gezielt nach Ausstellern suchen. Wenn der gesuchte Aussteller eine Fläche gebucht hat, so wird diese farblich hervorgehoben.

### Übersicht Interaktionen (Desktop)

#### Übersicht + Suchen

![Übersicht der Halle mit eingebauter Suchfunktion](Wireframes/Desktop/besucher.png)

#### Login

![Login-Seite, führt in Mitarbeiter-/ Ausstellerbereicht](Wireframes/Desktop/login.png)

### Übersicht Interaktionen (Mobile)

#### Übersicht

![Übersicht der Halle / Homescreen](Wireframes/Mobile/Mobile_Homescreen.png)

#### Menu

![Ausgeklapptes Menu](Wireframes/Mobile/Mobile_Menu.png)

#### Suchen

![Suchen-Seite](Wireframes/Mobile/Mobile_Search.png)

##### Ergebnis gefunden

![Suchen-Seite mit gefundenen Ergebnissen](Wireframes/Mobile/Mobile_Search_Found.png)

#### Login

![Login-Seite, führt in Mitarbeiter-/ Ausstellerbereicht](Wireframes/Mobile/Mobile_Login.png)
