class Review < ApplicationRecord
    validates :nickname, :body, :overall, :food, :service, :ambience, :restaurant_id, :user_id, presence: true
    validates :body, length: {minimum: 50, maximum: 2000}
end

belongs_to :user, :restaurant 