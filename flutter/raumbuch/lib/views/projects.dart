import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:raumbuch/models/project_model.dart';

class ProjectsTab extends StatelessWidget {

List<ProjectModel> mockedProjects = []
..add(ProjectModel('david','test','test','test','test'))
..add(ProjectModel('anja','test','test','test','test'));



  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Projekte"),
        backgroundColor: Colors.green,
      ),
      backgroundColor: Colors.green[50],
      body: Container(
        child: new ListView.builder(
          itemCount: mockedProjects == null ? 0 : mockedProjects.length,
          itemBuilder: (BuildContext context, int index){
            return new Card(
              child: new Container(
                height: 50,
                child: new Column(
                  children: <Widget>[
                  new Text(mockedProjects[index].name),
                  new Text(mockedProjects[index].customernumber)
                  ],
                ),
              ),
            );
          },
        )
      ),
    );
  }
}