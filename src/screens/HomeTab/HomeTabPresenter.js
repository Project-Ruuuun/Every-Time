import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { Container } from 'native-base';

function HomeTabPresenter(props) {
  const {} = props;

  return (
    <Container style={styles.container}>        
      <View>
        <Text>HomeTab</Text>
      </View>
    </Container>
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

export default HomeTabPresenter;