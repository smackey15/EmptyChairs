import { connect } from "react-redux";
import {updateReview, fetchReviews, removeErrors} from "../../actions/review_actions";
import { fetchRestaurants } from "../../actions/restaurant_actions";
import EditReviewForm from "./edit_review_form";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        restaurantId: ownProps.match.params.restId,
        restaurant: state.entities.restaurants[ownProps.match.params.restId],
        reviewId: ownProps.match.params.revId,
        review: state.entities.reviews[ownProps.match.params.revId],
        errors: state.errors.reviews 
    }
}

const mDTP = (dispatch) => ({
    updateReview: (review) => dispatch(updateReview(review)),
    removeErrors: () => dispatch(removeErrors()),
    fetchReviews: () => dispatch(fetchReviews()),
    fetchRestaurants: () => dispatch(fetchRestaurants()),
})

export default withRouter(connect(mSTP, mDTP)(EditReviewForm));