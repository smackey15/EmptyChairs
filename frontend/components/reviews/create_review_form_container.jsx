import { connect } from "react-redux";
import {createReview, removeErrors} from "../../actions/review_actions";
import ReviewForm from "./review_form";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        // restaurantId: ownProps.reservation.restaurant_id,
        // restaurantId: state.entities.reservations.reservation.restaurant_id,
        errors: state.errors.reviews 
    }
}

const mDTP = (dispatch) => ({
    createReview: (review) => dispatch(createReview(review)),
    removeErrors: () => dispatch(removeErrors())
})

export default withRouter(connect(mSTP, mDTP)(ReviewForm));