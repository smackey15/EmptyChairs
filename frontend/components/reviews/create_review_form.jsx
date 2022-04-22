import React from "react";
import StarRatings from 'react-star-ratings';

class CreateReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nickname: "",
            body: 0,
            overall: 0,
            food: 0,
            service: 0,
            ambience: 0,
            restaurant_id: this.props.restaurantId,  
            user_id: this.props.currentUser.id,
            characterCount: 0,
            nickCount: 0
        }
        // if (this.state.characterCount < 50) {
        //     this.state.characterCount.css('color', '#da3743');
        // }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeRating = this.changeRating.bind(this);
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
        return (e) => {
            if (e.target.getAttribute("class") === "body-box") {
                this.setState({
                    characterCount: e.target.value.length 
                    })
                }
            if (e.target.getAttribute("class") === "nick") {
                this.setState({
                    nickCount: e.target.value.length 
                    })
                }
            this.setState({ [type]: e.target.value})}
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = {
            nickname: this.state.nickname,
            body: this.state.body,
            overall: this.state.overall,
            food: this.state.food,
            service: this.state.service,
            ambience: this.state.ambience,
            restaurant_id: this.state.restaurant_id,  
            user_id: this.state.user_id,
        }
        this.props.createReview(formData)
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

    changeRating(newRating, name) {
        this.setState({ [name]: newRating })
    }

    render() {

        if (!this.props.restaurant) return null;

    
        return(
            <div className="review-form">
                <form
                    onSubmit={this.handleSubmit} 
                    onKeyPress={ (e) => {e.key === "Enter" ? this.handleSubmit(e) : null}}
                    className=""
                >
                <h2>{this.props.currentUser.first_name}, how was your experience at {this.props.restaurant.name}</h2>
                <br />
                <h3>Rate your dining experience (required)</h3>

                    <label className="categories">Overall</label>
                    <StarRatings className="stars"
                        rating={this.state.overall}
                        starDimension="40px"
                        starSpacing=".5px"
                        starRatedColor='#da3743'
                        starHoverColor='#da3743'
                        starEmptyColor='#e5e4e2'
                        changeRating={this.changeRating}
                        name="overall"
                        numberOfStars={5}
                    />
                    <br />
                    <br />
                    <label className="categories">Food</label>
                    <StarRatings className="stars"
                        rating={this.state.food}
                        starDimension="40px"
                        starSpacing=".5px"
                        starRatedColor='#da3743'
                        starHoverColor='#da3743'
                        starEmptyColor='#e5e4e2'
                        changeRating={this.changeRating}
                        name="food"
                        numberOfStars={5}
                    />                    
                    <br />
                    <br />
                    <label className="categories">Service</label>
                    <StarRatings className="stars"
                        rating={this.state.service}
                        starDimension="40px"
                        starSpacing=".5px"
                        starRatedColor='#da3743'
                        starHoverColor='#da3743'
                        starEmptyColor='#e5e4e2'
                        changeRating={this.changeRating}
                        name="service"
                        numberOfStars={5}
                    />
                    <br />
                    <br />
                    <label className="categories">Ambience</label>
                    <StarRatings className="stars"
                        rating={this.state.ambience}
                        starDimension="40px"
                        starSpacing=".5px"
                        starRatedColor='#da3743'
                        starHoverColor='#da3743'
                        starEmptyColor='#e5e4e2'
                        changeRating={this.changeRating}
                        name="ambience"
                        numberOfStars={5}
                    />
                    <br />
                    <br />
                    <h2>Write a review</h2>
                    <h3>Help diners decide where to eat. Remember to keep it short, simple and specific.</h3>
                    <div className="textarea-wrapper">
                        <textarea
                            onChange={this.handleInput("body")}
                            cols="82"
                            rows="12"
                            maxLength="2000"
                            className="body-box"
                            placeholder="Your review must be at least 50 characters"
                        />
                            <br />
                            <span id="min-text">Minimum 50 characters</span>
                            <div id="count-box">
                                <span id="current-box">{this.state.characterCount} </span>
                                <span id="maximum-box">/ 2000 characters</span>
                            </div>
                    </div>
                    <br />
                    <br />
                    <h2>What is your reviews nickname?</h2>
                    <h3>Your nickname will be published on EmptyChairs alongside any reviews you create and publish. For privacy reasons, don’t use your full name or email address.</h3>
                    <input
                        placeholder="Nickname"
                        maxLength="24"
                        value={this.state.nickname}
                        onChange={this.handleInput("nickname")}
                        className="nick"
                    />
                    <br />
                            <span id="min-text">Minimum 5 characters</span>
                            <div id="count-nick">
                                <span id="current-nick">{this.state.nickCount} </span>
                                <span id="maximum-nick">/ 24 characters</span>
                            </div>
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