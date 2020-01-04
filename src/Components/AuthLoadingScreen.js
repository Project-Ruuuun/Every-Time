import React from 'react';
import { Constants, SecureStore } from 'expo';
import { AsyncStorage } from 'react-native';
import { Spinner, Container } from 'native-base';
//import { connect } from 'react-redux';
import { TINT_COLOR } from '../constants/Colors';
//import { setUsername } from '../reducers/steemReducer';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  goMainScreen() {
    this.props.navigation.navigate('App');
  }

  goLoginScreen() {
    this.props.navigation.navigate('Auth');
  }

  goHomeScreen() {
    this.props.navigation.navigate('SignIn');
  }

  async componentWillMount() {
    
    // const userToken = await SecureStore.getItemAsync('userToken', { keychainService: Constants.deviceId });
    // console.log('userToken:', userToken);

     //return this.goHomeScreen();

    

  };

  // Render any loading content that you like here
  render() {
    return (
      <Container style={{flex:1, justifyContent:'center' }}>
        <Spinner color={ TINT_COLOR } />
      </Container>
    );
  }
}

// const mapStateToProps = () => ({});
// const mapDispatchToProps = { 
//   setUsername 
// };


// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthLoadingScreen);