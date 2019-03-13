# Projektarbeit SWD 17

## Vergleich von Cross-Plattform Development Technologien und Entwicklung von Prototypen.

Studierender: **David Reindl**  
Betreuer: Johannes Feiner

### 1. React Native

Referenz: [React Native Dokumention auf Github](https://facebook.github.io/react-native/)

Mit React Native können im Handumdrehen mobile Anwendungen erstellt werden, die nur JavaScript verwenden. Es verwendet das gleiche Design wie React, so dass man eine umfangreiche mobile Benutzeroberfläche mit deklarativen Komponenten erstellen kann.
Um das ganze schnell und effizient zu Entwickeln wird noch in kombination Expo verwendet.

## TODO

- installation mit template hat direkt 300mb -> blank installation testen

## 1. Installation

### 1.1 MacOs

Installation bzw Update des packetmanagers npm.

```console
sudo npm install -g npm
```

Node 8+ ist Vorraussetzung.

```console
npm install -g node
```

Nun muss die Expo CLI command line utility mittels npm installiert werden.

```console
npm install -g expo-cli
```

Nun erzeugen wir eine Template App welche bereits einige Demoscreens sowie react-navigation beinhalten, dass sollte den einstieg erleichtern.
Mit folgenden Befehlen erzeugen wir das React Native Projekt namens "Projektarbeit"

```console
expo init Projektarbeit
```

Nicht vergessen das template **tabs** auszuwählen.
Als "name" wird "Raumbuch" eingetragen.

Starten des Development Servers

```console
cd Projektarbeit
npm start #alternativ: expo start
```

### 1.2 React Native Anwendung starten

Expo Client im Appstore oder Playstore installieren > starten > und den QR-Code welcher
im Terminal bzw. im Browser ersichtlich ist (nach dem server start) anscannen.
Nachdem alle bundles erfolgreich gebaut wurden (siehe logoutput im Terminal bzw. Browser) können wir mit dem Entwickeln starten.
