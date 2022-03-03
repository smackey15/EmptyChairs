import React from "react";
import RestaurantIndexItem from "./restaurant_index_item";

class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRestaurants();
    }

    render() {
        return(
            <div>
                <h2>Restaurants</h2>
                <ul>{
                    this.props.restaurants.map(restaurant =>
                        <RestaurantIndexItem 
                            restaurant={restaurant}
                            key={restaurant.id}
                        />
                        )
                    }</ul>
            </div>
        )
    }

}

export default RestaurantIndex;