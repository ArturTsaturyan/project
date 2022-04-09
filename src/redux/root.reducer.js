import { combineReducers } from "redux";
import contactReducer from './contact/contact.reducer'
import aboutReducer from './about/about.reducer'
import celsusReducer from "./celsus/celsus.reducer";
import homepageReducer from './homepage/homepage.reducer'

const rootReducer = combineReducers({
    contact:contactReducer,
    about:aboutReducer,
    celsus:celsusReducer,
    homepage:homepageReducer,
});
 
export default rootReducer;