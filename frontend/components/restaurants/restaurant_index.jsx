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
            <div className="index-all">
                <h3>Restaurants</h3>
                <ul className="index-main-rows">{
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