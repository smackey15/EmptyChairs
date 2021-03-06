import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchReviews();
    }

    render() {
        return(
            <div className="rev-index-all">
                <h3 id="reviews">What People Are Saying:</h3>
                <ul className="rev-index-main-rows">{
                    this.props.reviews.map(review =>
                        <ReviewIndexItem 
                            deleteReview={this.props.deleteReview}
                            currentUser={this.props.currentUser}
                            review={review}
                            reviews={this.props.currentUserReviews}
                            key={review.id}
                        />
                        )
                    }</ul>
            </div>
        )
    }
}

export default ReviewIndex;