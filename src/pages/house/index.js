import React, { useEffect } from 'react'
import Banner from './componets/Banner';
import Info from './componets/Info';
import Lists from './componets/Lists';
import Footer from './componets/Footer';
import { useStoreHook } from 'think-react-store';
import { useObserverHook } from '@/hooks';
import { CommonEnum } from '@/enums';

import './index.less'

export default function House() {
  const { house: { detail, getDetailAsync, getCommentsAsync } } = useStoreHook();

  /**
   * 1、监听loading是否展示
   * 2、触发reloading，修改分页
   * 3、监听reloading变化，重新请求
   * 4、拼装
   */
  useObserverHook('#' + CommonEnum.LOADING_ID, (entries) => {
    if (entries[0].isIntersecting) {

    }
  }, null);

  useEffect(()=>{
    getDetailAsync({})
  }, [])

  useEffect(()=>{
    getCommentsAsync({
      
    })
  }, [])

  return (
    <div className="house-page">
      {/*banner  */}
      <Banner banner={detail?.banner}/>
      {/*房屋信息 */}
      <Info detail={detail?.info}/>
      {/*评论列表 */}
      <Lists />
      {/*footer  */}
      <Footer />
    </div>
  )
}