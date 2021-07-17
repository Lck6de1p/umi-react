import React, { useState, useEffect } from 'react';
import { SearchBar, ActivityIndicator } from 'antd-mobile';
import { useHttpHook, useObserverHook } from '@/hooks';
import './index.less';


const query = {
    startTime: '2021-07-21',
    endTime: '2021-07-29',
    code: '10001'
}

export default function (props) {
    const [houseName, setHouseName] = useState('')
    const [pageConf, setPageConf] = useState({
        pageSize: 8,
        pageNum: 1,
        code: query?.code,
        startTime: query?.startTime + '00:00:00',
        endTime: query?.code + '23:59:59',
    });
    const [houseLists, setHouseLists] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
    const [houseSubmitName, setSouseSubmitName] = useState('');
    const [houses, loading] = useHttpHook({
        url: '/house/search',
        body: {
            ...pageConf,
            houseName
        },
        watch: [pageConf.pageNum, houseSubmitName]
    })

    useObserverHook("#loading", (enteries) => {
        if (!loading && enteries[0].isIntersecting) {
            setPageConf({
                ...pageConf,
                pageNum: pageConf.pageNum + 1
            })
        }
    }, null)


    const handleChange = (value) => {
        setHouseName(value)
    }

    const _setSearch = (value) => {
        setSouseSubmitName(value);
        setPageConf({
            pageSize: 8,
            pageNum: 1
        })
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
                            <img alt="img" src={item.img} />
                            <div className="item-right">
                                <div className="title">{item.title}</div>
                                <div className="price">￥{item.price}</div>
                            </div>
                        </div>
                    ))}
                     {showLoading ? <div id="loading">加载中...</div> : <div>到底了</div>}
                </div>
                }
               
            {/*  */}
        </div>
    )
}