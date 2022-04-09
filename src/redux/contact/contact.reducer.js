import * as actionTypes from './contact.type';

const defaultState = { 
    loading: false,

};


export default function contactReducer(state=defaultState, action){
    
    switch(action.type){
      case actionTypes.PENDING:{
        return {
          ...state,
          loading: true,
        };
      }

      default: return state;
    }
    }