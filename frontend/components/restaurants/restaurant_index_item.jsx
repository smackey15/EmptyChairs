import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantIndexItem = ({ restaurant }) => {
    return(
        <div className='index-body'>
            <Link to={`/restaurants/${restaurant.id}`}>
                <li className='index-body'>
                    <img className='photo-main-index' src={restaurant.photoUrl} alt="" />
                    {/* average rating / number of reviews */}
                    <span>{restaurant.name}</span>
                    <span>{restaurant.address}</span>
                    {/* Reservation mini-form */}
                </li>
            </Link>
        </div>
    )
}

export default RestaurantIndexItem;

