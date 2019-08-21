import React from 'react';
import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default class HomeScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      height: 0,
      weight: 0,
      errorWeight: false,
      errorHeight: false,
    };
  }

  calcBmi(height, weight){
    return (weight / ((height / 100) * (height / 100))).toFixed(2);
  }

  validateInput(input){

  }

  render(){
    let bmi = '';
    if (this.state.errorWeight || this.state.errorHeight){
      bmi = 'Numeric error';
    }else if (this.state.height != 0
      && this.state.weight != 0){
      let temp = this.calcBmi(this.state.height, this.state.weight);
      console.log(this.state.weight);
      console.log(this.state.height);

      if (temp > 0 && temp < 100){
        bmi = temp;
      }
    }

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder='weight'
          onChangeText={weight => {
            if (!isNaN(weight)){
              this.setState({weight});
              this.setState({errorWeight: false});
            } else{
              this.setState({errorWeight: true});
            }
          }}
        />
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder='height'
          onChangeText={height => {
            if (!isNaN(height)){
              this.setState({height});
              this.setState({errorHeight: false});
            } else{
              this.setState({errorHeight: true});
            }
          }}
        />
        <Text style={styles.output}>{bmi}</Text>
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
