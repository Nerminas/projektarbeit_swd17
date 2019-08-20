import React from 'react';
import { AppLoading } from 'expo';
import { StyleSheet, StatusBar, Platform, SafeAreaView } from 'react-native';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount(){
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({isReady: true});
  }

  render(){
    if (!this.state.isReady){
      return <AppLoading/>;
    }
    console.log('Running on ' + Platform.OS + ' Current height: ' +
      StatusBar.currentHeight);
    return (
      <SafeAreaView style={styles.safeArea}>
        <Container style={styles.container}>
          <Text>Neue App .</Text>
        </Container>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
