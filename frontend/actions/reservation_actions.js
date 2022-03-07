import * as APIUtil from "../util/reservation_api_util"
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION"

const receiveReservation = (reservation) => ({
    type: RECEIVE_RESERVATION,
    reservation
})

export const fetchReservation = (reservationId) => dispatch => (
    APIUtil.fetchReservation(reservationId)
        .then((reservation) => dispatch(receiveReservation(reservation)))
)

export const createReservation = (reservation) => dispatch => (
    APIUtil.createReservation(reservation)
        .then((reservation) => dispatch(receiveReservation(reservation)))
)