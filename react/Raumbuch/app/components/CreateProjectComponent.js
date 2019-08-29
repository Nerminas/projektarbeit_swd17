import React from 'react';
import { Text, View, StyleSheet, Modal, TextInput } from 'react-native';

const CreateProjectComponent = ({isProjectModalVisible, isVisible}) => {
  console.log('test');

  return (
    <View style={styles.container}>
      <Modal
        style={styles.modalContainer}
        animationType={'slide'}
        transparent={false}
        visible={isVisible}
        onRequestClose={() => isProjectModalVisible(false)}
      >
        {console.log('test')}
        <Text>test</Text>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '80%',
    width: '80%',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  modalContainer: {

  }
});

export default CreateProjectComponent;
