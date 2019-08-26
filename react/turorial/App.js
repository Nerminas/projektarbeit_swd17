import HomeScreen from './app/views/HomeScreen';
import ProjectScreen from './app/views/ProjectScreen';
import DetailScreen from './app/views/DetailScreen';
import CounterScreen from './app/views/CounterScreen';
import ColorScreen from './app/views/ColorScreen';
import SquareScreen from './app/views/SquareScreen';
import TextScreen from './app/views/TextScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import BoxScreen from './app/views/BoxScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Projects: ProjectScreen,
    Details: DetailScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Box: BoxScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {title: 'Raumbuch'},
  });

export default createAppContainer(navigator);

