import React from 'react'
import { View, Text } from 'react-native'
import {Button} from 'native-base'

export default class DummyScreen extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Dummy!</Text>
        <Button onPress={()=>{this.props.navigation.goBack()}}>
          <Text>BUTTON</Text>
        </Button>
      </View>
    );
  }
}