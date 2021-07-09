import React, { Component } from 'react';
import ListItem1 from './list-item1'
import ListItem2 from './list-item2'

export default class Lists extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name: 'item-name2'
    };
  }
  handleChild = (msg) => {
    this.setState({
        name: 'change'
    })
  }
  render() {
    return (
      <div>
        <ListItem1 handleItem={this.handleChild}></ListItem1>
        <ListItem2 name={this.state.name}></ListItem2>
      </div>
    )
  }
}