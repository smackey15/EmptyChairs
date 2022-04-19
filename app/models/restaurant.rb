class Restaurant < ApplicationRecord
    validates :name, :overview, :address, :menu, presence: true
    validates :name, uniqueness: true

    has_one_attached :photo_main
    has_many :reservations
    has_many :reviews
    has_many :favorites
    
    # has_many_attached :photos_body

end
