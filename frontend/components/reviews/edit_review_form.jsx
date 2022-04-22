import React from "react";
import StarRatings from 'react-star-ratings';

class EditReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nickname: this.props.review?.nickname,
            body: this.props.review?.body,
            overall: this.props.review?.overall,
            food: this.props.review?.food,
            service: this.props.review?.service,
            ambience: this.props.review?.ambience,
            restaurant_id: this.props.restaurantId,  
            user_id: this.props.currentUser.id,
            id: this.props.reviewId
        } 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeRating = this.changeRating.bind(this);
    }

    componentDidMount() {
        if (!this.props.restaurant) this.props.fetchRestaurants();
        if (!this.props.review) this.props.fetchReviews();
    }

    componentDidUpdate(prevProps) {

        if (this.props.review !== prevProps.review) {
            this.setState({
                nickname: this.props.review.nickname,
                body: this.props.review.body,
                overall: this.props.review.overall,
                food: this.props.review.food,
                service: this.props.review.service,
                ambience: this.props.review.ambience,
            })
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
        this.props.updateReview(this.state)
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
        if (!this.props.review) return null;

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
                    <StarRatings 
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
                        {/* <select 
                            onChange={this.handleInput("overall")}
                            className="">
                            <option defaultValue="--">--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select> */}
                    <br />
                    <br />
                    <label className="categories">Food</label>
                    <StarRatings 
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

                        {/* <select 
                            onChange={this.handleInput("food")}
                            className="">
                            <option defaultValue="--">--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select> */}
                    <br />
                    <br />
                    <label className="categories">Service</label>
                    <StarRatings 
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
                        {/* <select 
                            onChange={this.handleInput("service")}
                            className="">
                            <option defaultValue="--">--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select> */}
                    <br />
                    <br />
                    <label className="categories">Ambience</label>
                    <StarRatings 
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
                        {/* <select 
                            onChange={this.handleInput("ambience")}
                            className="">
                            <option defaultValue="--">--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select> */}

                    {/* <label className="">Overall
                        <select 
                            onChange={this.handleInput("overall")}
                            className=""
                            value={this.state.overall}
                            >
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
                            className=""
                            value={this.state.food}
                            >
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
                            className=""
                            value={this.state.service}
                            >
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
                            className=""
                            value={this.state.ambience}
                            >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label> */}
                    <br />
                    <br />
                    <h2>Write a review</h2>
                    <h3>Help diners decide where to eat. Remember to keep it short, simple and specific.</h3>
                    <div className="textarea__wrapper">
                    <textarea
                        onChange={this.handleInput("body")}
                        cols="82"
                        rows="12"
                        maxLength="2000"
                        className="body-box"
                        placeholder="Your review must be at least 50 characters"
                        value={this.state.body}
                        />
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
                        id="nick"
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

export default EditReviewForm;