import { connect } from "react-redux";
import ReviewIndexItem from "./review_index_item"
import { withRouter } from "react-router-dom";


const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        // reviews: Object.values(state.entities.reviews).filter(rev =>
        //     rev.restaurant_id === ownProps.restaurant.id)
    }    
}

// const mDTP = (dispatch) => ({
//     fetchReviews: () => dispatch(fetchReviews())
// })

export default withRouter(connect(mSTP, null)(ReviewIndexItem));
