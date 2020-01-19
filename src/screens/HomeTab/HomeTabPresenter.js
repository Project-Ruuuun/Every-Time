import React from 'react';

import { View, Text, StyleSheet, SafeAreaView,  Image } from 'react-native';
import { Container } from 'native-base';

import { Icon, Content, Card } from 'native-base';

import { connect } from 'react-redux';

import HomeTabTitle from './HomeTabTitle'
import HomeTabCards from './HomeTabCards'
import HomeTabButtons from './HomeTabButtons'

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
class HomeTabContentOne extends React.Component {
  
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
class HomeTabContentTwo extends React.Component {
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

class HomeTabPresenter extends React.Component{

  showHomeTabContents = buttons => buttons.map(
    (btn, idx) => {
      console.log(btn.show)
      if (btn.show === true) {
        return(
          <Card key={idx} style={styles.Card}>
             <HomeTabContentOne/>
          </Card>
        )
      }
    }
  )

  // (buttons.map( btn => 
  //   {
  //     btn.show === true 
  //       ? return (
  //         <Card style={styles.Card}>
  //           <HomeTabContentOne/>
  //         </Card>)
  //       : return (<Card style={styles.Card}>
  //           <HomeTabContentTwo/>
  //         </Card>)
  //   }))

  render() {
    
    const { buttons } = this.props
    console.log(this.props)
    
    return(
      <Container>
        <Content style={{padding:20}}>
          
          <HomeTabTitle/>
          <HomeTabCards/>
          <HomeTabButtons/>

          {
            this.showHomeTabContents(buttons)
          }

        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ home }) => ({
  buttons: home.get('buttons')
});

export default connect(mapStateToProps)(HomeTabPresenter);

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