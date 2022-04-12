import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const ReviewIndexItem = ({ review, currentUser }) => {
    return(

        <div className=''>
                <li className=''>
                    <span>Badge</span>
                    <span className=''>{review.nickname}</span>
                    <span className=''>Overall: {review.overall}</span>
                    <span className=''>Food: {review.food}</span>
                    <span className=''>Service: {review.service}</span>
                    <span className=''>Ambience: {review.ambience}</span>
                    <span className=''>{review.body}</span>
                    <Link to={`/restaurants/${review.restaurant_id}/reviews/form`}><span className=''>Edit Review</span></Link>
                    <span className=''>Delete Review</span>
                    {/* <span>{currentUser.first_name}</span> */}
                    {/* <Link to={`/restaurants/${reservation.restaurant_id}/reviews/form`}><p className='reserve-button'>Leave a review</p></Link> */}
                </li>

        </div>
    )
}

export default ReviewIndexItem;

