import React from "react";
import RestaurantDetail from "./restaurant_detail";

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.id)
    }

    render() {
        return(
            <div>
                <RestaurantDetail
                    restaurant={this.props.restaurant}
                />
            </div>
        )
    }
}

export default RestaurantShow;