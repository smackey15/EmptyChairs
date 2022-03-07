class Reservation < ApplicationRecord
    validates :date, :time, :party_size, :restaurant_id, presence: true
    # validates :restaurant_id, :user_id, uniqueness: true

    belongs_to :user, optional: true
    belongs_to :restaurant
end
