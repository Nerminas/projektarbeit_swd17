import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import ProjectScreen from './ProjectScreen';
import Hardware from './Hardware';
import Tmp from './Tmp';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator(
  {
    Tab1: {
      screen: ProjectScreen,
      navigationOptions: {
        title:"Projects",

      }
    },
    Tab2: {
      screen: Hardware,
      navigationOptions: {
        title:"Hardware"
      }
    },
    Tab3: {
      screen: Tmp,
      navigationOptions: {
        title:"Tmp"
      }
    }
  }
)

const HomeScreen = () => {
  const NavContainer = createAppContainer(TabNavigator);
  return(
    <NavContainer/>
  );
};

export default HomeScreen;

