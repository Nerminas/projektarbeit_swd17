import React, { useState } from 'react';
import { Text } from 'native-base';
import { StyleSheet, FlatList, View, Dimensions } from 'react-native';
import { Card, CardItem, Container, Body } from 'native-base';
import { SearchBar } from 'react-native-elements';

import data from '../assets/files/data';

const projectList = [
  {
    key: '1',
    name: 'David',
    address: 'Mahrensdorfkjhkjhkjhkhk',
    site: '1234',
    phone: '2341',
  },
  {
    key: '2',
    name: 'DiAnja',
    address: 'Test',
    site: '1234',
    phone: '2341',
  },
  {
    key: '3',
    name: 'Enja',
    address: 'Test',
    site: '1234',
    phone: '2341',
  },
  {
    key: '4',
    name: 'Anja',
    address: 'Test',
    site: '1234',
    phone: '2341',
  },
  {
    key: '5',
    name: 'Anja',
    address: 'Test',
    site: '1234',
    phone: '2341',
  },
  {
    key: '6',
    name: 'Anja',
    address: 'Test',
    site: '1234',
    phone: '2341',
  },
  {
    key: '7',
    name: 'Anja',
    address: 'Test',
    site: '1234',
    phone: '2341',
  },
  {
    key: '8',
    name: 'Anita',
    address: 'Test',
    site: '1234',
    phone: '2341',
  },
];

const columns = 2;

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !==
  0){
    data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
    numberOfElementsLastRow++;
  }

  return data;
};

class ProjectScreen extends React.Component{
  state = {
    projects: projectList,
    filteredProjects: projectList,
    search : ''
  };

  renderItem = ({item, index}) => {
    if (item.empty === true){
      return <View style={[styles.item, styles.itemInvisible]}/>;
    }
    return (
      <Card style={styles.item}>
        <CardItem header>
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
    );
  };

  searchFunction = searchString => {
    if (searchString !== ''){
      console.log(searchString);
      let found = this.state.projects.filter(p => p.name.indexOf(searchString) !== -1);
      this.setState({filteredProjects: found});
      this.setState( {search: searchString})
    } else{
      this.setState({filteredProjects: this.state.projects});
      this.setState({search: ''});
    }
  }

  render(){
    return (
      <Container>
        <SearchBar
        onChangeText={this.searchFunction}
        value={this.state.search}
        cancelIcon={true}
        lightTheme={true}
        round={true}/>
        <FlatList
          data={formatData(this.state.filteredProjects, columns)}
          style={styles.container}
          renderItem={this.renderItem}
          numColumns={columns}
        /></Container>

    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    //justifyContent: 'center',
    flex: 1,
    margin: 5,
    //height:100,
    height: Dimensions.get('window').width / columns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});

export default ProjectScreen;
