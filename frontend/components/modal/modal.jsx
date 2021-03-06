import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import CreateReservationFormContainer from "../reservations/create_reservation_form_container";

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case "login":
            component = <LoginFormContainer />
            break;
        case "signup":
            component = <SignupFormContainer />
            break;
        case "editreservation":
            // component = <CreateReservationFormContainer /> // need a new EditReservationFormContainer //
            break;
        default:
            return null;
    } return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const mSTP = (state) => ({
    modal: state.ui.modal
})

const mDTP = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Modal);
