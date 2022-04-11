class Review < ApplicationRecord
    validates :nickname, :body, :overall, :food, :service, :ambience, :restaurant_id, :user_id, presence: true
    validates :body, length: {minimum: 50, maximum: 2000}
    validates :nickname, length: {minimum: 5, maximum: 24}

    belongs_to :user
    belongs_to :restaurant 
end

