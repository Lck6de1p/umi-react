
import React from 'react';
import { Button } from 'antd-mobile';
import { timer } from '@/utils';

export default function index(props) {
  return (
    <div className="info">
      <div className="info-title">{props?.detail?.name}</div>
      <div className="info-msg">简介：{props?.detail?.info}</div>
      <div className="info-price">价格：{props?.detail?.price}</div>
      <div className="info-time">发布时间：{timer(props?.detail?.publishTime)}</div>
      <div className="info-time">开始出租：{timer(props?.detail?.startTime, '')}</div>
      <div className="info-time">结束出租：{timer(props?.detail?.endTime, '')}</div>
      <Button className="info-btn" type="warning">预定</Button>
    </div>
  )
}
