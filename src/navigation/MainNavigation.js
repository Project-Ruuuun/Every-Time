
import React from 'react';

import {createAppContainer} from 'react-navigation'
import {createStackNavigator } from 'react-navigation-stack'

import TabNavigation from '../navigation/TabNavigation'
const AppStack = createStackNavigator({
  Main: {
    screen: TabNavigation
  }
}, {
  initialRouteName: "Main",
  headerMode: 'screen',
  defaultNavigationOptions:{
    headerShown: false
  }
});

export default createAppContainer(AppStack);