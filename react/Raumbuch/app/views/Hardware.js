import React from 'react';

import {
  Text
} from 'react-native';

class Hardware extends React.Component {
  render() {
    return(
      <Text>{this.props.navigation.getParam('data', 'Default')}</Text>
    )
  }
}

export default Hardware;
