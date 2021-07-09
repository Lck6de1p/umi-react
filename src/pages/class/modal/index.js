import { Component } from 'react';
import Modal from '@/components/Modal';
import {Button} from 'antd-mobile'

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
        show: false,
    };
  }

  handleClose = () => {
    this.setState({
        show: false
    })
  }
  handleClick = () => {
    this.setState({
        show: true
    })
  }
  render() {
    return (
      <div>
          <Button type="primary" onClick={this.handleClick}>modal</Button>
          <Modal show = {this.state.show} onClose={this.handleClose}>123123</Modal>
      </div>
    )
  }
}