import { connect } from "react-redux";
import ReservationIndex from "./reservation_index";
import { fetchReservations } from "../../actions/reservation_actions";
import { withRouter } from "react-router-dom";


const mSTP = (state, ownProps) => {
    return {
        // line 10 filters reservations by current user on the back end only returns those
        reservations: Object.values(state.entities.reservations)
        
        // lines 12-13 return all reservations from the backend and then filter by current user on the front end
        // reservations: Object.values(state.entities.reservations).filter(res =>
        //     res.user_id === ownProps.currentUser.id)
    }    
}

const mDTP = (dispatch) => ({
    fetchReservations: () => dispatch(fetchReservations())
})

export default withRouter(connect(mSTP, mDTP)(ReservationIndex));

