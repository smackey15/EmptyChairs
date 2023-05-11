import React from "react";
import { useHistory } from "react-router-dom";
import {MdCancel} from "react-icons/md";


const resCancel = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push("/")
    }
    return (
            <div>
                <h1 className="cancel-content"><MdCancel className="cancel-icon"/>Reservation Cancellation Confirmed!</h1>
                <div onClick={handleClick} className="home-link">Find a new table</div>
            </div>
    )
}

export default resCancel;

// import React from "react";
// import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
// import {MdCancel} from "react-icons/md";


// const resCancel = () => {

//     return (
//             <div>
//                 <h1 className="cancel-content"><MdCancel className="cancel-icon"/>Reservation Cancellation Confirmed!</h1>
//                 <Link to="/" className="home-link">Find a new table</Link>
//             </div>
//     )
// }

// export default resCancel;