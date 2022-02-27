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
        this.props.processForm(this.state)
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
            </div>
        ) : (
            <div>
                    <label>First Name
                        <input 
                            type="text" 
                            value={this.state.first_name}
                            onChange={this.handleInput("first_name")}
                            />
                    </label>
                    <br />
                    <label>Last Name
                        <input 
                            type="text" 
                            value={this.state.last_name}
                            onChange={this.handleInput("last_name")}
                            />
                    </label>
                    <br />
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
            </div>
        )

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Welcome to EmptyChairs</h1> 
                    <h2>Please enter your details to {this.props.formType}.</h2>
                    <h3>Or click here to {this.props.link}</h3>
                    {this.renderErrors()}
                    <div>{display}</div>
                    <br />
                    <button>{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;