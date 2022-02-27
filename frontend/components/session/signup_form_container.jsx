import React from "react";
import {connect} from "react-redux";
// import {signup} from "../../actions/session_actions"
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form"
import {Link} from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({ //?
    errors: state.errors.session,               //?
    formType: "Create an account",
    link: <Link to="/login" className="session-switch-link">Sign In</Link>

})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);