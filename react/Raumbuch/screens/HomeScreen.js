import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Counter from '../components/Counter';

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
                <Counter color={'lightblue'} size={16}/>
                <Counter color={'skyblue'} size={32}/>
                <Counter color={'steelblue'} size={80}/>
                <Counter color={'darkblue'} size={140}/>
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
