import React from "react";
import {Link} from "react-router-dom";
import {AiFillCheckCircle} from "react-icons/ai";
import {HiOutlineUser} from "react-icons/hi"
import {AiOutlineCalendar} from "react-icons/ai"
import {AiFillRead} from "react-icons/ai"
import {FaLocationArrow} from "react-icons/fa"


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
                <div className="toptwo">
                <img className="confirm-photo" src={this.props.reservation.photoUrl} alt="" />
                <div className="confirm-details">
                    <h2>{this.props.reservation.restaurantName}</h2>
                    <p className="confirmed"><AiFillCheckCircle className="confirm-icon" /> Reservation confirmed</p>
                        <div className="three-icons">
                            <HiOutlineUser className="user-icon" />
                            <p className="user">{this.props.reservation.party_size}</p>
                            <AiOutlineCalendar className="date-icon"/>
                            <p className="date">{this.props.reservation.date} at </p> 
                            <p className="time">{this.props.reservation.time}</p> 
                        </div>
                        {/* <button onClick={() => this.props.openModal("editreservation")}>Modify</button> */}
                        <p 
                            className="cancel" 
                            onClick={(e) => this.props.deleteReservation(this.props.match.params.id)
                            .then(() => {this.props.history.push(`/rescancel`)})}
                        >Cancel</p>
                </div>
                </div>
                            <div className="helpers">
                                <Link to={`/restaurants/${this.props.reservation.restaurant_id}`} className="browse-link">
                                    <button className="browse">
                                        <div className="browse-all">
                                            <AiFillRead className="browse-icon" /> 
                                            <div className="browse-words">
                                                <span className="browse-menu">Browse menu</span>
                                                <span className="rest-profile">Restaurant's profile</span>
                                            </div>
                                        </div>
                                    </button>
                                </Link>
                                <a href="https://www.google.com/maps/@40.7240704,-73.695232,14z?hl=en&authuser=0" target="_blank">
                                    <button className="directions">
                                        <div className="direct-all">
                                            <FaLocationArrow className="direct-icon" /> 
                                            <span className="get-direct">Get directions</span>
                                        </div>
                                <br />
                                </button></a>
                            </div>
                <div className="bottom-details">
                    <h3>Who's going?</h3>
                    <span className='badge-circle'><p className='initial'>{this.props.reservation.first_name[0]} {this.props.reservation.last_name[0]}</p></span>
                    <p>{this.props.reservation.first_name} {this.props.reservation.last_name[0]}.</p> 
                    <p>Host</p>
                </div>
                <br />
                <br />
            </div>
        )
    }
}

export default ReservationShow;