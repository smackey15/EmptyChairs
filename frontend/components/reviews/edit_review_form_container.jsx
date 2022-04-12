import { connect } from "react-redux";
import {updateReview, removeErrors} from "../../actions/review_actions";
import ReviewForm from "./review_form";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        restaurantId: ownProps.match.params.id,
        // review: ???,
        errors: state.errors.reviews 
    }
}

const mDTP = (dispatch) => ({
    updateReview: (review) => dispatch(updateReview(review)),
    removeErrors: () => dispatch(removeErrors())
})

export default withRouter(connect(mSTP, mDTP)(ReviewForm));