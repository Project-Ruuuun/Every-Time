import React from 'react'
import { View, Text } from 'react-native'
import { Icon, Button } from 'native-base'

export default class HomeTabTitle extends React.Component {
  render(){
    return(
      <>
      <View><Text>에브리타임</Text></View>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:0.5}}>
            <Text style={{fontSize:30}}>상명대</Text>
          </View>
          <View style={{flex:0.5, flexDirection:'row', justifyContent:"flex-end"}}>
            <Button transparent>
              <Icon name="ios-search"/>
            </Button>
            <Button transparent>
              <Icon name="ios-person" />
            </Button>
          </View>
      </View>
      </>
    )
  }
}