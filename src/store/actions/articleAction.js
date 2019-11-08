import * as actionTypes from './actionTypes'
import { articleAPI } from '../../data/API'

const getData = (articles) => {
    return {
        type: actionTypes.GET_ARTICLE,
        articles
    }
};

export const articleAction = () => dispatch => {
    const api = articleAPI.get;
    return api().then( data => {
        dispatch(getData(data))
    })
};