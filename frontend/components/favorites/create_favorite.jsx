import React from "react";
import { IoMdBookmark } from "react-icons/io";
import {MdBookmarkBorder} from "react-icons/md";


class CreateFavorite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isFavorite: false,
            user_id: this.props.favorite ? this.props.favorite.user_id : "",
            restaurant_id: this.props.favorite ? this.props.favorite.restaurant_id : "",
        }

        this.handleSubmitCreate = this.handleSubmitCreate.bind(this);
        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
    }

    componentDidMount() {
        if (this.props.currentUser) {
        this.props.fetchFavorites()
        .then(() => {
            if (this.props.favorite?.restaurant_id === this.props.restaurant.id) {
                this.setState({ isFavorite: true})
            } else {
                this.setState({ isFavorite: false})
            }
        })
        } 
        this.props.fetchRestaurant(this.props.restaurantId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentUser && !prevProps.currentUser) {
        this.props.fetchFavorites()
        .then(() => {
            if (this.props.favorite?.restaurant_id === this.props.restaurant.id) {
                this.setState({ isFavorite: true})
            } else {
                this.setState({ isFavorite: false})
            }
        })
        }

        if (!this.props.currentUser && prevProps.currentUser) {
            this.setState({ isFavorite: false})
        }
    }

    handleSubmitCreate(e) {
        e.preventDefault();
        this.props.createFavorite({
            user_id: this.props.currentUser.id,
            restaurant_id: this.props.restaurantId      
        })
        this.setState({isFavorite: true})
    }

    handleSubmitDelete(e) {
        e.preventDefault();
        this.props.deleteFavorite(this.props.favorite.id)
        this.setState({isFavorite: false})

    }

    render() {

        return (
            <div className="favorite-form">
                {!this.state.isFavorite ?
                <button
                    className="before-save"
                    onClick={this.props.currentUser ? this.handleSubmitCreate : () => this.props.openModal("login")}>
                    <p className="save-text-line"><MdBookmarkBorder className="empty-icon"/> Save this restaurant</p>
                </button>
                :
                <button
                    className="after-save"
                    onClick={this.handleSubmitDelete}>
                    <p className="unsave-text-line"><IoMdBookmark className="filled-icon"/> Restaurant saved!</p>
                </button> 
                } 
            </div>
        )
    }
}

export default CreateFavorite;