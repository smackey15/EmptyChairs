import React from "react";
import RestaurantDetail from "./restaurant_detail";

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.fetchRestaurant(this.props.match.params.id)
        // debugger
    }

    render() {
        if(!this.props.restaurant) return null;

        return(
            <div>
                <RestaurantDetail
                    restaurant={this.props.restaurant}
                />

            {/* <ReservationForm /> */}
            {/* <ReviewsIndex /> */}

            </div>
        )
    }
}

export default RestaurantShow;