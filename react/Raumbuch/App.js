import HomeScreen from './app/views/HomeScreen';
import ProjectView from './app/views/ProjectView';
import DetailScreen from './app/views/DetailScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Projects: ProjectView,
    Details: DetailScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {title: 'App'},
  });

export default createAppContainer(navigator);

