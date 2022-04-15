import React from "react";

class CreateFavorite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: "",
            restaurant_id: "" 
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchFavorites()
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.createFavorite({
            user_id: this.props.currentUser.id,
            restaurant_id: this. props.restaurantId      
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleSubmit}>
                    <p className="before-save">Save this restaurant</p>
                    <p className="after-save">Restaurant saved!</p>
                </button>
            </div>
        )
    }
}

export default CreateFavorite;