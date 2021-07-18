import React from 'react';
import { PropTypes } from 'prop-types';
import './index.less';
import {CommonEnum} from '@/enums'

export default function ShowLoading(props) {
  return (
    <div>
      {props.showLoading ? <div id={CommonEnum.LOADING_ID} className="loading-info">加载中...</div> 
                         : <div className="loading-info">到底了</div>}
    </div>
  )
}

ShowLoading.defaultProps = {
  showLoading: true
}

ShowLoading.protoTypes = {
  showLoading: PropTypes.bool
}
