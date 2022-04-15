import * as APIUtil from "../util/favorite_api_util"
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE"
export const RECEIVE_ALL_FAVORITES = "RECEIVE_ALL_FAVORITES"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"

const receiveFavorite = (favorite) => ({
    type: RECEIVE_FAVORITE,
    favorite
})

const receiveAllFavorites = (favorites) => ({
    type: RECEIVE_ALL_FAVORITES,
    favorites
})

const removeFavorite = (favoriteId) => ({
    type: REMOVE_FAVORITE,
    favoriteId
})

export const fetchFavorite = (favoriteId) => dispatch => (
    APIUtil.fetchFavorite(favoriteId)
        .then((favorite) => dispatch(receiveFavorite(favorite)))
)

export const fetchFavorites = () => dispatch => (
    APIUtil.fetchFavorites()
        .then((favorites) => dispatch(receiveAllFavorites(favorites)))
)

export const createFavorite = (favorite) => dispatch => (
    APIUtil.createFavorite(favorite)
        .then(favorite => (dispatch(receiveFavorite(favorite))))
);

export const deleteFavorite = (favoriteId) => dispatch => (
    APIUtil.deleteFavorite(favoriteId)
        .then(() => dispatch(removeFavorite(favoriteId)))
)
