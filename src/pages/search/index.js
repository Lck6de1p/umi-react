import React, { useState, useEffect } from 'react';
import { SearchBar, ActivityIndicator } from 'antd-mobile';
import { useHttpHook, useObserverHook } from '@/hooks';
import './index.less';

const search = window.location.search.split('?').length == 2 ? window.location.search.split('?')[1].split('&') : []
const query = {};
search.forEach(item => {
    query[item.split("=")[0]] = item.split("=")[1]
})

export default function (props) {
   
    
    const [houseName, setHouseName] = useState('')
    const [page, setPage] = useState({
        pageSize: 8,
        pageNum: 1
    })
    const [houseLists, setHouseLists] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
    const [houseSubmitName, setHouseSubmitName] = useState("");


    const [houses, loading] = useHttpHook({
        url: '/house/search',
        body: {
            ...page,
            houseName,
            code: query?.code,
            startTime: query?.startTime+ '00:00:00',
            endTime: query?.endTime+ '23:59:59',

        },
        watch: [page.pageNum, houseSubmitName]
    })
    
    /**
     * 监听loading是否展示
     * 修改分页数据
     * 监听分页修改，发送接口，请求下页数据 
     * 监听loading变化，拼装数据 
     * */ 
    useObserverHook("#loading", (entries) => {
        if (!loading && entries[0].isIntersecting) {
            setPage({
                ...page,
                pageNum: page.pageNum + 1
            })
        }
    }, null)
    const handleChange = (value) => {
        setHouseName(value);
    }
    const _handleSubmit = (value) => {
        setHouseName(value)
        setHouseSubmitName(value);
        setPage({
            pageSize: 8,
            pageNum: 1
        });
        setHouseLists([]);
    } 
    const handleCancel = () => {
        _handleSubmit('');
    }
    const handleSubmit = (value) => {
        _handleSubmit(value);
    }

    useEffect(() => {
        if (!loading && houses) {
            if (houses.length) {
                setHouseLists([
                    ...houseLists,
                    ...houses
                ])
                if (houses.length < page.pageSize) {
                    setShowLoading(false);
                }
            } else {
                setShowLoading(false);
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
                    {houseLists.map(item => (
                        <div className="item" key={item.id}>
                            <img alt="img" src={item.img} />
                            <div className="item-right">
                                <div className="title">{item.title}</div>
                                <div className="price">￥{item.price}</div>
                            </div>
                        </div>
                    ))}
                    {showLoading ? <div id="loading">loading</div> : <div>没有数据了</div>}
                    
                </div>}
            {/*  */}
        </div>
    )
}