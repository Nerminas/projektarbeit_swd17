import React from 'react';
import { View, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';

const project = [
  {
    name: 'David',
    adress: 'Mahrensdorfkjhkjhkjhkhk',
    site: '1234',
    phone: '2341',
  },
  {
    name: 'Anja',
    adress: 'Test',
    site: '1234',
    phone: '2341',
  },
];

const ProjectView = () => {
  //project.map((p, i) => {
  console.log(project.name);
  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
    }}>
      <View style={{flex: 1}}>
        <Card title={'testcard'}>{
          <View>
            <Text>Name: {project[0].name}</Text>
            <Text>Adresse: {project[0].adress}</Text>
            <Text>Kundennummer: {project[0].site}</Text>
            <Text>Telefon: {project[0].phone}</Text>
          </View>

        }
        </Card>
        <Card title={'testcard3'}>{
          <View>
            <Text>Name: {project[1].name}</Text>
            <Text>Adresse: {project[1].adress}</Text>
            <Text>Kundennummer: {project[1].site}</Text>
            <Text>Telefon: {project[1].phone}</Text>
          </View>
        }
        </Card>
      </View>

      <View style={{flex: 1}}>
        <Card title={'testcard2'}>{
          <View>
            <Text>Name: {project[1].name}</Text>
            <Text>Adresse: {project[1].adress}</Text>
            <Text>Kundennummer: {project[1].site}</Text>
            <Text>Telefon: {project[1].phone}</Text>
          </View>
        }
        </Card>
      </View>


    </View>
  );
};

export default ProjectView;

