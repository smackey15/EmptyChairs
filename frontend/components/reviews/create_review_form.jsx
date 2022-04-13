import React from "react";

class CreateReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nickname: "",
            body: "",
            overall: "",
            food: "",
            service: "",
            ambience: "",
            restaurant_id: this.props.restaurantId,  
            user_id: this.props.currentUser.id
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

        if (!this.props.restaurant) {
            this.props.fetchRestaurants()
        }
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    handleInput(type) {
        return (e) => this.setState({ [type]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state)
            .then((review) => { 
                this.props.history.push(`/restaurants/${review.review.restaurant_id}`)
            })
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
        {console.log(this.props.restaurant, "this.props.restaurant")}

        if (!this.props.restaurant) return null;

        return(
            <div>
                <form
                    onSubmit={this.handleSubmit} 
                    onKeyPress={ (e) => {e.key === "Enter" ? this.handleSubmit(e) : null}}
                    className=""
                >
                <h2>{this.props.currentUser.first_name}, how was your experience at {this.props.restaurant.name}</h2>
                {/* { this.props.restaurant ? <h2>{this.props.currentUser.first_name}, how was your experience at {this.props.restaurant.name}</h2> : ""} */}
                {/* {console.log(this.props.restaurant)} */}
                {/* <h2>{this.props.currentUser.first_name}, how was your experience at Restaurant</h2> */}
                <br />
                <h3>Rate your dining experience</h3>

                    <label className="">Overall
                        <select 
                            onChange={this.handleInput("overall")}
                            className="">
                            <option defaultValue="--">--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                    <br />
                    <br />
                    <label className="">Food
                        <select 
                            onChange={this.handleInput("food")}
                            className="">
                            <option defaultValue="--">--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                    <br />
                    <br />
                    <label className="">Service
                        <select 
                            onChange={this.handleInput("service")}
                            className="">
                            <option defaultValue="--">--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                    <br />
                    <br />
                    <label className="">Ambience
                        <select 
                            onChange={this.handleInput("ambience")}
                            className="">
                            <option defaultValue="--">--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                    <br />
                    <br />
                    <h2>Write a review</h2>
                    <h3>Help diners decide where to eat. Remember to keep it short, simple and specific.</h3>
                    <div className="textarea__wrapper">
                    <textarea
                        onChange={this.handleInput("body")}
                        // countLimit={2000}
                        placeholder="Your review must be at least 50 characters"/>
                        <br />
                        <span className="textarea__count">0/2000</span>
                    </div>
                    <br />
                    <br />
                    <h2>What is your reviews nickname?</h2>
                    <h3>Your nickname will be published on EmptyChairs alongside any reviews you create and publish. For privacy reasons, don’t use your full name or email address.</h3>
                    <input
                        placeholder="Nickname"
                        value={this.state.nickname}
                        onChange={this.handleInput("nickname")}
                    />
                    <br />
                    <br />
                    <button className="review-button">Submit</button>
                    {this.renderErrors()}
                </form>
            </div>
        )
    }
}

export default CreateReviewForm;