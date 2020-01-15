import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'


import TabNavigation from '../navigation/TabNavigation'
import LandingPage from '../screens/LandingPage'
import SignIn from '../screens/SignIn'
import DummyScreen from '../screens/DummyScreen'
import SearchScreen from '../screens/SearchScreen'
import AuthLoadingScreen from '../Components/AuthLoadingScreen'


const AppStack = createStackNavigator({
  
  Main: {
    screen: TabNavigation
  },
  
  LandingPage:{
    screen: LandingPage
  },
  
  SignIn:{
    screen: SignIn
  },

  Search:{
    screen: SearchScreen
  },

  Dummy:{
    screen: DummyScreen
  }


}, {
  initialRouteName: "Main",
  headerMode: 'screen',
  defaultNavigationOptions:{
  headerShown: false
  }
});

const AuthStack = createStackNavigator({
  LogIn:{
    screen: LandingPage,
    navigationOptions: {
      // title: 'Login',
      headerShown: false
    }
  }
},
)

export default createAppContainer(createSwitchNavigator(
  {
    //AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
    AuthLoading: AuthLoadingScreen,
  },
  {
    //초기 불러올 애 이름
    initialRouteName: 'App'
  }
));
