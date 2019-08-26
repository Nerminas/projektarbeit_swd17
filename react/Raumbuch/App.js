import HomeScreen from './app/views/HomeScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {title: 'Raumbuch', },
  });

export default createAppContainer(StackNavigator);

