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

    componentWillUnmount() {
        this.props.removeErrors();
    }

    componentDidUpdate(prevProps) {

        if (this.props.currentUser !== prevProps.currentUser) {
            this.setState({
                first_name: this.props.currentUser ? this.props.currentUser.first_name : "",
                last_name: this.props.currentUser ? this.props.currentUser.last_name : "",
                user_id: this.props.currentUser ? this.props.currentUser.id : ""
                })
        }
    }

    handleInput(type) {
        return (e) => this.setState({ [type]: e.target.value})
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.createReservation(this.state)
            .then((reservation) => { 
                this.props.history.push(`/reservations/${reservation.reservation.id}`)
            })
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        const display = (
            <div>
                <input 
                    type="text"
                    placeholder="First Name"
                    value={this.state.first_name}
                    onChange={this.handleInput("first_name")}
                    className="reservation-input"
                />
                <br />
                <br />
                <input 
                    type="text"
                    placeholder="Last Name"
                    value={this.state.last_name}
                    onChange={this.handleInput("last_name")}
                    className="reservation-input"
                />
                <br />
                <br />
            </div>
        ) 
        
        const disablePastDate = () => {
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, "0");
            const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
            const yyyy = today.getFullYear();
            return yyyy + "-" + mm + "-" + dd;}
        
        return(
            <div className="reservation-form"> 
                <form 
                    onSubmit={this.handleSubmit} 
                    onKeyPress={ (e) => {e.key === "Enter" ? this.handleSubmit(e) : null}}
                    className="form-body"
                    >
                    <h2 className="form-header">Make a reservation</h2>  

                    <div className="form-display">{display}</div>

                    <div className="form-display">
                        <label className="party">Party Size
                        <br />
                        <select 
                            onChange={this.handleInput("party_size")}
                            className="party-box" value={this.state.party_size}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        </label>
                        <br />
                        <br />
                        <label className="date">Date</label>
                        <br />
                        <input 
                            type="date"
                            value={this.state.date}
                            onChange={this.handleInput("date")}
                            min={disablePastDate()}
                            className="date-box"
                        />
                        <br />
                        <br />
                        <label className="time">Time</label>
                        <br />
                        <select 
                            onChange={this.handleInput("time")}
                            className="time-box" value={this.state.time}>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="11:30 AM">11:30 AM</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="12:30 PM">12:30 PM</option>
                            <option value="1:00 PM">1:00 PM</option>
                            <option value="1:30 PM">1:30 PM</option>
                            <option value="2:00 PM">2:00 PM</option>
                            <option value="2:30 PM">2:30 PM</option>
                            <option value="3:00 PM">3:00 PM</option>
                            <option value="3:30 PM">3:30 PM</option>
                            <option value="4:00 PM">4:00 PM</option>
                            <option value="4:30 PM">4:30 PM</option>
                            <option value="5:00 PM">5:00 PM</option>
                            <option value="5:30 PM">5:30 PM</option>
                            <option value="6:00 PM">6:00 PM</option>
                            <option value="6:30 PM">6:30 PM</option>
                            <option value="7:00 PM">7:00 PM</option>
                            <option value="7:30 PM">7:30 PM</option>
                            <option value="8:00 PM">8:00 PM</option>
                            <option value="8:30 PM">8:30 PM</option>
                            <option value="9:00 PM">9:00 PM</option>
                            <option value="9:30 PM">9:30 PM</option>
                            <option value="10:00 PM">10:00 PM</option>
                            <option value="10:30 PM">10:30 PM</option>
                            <option value="11:00 PM">11:00 PM</option>
                        </select>
                    </div>
                    <br />
                    <br />
                    <button className="reservation-button">Complete reservation</button>
                    {this.renderErrors()}
                </form>
            </div>
        )
    }
}
export default ReservationForm;