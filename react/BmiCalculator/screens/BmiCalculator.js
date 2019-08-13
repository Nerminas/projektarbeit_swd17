import React from 'react';
import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';
import { PricingCard, Header } from 'react-native-elements';
import BottomNavBar from '../components/BottomNavBar';
import { TextInput } from 'react-native-paper';

export default class BmiCalculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      height: 0,
      weight: 0,
      bmi: 0,
    };
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder='weight'
          onChangeText={weight => {
            this.state.setState({weight})
          }}
        />
        <Text style={styles.output}>{this.state.bmi}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {},
  output: {},
  container: {
    flex: 1,
  },
  pricing: {
    flex: 1,
    margin: 5,
  },
  main: {
    flex: 1,
    flexDirection: 'column',
  },
  welcomeImage: {
    width: 100,
    height: 80,

    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});
