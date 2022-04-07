import React from "react";
import { Link } from "react-router-dom";
import {MdCancel} from "react-icons/md";


const resCancel = () => {

    return (
        <div>
            <h1><MdCancel/>Reservation Cancellation Confirmed!</h1>
            <Link to="/">Find a new table</Link>
        </div>
    )
}

export default resCancel;