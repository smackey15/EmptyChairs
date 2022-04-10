import { connect } from "react-redux";
import UserShow from "./user_show"
import { withRouter } from "react-router-dom";


const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

export default withRouter(connect(mapStateToProps)(UserShow));