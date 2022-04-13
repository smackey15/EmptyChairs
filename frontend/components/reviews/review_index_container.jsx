import { connect } from "react-redux";
import ReviewIndex from "./review_index";
import { fetchReviews, deleteReview } from "../../actions/review_actions";
import { withRouter } from "react-router-dom";


const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        reviews: Object.values(state.entities.reviews).filter(rev =>
            rev.restaurant_id === ownProps.restaurant.id)
    }    
}

const mDTP = (dispatch) => ({
    fetchReviews: () => dispatch(fetchReviews()),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
})

export default withRouter(connect(mSTP, mDTP)(ReviewIndex));
