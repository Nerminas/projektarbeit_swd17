import React, {
  useReducer,
  useState,
}
  from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Alert,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const reducer = (state, action) => {
  switch (action.type){
    case 'name':
      return {...state, name: action.payload};
    case 'customernumber':
      return {...state, customernumber: action.payload, key: action.payload};
    case 'adress':
      return {...state, adress: action.payload};
    case 'phone':
      return {...state, phone: action.payload};
    case 'email':
      return {...state, email: action.payload};
    default:
      return state;
  }
};

const ProjectDetailComponent = ({title, isProjectModalVisible, isVisible, action, project, addProject, editProject}) => {
  const [state, dispatch] = useReducer(reducer,
    {
      key: project !== null ? project.key : '',
      name: project !== null ? project.name : '',
      customernumber: project !== null ? project.customernumber : '',
      adress: project !== null ? project.adress : '',
      phone: project !== null ? project.phone : '',
      email: project !== null ? project.email : '',
    });
  const {name, customernumber, adress, phone, email, key} = state;

  const [oldEditKey, setOldEditKey] = useState(
    action === 'edit' || project !== null ? project.key : '');

  return (
    <View>
      <Modal
        style={styles.modalContainer}
        animationType={'slide'}
        transparent={true}
        visible={isVisible}
        onRequestClose={() => isProjectModalVisible(false, '', null)}
      >
        <View style={styles.transparentContainer}>
          <View style={styles.inputFormContainer}>
            <View style={styles.modalTitle}>
              <Text style={styles.heading}>{title}</Text>
              {action === 'edit' ?
                <TouchableOpacity
                  onPress={async() => {
                    await removeEntry(state).then(async() => {
                      editProject(null, oldEditKey);
                      isProjectModalVisible(false, '', null);
                    });
                  }}>
                  <AntDesign style={styles.headingIcon} name={'delete'}
                             size={40}/>
                </TouchableOpacity> : null}
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Projektname"
              maxLength={30}
              value={name}
              onChangeText={input => {
                dispatch({type: 'name', payload: input});
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Kundennummer"
              maxLength={30}
              value={customernumber}
              onChangeText={input => {
                dispatch({type: 'customernumber', payload: input});
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Adresse"
              maxLength={30}
              value={adress}
              onChangeText={input => {
                dispatch({type: 'adress', payload: input});
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Telefon"
              maxLength={30}
              value={phone}
              onChangeText={input => {
                dispatch({type: 'phone', payload: input});
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="e-Mail"
              maxLength={30}
              value={email}
              onChangeText={input => {
                dispatch({type: 'email', payload: input});
              }}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}
                                onPress={() => isProjectModalVisible(false, '',
                                  null)}>
                <Text style={styles.buttonText}>Zurück</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}
                      onPress={async() => {
                        if (action === 'add'){
                          await validateEntry(key, null).
                            then(async(valid) => {
                              if (valid){
                                await storeEntry(state).
                                  then(() => {
                                    addProject(state);
                                    isProjectModalVisible(false, '', null);
                                  });
                              }
                            });
                        } else if (action === 'edit'){
                          await validateEntry(key, oldEditKey).
                            then(async(valid) => {
                              if (valid){
                                await editEntry(state, oldEditKey).
                                  then(() => {
                                    editProject(state, oldEditKey);
                                    isProjectModalVisible(false, '', null);
                                  });
                              }
                            });
                        }
                      }}>Speichern</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
    ;
};

const validateEntry = async(key, oldEditKey) => {
  let valid = false;
  if (key == null || key.length <= 0){
    Alert.alert('Fehler', 'Kundennummer muss gesetzt sein', [
      {text: 'OK'},
    ], {cancelable: false});
    console.log('Customernumber has to be set');
  } else{
    await loadProject(key).then((item) => {
      valid = item === null || JSON.parse(item).key === oldEditKey;
      if (!valid){
        console.log(
          'Store not valid. Value already exists for key: ' + key + ': ' +
          item);
        Alert.alert('Fehler',
          'Es existiert bereits ein Projekt mit der Kundennummer ' + key + '.',
          [
            {text: 'OK'},
          ], {cancelable: false});
      }
    });
  }
  return valid;
};

const editEntry = async(project, oldEditKey) => {
  let projectString = JSON.stringify(project);
  console.log(
    'Going to edit customer: ' + project.customernumber + '\nValue: ' +
    projectString);

  /**
   * To keep the localStorage key i've decided to remove the entry and add a new
   * one on edit.
   */
  await AsyncStorage.removeItem(oldEditKey).then(async() => {
    await AsyncStorage.setItem(project.key, projectString).
      then(() => {
        console.log(
          'Saved customer: ' + project.customernumber + ' value: ' +
          projectString);
      }).
      catch(() => {
          console.log(
            'Storing of project:' + projectString + ' was not possible.');
        },
      );
  });
};

const storeEntry = async(project) => {
  let projectString = JSON.stringify(project);

  console.log(
    'Going to store customer: ' + project.customernumber + ' with value: ' +
    projectString);

  await AsyncStorage.setItem(project.key, projectString).
    then(() => {
      console.log(
        'Saved customer: ' + project.customernumber + ' value: ' +
        projectString);
    }).
    catch(() => {
        console.log(
          'Storing of project:' + projectString + ' was not possible.');
      },
    );

};

const removeEntry = async(project) => {
  let projectString = JSON.stringify(project);
  console.log(
    'Going to remove customer: ' + project.customernumber + '\nValue: ' +
    projectString);
  await AsyncStorage.removeItem(project.key).catch(() => {
    console.log(
      'Removing of project:' + projectString + ' was not possible.');
  });
};

const loadProject = async(key) => {
  let storedProject = null;
  await AsyncStorage.getItem(key).
    then((item) => {
      if (item !== null){
        console.log('Found entry for key: ' + key + '. Entry: ' + item);
      }
      storedProject = item;
    }).catch(
      () => {console.log('Load of project:' + key + ' was not possible.');});
  return storedProject;
};

const styles = StyleSheet.create({
  transparentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
  },
  inputFormContainer: {
    width: 300,
    height: 525,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  inputContainer: {
    paddingTop: 15,
  },
  modalTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 40,
    fontSize: 20,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ceefcc',
    borderRadius: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 20,
  },
  heading: {
    flex: 1,
    fontSize: 25,
  },
  headingIcon: {
    flex: 1,
    color: '#ceefcc',
  },
});

export default ProjectDetailComponent;
