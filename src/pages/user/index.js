import React, { useState, useEffect } from 'react';
import { List } from 'antd-mobile';
import { router } from 'umi';


import './index.less';

export default function (props) {
  const [state, setState] = useState()

  const handleClick = () => {
    router.push({
      pathname: '/user/edit',
      query: {
        id: 10
      }
    })
  }

  useEffect(() => {

  }, [])

  return (
    <div className="user-page">
      {/* 用户信息 */}
      <div className="info">
        <div className="set" onClick={handleClick}>设置</div>
        <div className="user">
          <img alt="user" src={''} />
          <div className="tel">{'tel'}</div>
          <div className="sign">{'sign'}</div>
        </div>
      </div>
      {/* 列表 */}
      <List>
        <List.Item arrow="horizontal">
          用户协议
        </List.Item>
        <List.Item arrow="horizontal">
          常见问题
        </List.Item>
        <List.Item arrow="horizontal">
          联系客服
        </List.Item>
      </List>
    </div>
  )
}