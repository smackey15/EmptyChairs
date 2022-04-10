import { connect } from "react-redux";
import ReservationIndex from "./reservation_index";
import { fetchReservations } from "../../actions/reservation_actions";
import { withRouter } from "react-router-dom";


const mSTP = (state) => {
    return (
        
        {reservations: Object.values(state.entities.reservations)}
        
        )
}

const mDTP = (dispatch) => ({
    fetchReservations: () => dispatch(fetchReservations())
})

export default withRouter(connect(mSTP, mDTP)(ReservationIndex));