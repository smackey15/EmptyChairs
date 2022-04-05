import * as APIUtil from "../util/reservation_api_util"
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION"
export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_ERRORS"
export const REMOVE_ERRORS = "REMOVE_ERRORS"

const receiveReservation = (reservation) => ({
    type: RECEIVE_RESERVATION,
    reservation
})

const receiveErrors = (errors) => ({
    type: RECEIVE_RESERVATION_ERRORS,
    errors
})

export const fetchReservation = (reservationId) => dispatch => (
    APIUtil.fetchReservation(reservationId)
        .then((reservation) => dispatch(receiveReservation(reservation)))
)

export const createReservation = (reservation) => dispatch => (
    APIUtil.createReservation(reservation)
        .then(reservation => (dispatch(receiveReservation(reservation))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const removeErrors = () => ({
    type: REMOVE_ERRORS
  })
  