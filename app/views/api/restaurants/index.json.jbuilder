@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.extract! restaurant, :id, :name, :address, :overview, :menu
    json.photoUrl url_for(restaurant.photo_main) if restaurant.photo_main.attached?
  end
end
