class Restaurant < ApplicationRecord
    validates :name, :overview, :address, :menu, presence: true
    validates :name, uniqueness: true

    # ASSOCIATIONS:
    has_one_attached :photo_main
    has_many :reservations
    has_many :reviews

    # has_many_attached :photos_body

    # has_many :saves through users?
end
