// Import Actions
import {createReducer} from '../../helperMethods';

// Initial State
const initialState = {
    //Add States Here
    translations: [],
};

export default createReducer(initialState, {
    REVIEW_SET_STATE: (state, payload, action) => {
        return {
            ...state,
            ...action.payload
        }
    }
});
