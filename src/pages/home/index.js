import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Search from './components/search';
import Hot from './components/hot';
import { useHttpHook } from '@/hooks';

import './index.less';

export default function (props) {
  const [state, setState] = useState()
  
  const [citys, citysLoading] = useHttpHook({
    url: '/commons/citys'
  })

  const [houses, housesLoading] = useHttpHook({
    url: '/house/hot'
  })
  
  useEffect(() => {

  }, [])

  return (
    <div className='home'>
      {/* header 登录区域 */}
      <Header />
      {/*  搜索 */}
      <Search citys={citys} citysLoading={citysLoading}/>
      {/* 热门名宿 */}
      <Hot houses={houses} housesLoading={housesLoading}/>
    </div>
  )
}