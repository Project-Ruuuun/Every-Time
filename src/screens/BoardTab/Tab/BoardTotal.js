import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
export default class BoardTabTotal extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text>BoardTabTotal</Text>
            </View>
        );
    }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});