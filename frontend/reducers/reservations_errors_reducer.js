import { RECEIVE_ERRORS, REMOVE_ERRORS } from "../actions/reservation_actions";

const reservationsErrorsReducer = (state = [], action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors

        case REMOVE_ERRORS:
            return []
    
        default:
            return state;
    }
}

export default reservationsErrorsReducer;