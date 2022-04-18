import React from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineUser} from "react-icons/hi"
import {AiOutlineCalendar} from "react-icons/ai"

const ReservationIndexItem = ({ reservation }) => {
    return(
        <div className='res-respond'>
                <li className='res-index-body'>
                    <img className='res-photo-main-index' src={reservation.photoUrl} alt="" />
                    <div className='res-content'>
                        <span className='res-item-name'>{reservation.restaurantName}</span>
                        <div className='res-details'>
                            <HiOutlineUser className='res-icon' />
                            <span className='res-size'>{reservation.party_size}</span>
                            <AiOutlineCalendar className='res-icon' />
                            <span className='res-date'>{reservation.date}</span>
                        </div>
                        <Link to={`/restaurants/${reservation.restaurant_id}/reviews/form`} className='review-link'><p className='review-link'>Leave a review</p></Link>
                    </div>
                </li>

        </div>
    )
}

export default ReservationIndexItem;

