import { connect } from "react-redux";
import { createReservation } from "../../actions/reservation_actions";
import ReservationForm from "./reservation_form";

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    restaurantId: ownProps.restaurant.id
})

const mDTP = (dispatch) => ({
    createReservation: (reservation) => dispatch(createReservation(reservation))
})

export default connect(mSTP, mDTP)(ReservationForm);