import { connect } from "react-redux";
import ReviewIndex from "./review_index";
import { fetchReviews, deleteReview } from "../../actions/review_actions";
import { withRouter } from "react-router-dom";


const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        reviews: Object.values(state.entities.reviews).filter(rev =>
            rev.restaurant_id === ownProps.restaurant.id),
        // want to grab reviews so I can count how many reviews any user (not just current) has created...
        // below only grabs currentuser's reviews:
        // currentUserReviews: Object.values(state.entities.reviews).filter(rev =>
        //     rev.user_id === state.entities.users[state.session.id]?.id)
    }    
}

const mDTP = (dispatch) => ({
    fetchReviews: () => dispatch(fetchReviews()),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
})

export default withRouter(connect(mSTP, mDTP)(ReviewIndex));
