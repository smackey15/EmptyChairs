import React from "react";
import { Link } from "react-router-dom";
import {MdCancel} from "react-icons/md";


const revDelete = () => {

    return (
            <div>
                <h1 className="cancel-content"><MdCancel className="cancel-icon"/>Review Successfully Deleted</h1>
                <Link to="/" className="home-link">Find a new table</Link>
            </div>
    )
}

export default revDelete;