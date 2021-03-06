class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :nickname, null: false
      t.text :body, null: false
      t.integer :overall, null: false
      t.integer :food, null: false
      t.integer :service, null: false
      t.integer :ambience, null: false
      t.integer :restaurant_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :reviews, :restaurant_id
    add_index :reviews, :user_id
  end
end
