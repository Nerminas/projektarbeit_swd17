import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import ProjectScreen from './ProjectScreen';
import Hardware from './Hardware';
import Tmp from './Tmp';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator(
  {
    Tab1: {
      screen: ProjectScreen,
      navigationOptions: {
        title: 'Projects',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="home" size={30} color={tintColor}/>;
        },
      }, tabBarOptions: {
        activeTintColor: 'green',
        inactiveTintColor: 'grey',
      },
    },
    Tab2: {
      screen: Hardware,
      navigationOptions: {
        title: 'Hardware',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="memory" size={30} color={tintColor}/>;
        },
      },
    },
    Tab3: {
      screen: Tmp,
      navigationOptions: {
        title: 'Tmp',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="wifi" size={30} color={tintColor}/>;
        },
      },
    },
  },
);

const HomeScreen = () => {
  const NavContainer = createAppContainer(TabNavigator);
  return (
    <NavContainer/>
  );
};

export default HomeScreen;

