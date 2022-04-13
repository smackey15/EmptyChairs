import { connect } from "react-redux";
import {createReview, removeErrors} from "../../actions/review_actions";
import { fetchRestaurants } from "../../actions/restaurant_actions";
import CreateReviewForm from "./create_review_form";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
    console.log(state.entities, "state.entities")
    // const restaurantV = Object.keys(state.entities.restaurants).length > 0 ? state.entities.restaurants[ownProps.match.params.id] : ""
    // console.log("restaurantV")
    return {
        currentUser: state.entities.users[state.session.id],
        restaurantId: ownProps.match.params.id,
        restaurant: state.entities.restaurants[ownProps.match.params.id],
        // restaurant: restaurantV,
        errors: state.errors.reviews 
    }
}

const mDTP = (dispatch) => ({
    createReview: (review) => dispatch(createReview(review)),
    removeErrors: () => dispatch(removeErrors()),
    fetchRestaurants: () => dispatch(fetchRestaurants())
})

export default withRouter(connect(mSTP, mDTP)(CreateReviewForm));