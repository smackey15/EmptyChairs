import React from "react";
import {connect} from "react-redux";
import { signup, removeErrors } from "../../actions/session_actions";
import SessionForm from "./session_form"
import { openModal, closeModal } from "../../actions/modal_actions";
// import {signup} from "../../actions/session_actions"
// import {Link} from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({ //?
    errors: state.errors.session,               //?
    formType: "Create an account",
    // link: <Link to="/signin" className="session-switch-link">Sign In</Link>

})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
        <button className="session-switch-button" onClick={() => dispatch(openModal("login"))}>
            Signin
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);