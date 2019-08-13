import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import BmiCalculator from './screens/BmiCalculator';

export default class App extends React.Component{
  render(){
    console.log('Height on: ', Platform.OS, StatusBar.currentHeight);

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <BmiCalculator/>
        </View>
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

