import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdBookmark } from "react-icons/io";
import StarRatings from 'react-star-ratings';

function randomstar (min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

const FavoriteIndexItem = ({ favorite, deleteFavorite, restaurant }) => {
    return(

        <div>
                <li className='sav-index-body'>
                    <img className='sav-photo-main-index' src={restaurant?.photoUrl} alt="" /> 
                    <div className="sav-content">
                        <span className='sav-item-name'>{restaurant?.name}</span>
                        <div className='remove'>
                            <IoMdBookmark className='sav-icon' />
                            <span className="sav-delete" onClick={() => deleteFavorite(favorite.id)}>Remove from saved restaurants</span>
                        </div>
                        {/* <span className='sav-rate'>rating</span> */}
                        <StarRatings 
                            rating={randomstar(1, 5)}
                            starDimension="18px"
                            starSpacing=".5px"
                            starRatedColor='#feab6c'
                        />
                        <span className='sav-address'>{restaurant?.address}</span>
                    </div>
                    {restaurant ? <Link to={`/restaurants/${restaurant.id}`} className="sav-res-button-position"><button className="sav-reserve-button">Reserve now</button></Link> : ""}
                </li>
        </div>
    )
}

export default FavoriteIndexItem;
