# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(first_name: "Edwin", last_name: "T", username: "Ed", password: "123456")
User.create(first_name: "Hungry", last_name: "Foodie", username: "hungry", password: "foodie")
User.create(first_name: "Sean", last_name: "Mackey", username: "sean", password: "123456")

Restaurant.create(name: "Nizza", overview: "Best Italian", address: "630 9th Ave, New York, NY 10036", menu: "https://nizzanyc.com/menus/")
Restaurant.create(name: "Dos Caminos - Soho", overview: "Best Tacos", address: "475 W Broadway, New York, NY 10012", menu: "https://www.doscaminos.com/location/dos-caminos-soho/#menus")
