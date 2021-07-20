import React, { useState, useEffect, memo } from 'react';
import { Picker, List, Calendar, Button, Toast } from 'antd-mobile';
import dayjs from 'dayjs';
import { router } from 'umi'

function Search(props) {
    console.log('Search render')
    const [selectedCity, setSelectedCity] = useState(['10001'])
    const [times, setTimes] = useState('可选时间')
    const [dateShow, setDateShow] = useState(false)


    const handleCityChange = (value) => {
        setSelectedCity(value)
    }
    const handleDate = () => {
        setDateShow(!dateShow)
    }
    const handleDateConfirm = (startTime, endTime) => {
        setTimes(dayjs(startTime).format('YYYY-MM-DD') + '~' + dayjs(endTime).format('YYYY-MM-DD'))
        handleDate()
    }
    const handleClick = () => {
        if (times.includes('~')) {
            router.push({
                pathname: '/search',
                query: { 
                    code: selectedCity,
                    startTime: times.split('~')[0],
                    endTime: times.split('~')[1]
                }
            })
        } else {
            Toast.fail('请选择时间')
        }
        
    }

    useEffect(() => {

    }, [])

    return (
        <div className="search">
            {/* 可选城市 */}
            <div className="search-addr">
                {!props.citysLoading && <Picker
                    title="城市"
                    data={props.citys}
                    value={selectedCity}
                    cascade={false}
                    cols={1}
                    onChange={handleCityChange}
                >
                    <List.Item>
                        可选城市
                    </List.Item>
                </Picker>}
                
            </div>
            {/* 可选时间 */}
            <div className="search-time" onClick={handleDate}>
                <div className="search-time_left">出租时间</div>
                <div className="search-time_right">{times}</div>
            </div>
            {/* 按钮 */}
            <Button type="warning" size="large" onClick={handleClick}>搜索</Button>


            <Calendar
                visible={dateShow}
                onCancel={handleDate}
                onConfirm={handleDateConfirm} />
        </div>
    )
}

function areEqual(prevProps, nextProps) {
    if (prevProps.citys === nextProps.citys && prevProps.citysLoading === nextProps.citysLoading) {
        return true
    } else {
        return false
    }
}
export default memo(Search, areEqual);