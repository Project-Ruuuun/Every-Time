import React from 'react';
import { View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { IMAGES } from '../../constants/Dummy'
import { width, height } from '../../constants/Layout'



export default class HomeTabCards extends React.Component {
  renderSectionOne = () => {
    return IMAGES.map((image, index) => {
      return (
        <View key={index} 
              style={{ width: width/3, height: height/8 }} >
          <Image source={{ url: image }} style={{ flex:1 }}/>
        </View>
      )
    })
  }

  render(){
    return(
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection:'row'}}>
          { this.renderSectionOne() }
      </ScrollView>
    )
  }
}