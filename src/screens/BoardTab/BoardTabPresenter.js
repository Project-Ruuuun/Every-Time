import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { Container } from 'native-base';
import BoardTabNavigator from './BoardNavigation/BoardTabRouter';  

// const BoardTopTap = createMaterialTopTabNavigator(BoardTabNavigator);

function BoardTabPresenter(props) {

  const {} = props;

  return (
    // <Container style={styles.container}>
    //   <View>
    //     <BoardTabNavigator/>
    //     <Text>Hello</Text>
    //   </View>
    // </Container>
    <BoardTabNavigator/>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'white'
  }
});

export default BoardTabPresenter;