import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import StarRatings from 'react-star-ratings';


const ReviewIndexItem = ({ review, currentUser, deleteReview }) => {
    let history = useHistory();
    let display = currentUser?.id === review.user_id ?
        <div>
            <Link to={`/restaurants/${review.restaurant_id}/reviews/${review.id}/form`}><span className=''>Edit Review</span></Link>
            <span 
                className=''
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
                    </div>
                    <div className='rev-content'>
                        <StarRatings 
                            rating={avgRating}
                            starDimension="18px"
                            starSpacing=".5px"
                            starRatedColor='#da3743'
                        />
                        <div className='rev-categories'>
                            <span className=''>Overall: {review.overall}</span>
                            <span className=''>Food: {review.food}</span>
                            <span className=''>Service: {review.service}</span>
                            <span className=''>Ambience: {review.ambience}</span>
                        </div>
                        <span className=''>{review.body}</span>
                        <span>{display}</span>
                    </div>
                </li>

        </div>
    )
}

export default ReviewIndexItem;

