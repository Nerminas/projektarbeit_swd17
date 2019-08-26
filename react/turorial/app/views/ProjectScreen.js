import React from 'react';
import { View, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';
import ProjectDetail from '../components/ProjectDetail';

const projects = [
  {
    name: 'David',
    address: 'Mahrensdorfkjhkjhkjhkhk',
    site: '1234',
    phone: '2341',
  },
  {
    name: 'Anja',
    address: 'Test',
    site: '1234',
    phone: '2341',
  },
];

const ProjectScreen = () => {


  const allProjects = projects.map((project, key) =>
    <ProjectDetail project={project} key={project.name}/>
  );

  return allProjects;

};

export default ProjectScreen;
