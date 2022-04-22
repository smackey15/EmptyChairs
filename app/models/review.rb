class Review < ApplicationRecord
    validates :nickname, :body, :overall, :food, :service, :ambience, :restaurant_id, :user_id, presence: true
    validates :overall, :food, :service, :ambience, inclusion: { in: [1, 2, 3, 4, 5], message: "cannot be zero"}

    validates :body, length: {minimum: 50, maximum: 2000}
    validates :nickname, length: {minimum: 5, maximum: 24}

    belongs_to :user
    belongs_to :restaurant 
end

