import React from "react";

class CreateFavorite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: this.props.favorite ? this.props.favorite.user_id : "",
            restaurant_id: this.props.favorite ? this.props.favorite.restaurant_id : "",
            // user_id: "",
            // restaurant_id: "" 
        }

        this.handleSubmitCreate = this.handleSubmitCreate.bind(this);
        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
    }

    componentDidMount() {
        if (this.props.currentUser) {
        this.props.fetchFavorites()
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentUser && !prevProps.currentUser) {
        this.props.fetchFavorites()
        }

        // if (!this.props.currentUser && prevProps.currentUser) {
        //     this.props.favorites = {}
        // }
    }

    handleSubmitCreate(e) {
        e.preventDefault();
        this.props.createFavorite({
            user_id: this.props.currentUser.id,
            restaurant_id: this.props.restaurantId      
        })
    }

    handleSubmitDelete(e) {
        e.preventDefault();
        this.props.deleteFavorite(this.props.favorite.id)
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.props.currentUser ? this.handleSubmitCreate : () => this.props.openModal("login")}>
                    <p className="before-save">Save this restaurant</p>
                    <p className="after-save">Restaurant saved!</p>
                </button>

                {/* <button
                    // onClick={(this.state.user_id === this.props.currentUser.id && this.state.restaurant_id === this.props.restaurantId) ? this.handleSubmitDelete : this.handleSubmitCreate}>
                    onClick={this.handleSubmitDelete}>
                    <p className="before-save">Save this restaurant</p>
                    <p className="after-save">Restaurant saved!</p>
                </button> */}

            </div>
        )
    }
}

export default CreateFavorite;