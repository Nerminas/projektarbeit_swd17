import 'package:flutter/material.dart';
import 'views/projects.dart';
import 'views/rooms.dart';
import 'views/components.dart';


void main() {
  runApp(MaterialApp(
      title: "Raumbuch",
      home: MyHome()));
}

class MyHome extends StatefulWidget {
  @override
  MyHomeState createState() => MyHomeState();
}

class MyHomeState extends State<MyHome> with SingleTickerProviderStateMixin {
  TabController controller;

  @override
  void initState() {
    super.initState();

    controller = TabController(length: 3, vsync: this);
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: TabBarView(
        children: <Widget>[ProjectsTab(), RoomsTab(), ComponentsTab()],
        controller: controller,
      ),
      bottomNavigationBar: Material(
        color: Colors.green,
        child: TabBar(
          tabs: <Tab>[
            Tab(
              icon: Icon(Icons.home),
              text: "Projekte"
            ),
            Tab(
              icon: Icon(Icons.folder),
              text: "Räume"
            ),
            Tab(
              icon: Icon(Icons.settings_input_component),
              text: "Komponenten"
            ),
          ],
          controller: controller,
        ),
      ),
    );
  }
}