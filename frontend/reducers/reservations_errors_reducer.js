import { RECEIVE_RESERVATION_ERRORS, REMOVE_ERRORS } from "../actions/reservation_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
const reservationsErrorsReducer = (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_RESERVATION_ERRORS:
            return action.errors

        case REMOVE_ERRORS:
            return []

        case LOGOUT_CURRENT_USER:
            return []
    
        default:
            return state;
    }
}

export default reservationsErrorsReducer;