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

export default class HomeTabPresenter extends React.Component{
  render(){
    return(
      <Container>
        <Content style={{padding:20}}>
          
          <HomeTabTitle/>
          
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