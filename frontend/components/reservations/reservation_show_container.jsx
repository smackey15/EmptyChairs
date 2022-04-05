import { connect } from "react-redux";
import { fetchReservation, deleteReservation } from "../../actions/reservation_actions";
import ReservationShow from "./reservation_show";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
    return(
    {reservation: state.entities.reservations[ownProps.match.params.id]})
}

const mDTP = (dispatch) => ({
    fetchReservation: (reservationId) => dispatch(fetchReservation(reservationId)),
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId))
})

export default withRouter((connect(mSTP, mDTP))(ReservationShow))