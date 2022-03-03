import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantIndexItem = ({ restaurant }) => {
    return(
        <div>
            <Link to={`/restaurants/${restaurant.id}`} target="_blank">
                <li>
                    {/* photo */}
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

