import * as actionTypes from './homepage.type';

const defaultState = { 
    loading2: false,

};


export default function homepageReducer(state=defaultState, action){
    
    switch(action.type){
      case actionTypes.MARGIN:{
        return {
          ...state,
          loading2: true,
        };
      }

      default: return state;
    }
    }