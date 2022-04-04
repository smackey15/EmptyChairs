import { connect } from "react-redux";
import { createReservation, fetchReservation, removeErrors } from "../../actions/reservation_actions";
import ReservationForm from "./reservation_form";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
    return {
    currentUser: state.entities.users[state.session.id],
    restaurantId: ownProps.restaurant.id,
    errors: state.errors.reservations
    // reservation: state.entities.reservations[ownProps.match.params.id]
    // reservationId: ownProps.reservation.id
    }
}

const mDTP = (dispatch) => ({
    createReservation: (reservation) => dispatch(createReservation(reservation)),
    fetchReservation: (reservationId) => dispatch(fetchReservation(reservationId)),
    removeErrors: () => dispatch(removeErrors())
})

export default withRouter(connect(mSTP, mDTP)(ReservationForm));