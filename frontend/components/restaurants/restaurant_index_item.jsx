import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantIndexItem = ({ restaurant }) => {
    return(
        <div>
            <Link to={`/restaurants/${restaurant.id}`}>
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

{/* <div>
<Link to={`/restaurants/${restaurant.id}`}>
<li> */}
{/* photo */}
{/* average rating / number of reviews */}
{/* <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link> */}
{/* <span>{restaurant.name}</span>
<span>{restaurant.address}</span>
<span>{restaurant.overview}</span>
<span><a href={restaurant.menu} target="_blank">Menu Link</a></span> */}
{/* Reservation mini-form */}
// </li>
// </Link>
// </div>
