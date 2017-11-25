/**
 * Root Reducer
 */
import {combineReducers} from 'redux';

// Import Reducers
import home from './pages/home/HomeReducer';
import login from './pages/login/LoginReducer';
import addword from './pages/addword/AddwordReducer';

// Combine all reducers into one root reducer
export default combineReducers({home, login, addword});
