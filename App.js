import React from 'react';
import { StyleSheet } from 'react-native'
import { AppLoading } from 'expo';
import { Container, Text ,Root} from 'native-base';
import * as Font from 'expo-font';
import MainNavigation from './src/navigation/MainNavigation'
import * as Facebook from 'expo-facebook';

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from './src/store/modules';

const loggerMiddleware = createLogger();
const store = createStore(  
                rootReducer,
                applyMiddleware(thunkMiddleware,
                                loggerMiddleware));

export default class RootApp extends React.Component {
  static navigationOptions ={
      headerShown: false
  }
  render() {
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
