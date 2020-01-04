import React, {Component} from 'react';
import {StyleSheet, Text , View, TextInput,InputAccessoryView,Button} from 'react-native';

//// rendering component that show screens ( Mainscreen )
//import { render } from 'react-dom';

import {Icon, Container, Content} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';


////import Tabs from AppTabNavigator
//import { TextInput } from 'react-native-gesture-handler';
//
///import Routing Page
///import { Router,Scene} from 'react-native-router-flux'
import SignIn from './SignIn';
///routing ver 2
import {Navigation} from 'react-native-navigation';

export default class LandingPage extends Component {


    constructor(props) {
        super(props);
        this.state = {id: 'test'};
        this.state = {pwd: '비밀번호'};
      }

    state = {
        id : "",
        pwd : "",
        test : ""
    }

    /////////
    handleID = text => {
        this.setState({ id: text });
    };
     
    handlePassword = text => {
        this.setState({ pwd: text });
    };

    login = (id, pwd) => {
        alert("ID :" + id + "  password :" + pwd);

    };

    SignIn = () => {
        this.props.navigation.navigate('Sub1');
    };

    SignInSuccess = () => {
        this.props.navigation.navigate('Main');
    };

    ///////////

    static navigationOptions = {
        header: null
    }

    /// render return view in Maincomponents
    render(){
        const inputAccessoryViewID = "uniqueID";

        return(
                <Container>
                <View style={styles.container}>
                    <Text>고등학교 생활을 더 편하고 즐겁게</Text>
                    <Text>급식이타임</Text>
                </View>

               <View alignItems="center">
                    <TextInput
                        //style={styles.rflex}
                        underlineColorAndroid="transparent"
                        placeholder="아이디1"
                        placeholderTextColor="#9a73ef"
                        autoCapitalize="none"
                        onChangeText={this.handleID}
                        //alignItems="flex-start"
                    />
                    <TextInput
                        //style={styles.rflex}
                        underlineColorAndroid="transparent"
                        placeholder="비밀번호"
                        placeholderTextColor="#9a73ef"
                        autoCapitalize="none"
                        onChangeText={this.handlePassword}
                    />
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => this.login(this.state.id,this.state.pwd)}>
                    <Text style={styles.submitButtonText}>급식이타임 로그인</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => this.SignInSuccess()}>
                    <Text style={styles.submitButtonText}>급식이타임 회원가입</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <Text style={styles.submitButtonText}>페이스북 로그인</Text>

                </View>
                </Container>
        );
    }

  
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    rflex:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        //backgroundColor:'green',
        paddingBottom:5,
    },
    submitButton:{
        paddingBottom:10,
        paddingTop:10,
    }

});