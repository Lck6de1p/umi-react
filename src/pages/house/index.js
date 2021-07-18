import React from 'react'
import Banner from './componets/Banner';
import Info from './componets/Info';
import Lists from './componets/Lists';
import Footer from './componets/Footer';
import './index.less'

export default function house() {
  return (
    <div className="house-page">
      {/*banner  */}
      <Banner />
      {/*房屋信息 */}
      <Info />
      {/*评论列表 */}
      <Lists />
      {/*footer  */}
      <Footer />
    </div>
  )
}
