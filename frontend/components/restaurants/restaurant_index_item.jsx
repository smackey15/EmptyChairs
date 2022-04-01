import React from 'react';
import { Link } from 'react-router-dom';


function randomnum (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min) + min);
}
function randomstar (min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}


const RestaurantIndexItem = ({ restaurant }) => {
    return(
        <div className='respond'>
            <Link to={`/restaurants/${restaurant.id}`} className="show-link">
                <li className='index-body'>
                    <img className='photo-main-index' src={restaurant.photoUrl} alt="" />
                    <span className='item-name'>{restaurant.name}</span>
                    <span className='item-address'>{restaurant.address}</span>
                    <span className='item-rating'>{randomstar (1, 5)} stars average rating {randomnum (50, 1000)} reviews</span>
                    <button className='reserve-button'>Reserve now</button>
                </li>
            </Link>
        </div>
    )
}

export default RestaurantIndexItem;

