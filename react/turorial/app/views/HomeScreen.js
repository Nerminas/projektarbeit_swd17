import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title={'Go to Details'}
              onPress={() => navigation.navigate('Details')}
      />
      <Button title={'Go to Projects'}
              onPress={() => navigation.navigate('Projects')}
      />
      <Button title={'Go to Counter'}
              onPress={() => navigation.navigate('Counter')}
      />
      <Button title={'Generate Colors'}
              onPress={() => navigation.navigate('Color')}
      />
      <Button title={'Color Adjuster'}
              onPress={() => navigation.navigate('Square')}
      />
      <Button title={'Text Input'}
              onPress={() => navigation.navigate('Text')}
      />
        <Button title={'Layout Box'}
                onPress={() => navigation.navigate('Box')}
        />
    </View>
  );

};

export default HomeScreen;
