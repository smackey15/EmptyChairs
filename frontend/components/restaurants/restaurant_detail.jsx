import React from "react";

const RestaurantDetail = ({ restaurant }) => {
    return(
        <div>
            <li>
                {/* photo */}
                <span>{restaurant.name}</span>
                <span>{restaurant.address}</span>
                {/* average rating / number of reviews */}
                <span>Overview {restaurant.overview}</span>
                {/* more photos */}
                <span><a href={restaurant.menu} target="_blank">Menu Link</a></span> 
            </li>

            {/* <ReservationForm /> */}
            {/* <ReviewsIndex /> */}

        </div>
    )
}

export default RestaurantDetail;
