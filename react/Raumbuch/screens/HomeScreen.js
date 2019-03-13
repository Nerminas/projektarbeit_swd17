import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Smartlife Raumbuch</Text>
                <Image
                    source={require('../assets/images/logo.png')}
                    style={styles.welcomeImage}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10
    }
});
