import React from "react";
import {Link} from "react-router-dom";
import {AiFillCheckCircle} from "react-icons/ai";
import {HiOutlineUser} from "react-icons/hi"
import {AiOutlineCalendar} from "react-icons/ai"
import {AiFillRead} from "react-icons/ai"


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
            <div className="confirm-all">
                <img className="confirm-photo" src={this.props.reservation.photoUrl} alt="" />
                <div className="confirm-details">
                    <h2>{this.props.reservation.restaurantName}</h2>
                    <p className="confirmed"><AiFillCheckCircle className="confirm-icon" /> Reservation confirmed</p>
                        <div className="three-icons">
                            <p className="user"><HiOutlineUser className="user-icon" />  {this.props.reservation.party_size}</p>
                            <p className="date"><AiOutlineCalendar className="date-icon"/>  {this.props.reservation.date} at </p> 
                            <p className="time">{this.props.reservation.time}</p> 
                        </div>
                        {/* <button onClick={() => this.props.openModal("editreservation")}>Modify</button> */}
                        <p className="cancel" onClick={(e) => this.props.deleteReservation(this.props.match.params.id)
                            .then(() => {this.props.history.push(`/`)})}
                        >Cancel</p>
                            <div className="helpers">
                                <Link to={`/restaurants/${this.props.reservation.restaurant_id}`}><button className="browse"><AiFillRead className="browse-icon" /> Browse menu
                                <br />
                                Restaurant's Profile</button></Link>
                                {/* <p>Get Directions</p> */}
                            </div>
                    {/* <h3>Who's going?</h3>
                    <p>{this.props.reservation.first_name}</p>  */}
                </div>
                <br />
                <br />
            </div>
        )
    }
}

export default ReservationShow;