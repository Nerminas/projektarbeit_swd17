import React, { useState } from 'react';
import { Icon, SearchBar } from 'react-native-elements';
import {
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Button, TouchableOpacity,
} from 'react-native';
import { Col, Row, Card, CardItem, Container, Body } from 'native-base';
import data from '../assets/files/data';
import FlatListItem from '../components/FlatListItem';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CreateProjectComponent from '../components/CreateProjectComponent';

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

let nav;

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
    search: '',
    addProjectPressed: false,
  };

  renderItem = ({item, index}) => {
    if (item.empty === true){
      return <View style={[styles.item, styles.itemInvisible]}/>;
    }
    return (
      <FlatListItem nav={nav} item={item} columnCount={columns}
                    style={styles.item}/>
    );
  };

  addProject(project){
    this.setState({
      project: [...this.state.projects, project],
    });
  }

  isProjectModalVisible(isVisible){
    console.log('isProjectModalVisible: ' + isVisible);
    this.setState({addProjectPressed: isVisible});
  }

  searchFunction = searchString => {
    if (searchString !== ''){
      console.log(searchString);
      let found = this.state.projects.filter(
        p => p.name.indexOf(searchString) !== -1);
      this.setState({filteredProjects: found});
      this.setState({search: searchString});
    } else{
      this.setState({filteredProjects: this.state.projects});
      this.setState({search: ''});
    }
  };

  render(){
    nav = this.props.navigation;

    return (
      <Container>
        <Row style={styles.rowStyle}>
          <Col style={{width: '80%'}}>
            <SearchBar
              onChangeText={this.searchFunction}
              value={this.state.search}
              cancelIcon={true}
              lightTheme={true}
              round={true}
              containerStyle={styles.searchViewContainerStyle}
              inputContainerStyle={styles.searchViewInputContainerStyle}
              //placeholderTextColor={'white'}
              placeholder={'Search Project'}
            />
          </Col>
          <Col style={styles.colButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                {this.isProjectModalVisible(true);}
              }}>
              <AntDesign style={{color: '#ceefcc'}} name={'addfolder'}
                         size={30}/>
            </TouchableOpacity>
          </Col>
        </Row>
        < FlatList
          data={formatData(this.state.filteredProjects, columns,
          )
          }
          style={styles.container}
          renderItem={this.renderItem}
          numColumns={columns}
        />
        {this.state.addProjectPressed
          ? <CreateProjectComponent
            isProjectModalVisible={this.isProjectModalVisible.bind(this)}
            addProject={this.addProject}
            isVisible={this.state.addProjectPressed}/>
          : null}
      </Container>

    )
      ;
  };
}

const styles = StyleSheet.create({
  rowStyle: {
    marginTop: 28,
    height: 58,
    backgroundColor: 'black',
  },
  colButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6cd166',
    height: 58,
  },
  searchViewInputContainerStyle: {
    backgroundColor: '#ceefcc',
  },
  searchViewContainerStyle: {
    backgroundColor: '#6cd166',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  searchContainer: {},
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#ceefcc',
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    margin: 5,
    height: Dimensions.get('window').width / columns,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});

export default ProjectScreen;
