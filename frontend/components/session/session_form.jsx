import React from "react";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "", 
            password: "", 
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
        this.props.processForm(this.state).then(this.props.closeModal); //added modal
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
        const display = this.props.formType === "Sign In to an account" ? (
            <div>
                <input 
                    type="text" 
                    placeholder="Username"
                    onChange={this.handleInput("username")}
                    className = "session-input"
                    />
            <br />
            <br />
                <input 
                    type="password" 
                    placeholder="Password"
                    onChange={this.handleInput("password")}
                    className = "session-input"
                    />
            </div>
        ) : (
            <div>
                <input 
                    type="text" 
                    placeholder="First Name"
                    onChange={this.handleInput("first_name")}
                    className = "session-input"
                    />
            <br />
            <br />
                <input 
                    type="text" 
                    placeholder="Last Name"
                    onChange={this.handleInput("last_name")}
                    className = "session-input"
                    />
            <br />
            <br />
                <input 
                    type="text" 
                    placeholder="Username"
                    onChange={this.handleInput("username")}
                    className = "session-input"
                    />
            <br />
            <br />
                <input 
                    type="password" 
                    placeholder="Password"
                    onChange={this.handleInput("password")}
                    className = "session-input"
                    />
            </div>
        )

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Welcome to EmptyChairs</h1> 
                        <h2>Please enter your details to {this.props.formType}.</h2>
                            <h3>Or click here to {this.props.otherForm}</h3>
                            <div onClick={this.props.closeModal}>X</div>
                    {this.renderErrors()}
                    
                    <div>{display}</div>

                    <br />
                    <button className="session-button">{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;