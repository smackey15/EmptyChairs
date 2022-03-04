import { connect } from "react-redux";
import { fetchRestaurant } from "../../actions/restaurant_actions";
import RestaurantShow from "./restaurant_show";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
    // debugger
    return(
    {restaurant: state.entities.restaurants[ownProps.match.params.id]})
    // debugger
}

const mDTP = (dispatch) => ({
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
})

export default connect(mSTP, mDTP)(RestaurantShow)