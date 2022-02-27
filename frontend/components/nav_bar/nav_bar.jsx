import React from "react";
import {Link} from "react-router-dom";

const NavBar = ({ currentUser, logout }) => {            
    const display = currentUser ? (
        <div>
            <h2>Hello, {currentUser.first_name}!</h2>
            <button onClick={logout}>Logout</button>
            {/* the above h2 needs to show a person icon with link to user profile page */}
        </div>
    ) : (
        <div>
            <button className="signup-button">
                <Link to="/signup" className="signup-link">Sign up</Link>
            </button>
            <button className="signin-button">
                <Link to="/signin" className="signin-link">Sign in</Link>
            </button>
        </div>
        // above links are not routed yet
    )

return (
    <div>{display}</div>
)
}

export default NavBar;
