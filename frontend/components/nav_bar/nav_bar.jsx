import React from "react";
import {Link} from "react-router-dom";

const NavBar = ({ currentUser, logout }) => {            
    const display = currentUser ? (
        <div>
            <h2>Welcome, {currentUser.first_name}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <div>
            <button><Link to="/signup">Sign up</Link></button>
            <button><Link to="/login">Sign in</Link></button>
        </div>
    )

return (
    <div>{display}</div>
)
}

export default NavBar;
