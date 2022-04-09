import * as actionTypes from './celsus.type';

const defaultState = { 
    loading1: true,

};


export default function celsusReducer(state=defaultState, action){
    
    switch(action.type){
      case actionTypes.CELSUS:{
        return {
          ...state,
          loading1: false,
        };
      }

      default: return state;
    }
    }