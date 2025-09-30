// app/data/products.js
const products = [
  // Spices
  {
    id: 1,
    name: "BLACK PEPPER",
    botanicalName: "Piper Nigrum",
    image: "/images/Black Pepper.png",
    category: "Spices",
    uses: "Black pepper is one of the most widely used spices worldwide. It enhances flavor in virtually all savory dishes. Medicinally, it aids digestion, has antioxidant properties, improves brain function, and enhances the absorption of nutrients like curcumin from turmeric."
  },
  {
    id: 2,
    name: "CASSIA",
    botanicalName: "Cinnamomum Cassia",
    image: "/images/Caasia.png",
    category: "Spices",
    uses: "Used in baking, cooking, and traditional medicine. It flavors desserts, curries, and beverages. Medicinally, it helps regulate blood sugar levels, has anti-inflammatory properties, and aids digestion. Commonly used in Chinese five-spice powder."
  },
  {
    id: 4,
    name: "CHILLI FLAKES",
    botanicalName: "Capsicum Annuum",
    image: "/images/CHILLI FLAKES.png",
    category: "Spices",
    uses: "Vitamins: Chilli is loaded with vitamins like niacin, pyridoxine, riboflavin, and thiamine. Medicinal Uses: Due to presence of Capsaicin compounds, chilli pepper is used in preparation of ointment; also used in formulation to be used in arthritic pain and sore muscles."
  },
  {
    id: 5,
    name: "CLOVES",
    botanicalName: "Syzygium Aromaticum",
    image: "/images/Clove.png",
    category: "Spices",
    uses: "Used in both sweet and savory dishes, particularly in Indian and Middle Eastern cuisines. Also used in baking and beverages like chai. Medicinally, cloves have analgesic properties (used for toothaches), aid digestion, have antimicrobial effects, and are rich in antioxidants."
  },
  {
    id: 6,
    name: "CORIANDER POWDER",
    botanicalName: "Coriandrum Sativum",
    image: "/images/CORIANDER POWDER.png",
    category: "Spices",
    uses: "Ground coriander is an herb that many associates with Mexican and Spanish foods, and also widely used in Middle Eastern and Indian cooking. It aids digestion, has anti-inflammatory properties, and helps lower blood sugar levels."
  },
  {
    id: 8,
    name: "CUMIN POWDER",
    botanicalName: "Cuminum Cyminum",
    image: "/images/CUMIN POWDER.png",
    category: "Spices",
    uses: "Extensively used in Indian, Mexican, Middle Eastern, and North African cuisines. Essential in curry powders, garam masala, and taco seasonings. Aids digestion, boosts immunity, helps in weight loss, improves blood sugar control, and is rich in iron."
  },
  {
    id: 9,
    name: "CURRY POWDER",
    botanicalName: "Mixed Spice Blend",
    image: "/images/CURRY POWDER.png",
    category: "Spices",
    uses: "Used extensively in Indian, Thai, and other Asian cuisines to add flavor and color to curries, soups, stews, and marinades. It has antioxidant and anti-inflammatory properties due to its turmeric content and aids in digestion."
  },
  {
    id: 10,
    name: "GARLIC POWDER",
    botanicalName: "Allium Sativum",
    image: "/images/GARLIC POWDER.png",
    category: "Spices",
    uses: "Used as a seasoning in various cuisines worldwide, particularly in Italian, Asian, and American cooking. Added to meats, vegetables, sauces, and marinades. Medicinally, garlic supports heart health, lowers blood pressure and cholesterol, has antimicrobial and antiviral properties, and boosts immune function."
  },
  {
    id: 12,
    name: "ONION POWDER",
    botanicalName: "Allium Cepa",
    image: "/images/ONION POWDER.png",
    category: "Spices",
    uses: "Used as a seasoning in soups, stews, sauces, dips, marinades, and dry rubs. Popular in American, European, and Asian cuisines. Provides the flavor of onions without the moisture. Contains antioxidants, may support heart health, has anti-inflammatory properties, and provides vitamins and minerals."
  },
  {
    id: 13,
    name: "RED CHILI POWDER",
    botanicalName: "Capsicum Annuum",
    image: "/images/RED CHILI POWDER.png",
    category: "Spices",
    uses: "Vitamins: Chilli is loaded with vitamins like niacin, pyridoxine, riboflavin, and thiamine. Medicinal Uses: Due to presence of Capsaicin compounds, chilli pepper is used in preparation of ointment; also used in formulation to be used in arthritic pain and sore muscles."
  },
  {
    id: 14,
    name: "TURMERIC POWDER",
    botanicalName: "Curcuma Longa",
    image: "/images/TURMERIC POWDER.png",
    category: "Spices",
    uses: "It has a warm, bitter taste and is frequently used to flavor or color curry powders, mustards, butters, and cheeses. But the root of turmeric is also used widely to make medicine. It contains a yellow-colored chemical called curcumin, which is often used to color foods and cosmetics."
  },
  
  // Oil Seeds
  {
    id: 3,
    name: "BLACK CUMIN SEEDS",
    botanicalName: "Nigella Sativa",
    image: "/images/BLACK CUMIN SEEDS.png",
    category: "Oil Seeds",
    uses: "Widely used in Middle Eastern, Indian, and Mediterranean cuisines for flavoring breads, curries, and pickles. Medicinally, it has powerful antioxidant and anti-inflammatory properties, supports immune function, may help lower blood sugar and cholesterol, aids digestion, and has been used in traditional medicine for centuries."
  },
  {
    id: 7,
    name: "RAGI SEEDS",
    botanicalName: "Eleusine Coracana",
    image: "/images/RAAGI SEEDS.png",
    category: "Oil Seeds",
    uses: "Used to make porridge, flatbreads (roti), and fermented beverages in Indian and African cuisines. Rich in calcium (excellent for bone health), iron, amino acids, and dietary fiber. Helps manage diabetes due to low glycemic index, aids weight loss, improves digestion, and is naturally gluten-free. Popular baby food due to high nutritional value."
  },
  {
    id: 11,
    name: "NIGER SEEDS",
    botanicalName: "Guizotia Abyssinica",
    image: "/images/NIGER SEEDS.png",
    category: "Oil Seeds",
    uses: "Primarily used for extracting niger seed oil, which is used for cooking and in soap making. The oil is light-colored, odorless, and has properties similar to sunflower oil. The seed cake left after oil extraction is used as cattle feed and organic fertilizer. Also widely used as bird feed, especially for finches. Rich in linoleic acid and protein."
  },
  {
    id: 15,
    name: "FLAX SEEDS",
    botanicalName: "Linum Usitatissimum",
    image: "/images/FLAX SEEDS.png",
    category: "Oil Seeds",
    uses: "Used in baking, smoothies, and as a nutritional supplement. Rich in omega-3 fatty acids (ALA), dietary fiber, and lignans. Benefits include improved digestive health, reduced cholesterol levels, heart health support, and potential cancer-preventive properties. Can be consumed whole, ground, or as oil."
  },
  {
    id: 16,
    name: "BLACK MUSTARD SEEDS",
    botanicalName: "Brassica Nigra",
    image: "/images/BLACK MUSTARD SEEDS.png",
    category: "Oil Seeds",
    uses: "Widely used in Indian cooking for tempering (tadka) in curries, pickles, and chutneys. Essential in South Indian and Bengali cuisines. Used to make spicy mustard condiments and mustard oil. Medicinally, has antimicrobial properties, aids digestion, reduces inflammation, and may help with respiratory issues. Rich in selenium, omega-3 fatty acids, and minerals."
  },
  {
    id: 17,
    name: "SESAME SEEDS HULLED",
    botanicalName: "Sesamum Indicum",
    image: "/images/SESAME SEEDS HULLED.png",
    category: "Oil Seeds",
    uses: "Used in baking (breads, bagels, cookies), tahini paste, Asian cuisine, and as toppings for dishes. Excellent source of protein, healthy fats, B vitamins, and minerals including copper, manganese, and calcium. Supports bone health, lowers blood pressure, reduces inflammation, and aids in cholesterol management. Popular in Middle Eastern, Asian, and Mediterranean cuisines."
  },
  {
    id: 18,
    name: "SESAME SEEDS NATURAL",
    botanicalName: "Sesamum Indicum",
    image: "/images/SESAME SEEDS NATURAL.png",
    category: "Oil Seeds",
    uses: "Used in breads, crackers, stir-fries, salads, and for making sesame oil. Higher in fiber and calcium than hulled seeds due to the intact outer shell. Rich in antioxidants (sesamolin and sesamin), supports heart health, regulates blood sugar, promotes bone health, and aids digestion. Widely used in Asian, Middle Eastern, and African cuisines."
  },
  {
    id: 19,
    name: "YELLOW MUSTARD SEEDS",
    botanicalName: "Sinapis Alba",
    image: "/images/Yellow Mustard Seeds.png",
    category: "Oil Seeds",
    uses: "Primary ingredient in American yellow mustard and other mild mustard preparations. Used in pickling spices, salad dressings, mayonnaise, and European cuisine. Aids digestion, has anti-inflammatory properties, rich in omega-3 fatty acids, selenium, and magnesium. Used in traditional medicine for treating respiratory conditions and as a poultice for pain relief."
  },
  {
    id: 26,
    name: "CUMIN SEEDS",
    botanicalName: "Cuminum Cyminum",
    image: "/images/Cumin Seed.png",
    category: "Oil Seeds",
    uses: "Essential spice in Indian, Middle Eastern, Mexican, and North African cuisines. Used whole in tempering, spice blends, and as a key ingredient in curry powders and garam masala. Rich in iron, aids digestion, improves blood sugar control, has antimicrobial properties, and boosts immunity. Used medicinally for digestive disorders and respiratory issues."
  },
  {
    id: 27,
    name: "CORIANDER SEEDS",
    botanicalName: "Coriandrum Sativum",
    image: "/images/Coriandrum Sativum.png",
    category: "Oil Seeds",
    uses: "Widely used in Indian, Middle Eastern, and Latin American cuisines. Essential in curry powders, pickling spices, and spice blends. Used whole or ground in breads, soups, stews, and marinades. Medicinally, aids digestion, helps lower blood sugar levels, has anti-inflammatory and antimicrobial properties, and may support heart health. Rich in dietary fiber, antioxidants, and essential minerals."
  },
  {
    id: 28,
    name: "FENNEL SEEDS",
    botanicalName: "Foeniculum Vulgare",
    image: "/images/Fennel Seeds.png",
    category: "Oil Seeds",
    uses: "Commonly used in Indian, Mediterranean, and Middle Eastern cuisines. Used in spice blends, baking, teas, and as a mouth freshener after meals. Essential ingredient in Italian sausages and Chinese five-spice powder. Medicinally, aids digestion, relieves bloating and gas, has anti-inflammatory properties, freshens breath, and may help with menstrual discomfort. Rich in fiber, antioxidants, vitamin C, and minerals."
  },
  
  // Others
  {
    id: 20,
    name: "PSYLLIUM HUSK",
    botanicalName: "Plantago Ovata",
    image: "/images/Psyllium Husk.png",
    category: "Others",
    uses: "Primarily used as a dietary fiber supplement for digestive health. Helps relieve constipation, diarrhea, and irritable bowel syndrome. Used in gluten-free baking as a binding agent. Aids in weight management by promoting feelings of fullness, helps lower cholesterol levels, and supports blood sugar control. Can be mixed with water, juices, or added to smoothies and baked goods."
  },
  {
    id: 21,
    name: "MILLET",
    botanicalName: "Panicum Miliaceum",
    image: "/images/Millet.png",
    category: "Others",
    uses: "Ancient grain used to make porridge, flatbreads, couscous alternatives, and fermented beverages in African and Asian cuisines. Naturally gluten-free and highly nutritious. Rich in protein, fiber, B vitamins, iron, magnesium, and phosphorus. Helps manage diabetes due to low glycemic index, supports heart health, aids digestion, and promotes weight management. Used in birdseed and animal feed as well."
  },
  {
    id: 22,
    name: "MAIZE STARCH",
    botanicalName: "Zea Mays",
    image: "/images/Maize Starch.png",
    category: "Others",
    uses: "Widely used as a thickening agent in soups, sauces, gravies, and desserts. Essential in baking for texture improvement and as a coating for fried foods. Used in food processing, pharmaceuticals, paper manufacturing, and textile industries. Gluten-free alternative in cooking. Also used in cosmetics and as a binding agent in various products. Provides quick energy and is easily digestible."
  },
  {
    id: 23,
    name: "DRY COCONUT",
    botanicalName: "Cocos Nucifera",
    image: "/images/Dry Coconut.png",
    category: "Others",
    uses: "Used in South Asian, Southeast Asian, and tropical cuisines for cooking curries, desserts, and chutneys. Grated dry coconut is used in sweets, snacks, and as a garnish. Rich in healthy fats (MCTs), fiber, iron, and manganese. Provides quick energy, supports brain function, has antimicrobial properties, and aids in weight management. Used in cosmetics and traditional medicine for hair and skin care."
  },
  {
    id: 24,
    name: "CHICKPEAS",
    botanicalName: "Cicer Arietinum",
    image: "/images/Chickpeas.png",
    category: "Others",
    uses: "Versatile legume used in Mediterranean, Middle Eastern, Indian, and global cuisines. Key ingredient in hummus, falafel, curries, soups, and salads. Can be roasted as snacks or ground into chickpea flour (besan) for baking and cooking. Excellent source of plant-based protein, fiber, iron, folate, and phosphorus. Helps manage blood sugar, supports digestive health, aids weight management, and promotes heart health."
  },
  {
    id: 25,
    name: "BROWN CHICKPEAS",
    botanicalName: "Cicer Arietinum",
    image: "/images/Brown Chickpeas.png",
    category: "Others",
    uses: "Popular in Indian cuisine, especially for making chana masala, curries, and street food snacks. Smaller and darker than regular chickpeas with a nuttier, earthier flavor. Used in salads, soups, and sprouted for nutritional benefits. Rich in protein, fiber, iron, and folate. Supports digestive health, helps regulate blood sugar levels, promotes heart health, and aids in weight management. Excellent source of plant-based nutrition for vegetarian and vegan diets."
  },
  {
    id: 29,
    name: "GROUND NUT SEEDS",
    botanicalName: "Arachis Hypogaea",
    image: "/images/ground nut seeds.png",
    category: "Oil Seeds",
    uses: "Widely used globally for extracting peanut oil, which is excellent for cooking, frying, and salad dressings. Consumed roasted, boiled, or raw as nutritious snacks. Key ingredient in peanut butter, confectioneries, and savory dishes across Asian, African, and American cuisines. Rich in protein, healthy monounsaturated fats, vitamin E, niacin, folate, and magnesium. Supports heart health, aids weight management, helps regulate blood sugar levels, and provides sustained energy. Also used in animal feed and as a nitrogen-fixing crop to improve soil fertility."
  }
];

export default products;