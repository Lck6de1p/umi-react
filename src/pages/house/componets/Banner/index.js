
import React, { useState } from 'react'
import AwesomeSwiper from 'react-awesome-swiper';
export default function Banner() {

  const [config, setConfig] = useState({
    loop: true,
    autoplay: {
      delay: 15000
    },
    pagination: {
      el: '.swiper-pagination'
    }
  })

  return (
    <AwesomeSwiper className="banner" config={config}>
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img alt="banner" src={'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg'} style={{width: '100%'}}/>
        </div>
        <div className="swiper-slide">
          <img alt="banner" src={'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg'} style={{width: '100%'}}/>
        </div>
        <div className="swiper-slide">
          <img alt="banner" src={'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg'} style={{width: '100%'}}/>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </AwesomeSwiper>
  )
}
