import { connect } from "react-redux";
import FavoriteIndex from "./favorite_index";
import { fetchFavorites, deleteFavorite } from "../../actions/favorite_actions";
import { fetchRestaurants } from "../../actions/restaurant_actions"
import { withRouter } from "react-router-dom";


const mSTP = (state, ownProps) => {
    return {
        favorites: Object.values(state.entities.favorites),
        currentUser: state.entities.users[state.session.id],
        // restaurants: Object.values(state.entities.restaurants)
        restaurants: state.entities.restaurants
    }    
}

const mDTP = (dispatch) => ({
    fetchFavorites: () => dispatch(fetchFavorites()),
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favoriteId))
})

export default withRouter(connect(mSTP, mDTP)(FavoriteIndex));
