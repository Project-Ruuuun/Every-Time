import React from 'react';
import { Icon } from 'native-base'; 
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeTab from '../screens/HomeTab'
import BoardTab from '../screens/BoardTab'

class DummyScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Dummy!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  홈: {
    screen: HomeTab,
    navigationOptions:{
      tabBarIcon: ({focused, tintColor})=>
        <Icon name='ios-home' style={{color:tintColor}}/>
    }
  },
  게시판: {
    screen:BoardTab,
    navigationOptions:{
      tabBarIcon:({focused, tintColor})=>
        <Icon name='ios-create' style={{color:tintColor}}/>
    }
  },
  시간표: {
    screen:DummyScreen,
    navigationOptions:{
      tabBarIcon:({focused, tintColor})=>
        <Icon name='ios-home' style={{color:tintColor}}/>
    }
  },
  알림: {
    screen:DummyScreen,
    navigationOptions:{
      tabBarIcon:({focused, tintColor})=>
        <Icon name='ios-notifications' style={{color:tintColor}}/>
    }
  },
});

export default createAppContainer(TabNavigator);