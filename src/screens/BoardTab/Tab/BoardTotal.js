import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container } from 'native-base';


class BoardTotalTab_first_Area extends Component {
    // SampleCardItem = data => data.map(({category, title})=>(
    //     <View style={{ flex:1, overflow:"hidden", paddingVertical:5, flexDirection:"row", alignItems:"center"} }>
    //       <Text style={{fontWeight:"500", marginRight:15}}>{category}</Text>
    //       <Text numberOfLines={1} style={{flex:1, color:"grey", fontSize:13}}>{title}</Text>
    //       <Icon name="ios-home" style={{marginLeft:"auto", fontSize:10, color:"red"}}></Icon>
    //     </View>
    //   ))
    
      render(){
        const sempleOne=[
          {
            category: "서울캠 자유게시판",
            title: "오랜만에 실로암 영상 보니까 웃기네 웃기네"
          },
          {
            category: "비말게시판",
            title: "인증 후 이용가능"
          },
          {
            category: "졸업생게시판",
            title: "이번주 업적"
          },
          {
            category: "서울캠 장터게시판",
            title: "원룸 300/46 회기역 30초 거리 비싸네요 이런 ㅠㅠ"
          }
        ]
        return(
            <View style={style.container}>
                <Text>JI</Text>
            </View>
            
        //   <SafeAreaView style={{paddingHorizontal:10}}>
    
            // <View style={{flexDirection:"row", marginBottom:15, alignItems:"center"}}>
            //   <Text style={{fontWeight:"bold", fontSize:18}}>즐겨찾는 게시판</Text>
            //   <Text style={{marginLeft:"auto", fontWeight:"500", color:"red"}}>더 보기</Text>
            // </View>
            
        //     { this.SampleCardItem(sempleOne) } 
    
        //   </SafeAreaView>
        )
    }
}

 
export default class BoardTabTotal extends Component {
    render() {
        return (
            <Container>
                <BoardTotalTab_first_Area/>
            </Container>
            
            // <View style={style.container}>
            //     <Text>BoardTabTotal</Text>
            // </View>
        );
    }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});