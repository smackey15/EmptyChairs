import React from "react";

class CreateFavorite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isFavorite: false,
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
        // debugger
        if (this.props.currentUser) {
        this.props.fetchFavorites()
        .then(() => {
            if (this.props.favorite?.restaurant_id === this.props.restaurant.id) {
                this.setState({ isFavorite: true})
            } else {
                this.setState({ isFavorite: false})
            }
            console.log(this.state)
            console.log(this.props)
        })
        } 
        // debugger
        this.props.fetchRestaurant(this.props.restaurantId)
        // console.log(this.props)
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

        // if (this.props.favorite?.length === 1 && this.prevProps.favorite?.length === 0)
        // this.props.fetchFavorites()

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
        // if (!this.props.favorite) return null

        return (
            <div>
                {/* {(this.state.user_id !== this.props.currentUser?.id) && (this.state.restaurant_id !== this.props.restaurantId) ? */}
                {!this.state.isFavorite ?
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