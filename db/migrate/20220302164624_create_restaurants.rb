class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.text :overview, null: false
      t.string :address, null: false
      t.string :menu, null: false

      t.timestamps
    end
    add_index :restaurants, :name, unique: true
  end
end