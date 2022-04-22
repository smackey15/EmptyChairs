import React from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineUser} from "react-icons/hi"
import {AiOutlineCalendar} from "react-icons/ai"
import StarRatings from 'react-star-ratings';


const ReservationIndexItem = ({ reservation }) => {
    return(
        <div>   
                <Link to={`/reservations/${reservation.id}`} className="full-link">
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
                        <div className='review-with-stars'>
                            <Link to={`/restaurants/${reservation.restaurant_id}/reviews/form`} className='review-link'><p className='review-link'>Leave a review</p></Link>
                            <StarRatings 
                                starDimension="18px"
                                starSpacing=".5px"
                            />
                        </div>
                    </div>
                </li>
                </Link>
        </div>
    )
}

export default ReservationIndexItem;

