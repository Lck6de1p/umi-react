
import React, { useState } from 'react'
import AwesomeSwiper from 'react-awesome-swiper';
export default function Banner(props) {
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
        {props?.banner?.map((item, index) => (
          <div className="swiper-slide" key={index}>
            <img alt="banner" src={item.url} style={{width: '100%'}}/>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </AwesomeSwiper>
  )
}
