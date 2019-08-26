import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = () => {
  return (
    <View style={styles.detailStyle}>
      <Text>Detail Screen</Text>
    </View>
  );

};

const styles = StyleSheet.create({
  detailStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailScreen;

