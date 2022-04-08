import * as APIUtil from "../util/review_api_util"
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS"
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS"
export const REMOVE_ERRORS = "REMOVE_ERRORS"
export const REMOVE_REVIEW = "REMOVE_REVIEW"

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
})

const receiveAllReviews = (reviews) => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
})

const receiveErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})

const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const fetchReview = (reviewId) => dispatch => (
    APIUtil.fetchReview(reviewId)
        .then((review) => dispatch(receiveReview(review)))
)

export const fetchReviews = () => dispatch => (
    APIUtil.fetchReviews()
        .then((reviews) => dispatch(receiveAllReviews(reviews)))
)

export const createReview = (review) => dispatch => (
    APIUtil.createReview(review)
        .then(review => (dispatch(receiveReview(review))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const updateReview = (review) => dispatch => (
    APIUtil.updateReview(review)
        .then(review => (dispatch(receiveReview(review))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const deleteReview = (reviewId) => dispatch => (
    APIUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)))
)

export const removeErrors = () => ({
    type: REMOVE_ERRORS
  })
