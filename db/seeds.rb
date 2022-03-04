# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

User.create(first_name: "Edwin", last_name: "T", username: "Ed", password: "123456")
User.create(first_name: "Hungry", last_name: "Foodie", username: "hungry", password: "foodie")
User.create(first_name: "Sean", last_name: "Mackey", username: "sean", password: "123456")

rest1 = Restaurant.create(name: "Westville - Chelsea", overview: "Westville believes in using fresh, flavorful ingredients to create simple dishes. Guests won't find pretension or unnecessary flare here. Instead, they can relax in a casual, low-key environment while indulging in great food. Located in lower Manhattan, the restaurant is conveniently close to numerous hot spots. Stop in for a quick bite with coworkers or head out for dinner with the family.
Westville's menu features burgers, sandwiches, salads and more. Favorites include the fresh market sides, kale salad and grilled salmon plate. Beer and wine selections complete the meal. Westville has a bakery as well where it produces freshly baked goods for dessert or breakfast. Westville's delivery and takeout services ensure that you can enjoy their dishes at home or during a special event.", address: "246 W 18th St New York, NY 10011", menu: "https://westvillenyc.com/menu/dinner-2/")
file = open("https://empty-chairs-dev.s3.amazonaws.com/westville.jpg") # url
rest1.photo_main.attach(io: file, filename: 'westville.jpg') #photo name

rest2 = Restaurant.create(name: "Socarrat Paella Bar - Chelsea", overview: "Socarrat, the quintessence of the perfect paella and for which the restaurant is named, is the delectable, sensuous crust that forms on the bottom of the paella pan when the liquid is rendered and the rice reaches its peak of succulence. The menu, an authentic array of delicious dishes from the regions of Spain specializing in traditional tapas with an accent on paella and fideua (which substitutes fried noodles for rice) that can be characterized as a true exploration for the palette.

Socarrat Paella Bar Chelsea's ambiance denotes feelings of warmth, comfort and hospitality. A neighborhood staple with a small, intimate space comprised primarily of one large communal table with bar and smaller communal tables available.", address: "259 W 19th St. New York, NY 10011", menu: "https://socarratnyc.com/dinner/")
file = open("https://empty-chairs-dev.s3.amazonaws.com/socarrat.jpg") # url
rest2.photo_main.attach(io: file, filename: 'socarrat.jpg') #photo name

rest3 = Restaurant.create(name: "Masseria dei Vini", overview: "Masseria dei Vini (Masseria of Wines) is the new venture brought to you from the La Masseria Team.
Restauranteur Pino Coladonato, Peppe Iuele and Enzo Ruggiero have teamed up again with Interior Designer Libby Langdon, bringing you a modern update version of 'Masseria'. In the region of Puglia, in South Italy, Masseria were Fortified Farmhouses, and many of them now have been transformed into Restaurants or Hotels.
Executive Chef Pino Coladonato, native of Rutigliano (Bari), has created a menu that blends traditional with modern without overpowering one or the other.
The Menu features typical dishes from Puglia, such as 'Crudo', the Italian word for 'Raw', made with fish and shellfish, a lot of fresh homemade pastas and Ravioli.
The menu also offers Gourmet Pizza Neapolitan style.
The Restaurant offers an extensive wine by the glass program and a large selection of wine bottles, mainly from Italy, but without ignoring the rest of the world.", address: "887-889 9th Ave. New York, NY 10019", menu: "https://masseriadeivini.com/dining-menu/")
file = open("https://empty-chairs-dev.s3.amazonaws.com/masseria.jpg") # url
rest3.photo_main.attach(io: file, filename: 'masseria.jpg') #photo name

rest4 = Restaurant.create(name: "Rosa Mexicano - Union Square", overview: "Rosa Mexicano is a destination born of a unique vision: a fresh take on authentic Mexican cuisine, serving both beloved classics and sophisticated dishes in a stylish and sophisticated atmosphere. With every dish we honor Mexican heritage, as well as the culinary techniques, global explorations, and inspirations of our founding chef, Josefina Howard. #elevatedfiesta", address: "9 East 18th Street, New York, NY 10003", menu: "https://www.rosamexicano.com/menu/union-square-ny-menus/")
file = open("https://empty-chairs-dev.s3.amazonaws.com/rosa.jpg") # url
rest4.photo_main.attach(io: file, filename: 'rosa.jpg') #photo name

rest5 = Restaurant.create(name: "TAO Downtown - New York", overview: "Designed by Rockwell Group, TAO Downtown offers a distinct sense of arrival and discovery and is the first TAO venue where guests descend into a multi-level space. The subterranean restaurant, located in the heart of Chelsea, is intended to look and feel as if it has been there for decades and only unearthed recently to reveal the artifacts within. Upon arrival, guests immediately encounter a long corridor with a dragon scale patterned screen and Chinese calligraphy murals mounted on weathered brick walls.", address: "92 9th Avenue New York, NY 10011", menu: "https://taogroup.com/venues/tao-downtown-new-york/menu/")
file = open("https://empty-chairs-dev.s3.amazonaws.com/tao.jpg") # url
rest5.photo_main.attach(io: file, filename: 'tao.jpg') #photo name

rest6 = Restaurant.create(name: "Beauty & Essex- New York", overview: "Beauty & Essex has an innovative design that starts in the restaurant’s entrance, a well-curated modern-day pawn shop replete with a saxophone, boom­box, quirky artifacts, vintage treasures, and an eclectic array of “one-off” pieces of jewelry. Continuing past the pawnshop, guests encounter a grand, circular staircase wrapped around a two-story custom chandelier, but only the adventurous will discover all that Beauty & Essex has to offer. With four distinct dining rooms (one private), two bars, a lounge, and a women’s bathroom complete with a salon including a luxurious sofa, and antique perfume bottles. The cuisine, much like the design, is intended to set a new course. Chef Chris Santos was one of the pioneers of the small, share plate dining trend that has swept the nation, and with the Beauty & Essex menu, he once again has created waves on the food scene.", address: "146 Essex St New York, NY 10002", menu: "https://taogroup.com/venues/beauty-essex-new-york/menu/")
file = open("https://empty-chairs-dev.s3.amazonaws.com/beauty.jpg") # url
rest6.photo_main.attach(io: file, filename: 'beauty.jpg') #photo name

rest7 = Restaurant.create(name: "Buddakan NY", overview: "The surreal atmosphere of this awe-inspiring restaurant in the Meatpacking district of Manhattan combines the serenity of Asia with the flamboyance of 16th century Paris. The menu features fanciful interpretations of Chinese dishes and delights even the most discriminating palates.", address: "75 9th Ave New York, NY 10011", menu: "https://taogroup.com/venues/beauty-essex-new-york/menu/")
file = open("https://empty-chairs-dev.s3.amazonaws.com/buddakan.jpg") # url
rest7.photo_main.attach(io: file, filename: 'buddakan.jpg') #photo name

rest8 = Restaurant.create(name: "Victor's Café", overview: "Since 1963, Victor’s Café, a family-run New York City neighborhood gem, continues to be a culinary voyage to Cuba offering an incomparable experience with its harmony of authentic cuisine, warm hospitality and stylish environment. It has the unique distinction of being both luxurious and casual, serene and high energy, family oriented and romantic, exotic yet familiar.

The cuisine at Victor’s includes the most delicious, authentic dishes combined with the restaurant’s exclusive creations that represent the evolution of Cuban cuisine. Signature dishes include Victor’s famous black bean soup, shredded beef (“Ropa Vieja”), and roast suckling pig (“Lechon”).

The restaurant itself is divided into three spacious dining rooms, accented with warm lighting, colorful Cuban art, tropical ceiling fans, and lofty sky-lit ceilings. Its Cuba Lounge is intimate and warm, featuring a tapas menu and a variety of Cuban cocktails such as Mojitos and Sangria.", address: "236 West 52nd Street New York, NY 10019", menu: "https://www.victorscafe.com/menus/")
file = open("https://empty-chairs-dev.s3.amazonaws.com/victors.jpg") # url
rest8.photo_main.attach(io: file, filename: 'victors.jpg') #photo name

rest9 = Restaurant.create(name: "Casa Limone", overview: "Casa Limone, located in Midtown Manhattan, near The Rink at Rockefeller Center, MOMA, Radio City Music Hall, Saks Fifth Avenue, The Rockefeller Center Christmas Tree, Winter Village at Bryant Park and Times Square, is the first U.S. restaurant of the Monte Carlo Hospitality Group (MCHG), that also operates the famed Rampoldi Restaurant in Monte Carlo, its sister restaurant, the Michelin-starred La Table d’Antonio Salvatore, and the iconic Atlantic Grill in New York’s Lincoln Square.

The menu offers the flavors, wines and spirits of Chef Antonio Salvatore’s upbringing in Basilicata and neighboring regions. Through the food, décor and staff, we are bringing the warmth of the Mediterranean that reigns in South of Italy.

Casa Limone offers all weekdays an Executive Lunch Menu for $35 and a Pre-Theatre Dinner menu for $45.", address: "20 E 49th St New York, NY 10017-1023", menu: "https://menus.casalimonerestaurant.com/")
file = open("https://empty-chairs-dev.s3.amazonaws.com/limone.jpg") # url
rest9.photo_main.attach(io: file, filename: 'limone.jpg') #photo name

rest10 = Restaurant.create(name: "Wolfgang's Steak House - Park Avenue", overview: "With 4 decades of experience, Wolfgang Zwiener didn't duplicate an exceptional steakhouse, he improved on it to make Wolfgang's Steakhouse exceptional. The porterhouse steak for one, two, four or more, is an outstanding choice. The atmosphere, expanded menu & professional service will appeal to even the most exacting diners. Wolfgang's is pleased to add this location in the heart of Midtown East.", address: "4 Park Avenue New York, NY 10016", menu: "https://www.wolfgangssteakhouse.net/menus/")
file = open("https://empty-chairs-dev.s3.amazonaws.com/wolfgangs.jpg") # url
rest10.photo_main.attach(io: file, filename: 'wolfgangs.jpg') #photo name

rest11 = Restaurant.create(name: "Il Fiorista", overview: "Il Fiorista is many things – all of them centered around the beautiful benefits of flowers. Our NYC location is home to a restaurant, floral boutique, & education center that celebrate the various ways in which we can incorporate flowers into our lives.", address: "17 W 26th St New York, NY 10010", menu: "https://www.ilfioristanyc.com/menu/")
file = open("https://empty-chairs-dev.s3.amazonaws.com/fiorista.jpg") # url
rest11.photo_main.attach(io: file, filename: 'fiorista.jpg') #photo name

rest12 = Restaurant.create(name: "Mykonos Bleu Restaurant and Rooftop", overview: "A DINING EXPERIENCE TO AWAKEN THE SENSES
Mykonos Blue is a restaurant that transports you to the Greece of your imagination. Traditional Greek food, wine and spirits being served with the integrity of pure flavor and style of the country. We further our dedication to this mission by featuring only all natural, ingredients on our menu.
Mykonos Blue Rooftop is a cutting-edge, multidimensional space that is the crown jewel of the New York City scene. This venue is composed of numerous upscale outdoor lounges, including a open-air terraces boasting breathtaking Manhattan views. A-list DJ entertainment, exquisite ambiance and chic city dwellers reveling into the early hours. Raising altitudes and expectations, be sure to host your next outing at Mykonos Bleu, Manhattan’s premier rooftop cocktail lounge.", address: "127 W 28th St New York, NY 10001", menu: "https://www.mykonosbleu.com/menu-dinner")
file = open("https://empty-chairs-dev.s3.amazonaws.com/mykonos.jpg") # url
rest12.photo_main.attach(io: file, filename: 'mykonos.jpg') #photo name

rest13 = Restaurant.create(name: "Dhaba", overview: "Dhaba serves authentic North Indian food and kababs from the tandoor. Offerings also include an array of curries from the 'British Curry House' setting that will satisfy a variety of curry cravings. The restaurant is open late with a limited choice menu to cater to late night cravings.", address: "108 Lexington Avenue New York, NY 10016", menu: "https://onefork.nyc/menu/dhaba")
file = open("https://empty-chairs-dev.s3.amazonaws.com/dhaba.jpg") # url
rest13.photo_main.attach(io: file, filename: 'dhaba.jpg') #photo name

rest14 = Restaurant.create(name: "Tick Tock Diner NY", overview: "Tick Tock Diner, an iconic symbol of the American diner with locations in both Midtown Manhattan and Clifton, New Jersey, has mastered the art of casual dining, providing customers with high quality ingredients, generous portions at a reasonable price and a comfortable, family-friendly atmosphere that keeps them coming back year after year.
The 280 seat Midtown Manhattan location opened in 1997 at 481 8th Avenue (corner of 34th Street), across the street from Penn Station. Tick Tock Diner has long been known for its American comfort food. Today, it remains true to tradition while offering more dining choices than ever before on its extensive menu, accented with Italian, Greek and Tex-Mex influences. Keeping in the diner tradition, breakfast is served all day, featuring more than a dozen omelets, farm fresh eggs any style, pancakes, Belgian waffles and French toast.", address: "481 8th Avenue New York, NY 10001", menu: "https://static1.squarespace.com/static/591472963a041182fc132936/t/6201809710e0a4099bea3489/1644265624266/MENU+All+Day+Tick+Tock+Diner+NYC.pdf")
file = open("https://empty-chairs-dev.s3.amazonaws.com/ticktock.jpg") # url
rest14.photo_main.attach(io: file, filename: 'ticktock.jpg') #photo name

rest15 = Restaurant.create(name: "The Milling Room", overview: "The Milling Room features seasonal locally-sourced American cuisine, served in a sky lit dining room and lively tavern-inspired bar in the heart of the Upper West Side.", address: "446 Columbus Ave. New York, NY 10024", menu: "http://www.themillingroom.com/menu")
file = open("https://empty-chairs-dev.s3.amazonaws.com/milling.jpg") # url
rest15.photo_main.attach(io: file, filename: 'milling.jpg') #photo name

