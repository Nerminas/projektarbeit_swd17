import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>ComponentName</Text>
  </View>;
};

const styles = StyleSheet.create({
  viewStyle:{
    borderWidth: 1,
    borderColor: 'black',
  },
  textStyle:{
    borderWidth: 1,
    borderColor:'red'
  }
});

export default BoxScreen;


test
