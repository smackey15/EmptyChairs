import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className='res-respond'>
                <li className='res-index-body'>
                    <img className='res-photo-main-index' src={reservation.photoUrl} alt="" />
                    <span className='item-name'>{reservation.restaurantName}</span>
                    <span className='item-address'>{reservation.party_size}</span>
                    <span className='item-address'>{reservation.date}</span>
                    <Link to={`/restaurants/${reservation.restaurant_id}/reviews/form`}><p className='reserve-button'>Leave a review</p></Link>
                </li>

        </div>
    )
}

export default ReservationIndexItem;

