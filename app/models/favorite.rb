class Favorite < ApplicationRecord
    validates :user_id, :restaurant_id, presence: true
    validates :restaurant_id, uniqueness: {scope: [:user_id]}

    belongs_to :user 
    belongs_to :restaurant
end
