import React from "react";
import { BsChatRight } from 'react-icons/bs';
import {HashLink} from "react-router-hash-link"

function randomnum (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min) + min);
}
function randomstar (min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

const RestaurantDetail = ({ restaurant }) => {
    return(
        <div>
            <img className="photo-main-detail" src={restaurant.photoUrl} alt="" />
            <ul className="show-body">
                <div className="mini-nav">
                    <HashLink to="#overview">Overview</HashLink>
                    <HashLink to="#menu">Menu</HashLink>
                    <HashLink to="#reviews">Reviews</HashLink>
                </div>
                <span className="show-name">{restaurant.name}</span>
                <span className="show-address">{restaurant.address}</span>
                <span className='show-rating'>
                    {randomstar (1, 5)} stars average rating     <BsChatRight className="chat-icon"/>     {randomnum (50, 1000)} reviews
                </span>
                <span className="show-overview" id="overview">{restaurant.overview}</span>
                {/* more photos */}
                <span className="show-menu" id="menu"><a href={restaurant.menu} target="_blank" className="menu-link">Click here to see the menu!</a></span> 
            </ul>
        </div>
    )
}

export default RestaurantDetail;
