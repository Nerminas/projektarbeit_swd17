import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SearchBar = () => {
    return (
      <View style={styles.background}>
        <Text>SearchBar</Text>
      </View>
    );
  }
;

const styles = StyleSheet.create({
  searchInput: {
    borderColor: 'black',
    borderWidth: 1,
  },
  background: {
    backgroundColor: '#F0EEEE',
  },
});

export default SearchBar;
