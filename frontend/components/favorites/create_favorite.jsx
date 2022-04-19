import React from "react";

class CreateFavorite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // isFavorite: this.props.favorite.length === 0 ? false : true,
            user_id: this.props.favorite ? this.props.favorite.user_id : "",
            restaurant_id: this.props.favorite ? this.props.favorite.restaurant_id : "",
            // test_case: this.props.favorite && this.props.favorite.id ? this.props.favorite : ""
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
        this.props.fetchRestaurant(this.props.restaurantId)
    }

    componentDidUpdate(prevProps) {
        // if (this.props.currentUser && !prevProps.currentUser) {
        // this.props.fetchFavorites()
        // }

        // if (this.props.favorite.length !== this.prevProps.favorite.length)
        // this.props.fetchFavorites()

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
        // this.setState({isFavorite: true})
    }

    handleSubmitDelete(e) {
        e.preventDefault();
        this.props.deleteFavorite(this.props.favorite.id)
        // this.setState({isFavorite: false})

    }


    render() {
        // if (!this.props.favorite) return null

        return (
            <div>
                {(this.state.user_id !== this.props.currentUser?.id) && (this.state.restaurant_id !== this.props.restaurantId) ?
                /* {!this.state.test_case ?  */
                <button
                    onClick={this.props.currentUser ? this.handleSubmitCreate : () => this.props.openModal("login")}>{console.log("add", this.state.test_case)}
                    <p className="before-save">Save this restaurant</p>
                    {/* <p className="after-save">Restaurant saved!</p> */}
                </button>
                :
                <button
                    // onClick={(this.state.user_id === this.props.currentUser.id && this.state.restaurant_id === this.props.restaurantId) ? this.handleSubmitDelete : this.handleSubmitCreate}>
                    onClick={this.handleSubmitDelete}>{console.log("remove", this.state.test_case)}
                    {/* <p className="before-save">Save this restaurant</p> */}
                    <p className="after-save">Restaurant saved!</p>
                </button> 
                } 
            </div>
        )
    }
}

export default CreateFavorite;