import * as actionTypes from './about.type';

const defaultState = { 
    boolean: false,
    falsed:null
};


export default function aboutReducer(state=defaultState, action){
    
    switch(action.type){
      case actionTypes.LOADING:{
        return {
          ...state,
          boolean: true,
        };
      }
      case actionTypes.JJJJ:{
        return {
          ...state,
          falsed: action.payload,
        };
      }
      default: return state;
    }
    }