import { connect } from "react-redux";
import { createFavorite, deleteFavorite, fetchFavorites, fetchFavorite } from "../../actions/favorite_actions"
import { fetchRestaurant } from "../../actions/restaurant_actions"
import CreateFavorite from "./create_favorite";
import { withRouter } from "react-router-dom";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state, props, ownProps) => {
    // debugger
    return {
        currentUser: state.entities.users[state.session.id],
        restaurantId: props.restaurant.id,
        restaurant: props.restaurant,
        favorites: state.entities.favorites,
        favorite: Object.values(state.entities.favorites).filter(current => current.restaurant_id === props.restaurant.id)[0],
    }
}

const mDTP = (dispatch) => ({
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favoriteId)),
    fetchFavorites: () => dispatch(fetchFavorites()),
    fetchFavorite: (favoriteId) => dispatch(fetchFavorite(favoriteId)),
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
    openModal: (modal) => dispatch(openModal(modal))
})

export default withRouter(connect(mSTP, mDTP)(CreateFavorite));