export const fetchReservation= (reservationId) => (
    $.ajax({
        method: "GET",
        url: `/api/reservations/${reservationId}`
    })
)

export const fetchReservations = () => (
    $.ajax({
        method: "GET",
        url: `/api/reservations`
    })
)

export const createReservation= (reservation) => (
    $.ajax({
        method: "POST",
        url: `/api/reservations`,
        data: { reservation }
    })
)

export const deleteReservation = (reservationId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/reservations/${reservationId}`
    })
)
