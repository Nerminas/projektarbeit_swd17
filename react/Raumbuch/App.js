import React from 'react';
import HomeScreen from './app/views/HomeScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Icon, SearchBar, Button } from 'react-native-elements';
import { View} from 'react-native';

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Projekte',
      header: (
          <SearchBar
            onChangeText={p => {return console.log(p)}}
          />),
      headerRight: ( <Button title={"Test"}/>)
    },
  });

export default createAppContainer(StackNavigator);

