import React from 'react';
import { Body, Card, CardItem, Text } from 'native-base';
import {
  Button,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

let columns = 0;

const FlatListItem = ({item, columnCount, style}) => {
  columns = columnCount;
  return (
    <TouchableWithoutFeedback onPress={p => {console.log(item.name);}}>
      <Card style={style}>
        <CardItem header>
          <Button raised
                  title={'Edit Button'}
                  onPress={p => {console.log('test');}}/>
          <Text>{item.name}</Text>
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
