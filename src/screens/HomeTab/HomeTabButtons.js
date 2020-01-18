import React from 'react'
import {ScrollView, Text} from 'react-native'
import {Button, Icon} from 'native-base'

import {width, height} from '../../constants/Layout'

export default class HomeTabButtons extends React.Component {
  ButtonRepeater = function(){
    let buttons=[]
    for (let i=0; i<7; i++){
        buttons.push(
        <Button key={i} transparent style={{flexDirection:'column', width:width/6, height:height/10}}>
          <Icon type="FontAwesome" name="home" style={{fontSize:40}}/>
          <Text style={{fontSize:15, color:'grey'}}>학교</Text>
          <Text style={{fontSize:15, color:'grey'}}>홈</Text>          
        </Button>)
    }
    return buttons
  }

  render(){
    return(
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection:'row', paddingTop:height/40}} >
        {this.ButtonRepeater()}
      </ScrollView>
    )
  }
}