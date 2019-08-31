import React from 'react';
import { SearchBar } from 'react-native-elements';
import {
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import { Col, Row, Card, CardItem, Container, Body } from 'native-base';
import FlatListItem from '../components/FlatListItem';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CreateProjectComponent from '../components/CreateProjectComponent';

const columns = 2;

let nav;

class ProjectScreen extends React.Component{
  state = {
    projects: [],
    filteredProjects: [],
    search: '',
    addProjectPressed: false,
    isLoading: true,
  };

  componentDidMount(){
    AsyncStorage.getAllKeys().then((keys) => {
      keys.map(async(key) => {
        await AsyncStorage.getItem(key).then((item) => {
          this.setState(
            {projects: [...this.state.projects, JSON.parse(item)]});
          this.setState({
            filteredProjects: [
              ...this.state.filteredProjects,
              JSON.parse(item)],
          });
        });
      });
    });
    this.setState({isLoading: false});
  };

  renderItem = ({item}) => {
    if (item.empty === true){
      return <View style={[styles.item, styles.itemInvisible]}/>;
    }
    return (
      <FlatListItem nav={nav} item={item} columnCount={columns}/>
    );
  };

  addProject = (project) => {
    this.setState({
      projects: [...this.state.projects, project],
    });
    if (this.state.search === ''){
      this.setState({
        filteredProjects: [...this.state.filteredProjects, project],
      });
    }
  };

  isProjectModalVisible = (isVisible) => {
    this.setState({addProjectPressed: isVisible});
  };

  searchFunction = (searchString) => {
    if (searchString !== ''){
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

    if (this.state.isLoading){
      return (
        <View style={styles.loadingIndication}>
          <ActivityIndicator size={100} color="#6cd166"/>
        </View>

      );
    } else{

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
            data={this.state.filteredProjects}
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
      );
    }
  }
}

const styles = StyleSheet.create({
    rowStyle: {
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
    itemInvisible: {
      backgroundColor: 'transparent',
    },
    itemText: {
      color: '#fff',
    },
    loadingIndication: {
      flex: 1,
      justifyContent: 'center',
    },
  })
;

export default ProjectScreen;
