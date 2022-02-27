import React from "react";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "", 
            password: "", // come back and add other fields for signup
            first_name: "",
            last_name: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => this.setState({ [type]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state) //is this right for passing in a user?
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Welcome to EmptyChairs</h1> 
                    <h2>Please enter your details to {this.props.formType}.</h2>
                    <h3>Or click here to {this.props.link}</h3>
                    {this.renderErrors()}
                    <label>Username
                        <input 
                            type="text" 
                            value={this.state.username}
                            onChange={this.handleInput("username")}
                            />
                    </label>
                    <br />
                    <label>Password
                        <input 
                            type="password" 
                            value={this.state.password}
                            onChange={this.handleInput("password")}
                            />
                    </label>
                    <br />
                    <button>{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;