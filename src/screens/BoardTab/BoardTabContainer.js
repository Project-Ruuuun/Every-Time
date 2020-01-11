import React from 'react'
import BoardTabPresenter from './BoardTabPresenter';

export default class BoardScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BoardTabPresenter/>
    );
  }
}
