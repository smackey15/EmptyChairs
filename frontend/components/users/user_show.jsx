import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import ReservationIndexContainer from "../reservations/reservation_index_container"

const UserShow = ({ currentUser }) => {

    // const history = useHistory();
    // if (!currentUser) {
    //     {history.push(`/`)}
    // } else {

    return (
        <div>
            <div>
                <h1>{currentUser.first_name} {currentUser.last_name}</h1>
                <Link to={`/userprofile`}><h3>Reservations</h3></Link>
                <h3>Saved Restaurants</h3>
            </div>

            <ReservationIndexContainer
                currentUser={currentUser}
            />

        </div>
    )
}

export default UserShow;