

import React, { Component } from 'react'
import { List } from 'antd-mobile'
import { Link } from 'umi'

export default class Index extends Component {
  render() {
    return (
      <div>
        <h1>class demo</h1>
        <List>
          <List.Item>
            <Link to="/class/component-old">component-old</Link>
            <Link to="/class/component-new">component-new</Link>
           
          </List.Item>
        </List>
       
      </div>
    )
  }
}

