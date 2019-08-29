import React from 'react';
import { Body, Card, CardItem, Text } from 'native-base';
import {
  Button,
  Dimensions,
  StyleSheet, TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { Feather, EvilIcons } from '@expo/vector-icons';

let columns = 0;

const FlatListItem = ({nav, item, columnCount, style}) => {
  columns = columnCount;
  return (
    <TouchableWithoutFeedback onPress={p => {nav.navigate('Tab2', {
      data : "Test Data"
    })}}>
      <Card style={style}>
        <CardItem header>
          <Text>{item.name}</Text>
          <TouchableOpacity
            style={{marginLeft:50}}
            onPress={p => {console.log('Edit ' + item.name)}}>
            <Feather name={'edit'} size={30}/>
          </TouchableOpacity>
        </CardItem>
        <CardItem>
          <Body>
            <Text>Name: {item.name}</Text>
            <Text>Adresse: {item.address}</Text>
            <Text>Kunde: {item.site}</Text>
            <Text>Telefon: {item.phone}</Text>
          </Body>
        </CardItem>
      </Card>
    </TouchableWithoutFeedback>);
};

export default FlatListItem;
