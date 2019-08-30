import React, { Fragment, useState, useReducer } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
  Keyboard,
  StatusBar,
} from 'react-native';

const reducer = (state, action) => {
  switch (action.type){
    case 'name':
      return {...state, name: action.payload};
    case 'customername':
      return {...state, customername: action.payload};
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

const CreateProjectComponent = ({isProjectModalVisible, isVisible}) => {
  console.log('test');

  const [state, dispatch] = useReducer(reducer,
    {name: '', customername: '', adress: '', phone: '', email: ''});

  const {name, customername, adress, phone, email} = state;
  /*const [name, setName] = useState('');
   const [customername, setCustomername] = useState('');
   const [adress, setAdress] = useState('');
   const [phone, setPhone] = useState('');
   const [email, setEmail] = useState('');*/

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
                dispatch({type: 'customername', payload: input});
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
                      onPress={() => console.log(state)}>Speichern</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </Modal>
    </View>
  )
    ;
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
