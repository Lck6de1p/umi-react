import React, { useState } from 'react';
import { router } from 'umi';
import { useObserverHook } from '@/hooks';

export default function(props){

  const handleClick = () => {
      router.push('/')
  }
  useObserverHook('#loading', (entries) => {console.log(entries)} )

  return (
    <div>
        observer
        <button onClick={handleClick}>首页</button>
        <div id="loading" style={{width: "100px", background: "#f60", marginTop: '1000px'}}>
            loading
        </div>
    </div>
  )
}