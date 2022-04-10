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
        <div className='respond'>
            {/* <Link to={`/restaurants/${restaurant.id}`} className="show-link"> */}
                <li className='index-body'>
                    <img className='photo-main-index' src={reservation.photoUrl} alt="" />
                    <span className='item-name'>{reservation.restaurantName}</span>
                    <span className='item-address'>{reservation.party_size}</span>
                    <span className='item-address'>{reservation.date}</span>
                    <Link to={`/reviews/form`}><p className='reserve-button'>Leave a review</p></Link>
                </li>
            {/* </Link> */}
        </div>
    )
}

export default ReservationIndexItem;

