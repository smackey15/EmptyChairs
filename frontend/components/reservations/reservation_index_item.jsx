import React from 'react';
import { Link } from 'react-router-dom';
import CreateReviewFormContainer from "../reviews/create_review_form_container";

// function randomnum (min, max) {
//     min = Math.ceil(min)
//     max = Math.floor(max)
//     return Math.floor(Math.random() * (max-min) + min);
// }
// function randomstar (min, max) {
//     return Math.floor(Math.random() * (max-min) + min);
// }


const ReservationIndexItem = ({ reservation }) => {
    return(
        <div className='respond'>
                <li className='index-body'>
                    <img className='photo-main-index' src={reservation.photoUrl} alt="" />
                    <span className='item-name'>{reservation.restaurantName}</span>
                    <span className='item-address'>{reservation.party_size}</span>
                    <span className='item-address'>{reservation.date}</span>
                    <Link to={`/restaurants/${reservation.restaurant_id}/reviews/form`} reservation={reservation}><p className='reserve-button'>Leave a review</p></Link>
                </li>

        </div>
    )
}

export default ReservationIndexItem;

