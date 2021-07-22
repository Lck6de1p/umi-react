import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Search from './components/search';
import Hot from './components/hot';
import { useHttpHook } from '@/hooks';
import { ErrorBoundary } from '@/components';

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
    <ErrorBoundary>
      <div className='home'>
        {/* header 登录区域 */}
        <Header />
        {/*  搜索 */}
        {citys && <Search citys={citys} citysLoading={citysLoading}/>}
        {/* 热门名宿 */}
        {houses && <Hot houses={houses} housesLoading={housesLoading}/>}
        
      </div>
    </ErrorBoundary>
  )
}