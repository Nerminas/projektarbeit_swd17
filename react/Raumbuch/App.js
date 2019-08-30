import React from 'react';
import HomeScreen from './app/views/HomeScreen';
import { View } from 'react-native';
import StatusbarComponent from './app/components/StatusbarComponent';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusbarComponent/>
      <HomeScreen/>
    </View>
  )
    ;
};

export default App;

