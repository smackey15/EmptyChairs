class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.string :date, null: false
      t.string :time, null: false
      t.integer :party_size, null: false
      t.integer :restaurant_id, null: false
      t.integer :user_id

      t.timestamps
    end
    add_index :reservations, :restaurant_id
    add_index :reservations, :user_id
  end
end
