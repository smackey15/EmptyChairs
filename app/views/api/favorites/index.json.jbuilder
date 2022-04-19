@favorites.each do |favorite|
  json.set! favorite.id do
    json.extract! favorite, :id, :restaurant_id, :user_id
  end
end
