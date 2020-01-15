import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Dimensions, Image,
  ListView,
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

  constructor(props){
    super(props)
    this.state={}
  }

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
            <Button transparent
                    onPress={()=>{
                      this.props.navigation.navigate("Dummy")
                    }}
            >
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

class HomeTabContentTwo extends React.Component {
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
const sempleOne = [{
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
class HomeTabContentThree extends React.Component {
  
  SampleCardItem = data => data.map(({category, title}, index)=>(
    <View key={`sampleOne_${index}`} 
          style={{ 
              flex:1,
              overflow:"hidden",
              paddingVertical:5,
              flexDirection:"row",
              alignItems:"center"
            }}>

      <Text style={{fontWeight:"500", marginRight:15}}>{category}</Text>
      <Text numberOfLines={1} style={{flex:1, color:"grey", fontSize:13}}>{title}</Text>
      <Icon name="ios-home" style={{marginLeft:"auto", fontSize:10, color:"red"}}></Icon>

    </View>
  ))

  render(){
    return(
      <SafeAreaView style={{paddingHorizontal:10}}>

        <View style={{flexDirection:"row", marginBottom:15, alignItems:"center"}}>
          <Text style={{fontWeight:"bold", fontSize:18}}>즐겨찾는 게시판</Text>
          <Text style={{marginLeft:"auto", fontWeight:"500", color:"red"}}>더 보기</Text>
        </View>
        
        { this.SampleCardItem(sempleOne) } 

      </SafeAreaView>
    )
  }
}

const anonyImage = "https://cdn2.iconfinder.com/data/icons/scenarium-vol-4/128/011_avatar_anonymous_profile_privacy_hacker_mask_hoodie-512.png"
const ice = "https://www.creativefabrica.com/wp-content/uploads/2020/01/05/Ice-Cream-Kawaii-Cute-Illustration-Graphics-1-580x386.jpg"
const items = [
  {
    image:"",id:"",date:"01/11 16:08",
    category: "서울캠 자유게시판",
    title: "이건 진짜 심각한 거 아님?",
    content: "걍 대놓고 생까겠다는 거네 ㅋㅋㅋㅋㅋㅋ",
    likes: "32",
    comments: "27",
  },

  {
    image: ice, id: "아이스크림", date: "01/11 16:08",
    category:"서울캠 자유게시판",
    title:"싱글벙글 추장관",
    content:"아 ㅋㅋㅋ",
    likes:"29",
    comments:"27",
  }
]
class HomeTabContentFour extends React.Component {
  SampleCardItems=data=>{    
    return(
      data.map( (item, index) => {
        return(
          <View key={`sampleTwo_${index}`}>
          <View  style={{flexDirection:"row", alignItems:"center", marginVertical:10}}>
            <Image source={item.image === "" ? { url: anonyImage } : {url: item.image}}
              style={{width:35, height:35, borderRadius:37.5}}/>          
            <Text style={{marginLeft:10, fontWeight:"800"}}>{item.id === "" ? "익명" : item.id}</Text>
            <Text style={{marginLeft:"auto"}}>{item.date}</Text>
          </View>
          
          <View>
            <Text style={{fontWeight:"700"}}>{item.title}</Text>
            <Text style={{marginTop:5}}>{item.content}</Text>
          </View>
            
          <View style={{flexDirection:"row", alignItems:"center", marginBottom:10 }}>
            <Text style={{fontSize:12}}>{item.category}</Text>
            <View style={{flexDirection:"row", marginLeft:"auto", alignItems:"center"}}>
              <Icon name="thumbs-up" type="Feather" style={{fontSize:17, color:"red"}}/>
              <Text style={{paddingHorizontal:3, color:"red"}}>{item.likes}</Text>
              <Icon type="EvilIcons" name="comment" style={{marginLeft:6, fontSize:25, color:"#79b"}}/>
              <Text style={{paddingHorizontal:3, color:"#79b"}}>{item.comments}</Text>
            </View>
          </View>
          </View>
        )}
      )
    )
  }
  render(){
    return (
      <SafeAreaView style={{paddingHorizontal:10}}>
        <View style={{flexDirection:"row", marginBottom:15, alignItems:"center"}}>
          <Text style={{fontWeight:"bold", fontSize:18}}>실시간 인기 글</Text>
        </View>

        { this.SampleCardItems(items) }

      </SafeAreaView>
    );
  }  
}

export default class HomeTabPresenter extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Container>
        <Content style={{padding:20}}>
          
          <HomeTabTitle
            navigation={this.props.navigation}
          />
          
          <HomeTabContentOne/>

          <HomeTabContentTwo/>

          <Card style={styles.Card}>
            <HomeTabContentThree/>
          </Card>
          <Card style={styles.Card}>
            <HomeTabContentFour/>
          </Card>
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
    paddingHorizontal:10,
    marginVertical:5
  }
});

// export default HomeTabPresenter;