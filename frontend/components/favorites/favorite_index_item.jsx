import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteIndexItem = ({ favorite, deleteFavorite, restaurant }) => {
    return(

        <div className='respond'>
                <li className='index-body'>
                    <img className='photo-main-index' src={restaurant.photoUrl} alt="" />
                    <span className='item-name'>{restaurant.name}</span>
                    <span onClick={() => deleteFavorite(favorite.id)}>Remove from saved restaurants</span>
                    <span className='item-address'>rating</span>
                    <span className='item-address'>cuisine/neighborhood</span>
                    <Link to={`/restaurants/${restaurant.id}`}><button>Reserve now</button></Link>
                </li>
        </div>
    )
}

export default FavoriteIndexItem;
