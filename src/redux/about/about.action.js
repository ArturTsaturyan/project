import * as actionTypes from './about.type';

export function setAboutLoading() {
    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING });
    }
}

export function setAboutLoading1(data) {
    return (dispatch) => {
        dispatch({ type: actionTypes.JJJJ,payload:data });
    }
}

