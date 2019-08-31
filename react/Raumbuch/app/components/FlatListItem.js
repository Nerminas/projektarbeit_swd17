import React from 'react';
import {
  Body,
  Card,
  CardItem,
  Text,
  View,
} from 'native-base';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

let columns = 0;

const FlatListItem = ({isProjectModalVisible, nav, item, columnCount}) => {

  columns = columnCount;
  return (
    <TouchableWithoutFeedback onPress={p => {
      nav.navigate('Tab2', {
        data: 'Test Data',
      });
    }}>
      <Card style={styles.item}>
        <CardItem header bordered>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>{item.name}</Text>
            <TouchableOpacity
              onPress={() => {
                isProjectModalVisible(true, 'edit', item);
              }}>
              <AntDesign style={styles.headingIcon} name={'edit'} size={30}/>
            </TouchableOpacity>
          </View>
        </CardItem>
        <CardItem>
          <Body style={styles.cardBody}>
            <Text>Name: {item.name}</Text>
            <Text>Kundennummer: {item.customernumber}</Text>
            <Text>Adresse: {item.adress}</Text>
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
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
  },
  headingContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  heading: {
    flex: 1,
    fontSize: 20,
  },
  headingIcon: {},
  headingIconContainer: {},
});

export default FlatListItem;
