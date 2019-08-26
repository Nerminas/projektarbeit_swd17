import React, { useState } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;
const COLOR_DECREMENT = -15;

const SquareScreen = () => {

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, changeVal) => {
    switch (color){
      case 'red':
        return red + changeVal > 255 || red + changeVal < 0 ? null : setRed(
          red + changeVal);
      case 'green':
        return green + changeVal > 255 || green + changeVal < 0 ? null : setGreen(
          green + changeVal);
      case 'blue':
        return blue + changeVal > 255 || blue + changeVal < 0 ? null : setBlue(
          blue + changeVal);
      default:
        return;
    }
  };

  return (<View>
    <ColorCounter color='Red'
                  onIncrease={() => {setColor('red', COLOR_INCREMENT);}}
                  onDecrease={() => {setColor('red', COLOR_DECREMENT);}}
    />
    <ColorCounter color={'Green'}
                  onIncrease={() => {setColor('green', COLOR_INCREMENT);}}
                  onDecrease={() => {setColor('green', COLOR_DECREMENT);}}
    />
    <ColorCounter color={'Blue'}
                  onIncrease={() => {setColor('blue', COLOR_INCREMENT);}}
                  onDecrease={() => {setColor('blue', COLOR_DECREMENT);}}
    />
    <View style={{
      height: 100,
      width: 100,
      backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    }}/>
  </View>);
};

const styles = StyleSheet.create({});

export default SquareScreen;
