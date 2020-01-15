import React from 'react'
import HomeTabPresenter from './HomeTabPresenter';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <HomeTabPresenter
        navigation={this.props.navigation}
      />
    );
  }
}

