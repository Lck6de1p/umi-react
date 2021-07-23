import { Http } from '@/utils';
import { CommonEnum } from '@/enums'

export default {
    state: {
        detail: {},
        comments: [],
        page: CommonEnum.PAGE,
        showLoading: true,
        reloadComentsNum: 0,
    },
    reducers: {
        getDetail(state, payload) {
            return {
                ...state,
                detail: payload
            }
        },
        getComments(state, payload) {
            return {
                ...state,
                comments: payload
            }
        },
        setShowLoading(state, payload) {
            return {
                ...state,
                showLoading: payload
            }
        },
        reloadComments(state, payload) {
            return {
                ...state,
                reloadComentsNum: state.reloadComentsNum + 1,
                page: {
                    ...CommonEnum.PAGE,
                    pageNum: state.page.pageNum + 1
                }
            }
        },
        resetData(state, payload) {
            return {
                ...state,
                comments: [],
                page: CommonEnum.PAGE,
                showLoading: true,
                reloadComentsNum: state.reloadComentsNum + 1,
                ...payload
            }
        }
    },
    effects: {
        async getDetailAsync(dispatch, rootState, payload) {
            const detail = await Http({
                url: '/house/detail',
                body: payload
            })
            dispatch({
                type: 'getDetail',
                payload: detail
            })
        },
        async getCommentsAsync(dispatch, rootState, payload) {
            const { comments, page } = rootState.house;
            const lists = await Http({
                url: '/comment/lists',
                body: {
                    ...payload,
                    pageSize: page.pageSize,
                    pageNum: page.pageNum
                }
            });
            dispatch({
                type: 'getComments',
                payload: [
                    ...comments,
                    ...lists
                ]  
            })
            dispatch({
                type: 'setShowLoading',
                payload: lists.length ? true : false
            })
        },
        async addCommentsAsync(dispatch, rootState, payload) {
            const result = await Http({
                url: '/comment/add',
                body: payload
            })
            if (result) {
                dispatch({
                    type: 'resetData',
                    payload: {}
                })
            }
        }
    }
}