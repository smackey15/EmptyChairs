@reviews.each do |review|
  json.set! review.id do
  json.extract! review, :id, :nickname, :body, :overall, :food, :service, :ambience, :restaurant_id, :user_id
  end
end
