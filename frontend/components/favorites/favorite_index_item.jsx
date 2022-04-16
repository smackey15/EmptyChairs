import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteIndexItem = ({ favorite, currentUser }) => {
    return(

        <div className='respond'>
            <h1>Favorite Index Goes Here</h1>
                {/* <li className='index-body'>
                    <img className='photo-main-index' src={reservation.photoUrl} alt="" />
                    <span className='item-name'>{reservation.restaurantName}</span>
                    <span className='item-address'>{reservation.party_size}</span>
                    <span className='item-address'>{reservation.date}</span> */}
                    {/* <Link to={`/restaurants/${reservation.restaurant_id}/reviews/form`}><p className='reserve-button'>Leave a review</p></Link> */}
                {/* </li> */}
        </div>
    )
}

export default FavoriteIndexItem;
