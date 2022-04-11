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
            <div className="index-all">
                <h3>What People Are Saying:</h3>
                <ul className="index-main-rows">{
                    this.props.reviews.map(review =>
                        <ReviewIndexItem 
                            review={review}
                            key={review.id}
                        />
                        )
                    }</ul>
            </div>
        )
    }


}

export default ReviewIndex;