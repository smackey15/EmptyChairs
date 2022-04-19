import React from "react";
import ReservationIndexItem from "./reservation_index_item";

class ReservationIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchReservations();
    }

    render() {
        return(
            <div className="res-index-all">
                <h3>Reservations</h3>
                <ul className="res-index-main-rows">{
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