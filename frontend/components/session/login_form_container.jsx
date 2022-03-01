import React from "react";
import {connect} from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form"
import { openModal, closeModal } from "../../actions/modal_actions";
// import {Link} from "react-router-dom";
// import {login} from "../../actions/session_actions"


const mapStateToProps = (state, ownProps) => ({ 
    errors: state.errors.session,               
    formType: "Sign In to an account",
    // link: <Link to="/signup" className="session-switch-link">Sign Up</Link>

})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user)),
    otherForm: (
        <button className="session-switch-button" onClick={() => dispatch(openModal("signup"))}>
            Signup
        </button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);