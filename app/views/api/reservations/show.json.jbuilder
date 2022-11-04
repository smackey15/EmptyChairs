json.extract! @reservation, :id, :first_name, :last_name, :date, :time, :party_size, :restaurant_id, :user_id
json.restaurantName @reservation.restaurant.name
json.restaurantAddress @reservation.restaurant.address
json.photoUrl url_for(@reservation.restaurant.photo_main) if @reservation.restaurant.photo_main.attached?
