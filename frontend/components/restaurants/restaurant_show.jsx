import React from "react";
import RestaurantDetail from "./restaurant_detail";
import ReservationFormContainer from "../reservations/create_reservation_form_container"

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
                <ReservationFormContainer
                    restaurant={this.props.restaurant}
                />
            {/* <ReviewsIndex /> */}

            </div>
        )
    }
}

export default RestaurantShow;