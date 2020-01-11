import React from 'react';
import { Icon } from 'native-base'; 
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import {createAppContainer } from 'react-navigation'
import BoardTabTotal from '../Tab/BoardTotal'
import BoardTabInfo from '../Tab/BoardInfo'
import BoardTabAD from '../Tab/BoardAD'
import BoardTabGroup from '../Tab/BoardGroup'

const BoardTabNavigator = createMaterialTopTabNavigator({
  전체: {
    screen: BoardTabTotal,
    initialRouteName : '전체',
  },
  정보: {
    screen:BoardTabInfo
  },
  홍보: {
    screen:BoardTabAD    
  },
  단체: {
    screen:BoardTabGroup
  },
},
{
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    pressColor: 'black',
    style: {
      backgroundColor: 'white',
    },
    indicatorStyle: {
      backgroundColor: 'black',
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel: true,
    showIcon: true,
  },
}
);

export default createAppContainer(BoardTabNavigator);