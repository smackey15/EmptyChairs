import { RECEIVE_REVIEW_ERRORS, REMOVE_ERRORS } from "../actions/review_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
const reviewsErrorsReducer = (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_REVIEW_ERRORS:
            return action.errors

        case REMOVE_ERRORS:
            return []

        case LOGOUT_CURRENT_USER:
            return []
    
        default:
            return state;
    }
}

export default reviewsErrorsReducer;