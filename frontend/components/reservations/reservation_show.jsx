import React from "react";
import {Link} from "react-router-dom";

class ReservationShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchReservation(this.props.match.params.id)
    }

    render() {
        if(!this.props.reservation) return null;

        return(
            <div>
                <img className="" src={this.props.reservation.photoUrl} alt="" />

                <h1>{this.props.reservation.restaurantName}</h1>
                <h2>Reservation confirmed</h2>
                <h2>{this.props.reservation.party_size}</h2>
                <h2>{this.props.reservation.date} at </h2> 
                <h2>{this.props.reservation.time}</h2> 
                <h2>Browse menu</h2>
                <h2>Get Directions</h2>
                <h2>Who's going?</h2>
                <p>{this.props.reservation.first_name}</p> 
                <br />
                <br />
                {/* <Link to="/">Home</Link> */}
            </div>
        )
    }
}

export default ReservationShow;