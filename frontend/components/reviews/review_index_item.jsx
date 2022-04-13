import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


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

    return(
        <div className=''>
                <li className=''>
                    <span>Badge</span>
                    <span>Average Rating</span>
                    <span className=''>{review.nickname}</span>
                    <span className=''>Overall: {review.overall}</span>
                    <span className=''>Food: {review.food}</span>
                    <span className=''>Service: {review.service}</span>
                    <span className=''>Ambience: {review.ambience}</span>
                    <span className=''>{review.body}</span>
                    <span>{display}</span>
                </li>

        </div>
    )
}

export default ReviewIndexItem;

