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
import { Col, Row, Container } from 'native-base';
import FlatListItem from '../components/FlatListItem';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProjectDetailComponent from '../components/ProjectDetailComponent';

const columns = 2;
let nav;

class ProjectScreen extends React.Component{
  state = {
    projects: [],
    filteredProjects: [],
    search: '',
    projectModalPressed: false,
    selectedProject: {},
    modalAction: '',
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
      return <View style={styles.itemInvisible}/>;
    }
    return (
      <FlatListItem
        isProjectModalVisible={this.isProjectModalVisible.bind(this)}
        nav={nav}
        item={item}
        columnCount={columns}/>
    );
  };

  formatData = (projects) => {
    return projects.sort((a, b) => (a.name > b.name) ? 1 : -1);
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

  editProject = (project, oldEditKey) => {
    this.setState({
      projects: this.state.projects.filter((obj) => obj.key !== oldEditKey),
      filteredProjects: this.state.filteredProjects.filter(
        (obj) => obj.key !== oldEditKey),
    });
    if (project !== null){
      this.setState({
        projects: [...this.state.projects, project],
        filteredProjects: [...this.state.filteredProjects, project],
      });
    }
  };

  isProjectModalVisible = (isVisible, action, project) => {
    this.setState({projectModalPressed: isVisible});
    this.setState({modalAction: action});
    this.setState({selectedProject: project});
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
                placeholder={'Search Project'}
              />
            </Col>
            <Col style={styles.colButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  {this.isProjectModalVisible(true, 'add', null);}
                }}>
                <AntDesign style={{color: '#ceefcc'}} name={'addfolder'}
                           size={30}/>
              </TouchableOpacity>
            </Col>
          </Row>
          < FlatList
            data={this.formatData(this.state.filteredProjects)}
            style={styles.container}
            renderItem={this.renderItem}
            numColumns={columns}
          />
          {this.state.projectModalPressed
            ? <ProjectDetailComponent
              title={this.state.modalAction === 'add'
                ? 'Neues Projekt anlegen'
                : 'Projekt ändern'}
              isProjectModalVisible={this.isProjectModalVisible.bind(this)}
              action={this.state.modalAction}
              project={this.state.selectedProject}
              addProject={this.addProject}
              editProject={this.editProject}
              isVisible={this.state.projectModalPressed}/>
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
