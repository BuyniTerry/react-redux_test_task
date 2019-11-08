import * as actionTypes from './actionTypes'
import { commentsAPI } from '../../data/API'

const getData = (comments) => {
    return {
        type: actionTypes.GET_COMMENTS,
        comments
    }
};

export const commentsAction = () => dispatch => {
    const api = commentsAPI.get;
    return api().then( data => {
        dispatch(getData(data))
    })
};