import React, { useState, useEffect } from 'react';
import { SearchBar, ActivityIndicator } from 'antd-mobile';
import { useHttpHook, useObserverHook, useImgHook } from '@/hooks';
import './index.less';
import { ShowLoading } from '@/components';
import { CommonEnum } from '@/enums';

const query = {
    startTime: '2021-07-21',
    endTime: '2021-07-29',
    code: '10001'
}

const search = window.location.search.split('?').length == 2 ? window.location.search.split('?')[1].split('&') : []
search.forEach(item => {
    query[item.split("=")[0]] = item.split("=")[1]
})

export default function (props) {


    const [houseName, setHouseName] = useState('')
    const [pageConf, setPageConf] = useState(CommonEnum.PAGE);
    const [houseLists, setHouseLists] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
    const [houseSubmitName, setSouseSubmitName] = useState('');
    const [houses, loading] = useHttpHook({
        url: '/house/search',
        body: {
            ...pageConf,
            houseName,
            code: query?.code,
            startTime: query?.startTime + ' 00:00:00',
            endTime: query?.endTime + ' 23:59:59',
        },
        watch: [pageConf.pageNum, houseSubmitName]
    })
    useObserverHook('#' + CommonEnum.LOADING_ID, (enteries) => {
        if (!loading && enteries[0].isIntersecting) {
            setPageConf({
                ...pageConf,
                pageNum: pageConf.pageNum + 1
            })
        }
    }, null)

    useImgHook('.item-img', (entries) => { }, null);

    const handleChange = (value) => {
        setHouseName(value);
    }

    const _setSearch = (value) => {
        setSouseSubmitName(value);
        setPageConf(CommonEnum.PAGE)
        setHouseLists([])
    }

    const handleCancel = () => {
        _setSearch('')
    }

    const handleSubmit = (value) => {
        _setSearch(value)
    }

    useEffect(() => {
        if (!loading, houses) {
            if (houses.length) {
                setHouseLists([
                    ...houseLists,
                    ...houses
                ])
                if (houses.length < pageConf.pageSize) {
                    setShowLoading(false)
                } else {
                    setShowLoading(true)
                }
            } else {
                setShowLoading(false)
            }
        }
    }, [loading])

    return (
        <div className="search-page">
            {/* 顶部搜索栏 */}
            <SearchBar
                placeholder="搜索名宿"
                value={houseName}
                onChange={handleChange}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
            />
            {/* 搜索结果 */}
            {!houseLists.length
                ? <ActivityIndicator toast />
                : <div className="result">
                    {houseLists.map((item, index) => (
                        <div className="item" key={index}>
                            <img alt="img" className="item-img" src={require('../../assets/blank.png')} data-src={item?.imgs[0]?.url} />
                            <div className="item-right">
                                <div className="title">{item.name}</div>
                                <div className="price">￥{item.price}</div>
                            </div>
                        </div>
                    ))}
                    <ShowLoading showLoading={showLoading} />
                </div>
            }

            {/*  */}
        </div>
    )
}