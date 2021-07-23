import React, { useEffect } from 'react'
import Banner from './componets/Banner';
import Info from './componets/Info';
import Lists from './componets/Lists';
import Footer from './componets/Footer';
import { useStoreHook } from 'think-react-store';
import { useObserverHook } from '@/hooks';
import { CommonEnum } from '@/enums';

import './index.less'
const query = {
  id: ''
}

const search = window.location.search.split('?').length == 2 ? window.location.search.split('?')[1].split('&') : []
search.forEach(item => {
  query[item.split("=")[0]] = item.split("=")[1]
})

export default function House() {
  const { house: { detail,
    getDetailAsync,
    getCommentsAsync,
    comments,
    reloadComments,
    reloadComentsNum,
    showLoading,
    resetData,
    order,
    hasOrderAsync,
    addOrderAsync,
    delOrderAsync

  } } = useStoreHook();

  const handleBtnClick = (id) => {
    if (!id) {
      addOrderAsync({
        id: query?.id
      })
    } else {
      delOrderAsync({
        id: query?.id
      })
    }
  }

  /**
   * 1、监听loading是否展示
   * 2、触发reloading，修改分页
   * 3、监听reloading变化，重新请求
   * 4、拼装
   */
  useObserverHook('#' + CommonEnum.LOADING_ID, (entries) => {
    if (comments && comments.length && showLoading && entries[0].isIntersecting) {
      reloadComments();
    }
  }, [comments, showLoading]);

  useEffect(() => {
    getDetailAsync({
      id: query?.id
    })
  }, [])

  useEffect(() => {
    getCommentsAsync({
      id: query?.id
    })
  }, [reloadComentsNum])

  useEffect(() => {
    return () => {
      resetData({
        detail: {}
      })
    }
  }, [])

  useEffect(() => {
    hasOrderAsync({
      id: query?.id
    })
  }, [])

  return (
    <div className="house-page">
      {/*banner  */}
      <Banner banner={detail?.banner} />
      {/*房屋信息 */}
      <Info detail={detail?.info} order={order} btnClick={handleBtnClick} />
      {/*评论列表 */}
      <Lists lists={comments} showLoading={showLoading} />
      {/*footer  */}
      <Footer />
    </div>
  )
}
