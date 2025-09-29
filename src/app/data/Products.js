// app/data/products.js
const products = [
  {
    id: 1,
    name: "BLACK PEPPER",
    botanicalName: "Piper Nigrum",
    family: "Piperaceae",
    commercialPart: "Dried Fruit (Peppercorn)",
    image: "/images/Black Pepper.png",
    category: "Spices",
    description: "Black pepper is a flowering vine in the family Piperaceae, cultivated for its fruit, which is usually dried and used as a spice and seasoning. The fruit is a drupe which is about 5 mm in diameter, dark red when fully mature, and contains a single seed. It is native to South India and is extensively cultivated there and in other tropical regions.",
    uses: "Black pepper is one of the most widely used spices worldwide. It enhances flavor in virtually all savory dishes. Medicinally, it aids digestion, has antioxidant properties, improves brain function, and enhances the absorption of nutrients like curcumin from turmeric."
  },
  {
    id: 2,
    name: "CASSIA",
    botanicalName: "Cinnamomum Cassia",
    family: "Lauraceae",
    commercialPart: "Bark",
    image: "/images/Caasia.png",
    category: "Spices",
    description: "Cassia, also known as Chinese cinnamon, is an evergreen tree native to southern China and is widely cultivated there and elsewhere in southern and eastern Asia. The aromatic bark is used as a spice and is similar to cinnamon but with a stronger, more pungent flavor.",
    uses: "Used in baking, cooking, and traditional medicine. It flavors desserts, curries, and beverages. Medicinally, it helps regulate blood sugar levels, has anti-inflammatory properties, and aids digestion. Commonly used in Chinese five-spice powder."
  },
  {
    id: 3,
    name: "BLACK CUMIN SEEDS",
    botanicalName: "Nigella Sativa",
    family: "Ranunculaceae",
    commercialPart: "Seeds",
    image: "/images/BLACK CUMIN SEEDS.png",
    category: "Oil Seeds",
    description: "Black cumin, also known as black seed, Nigella, or Kalonji, is an annual flowering plant native to south and southwest Asia. The seeds are small, black, and crescent-shaped with a slightly bitter, peppery taste. Despite the name, black cumin is not related to regular cumin and belongs to a completely different botanical family.",
    uses: "Widely used in Middle Eastern, Indian, and Mediterranean cuisines for flavoring breads, curries, and pickles. Medicinally, it has powerful antioxidant and anti-inflammatory properties, supports immune function, may help lower blood sugar and cholesterol, aids digestion, and has been used in traditional medicine for centuries."
  },
  {
    id: 4,
    name: "CHILLI FLAKES",
    botanicalName: "Capsicum Annuum",
    family: "Nightshade, Solanaceae",
    commercialPart: "Green As Well As Ripe And Dried Pod (Fruit)",
    image: "/images/CHILLI FLAKES.png",
    category: "Spices",
    description: "Chilli is a fruit which belongs to Capsicum genus. It has many varieties which are differentiated on its pungency measured on Scoville Scale. Chilli fruit when ripened and dried becomes red chilli, which is further crushed to form chilli flakes. These are categorized as hot pepper and used as a condiment.",
    uses: "Vitamins: Chilli is loaded with vitamins like niacin, pyridoxine, riboflavin, and thiamine. Medicinal Uses: Due to presence of Capsaicin compounds, chilli pepper is used in preparation of ointment; also used in formulation to be used in arthritic pain and sore muscles."
  },
  {
    id: 5,
    name: "CLOVES",
    botanicalName: "Syzygium Aromaticum",
    family: "Myrtaceae",
    commercialPart: "Dried Flower Buds",
    image: "/images/Clove.png",
    category: "Spices",
    description: "Cloves are the aromatic flower buds of a tree in the family Myrtaceae. They are native to the Maluku Islands in Indonesia and are commonly used as a spice. Cloves have a strong, warm, and sweet flavor with a distinctive aroma.",
    uses: "Used in both sweet and savory dishes, particularly in Indian and Middle Eastern cuisines. Also used in baking and beverages like chai. Medicinally, cloves have analgesic properties (used for toothaches), aid digestion, have antimicrobial effects, and are rich in antioxidants."
  },
  {
    id: 6,
    name: "CORIANDER POWDER",
    botanicalName: "Coriandrum Sativum",
    family: "Apiaceae (Umbelliferae)",
    commercialPart: "Seeds",
    image: "/images/CORIANDER POWDER.png",
    category: "Spices",
    description: "Coriander powder is processed from high-quality coriander seeds that are strictly of Indian origin only. Coriander can be used in its whole seed form as well as ground. Coriander powder is obtained by grinding coriander seeds to desired granulation. It has a warm, nutty, and citrusy flavor.",
    uses: "Ground coriander is an herb that many associates with Mexican and Spanish foods, and also widely used in Middle Eastern and Indian cooking. It aids digestion, has anti-inflammatory properties, and helps lower blood sugar levels."
  },
  {
    id: 7,
    name: "RAGI SEEDS",
    botanicalName: "Eleusine Coracana",
    family: "Poaceae (Gramineae)",
    commercialPart: "Seeds (Grain)",
    image: "/images/RAAGI SEEDS.png",
    category: "Oil Seeds",
    description: "Ragi, also known as finger millet, is a widely grown cereal crop in the arid and semi-arid regions of Africa and Asia. It is a nutritious grain with small, reddish-brown seeds that are rich in calcium, iron, and dietary fiber. Ragi has been cultivated for thousands of years and is considered one of the most nutritious cereals.",
    uses: "Used to make porridge, flatbreads (roti), and fermented beverages in Indian and African cuisines. Rich in calcium (excellent for bone health), iron, amino acids, and dietary fiber. Helps manage diabetes due to low glycemic index, aids weight loss, improves digestion, and is naturally gluten-free. Popular baby food due to high nutritional value."
  },
  {
    id: 8,
    name: "CUMIN POWDER",
    botanicalName: "Cuminum Cyminum",
    family: "Apiaceae (Umbelliferae)",
    commercialPart: "Ground Seeds (Dried Fruit)",
    image: "/images/CUMIN POWDER.png",
    category: "Spices",
    description: "Cumin powder is made by grinding roasted or raw cumin seeds. It has a warm, earthy, and slightly bitter taste with a distinctive aroma. Cumin is one of the most popular spices used worldwide and is a key ingredient in many spice blends.",
    uses: "Extensively used in Indian, Mexican, Middle Eastern, and North African cuisines. Essential in curry powders, garam masala, and taco seasonings. Aids digestion, boosts immunity, helps in weight loss, improves blood sugar control, and is rich in iron."
  },
  {
    id: 9,
    name: "CURRY POWDER",
    botanicalName: "Mixed Spice Blend",
    family: "Various (Zingiberaceae, Apiaceae, Fabaceae)",
    commercialPart: "Blended Ground Spices",
    image: "/images/CURRY POWDER.png",
    category: "Spices",
    description: "Curry powder is a spice blend originating from the Indian subcontinent. It typically contains a mixture of turmeric, coriander, cumin, fenugreek, and chili peppers, along with other spices. The blend can vary significantly depending on regional preferences and intended use.",
    uses: "Used extensively in Indian, Thai, and other Asian cuisines to add flavor and color to curries, soups, stews, and marinades. It has antioxidant and anti-inflammatory properties due to its turmeric content and aids in digestion."
  },
  {
    id: 10,
    name: "GARLIC POWDER",
    botanicalName: "Allium Sativum",
    family: "Amaryllidaceae (Alliaceae)",
    commercialPart: "Dried and Ground Bulb",
    image: "/images/GARLIC POWDER.png",
    category: "Spices",
    description: "Garlic powder is made from dehydrated garlic cloves that have been ground into a fine powder. It provides a concentrated garlic flavor and is more convenient to use than fresh garlic. Garlic has been used for thousands of years for both culinary and medicinal purposes.",
    uses: "Used as a seasoning in various cuisines worldwide, particularly in Italian, Asian, and American cooking. Added to meats, vegetables, sauces, and marinades. Medicinally, garlic supports heart health, lowers blood pressure and cholesterol, has antimicrobial and antiviral properties, and boosts immune function."
  },
  {
    id: 11,
    name: "NIGER SEEDS",
    botanicalName: "Guizotia Abyssinica",
    family: "Asteraceae (Compositae)",
    commercialPart: "Seeds",
    image: "/images/NIGER SEEDS.png",
    category: "Oil Seeds",
    description: "Niger seed, also known as ramtil or noog, is an oilseed crop native to Ethiopia and cultivated extensively in India and other parts of Africa. The seeds are small, black, and shiny with high oil content (35-50%). It is primarily grown for its edible oil but also serves as bird feed.",
    uses: "Primarily used for extracting niger seed oil, which is used for cooking and in soap making. The oil is light-colored, odorless, and has properties similar to sunflower oil. The seed cake left after oil extraction is used as cattle feed and organic fertilizer. Also widely used as bird feed, especially for finches. Rich in linoleic acid and protein."
  },
  {
    id: 12,
    name: "ONION POWDER",
    botanicalName: "Allium Cepa",
    family: "Amaryllidaceae (Alliaceae)",
    commercialPart: "Dried and Ground Bulb",
    image: "/images/ONION POWDER.png",
    category: "Spices",
    description: "Onion powder is made from dehydrated, ground onions. It has a concentrated onion flavor and aroma, making it a convenient alternative to fresh onions. The powder is made by dehydrating fresh onions and then grinding them into a fine powder.",
    uses: "Used as a seasoning in soups, stews, sauces, dips, marinades, and dry rubs. Popular in American, European, and Asian cuisines. Provides the flavor of onions without the moisture. Contains antioxidants, may support heart health, has anti-inflammatory properties, and provides vitamins and minerals."
  },
  {
    id: 13,
    name: "RED CHILI POWDER",
    botanicalName: "Capsicum Annuum",
    family: "Nightshade, Solanaceae",
    commercialPart: "Green As Well As Ripe And Dried Pod (Fruit)",
    image: "/images/RED CHILI POwDER.png",
    category: "Spices",
    description: "Chilli is a fruit which belongs to Capsicum genus. It has many varieties which are differentiated on its pungency measured on Scoville Scale. Chilli fruit when ripened and dried becomes red chilli, which is further grounded to form red chilli powder. These are categorized as hot pepper.",
    uses: "Vitamins: Chilli is loaded with vitamins like niacin, pyridoxine, riboflavin, and thiamine. Medicinal Uses: Due to presence of Capsaicin compounds, chilli pepper is used in preparation of ointment; also used in formulation to be used in arthritic pain and sore muscles."
  },
  {
    id: 14,
    name: "TURMERIC POWDER",
    botanicalName: "Curcuma Longa",
    family: "Zingiberaceae",
    commercialPart: "Rhizome Or Underground Stem",
    image: "/images/TURMERIC POWDER.png",
    category: "Spices",
    description: "Turmeric is a member of the Curcuma botanical group, which is part of the ginger family of herbs, the Zingiberaceae. Its botanical name is Curcuma longa. Turmeric is widely grown both as a kitchen spice and for its medicinal uses.",
    uses: "It has a warm, bitter taste and is frequently used to flavor or color curry powders, mustards, butters, and cheeses. But the root of turmeric is also used widely to make medicine. It contains a yellow-colored chemical called curcumin, which is often used to color foods and cosmetics."
  },
  {
    id: 15,
    name: "FLAX SEEDS",
    botanicalName: "Linum Usitatissimum",
    family: "Linaceae",
    commercialPart: "Seeds",
    image: "/images/FLAX SEEDS.png",
    category: "Oil Seeds",
    description: "Flax, also known as common flax or linseed, is a flowering plant cultivated as a food and fiber crop. Flax seeds are small, brown or golden-colored seeds that are rich in omega-3 fatty acids, fiber, and lignans. They have been cultivated since ancient times.",
    uses: "Used in baking, smoothies, and as a nutritional supplement. Rich in omega-3 fatty acids (ALA), dietary fiber, and lignans. Benefits include improved digestive health, reduced cholesterol levels, heart health support, and potential cancer-preventive properties. Can be consumed whole, ground, or as oil."
  },
  {
    id: 16,
    name: "BLACK MUSTARD SEEDS",
    botanicalName: "Brassica Nigra",
    family: "Brassicaceae (Cruciferae)",
    commercialPart: "Seeds",
    image: "/images/BLACK MUSTARD SEEDS.png",
    category: "Oil Seeds",
    description: "Black mustard is an annual plant cultivated for its dark brown to black seeds. Native to the Mediterranean region, North Africa, and parts of Asia, it is one of the most pungent varieties of mustard. The seeds are smaller than yellow mustard seeds and have a more intense, sharp flavor.",
    uses: "Widely used in Indian cooking for tempering (tadka) in curries, pickles, and chutneys. Essential in South Indian and Bengali cuisines. Used to make spicy mustard condiments and mustard oil. Medicinally, has antimicrobial properties, aids digestion, reduces inflammation, and may help with respiratory issues. Rich in selenium, omega-3 fatty acids, and minerals."
  },
  {
    id: 17,
    name: "SESAME SEEDS HULLED",
    botanicalName: "Sesamum Indicum",
    family: "Pedaliaceae",
    commercialPart: "Hulled Seeds (Without Outer Shell)",
    image: "/images/SESAME SEEDS HULLED.png",
    category: "Oil Seeds",
    description: "Hulled sesame seeds are sesame seeds with their outer shell removed, resulting in white or cream-colored seeds. The hulling process makes them milder in flavor and easier to digest. Sesame is one of the oldest oilseed crops known, cultivated for over 3,500 years.",
    uses: "Used in baking (breads, bagels, cookies), tahini paste, Asian cuisine, and as toppings for dishes. Excellent source of protein, healthy fats, B vitamins, and minerals including copper, manganese, and calcium. Supports bone health, lowers blood pressure, reduces inflammation, and aids in cholesterol management. Popular in Middle Eastern, Asian, and Mediterranean cuisines."
  },
  {
    id: 18,
    name: "SESAME SEEDS NATURAL",
    botanicalName: "Sesamum Indicum",
    family: "Pedaliaceae",
    commercialPart: "Seeds (With Outer Shell)",
    image: "/images/SESAME SEEDS NATURAL.png",
    category: "Oil Seeds",
    description: "Natural sesame seeds are unhulled seeds with their outer coat intact, giving them a tan to brown color. They have a slightly nuttier, more robust flavor compared to hulled seeds and retain more fiber and nutrients. These seeds are harvested from one of the oldest cultivated plants in the world.",
    uses: "Used in breads, crackers, stir-fries, salads, and for making sesame oil. Higher in fiber and calcium than hulled seeds due to the intact outer shell. Rich in antioxidants (sesamolin and sesamin), supports heart health, regulates blood sugar, promotes bone health, and aids digestion. Widely used in Asian, Middle Eastern, and African cuisines."
  },
  {
    id: 19,
    name: "YELLOW MUSTARD SEEDS",
    botanicalName: "Sinapis Alba (or Brassica Alba)",
    family: "Brassicaceae (Cruciferae)",
    commercialPart: "Seeds",
    image: "/images/Yellow Mustard Seeds.png",
    category: "Oil Seeds",
    description: "Yellow mustard seeds, also called white mustard, are the mildest variety of mustard seeds. They are larger than black or brown mustard seeds and have a pale yellow color. Native to the Mediterranean region, these seeds are widely cultivated in temperate regions around the world.",
    uses: "Primary ingredient in American yellow mustard and other mild mustard preparations. Used in pickling spices, salad dressings, mayonnaise, and European cuisine. Aids digestion, has anti-inflammatory properties, rich in omega-3 fatty acids, selenium, and magnesium. Used in traditional medicine for treating respiratory conditions and as a poultice for pain relief."
  }
];

export default products;