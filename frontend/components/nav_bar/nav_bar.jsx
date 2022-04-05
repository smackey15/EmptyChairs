import React from "react";
// import {Link} from "react-router-dom";
import {HiOutlineUser} from "react-icons/hi"
import {AiOutlineCalendar} from "react-icons/ai"
import {FaRegBell} from "react-icons/fa"

// const NavBar = ({ currentUser, logout, openModal }) => {            
//     const display = currentUser ? (
//         <div className="icons">
//             <p className="greeting">Hello, {currentUser.first_name}!</p>
            
//             <a href="#"><HiOutlineUser /></a>
//             <ul>
//                 <li><button onClick={logout} className="sign-out-button">Sign out</button></li>
//             </ul>
//             {/* <AiOutlineCalendar />
//             <FaRegBell /> */}
//             {/* <button onClick={logout} className="sign-out-button">Sign out</button> */}
//             {/* above icons needs to be dropdowns with hover message */}
//         </div>
//     ) : (
//         <div>
//             <button className="signup-button" onClick={() => openModal("signup")}>Sign up</button>
//             <button className="signin-button" onClick={() => openModal("login")}>Sign in</button>
//         </div>
//     )

    const NavBar = ({ currentUser, logout, openModal, removeErrors }) => {            
        const display = currentUser ? (
            <div className="icons">
                <p className="greeting">Hello, {currentUser.first_name}!</p>
                    
                    <div className="dropdown">
                            <p className="dropbtn"><HiOutlineUser /></p>
                            <ul className="dropdown-content">
                                <li onClick={logout}>Sign out</li>
                            </ul>
                    </div>
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
