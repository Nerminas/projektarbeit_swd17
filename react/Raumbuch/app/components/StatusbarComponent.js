import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';

const StatusBarBackground = () => {
  return (
    <View style={styles.statusBarBackground}></View>
  );
};

const styles = StyleSheet.create({
  statusBarBackground: {
    height: (Platform.OS === 'ios') ? 0 : StatusBar.currentHeight,
    backgroundColor: '#6cd166',
  },
});

module.exports = StatusBarBackground;
