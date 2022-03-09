import React from "react";
import {Link} from "react-router-dom"

class ReservationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: this.props.currentUser ? this.props.currentUser.first_name : "",
            last_name: this.props.currentUser ? this.props.currentUser.last_name : "",
            date: "",
            time: "7:00 PM",
            party_size: "2",
            restaurant_id: this.props.restaurantId,
            user_id: this.props.currentUser ? this.props.currentUser.id : ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchReservation(this.props.match.params.id)
    // }

    handleInput(type) {
        return (e) => this.setState({ [type]: e.target.value})
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.createReservation(this.state); 
    }

    render() {
        // if(!this.props.reservation) return null;

        const display = this.props.currentUser ? (
            <div>
                <input 
                    type="text"
                    defaultValue={this.props.currentUser.first_name}
                    onChange={this.handleInput("first_name")}
                    className="reservation-input"
                />
                <br />
                <br />
                <input 
                    type="text"
                    defaultValue={this.props.currentUser.last_name}
                    onChange={this.handleInput("last_name")}
                    className="reservation-input"
                />
                <br />
                <br />
                <label>Party Size
                    <br />
                <select 
                    onChange={this.handleInput("party_size")}
                    className="">
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                </label>
                <br />
                <br />
                <label>Date</label>
                <br />
                <input 
                    type="date"
                    value={this.state.date}
                    onChange={this.handleInput("date")}
                    className=""
                />
                <label>Time</label>
                <select 
                    onChange={this.handleInput("time")}
                    className="time-header">
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="7:30 PM">7:30 PM</option>
                </select>
            </div>
        ) : (
        <div>
            <input 
                type="text"
                placeholder="First Name"
                onChange={this.handleInput("first_name")}
                className="reservation-input"
            />
            <br />
            <br />
            <input 
                type="text"
                placeholder="Last Name"
                onChange={this.handleInput("last_name")}
                className="reservation-input"
            />
            <br />
            <br />
                <label>Party Size
                <br />
                <select 
                    onChange={this.handleInput("party_size")}
                    className="">
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                </label>
                <br />
                <br />
                <label>Date</label>
                <br />
                <input 
                    type="date"
                    value={this.state.date}
                    onChange={this.handleInput("date")}
                    className=""
                />
                <label>Time</label>
                <select 
                    onChange={this.handleInput("time")}
                    className="">
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="7:30 PM">7:30 PM</option>
                </select>
            </div>
        )
        
        return(
            <div>
                <form 
                    onSubmit={this.handleSubmit} 
                    onKeyPress={ (e) => {e.key === "Enter" ? this.handleSubmit(e) : null}}
                    className="form-body"
                    >
                    <h2 className="form-header">Make a reservation</h2>  
                    <div className="form-display">{display}</div>
                    <br />
                    <br />
                    {/* <Link to={`/reservations/${reservation.id}`} className=""> */}
                        <button className="reservation-button">Complete reservation</button>
                    {/* </Link>               */}
                </form>
            </div>
        )
    }
}
export default ReservationForm;