import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Icon} from 'native-base';
//import {Actions} from 'react-native-router-flux';


export default class SignIn extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={style.container}>
                <Text>학교 선택</Text>

                <View style={StyleSheet.Component}>
                    <Text>입학년도</Text>
                </View>
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