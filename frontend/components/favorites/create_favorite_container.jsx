import { connect } from "react-redux";
import { createFavorite, fetchFavorites } from "../../actions/favorite_actions"
import CreateFavorite from "./create_favorite";
import { withRouter } from "react-router-dom";

const mSTP = (state, props) => {
    return {
        currentUser: state.entities.users[state.session.id],
        restaurantId: props.restaurant.id,
    }
}

const mDTP = (dispatch) => ({
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    fetchFavorites: () => dispatch(fetchFavorites())
})

export default withRouter(connect(mSTP, mDTP)(CreateFavorite));