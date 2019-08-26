import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type){
    case 'increase':
      return {...state, count: state.count + action.payload};
    case 'decrease':
      return {...state, count: state.count - action.payload};
    default:
      return state;
  }
};

const CounterScreen = () => {

  const [state, dispatch] = useReducer(reducer, {count: 0});
  const {count} = state;

  return <View>
    <Text>CounterScreen</Text>
    <Button title={'Increase'}
            onPress={() => {
              dispatch({type: 'increase', payload: 1});
            }}
    />
    <Button title={'Decrease'}
            onPress={() => {
              dispatch({type: 'decrease', payload: 1});
            }}
    />
    <Text style={styles.sumStyle}>Current Counter: {count}</Text>
  </View>;
};

const styles = StyleSheet.create({
  sumStyle: {
    fontSize: 20,
  },
});

export default CounterScreen;
;
