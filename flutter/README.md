# Projektarbeit SWD 17

## Vergleich von Cross-Plattform Development Technologien und Entwicklung von Prototypen.

Studierender: **David Reindl**  
Betreuer: Johannes Feiner

### 3. Flutter

Referenz: [Flutter Dokumentation](https://flutter.dev/)

Flutter ist Googles modernes Entwicklungs-Kit, das entwickelt wurde, um mobile Apps für Android, iOS und Google Fuchsia zu entwickeln, eine neue Plattform, die von Google entwickelt wird.

## 1. Installation

### 1.1 MacOs

Installations Guide: [Flutter.io](https://flutter.dev/docs/get-started/install/macos)

Die Installation muss gemäß des Offiziellen Guides durchgeführt werdne um ein Flutter Projekt lokal auf dem Rechner initialisieren zu können.
Die wichtigsten Punkte:

- SDK Entpacken (z.B.: nach ~/development/) 
  ```console
  unzip ~/Downloads/flutter_macos_v1.7.8+hotfix.4-stable.zip
  ```
- PATH Variable setzten
  ```console
  export PATH=~/development/flutter/bin:"$PATH"
  ```

### 1.2 Windows

Installations Guide: [Fluttio.io](https://flutter.dev/docs/get-started/install/windows)

Flutter SDK herunterladen und installieren, wichtig hierbei ist das die SDK nicht in einem Ordner der Admin rechte benötigt installiert wird (z.B.: C:\Programme\flutter).

Im Anschluss muss Pfad noch zur Umgebungsvariable hinzugefügt werden.
Hierfür muss der `flutter\bin` Pfad mit einem `;` getrennt ans Ende des Pfades angehängt werden.


### 1.1.1 Android Entwicklung
Hierwürd wird [Android Studio](https://developer.android.com/studio) installiert. Einfach mithilfe von "Download Android Studio" herunterladen und installieren.

Tools -> AVD Manager -> Neue VM Hinzufügen (Android 9 API28).
Nun kann der Simulator mit dem Play Button gestartet werden.

Abschließen müssen noch  alle Android sdk spezifischen lizenzen bestätigt werden. Dies kann mit folgendem Befehl durchgeführt werden.
```console
flutter doctor --android-licenses -update
```

Abschließend muss die App noch auf dem Emulator gestartet werden:
```console
cd ~/Projects/flutter/<projectname>
flutter run
```

