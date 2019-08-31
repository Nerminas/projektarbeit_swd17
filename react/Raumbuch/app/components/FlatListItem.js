import React from 'react';
import { Body, Card, CardItem, Text } from 'native-base';
import {
  StyleSheet, TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { Feather, EvilIcons } from '@expo/vector-icons';

let columns = 0;

const FlatListItem = ({nav, item, columnCount}) => {
  columns = columnCount;
  return (
    <TouchableWithoutFeedback onPress={p => {
      nav.navigate('Tab2', {
        data: 'Test Data',
      });
    }}>
      <Card style={styles.item}>
        <CardItem header>
          <Text>{item.name}</Text>
          <TouchableOpacity
            style={{marginLeft: 50}}
            onPress={p => {console.log('Edit ' + item.name);}}>
            <Feather name={'edit'} size={30}/>
          </TouchableOpacity>
        </CardItem>
        <CardItem>
          <Body>
            <Text>Name: {item.name}</Text>
            <Text>Kundennummer: {item.customernumber}</Text>
            <Text>Adresse: {item.address}</Text>
            <Text>Telefon: {item.phone}</Text>
            <Text>eMail: {item.email}</Text>
          </Body>
        </CardItem>
      </Card>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    margin: 5,
    borderRadius: 10,
    height: 250,
  },
});

export default FlatListItem;
