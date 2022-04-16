import { connect } from "react-redux";
import FavoriteIndex from "./favorite_index";
import { fetchFavorites } from "../../actions/favorite_actions";
import { withRouter } from "react-router-dom";


const mSTP = (state, ownProps) => {
    return {
        // line 10 filters reservations by current user on the back end only returns those
        favorites: Object.values(state.entities.favorites),
        currentUser: state.entities.users[state.session.id]
        
        // lines 12-13 return all reservations from the backend and then filter by current user on the front end
        // reservations: Object.values(state.entities.reservations).filter(res =>
        //     res.user_id === ownProps.currentUser.id)
    }    
}

const mDTP = (dispatch) => ({
    fetchFavorites: () => dispatch(fetchFavorites())
})

export default withRouter(connect(mSTP, mDTP)(FavoriteIndex));
