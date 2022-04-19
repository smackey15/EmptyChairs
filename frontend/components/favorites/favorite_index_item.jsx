import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdBookmark } from "react-icons/io"

const FavoriteIndexItem = ({ favorite, deleteFavorite, restaurant }) => {
    return(

        <div>
                <li className='sav-index-body'>
                    {restaurant ? <img className='sav-photo-main-index' src={restaurant.photoUrl} alt="" /> : ""}
                    <div className="sav-content">
                        {restaurant ? <span className='sav-item-name'>{restaurant.name}</span> : ""}
                        <div className='remove'>
                            <IoMdBookmark className='sav-icon' />
                            <span className="sav-delete" onClick={() => deleteFavorite(favorite.id)}>Remove from saved restaurants</span>
                        </div>
                        <span className='sav-rate'>rating</span>
                        <span className='sav-address'>cuisine/neighborhood</span>
                    </div>
                    {restaurant ? <Link to={`/restaurants/${restaurant.id}`} className="sav-res-button-position"><button className="sav-reserve-button">Reserve now</button></Link> : ""}
                </li>
        </div>
    )
}

export default FavoriteIndexItem;
