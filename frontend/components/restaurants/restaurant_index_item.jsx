import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantIndexItem = ({ restaurant }) => {
    return(
        <div>
            <Link to={`/restaurants/${restaurant.id}`} className="show-link">
                <li className='index-body'>
                    <img className='photo-main-index' src={restaurant.photoUrl} alt="" />
                    {/* average rating / number of reviews */}
                    <span className='item-name'>{restaurant.name}</span>
                    <span className="item-address">{restaurant.address}</span>
                    {/* Reservation mini-form */}
                </li>
            </Link>
        </div>
    )
}

export default RestaurantIndexItem;

