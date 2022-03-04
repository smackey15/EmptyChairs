class Restaurant < ApplicationRecord
    validates :name, :overview, :address, :menu, presence: true
    validates :name, uniqueness: true

    # ASSOCIATIONS:
    has_one_attached :photo_main
    has_many_attached :photos_body

    # has_many reservations, reviews ## add after those tables are created
    # has_many saves through users?
end
