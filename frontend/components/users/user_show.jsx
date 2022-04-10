import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import ReservationIndex from "../reservations/reservation_index"

const UserShow = ({ currentUser }) => {

    const history = useHistory();
    if (!currentUser) {
        {history.push(`/`)}
    } else {

    return (
        <div>
            <div>
                <h1>{currentUser.first_name} {currentUser.last_name}</h1>
                <Link to={`/userprofile`}><h3>Reservations</h3></Link>
                <h3>Saved Restaurants</h3>
            </div>

            <div>
            <h1>RESERVATION INDEX GOES HERE</h1>
            {/* <ReservationIndex /> */}
            </div>
        </div>
    )
    }
}

export default UserShow;