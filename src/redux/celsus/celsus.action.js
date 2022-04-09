
import * as actionTypes from './celsus.type';

export function setCelsusLoading() {

    return (dispatch) => {
        dispatch({ type: actionTypes.CELSUS });
    }
}