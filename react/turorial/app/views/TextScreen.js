import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const TextScreen = () => {

  const [name, setName] = useState('');
  return <View>
    <Text>Enter Password</Text>
    <TextInput
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      value={name}
      secureTextEntry={true}
      onChangeText={(text) => {
        setName(text);
      }}
    />
    {name.length < 5 ? <Text>Password has to be at least 5 charakters long</Text> : null}
  </View>;
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 20,
  },
});

export default TextScreen;
