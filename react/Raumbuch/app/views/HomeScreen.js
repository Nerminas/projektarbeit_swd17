import React from 'react';
import ProjectScreen from './ProjectScreen';
import Hardware from './Hardware';
import Tmp from './Tmp';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TabNavigator = createBottomTabNavigator(
  {
    Tab1: {
      screen: ProjectScreen,
      navigationOptions: {
        title: 'Projekte',
        tabBarIcon: ({tintColor}) => {
          return <AntDesign style={{color: tintColor}} name={'home'}
                            size={30}/>;
        },
      },
    },
    Tab2: {
      screen: Hardware,
      navigationOptions: {
        title: 'Räume',
        tabBarIcon: ({tintColor}) => {
          return <AntDesign style={{color: tintColor}} name={'profile'}
                            size={30}/>;
        },
      },
    },
    Tab3: {
      screen: Tmp,
      navigationOptions: {
        title: 'Komponenten',
        tabBarIcon: ({tintColor}) => {
          return <AntDesign style={{color: tintColor}} name={'fork'}
                            size={30}/>;
        },
      },
    },
  }, {
    tabBarOptions: {
      activeTintColor: '#ceefcc',
      inactiveTintColor: 'grey',
      activeBackgroundColor: '#6cd166',
      inactiveBackgroundColor: '#ceefcc',
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

