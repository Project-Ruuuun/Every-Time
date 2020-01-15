import React from 'react';
import { StyleSheet } from 'react-native'
import { AppLoading } from 'expo';
import { Container, Text ,Root} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import MainNavigation from './src/navigation/MainNavigation'
import * as Facebook from 'expo-facebook';

import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import allReducers from './src/reducers'
const store = createStore(allReducers);


export default class RootApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  static navigationOptions ={
      headerShown: false
  }
  
  // async componentDidMount() {

  //   //
  //   await Font.loadAsync({
  //     Roboto: require('native-base/Fonts/Roboto.ttf'),
  //     Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  //     ...Ionicons.font,
  //   });
  //   this.setState({ isReady: true });
  //   console.log('loading Assets Complete!!!');
  // }



  render() {
    const {loaded} = this.state;

    return (
          <Root>
            <Provider store={ store }>
              <MainNavigation/>
            </Provider>
          </Root>
          
    );


    // if (!this.state.isReady) {
    //   return <AppLoading />;
    // }

    // return (
    //   <>
    //     <Provider store={store}>
    //       <MainNavigation/>
    //     </Provider>
    //   </>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
