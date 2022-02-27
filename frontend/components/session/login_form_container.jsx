import React from "react";
import {connect} from "react-redux";
// import {login} from "../../actions/session_actions"
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form"
import {Link} from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({ 
    errors: state.errors.session,               
    formType: "Sign In to an account",
    link: <Link to="/signup" className="session-switch-link">Sign Up</Link>

})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);