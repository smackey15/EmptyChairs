import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantIndexItem = ({ restaurant }) => {
    return(
        <div>
            <li>
            <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
            <span>{restaurant.address}</span>
            </li>
        </div>
    )
}

export default RestaurantIndexItem;