import { connect } from "react-redux";
import ReservationIndex from "./reservation_index";
import { fetchReservations } from "../../actions/reservation_actions";
import { withRouter } from "react-router-dom";
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";


const mSTP = (state, ownProps) => {
    return {
        // {currentUserId: ownProps.currentUser.id},
        reservations: Object.values(state.entities.reservations).filter(res =>
            res.user_id === ownProps.currentUser.id)
    }    
}

// const mSTP = (state, ownProps) => {
//     if (state.entities.reservations.user_id === ownProps.currentUser.id) {
//         return ({reservations: Object.values(state.entities.reservations)})
//     }}

const mDTP = (dispatch) => ({
    fetchReservations: () => dispatch(fetchReservations())
})

export default withRouter(connect(mSTP, mDTP)(ReservationIndex));

