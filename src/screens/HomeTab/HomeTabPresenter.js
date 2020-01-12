import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Dimensions, Image,
  ListView
} from 'react-native';
import { Container } from 'native-base';

import {
  Header,
  Left,
  Body,
  Right,
  Icon,
  Content,
  Accordion,
  Button,
  Title,
  Card,
  CardItem,
  
} from 'native-base'

import { ScrollView } from 'react-native-gesture-handler';
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
class HomeTabTitle extends React.Component {
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

let images = [
  "https://cdn.pixabay.com/photo/2018/11/29/21/19/hamburg-3846525__480.jpg",
  "https://cdn.pixabay.com/photo/2018/11/11/16/51/ibis-3809147__480.jpg",
  "https://cdn.pixabay.com/photo/2018/11/23/14/19/forest-3833973__480.jpg",
  "https://cdn.pixabay.com/photo/2019/01/05/17/05/man-3915438__480.jpg",
  "https://cdn.pixabay.com/photo/2018/12/04/22/38/road-3856796__480.jpg",
  "https://cdn.pixabay.com/photo/2018/11/04/20/21/harley-davidson-3794909__480.jpg",
  "https://cdn.pixabay.com/photo/2018/12/25/21/45/crystal-ball-photography-3894871__480.jpg",
  "https://cdn.pixabay.com/photo/2018/12/29/23/49/rays-3902368__480.jpg",
  "https://cdn.pixabay.com/photo/2017/05/05/16/57/buzzard-2287699__480.jpg",
  "https://cdn.pixabay.com/photo/2018/08/06/16/30/mushroom-3587888__480.jpg",
  "https://cdn.pixabay.com/photo/2018/12/15/02/53/flower-3876195__480.jpg",
  "https://cdn.pixabay.com/photo/2018/12/16/18/12/open-fire-3879031__480.jpg",
  "https://cdn.pixabay.com/photo/2018/11/24/02/05/lichterkette-3834926__480.jpg",
"https://cdn.pixabay.com/photo/2018/11/29/19/29/autumn-3846345__480.jpg"
]

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
const { width, height } = Dimensions.get('window');

class HomeTabContentOne extends React.Component {
  renderSectionOne = () => {    
    return images.map((image, index) => {
      return (
        <View key={index} 
              style={{ width: width/3, height: width/3 }} >
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
export default class HomeTabPresenter extends React.Component{
  render(){
    return(
      <Container>
        <Content style={{padding:20}}>
          
          <HomeTabTitle/>
          
          <HomeTabContentOne/>

        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'white'
  },
  Card:{
    borderRadius: 10,
    borderColor: '#bdc3c7',
    borderWidth: 1,
    paddingVertical:15,
    paddingHorizontal:10
  }
});

// export default HomeTabPresenter;