import React from "react";
// import {Link} from "react-router-dom";

const NavBar = ({ currentUser, logout, openModal }) => {            
    const display = currentUser ? (
        <div>
            <h2>Hello, {currentUser.first_name}!</h2>
            <button onClick={logout}>Logout</button>
            {/* the above h2 needs to show a person icon with link to user profile page */}
        </div>
    ) : (
        <div>
            <button className="signup-button" onClick={() => openModal("signup")}>Sign up</button>
            <button className="signin-button" onClick={() => openModal("login")}>Sign in</button>
        </div>
    )

return (
    <div>{display}</div>
)
}

export default NavBar;
