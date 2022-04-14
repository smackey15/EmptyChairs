@reservations.each do |reservation|
    json.set! reservation.id do
        json.extract! reservation, :id, :first_name, :last_name, :date, :time, :party_size, :restaurant_id, :user_id
        json.restaurantName reservation.restaurant.name
        json.photoUrl url_for(reservation.restaurant.photo_main) if reservation.restaurant.photo_main.attached?
    end
  end

# is there a way to show reservations grouped by :user_id?
# @reservations.each do |reservation|
#     json.set! reservation.user_id do
#         json.extract! reservation, :id, :first_name, :last_name, :date, :time, :party_size, :restaurant_id, :user_id
#     end
#   end
  