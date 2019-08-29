import React from 'react';
import HomeScreen from './app/views/HomeScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Icon, SearchBar, Button } from 'react-native-elements';
import { View} from 'react-native';

const App = () => {
  return (
    <HomeScreen/>
  );
};

export default App;

