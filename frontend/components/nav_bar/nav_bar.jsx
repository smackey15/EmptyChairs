import React from "react";
import {Link} from "react-router-dom";

const NavBar = ({ currentUser, logout }) => {            
    const display = currentUser ? (
        <div>
            <h2>Welcome, {currentUser.first_name}</h2>
            <button onClick={logout}>Logout</button>
            {/* instead of welcome message the above needs to show an person icon with link to user profile page */}
        </div>
    ) : (
        <div>
            <button className="signup-button"><Link to="/signup" className="signup-link">Sign up</Link></button>
            <button className="signin-button"><Link to="/login" className="signin-link">Sign in</Link></button>
        </div>
        // above links are not routed yet
    )

return (
    <div>{display}</div>
)
}

export default NavBar;
