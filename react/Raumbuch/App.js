import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render() {
    return (<HomeScreen/>);
  }
};
