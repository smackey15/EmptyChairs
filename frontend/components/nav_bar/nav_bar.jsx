import React from "react";
// import {Link} from "react-router-dom";
import {HiOutlineUser} from "react-icons/hi"
import {AiOutlineCalendar} from "react-icons/ai"
import {FaRegBell} from "react-icons/fa"

const NavBar = ({ currentUser, logout, openModal }) => {            
    const display = currentUser ? (
        <div className="icons">
            {/* <h2>Hello, {currentUser.first_name}!</h2> */}
            <HiOutlineUser />
            <AiOutlineCalendar />
            <FaRegBell />
            <button onClick={logout}>Logout</button>
            {/* above icons needs to be dropdowns with hover message */}
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
