import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { RiChat2Line } from "react-icons/ri"


const ReviewIndexItem = ({ review, currentUser, deleteReview, reviews }) => {
    let history = useHistory();
    let display = currentUser?.id === review.user_id ?
        <div className='rev-action'>
            <Link to={`/restaurants/${review.restaurant_id}/reviews/${review.id}/form`}className='rev-edit-link'><span >Modify Review</span></Link>
            <span 
                className='rev-delete-link'
                onClick={() => deleteReview(review.id)
                .then(() => {history.push(`/revdelete`)})}
            >
            Delete Review</span>
        </div>
    :
        <div></div>

        let average = (...args) => args.reduce((a, b) => a + b) / args.length;
        let avgRating = average(
            review.overall,
            review.food,
            review.service,
            review.ambience
        ) 

    return(
        <div className=''>
                <li className='rev-index-body'>
                    <div className='badge-stuff'>
                        <span className='badge-circle'><p className='initial'>{review.nickname[0].toUpperCase()}</p></span>
                        <span className='rev-nickname'>{review.nickname}</span>
                        <span className='rev-location'>New York</span>
                        <span className='rev-count'><RiChat2Line/> {reviews.length} review(s)</span>
                    </div>
                    <div className='rev-content'>
                        <StarRatings 
                            rating={avgRating}
                            starDimension="18px"
                            starSpacing=".5px"
                            starRatedColor='#da3743'
                        />
                        <div className='rev-categories'>
                            <span className=''>Overall </span>
                            <p className=''>{review.overall}</p>
                            <span className=''>&bull; Food </span>
                            <p className=''>{review.food}</p>
                            <span className=''>&bull; Service </span>
                            <p className=''>{review.service}</p>
                            <span className=''>&bull; Ambience </span>
                            <p className=''>{review.ambience}</p>
                        </div>
                        <span className='rev-textbody'>{review.body}</span>
                        <span>{display}</span>
                    </div>
                </li>

        </div>
    )
}

export default ReviewIndexItem;

