import React from "react";
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import ReservationIndexItem from "./reservation_index_item";
import CreateReviewFormContainer from "../reviews/create_review_form_container"

class ReservationIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchReservations();
    }

    render() {
        return(
            <div className="index-all">
                <h3>Reservations</h3>
                <ul className="index-main-rows">{
                    this.props.reservations.map(reservation =>
                        <ReservationIndexItem 
                            reservation={reservation}
                            key={reservation.id}
                        />
                        )
                    }</ul>
            </div>
        )
    }


}

export default ReservationIndex;