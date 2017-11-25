// Import Actions
import {createReducer} from '../../helperMethods';

// Initial State
const initialState = {
    //Add States Here
    hanzi: '',
    
};

export default createReducer(initialState, {
    ADDWORD_SET_STATE: (state, payload, action) => {
        return {
            ...state,
            ...action.payload
        }
    }
});
