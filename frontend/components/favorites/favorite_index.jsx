import React from "react";
import FavoriteIndexItem from "./favorite_index_item"; 
import { Link } from 'react-router-dom';

class FavoriteIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRestaurants();
        this.props.fetchFavorites()
    }

    render() {
        return(
            <div>
                <div className="sav-nav">
                    <h1 className="sav-user-name">{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h1>
                    <Link to={`/userprofile`} className="sav-res-link"><h3>Reservations</h3></Link>
                    <Link to={`/myfavorites`} className="sav-sav-link"><h3>Saved Restaurants</h3></Link>
                </div>

                <div className="sav-index-all">
                    <h3>Saved Restaurants</h3>
                    <ul className="sav-index-main-rows">{
                        this.props.favorites.map(favorite =>
                            <FavoriteIndexItem 
                                restaurant={this.props.restaurants[favorite.restaurant_id]}
                                deleteFavorite={this.props.deleteFavorite}
                                favorite={favorite}
                                key={favorite.id}
                            />
                            )
                        }</ul>
                </div>
            </div>
        )
    }
}

export default FavoriteIndex;