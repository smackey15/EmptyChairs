import { connect } from "react-redux";
import ReservationIndex from "./reservation_index";
import { fetchReservations } from "../../actions/reservation_actions";
import { withRouter } from "react-router-dom";
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import user_show_container from "../users/user_show_container";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";


const mSTP = (state) => {
    return (
    
        {reservations: Object.values(state.entities.reservations)}
        
        )
}

const mDTP = (dispatch) => ({
    fetchReservations: () => dispatch(fetchReservations())
})

export default withRouter(connect(mSTP, mDTP)(ReservationIndex));