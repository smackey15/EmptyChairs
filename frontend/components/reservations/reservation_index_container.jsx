import { connect } from "react-redux";
import ReservationIndex from "./reservation_index";
import { fetchReservations } from "../../actions/reservation_actions";
import { withRouter } from "react-router-dom";


const mSTP = (state, ownProps) => {
    return {
        reservations: Object.values(state.entities.reservations).filter(res =>
            res.user_id === ownProps.currentUser.id)
    }    
}

const mDTP = (dispatch) => ({
    fetchReservations: () => dispatch(fetchReservations())
})

export default withRouter(connect(mSTP, mDTP)(ReservationIndex));

