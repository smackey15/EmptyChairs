import { connect } from "react-redux";
import { fetchReservation, deleteReservation } from "../../actions/reservation_actions";
import ReservationShow from "./reservation_show";
import { withRouter } from "react-router-dom";
import { openModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";

const mSTP = (state, ownProps) => {
    return(
    {reservation: state.entities.reservations[ownProps.match.params.id]}
    // {logsout: logout}
    )
}

const mDTP = (dispatch) => ({
    fetchReservation: (reservationId) => dispatch(fetchReservation(reservationId)),
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)),
    openModal: (modal) => dispatch(openModal(modal)),
})

export default withRouter((connect(mSTP, mDTP))(ReservationShow))