import { ADD_COMPONENT } from "../constants/action-types";

const initialState = {
    components: [],
    lastUpdate: null
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMPONENT:
            state.components.push(action.payload);
            return state;
        default:
            return state;
    }
};

export default rootReducer;