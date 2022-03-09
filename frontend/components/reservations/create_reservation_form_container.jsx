import { connect } from "react-redux";
import { createReservation, fetchReservation } from "../../actions/reservation_actions";
import ReservationForm from "./reservation_form";

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    restaurantId: ownProps.restaurant.id,
    // reservation: state.entities.reservations[ownProps.match.params.id]
    // reservationId: ownProps.reservation.id
})

const mDTP = (dispatch) => ({
    createReservation: (reservation) => dispatch(createReservation(reservation)),
    fetchReservation: (reservationId) => dispatch(fetchReservation(reservationId))
})

export default connect(mSTP, mDTP)(ReservationForm);