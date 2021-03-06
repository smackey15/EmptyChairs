import { RECEIVE_ALL_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE } from "../actions/favorite_actions";

const favoritesReducer = (state = {}, action) => {
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_FAVORITE:
            nextState[action.favorite.id] = action.favorite
            return nextState
            
        case RECEIVE_ALL_FAVORITES:
            return action.favorites 
    
        case REMOVE_FAVORITE:
            delete nextState[action.favoriteId]
            return nextState

        default:
            return state;
    }
}

export default favoritesReducer;