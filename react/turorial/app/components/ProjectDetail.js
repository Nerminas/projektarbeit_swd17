import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ProjectDetail = ({project}) => {
  return <View>
    <Text>{project.name}</Text>
    <Text>{project.address}</Text>
    <Text>{project.site}</Text>
    <Text>{project.phone}</Text>
  </View>;
};

const styles = StyleSheet.create({});

export default ProjectDetail;
