import React, {
  useReducer,
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

const CreateProjectComponent = ({isProjectModalVisible, isVisible, addProject}) => {
  const [state, dispatch] = useReducer(reducer,
    {key: '', name: '', customernumber: '', adress: '', phone: '', email: ''});
  const {name, customernumber} = state;

  return (
    <View>
      <Modal
        style={styles.modalContainer}
        animationType={'slide'}
        transparent={true}
        visible={isVisible}
        onRequestClose={() => isProjectModalVisible(false)}
      >
        <View style={styles.transparentContainer}>
          <View style={styles.inputFormContainer}>
            <Text style={styles.heading}>Neues Projekt anlegen</Text>
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
              onChangeText={input => {
                dispatch({type: 'customernumber', payload: input});
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Adresse"
              maxLength={30}
              onChangeText={input => {
                dispatch({type: 'adress', payload: input});
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Telefon"
              maxLength={30}
              onChangeText={input => {
                dispatch({type: 'phone', payload: input});
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="e-Mail"
              maxLength={30}
              onChangeText={input => {
                dispatch({type: 'email', payload: input});
              }}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}
                                onPress={() => isProjectModalVisible(false)}>
                <Text style={styles.buttonText}>Zurück</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}
                      onPress={async() => {
                        await validateEntry(customernumber).
                          then(async(item) => {
                            if (item){
                              await storeProject(state).
                                then(() => {
                                  addProject(state);
                                  isProjectModalVisible(false);
                                });
                            }
                          });
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

const validateEntry = async(key) => {
  let valid = false;
  if (key == null || key.length <= 0){
    Alert.alert('Fehler', 'Kundennummer muss gesetzt sein', [
      {text: 'OK'},
    ], {cancelable: false});
    console.log('Customernumber has to be set');
  } else{
    await loadProject(key).then((item) => {
      valid = item === null;
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

const storeProject = async(project) => {
  let projectString = JSON.stringify(project);
  console.log('Going to Store key: ' + project.customernumber + '\nValue: ' +
    projectString);
  await AsyncStorage.setItem(project.customernumber, projectString).
    then(() => {
      console.log(
        'Saved key: ' + project.customernumber + ' value: ' + projectString);
    }).
    catch(() => {
        console.log('Storage of project:' + projectString + ' was not possible.');
      },
    );
};

const loadProject = async(key) => {
  let storedProject = null;
  await AsyncStorage.getItem(key).
    then((item) => {
      console.log('Found entry for key: ' + key + '. Entry: ' + item);
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
    height: 500,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalContainer: {},
  inputContainer: {
    paddingTop: 15,
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
    fontSize: 20,
  },
});

export default CreateProjectComponent;
