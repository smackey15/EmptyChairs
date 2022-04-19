import React from "react";
import RestaurantDetail from "./restaurant_detail";
import ReservationFormContainer from "../reservations/create_reservation_form_container"
import ReviewIndexContainer from "../reviews/review_index_container"
import CreateFavoriteContainer from "../favorites/create_favorite_container"

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.id)
    }

    render() {
        if(!this.props.restaurant) return null;

        return(
            <div className="restaurant-show-main">
                <RestaurantDetail
                    restaurant={this.props.restaurant}
                />
                <CreateFavoriteContainer 
                    restaurant={this.props.restaurant}
                />
                <ReservationFormContainer
                    restaurant={this.props.restaurant}
                />
                <ReviewIndexContainer 
                    restaurant={this.props.restaurant}
                />
            </div>
        )
    }
}

export default RestaurantShow;