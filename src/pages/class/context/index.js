import React, { Component } from 'react'
import SearchContext from './searchContext'
import Search from './Search'
// import Lists from './Lists'
import { getLists } from '@/services/search'
import Consumer from './consumer'
import LazyLoad from '@/components/LazyLoad'

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'context  ',
            lists: []
        };
    }
    handleDispatch = async (action) => {
        switch (action.type) {
            case "TEXT":
                return this.setState({
                    text: action.payload
                })
            case "LISTS":
                const res = await getLists(action.payload)
                return this.setState({
                    lists: res.lists
                })
            default:
                break;
        }
    }
    render() {
        const houses = {
            key: 1
        }
        return (
            <div>
                <h1>{houses?.key2?.name}</h1>
                <SearchContext.Provider value={{
                    state: this.state,
                    dispatch: this.handleDispatch
                }}>
                    <Search />
                    {/* <Lists /> */}
                    <LazyLoad component={import('./Lists')} />
                    <Consumer />
                </SearchContext.Provider>
            </div>
        )
    }
}