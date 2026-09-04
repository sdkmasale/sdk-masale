// SDK Masale — Product Data
// One entry per SKU. Used by product.html to render individual product detail pages.
// Each size has its own mrp (struck-through regular price) and price (sale price).
// All 23 SKUs now have confirmed real per-size pricing.

const SDK_PRODUCTS = [
  // ---------------- Spices & Masalas (confirmed real pricing) ----------------
  {
    id: "kanda-lasun-masala",
    name: "Kanda Lasun Masala",
    category: "spices",
    categoryLabel: "Spices & Masalas",
    desc: "A bold Maharashtrian onion-garlic masala that forms the base of everyday sabzis, curries and dals. Roasted and ground the traditional way for a deep, earthy aroma.",
    ingredients: "Onion, Garlic, Red Chilli, Coriander, Cumin, Sesame, Coconut, Salt & Spices",
    sizes: [
      { key: "1kg", label: "1 kg", mrp: 790, price: 632, front: "images/kanda-lasun-masala-front-nobg.png", back: null },
      { key: "500g", label: "500 g", mrp: 400, price: 320, front: "images/kanda-lasun-masala-front-nobg.png", back: null },
      { key: "200g", label: "200 g", mrp: 200, price: 160, front: "images/kanda-lasun-masala-front-nobg.png", back: null }
    ]
  },
  {
    id: "garam-masala",
    name: "Garam Masala",
    category: "spices",
    categoryLabel: "Spices & Masalas",
    desc: "A classic warming blend of whole spices, dry-roasted and ground for that final finishing touch on curries, dals and rice dishes.",
    ingredients: "Coriander, Cumin, Black Pepper, Cinnamon, Cardamom, Cloves, Bay Leaf & Spices",
    sizes: [
      { key: "1kg", label: "1 kg", mrp: 1110, price: 888, front: "images/garam-masala-front.png", back: "images/garam-masala-back.jpeg" },
      { key: "500g", label: "500 g", mrp: 560, price: 448, front: "images/garam-masala-500g-front.jpeg", back: "images/garam-masala-500g-back.jpeg" },
      { key: "200g", label: "200 g", mrp: 390, price: 312, front: "images/garam-masala-200g-front.jpeg", back: "images/garam-masala-200g-back.jpeg" }
    ]
  },
  {
    id: "coriander-powder",
    name: "Coriander Powder",
    category: "spices",
    categoryLabel: "Spices & Masalas",
    desc: "Pure, finely ground coriander seed with a mild, citrusy warmth — an everyday essential for thickening and flavouring gravies.",
    ingredients: "100% Coriander Seeds",
    sizes: [
      { key: "1kg", label: "1 kg", mrp: 550, price: 440, front: "images/coriander-powder-front-nobg.png", back: null },
      { key: "500g", label: "500 g", mrp: 280, price: 224, front: "images/coriander-powder-front-nobg.png", back: null },
      { key: "200g", label: "200 g", mrp: 190, price: 152, front: "images/coriander-powder-front-nobg.png", back: null }
    ]
  },
  {
    id: "chili-powder",
    name: "Chili Powder",
    category: "spices",
    categoryLabel: "Spices & Masalas",
    desc: "Vibrant red chilli powder with balanced heat and colour, sun-dried and stone-ground for everyday cooking.",
    ingredients: "100% Red Chillies",
    sizes: [
      { key: "1kg", label: "1 kg", mrp: 550, price: 440, front: "images/chili-powder-front-nobg.png", back: null },
      { key: "500g", label: "500 g", mrp: 280, price: 224, front: "images/chili-powder-front-nobg.png", back: null },
      { key: "200g", label: "200 g", mrp: 190, price: 152, front: "images/chili-powder-front-nobg.png", back: null }
    ]
  },
  {
    id: "kashmiri-mirchi-powder",
    name: "Kashmiri Mirchi Powder",
    category: "spices",
    categoryLabel: "Spices & Masalas",
    desc: "Prized for its deep red colour and gentle heat, Kashmiri mirchi powder brings restaurant-style colour to curries without overpowering spice.",
    ingredients: "100% Kashmiri Red Chillies",
    sizes: [
      { key: "1kg", label: "1 kg", mrp: 830, price: 664, front: "images/kashmiri-mirchi-powder-front-nobg.png", back: null },
      { key: "500g", label: "500 g", mrp: 380, price: 304, front: "images/kashmiri-mirchi-powder-front-nobg.png", back: null },
      { key: "200g", label: "200 g", mrp: 260, price: 208, front: "images/kashmiri-mirchi-powder-front-nobg.png", back: null }
    ]
  },
  {
    id: "cumin-powder",
    name: "Cumin Powder",
    category: "spices",
    categoryLabel: "Spices & Masalas",
    desc: "Roasted cumin seeds ground fresh for a warm, nutty aroma — a pantry staple for tempering and finishing dishes.",
    ingredients: "100% Cumin Seeds",
    sizes: [
      { key: "1kg", label: "1 kg", mrp: 950, price: 760, front: "images/cumin-powder-front-nobg.png", back: null },
      { key: "500g", label: "500 g", mrp: 380, price: 304, front: "images/cumin-powder-front-nobg.png", back: null },
      { key: "200g", label: "200 g", mrp: 240, price: 192, front: "images/cumin-powder-front-nobg.png", back: null }
    ]
  },
  {
    id: "haldi-powder",
    name: "Haldi Powder",
    category: "spices",
    categoryLabel: "Spices & Masalas",
    desc: "Bright, aromatic turmeric powder milled from select rhizomes — the everyday base note of Indian cooking.",
    ingredients: "100% Turmeric",
    sizes: [
      { key: "1kg", label: "1 kg", mrp: 720, price: 576, front: "images/haldi-powder-front-nobg.png", back: null },
      { key: "500g", label: "500 g", mrp: 380, price: 304, front: "images/haldi-powder-front-nobg.png", back: null },
      { key: "200g", label: "200 g", mrp: 220, price: 176, front: "images/haldi-powder-front-nobg.png", back: null }
    ]
  },

  // ---------------- Special Products (confirmed real pricing) ----------------
  {
    id: "pav-bhaji-masala",
    name: "Pav Bhaji Masala",
    category: "special",
    categoryLabel: "Special Products",
    desc: "A tangy, aromatic street-food blend crafted for that signature Mumbai pav bhaji flavour — rich, buttery and full-bodied.",
    ingredients: "Coriander, Red Chilli, Cumin, Amchur, Fennel, Black Pepper, Cinnamon & Spices",
    sizes: [
      { key: "1kg", label: "1 kg", mrp: 750, price: 600, front: "images/pav-bhaji-masala-front.jpeg", back: "images/pav-bhaji-masala-back.jpeg" },
      { key: "500g", label: "500 g", mrp: 380, price: 304, front: "images/pav-bhaji-masala-500g-front.jpeg", back: "images/pav-bhaji-masala-500g-back.jpeg" },
      { key: "200g", label: "200 g", mrp: 190, price: 152, front: "images/pav-bhaji-masala-200g-front.jpeg", back: "images/pav-bhaji-masala-200g-back.jpeg" }
    ]
  },
  {
    id: "chicken-biryani-masala",
    name: "Chicken Biryani Masala",
    category: "special",
    categoryLabel: "Special Products",
    desc: "A fragrant, layered blend of whole spices built for restaurant-style chicken biryani — bold on aroma, balanced on heat.",
    ingredients: "Coriander, Red Chilli, Cumin, Cinnamon, Cardamom, Cloves, Star Anise & Spices",
    sizes: [
      { key: "1kg", label: "1 kg", mrp: 1110, price: 888, front: "images/chicken-biryani-masala-front-nobg.png", back: null },
      { key: "500g", label: "500 g", mrp: 560, price: 448, front: "images/chicken-biryani-masala-front-nobg.png", back: null },
      { key: "200g", label: "200 g", mrp: 280, price: 224, front: "images/chicken-biryani-masala-front-nobg.png", back: null }
    ]
  },
  {
    id: "mutton-biryani-masala",
    name: "Mutton Biryani Masala",
    category: "special",
    categoryLabel: "Special Products",
    desc: "A rich, deeply spiced blend designed to stand up to mutton's flavour — slow-roasted whole spices ground for an authentic dum biryani finish.",
    ingredients: "Coriander, Red Chilli, Cumin, Turmeric, Black Pepper, Clove, Cinnamon, Cardamom, Bay Leaf, Mace, Nutmeg, Dry Ginger, Garlic, Onion & Spices",
    sizes: [
      { key: "1kg", label: "1 kg", mrp: 1110, price: 888, front: "images/mutton-biryani-masala-1kg-front.png", back: "images/mutton-biryani-masala-1kg-back.png" },
      { key: "500g", label: "500 g", mrp: 560, price: 448, front: "images/mutton-biryani-masala-500g-front.png", back: "images/mutton-biryani-masala-500g-back.png" },
      { key: "200g", label: "200 g", mrp: 280, price: 224, front: "images/mutton-biryani-masala-200g-front.png", back: "images/mutton-biryani-masala-200g-back.png" }
    ]
  },
  {
    id: "egg-biryani-masala",
    name: "Egg Biryani Masala",
    category: "special",
    categoryLabel: "Special Products",
    desc: "A well-rounded biryani spice mix that brings out the best in egg biryani — aromatic, gently spiced and easy to cook with.",
    ingredients: "Coriander, Red Chilli, Cumin, Turmeric, Black Pepper, Clove, Cinnamon, Cardamom, Bay Leaf, Mace, Nutmeg, Dry Ginger, Garlic, Onion & Spices",
    sizes: [
      { key: "1kg", label: "1 kg", mrp: 1110, price: 888, front: "images/egg-biryani-masala-1kg-front.png", back: "images/egg-biryani-masala-1kg-back.png" },
      { key: "500g", label: "500 g", mrp: 560, price: 448, front: "images/egg-biryani-masala-500g-front.png", back: "images/egg-biryani-masala-500g-back.png" },
      { key: "200g", label: "200 g", mrp: 280, price: 224, front: "images/egg-biryani-masala-200g-front.png", back: "images/egg-biryani-masala-200g-back.png" }
    ]
  },
  {
    id: "kitchen-king-masala",
    name: "Kitchen King Masala",
    category: "special",
    categoryLabel: "Special Products",
    desc: "An all-purpose blend that works across sabzis, gravies and paneer dishes — a true kitchen staple with a well-rounded, mellow spice profile.",
    ingredients: "Coriander, Red Chilli, Cumin, Turmeric, Fenugreek, Dry Mango, Black Pepper & Spices",
    sizes: [
      { key: "1kg", label: "1 kg", mrp: 750, price: 600, front: "images/kitchen-king-masala-front.jpeg", back: "images/kitchen-king-masala-back.jpeg" },
      { key: "500g", label: "500 g", mrp: 380, price: 304, front: "images/kitchen-king-masala-500g-front.jpeg", back: "images/kitchen-king-masala-500g-back.jpeg" },
      { key: "200g", label: "200 g", mrp: 190, price: 152, front: "images/kitchen-king-masala-200g-front.png", back: "images/kitchen-king-masala-200g-back.png" }
    ]
  },
  {
    id: "chole-masala",
    name: "Chole Masala",
    category: "special",
    categoryLabel: "Special Products",
    desc: "A tangy, robust blend made for classic Punjabi chole — dry mango and pomegranate seed lend it that signature sourness.",
    ingredients: "Coriander, Cumin, Dry Mango, Pomegranate, Black Pepper, Bay Leaf, Cinnamon, Clove, Black Cardamom, Green Cardamom, Caraway, Dry Ginger, Garlic, Onion & Spices",
    sizes: [
      { key: "1kg", label: "1 kg", mrp: 750, price: 600, front: "images/chole-masala-1kg-front.png", back: "images/chole-masala-1kg-back.png" },
      { key: "500g", label: "500 g", mrp: 380, price: 304, front: "images/chole-masala-500g-front.png", back: "images/chole-masala-500g-back.png" },
      { key: "200g", label: "200 g", mrp: 190, price: 152, front: "images/chole-masala-200g-front.png", back: "images/chole-masala-200g-back.png" }
    ]
  },
  {
    id: "sambar-masala",
    name: "Sambar Masala",
    category: "special",
    categoryLabel: "Special Products",
    desc: "A South Indian staple blend that gives sambar its signature tang and depth — great with lentils, vegetables and dosa sides.",
    ingredients: "Coriander, Toor Dal, Chana Dal, Red Chilli, Fenugreek, Cumin, Black Pepper, Turmeric, Mustard, Curry Leaves, Asafoetida & Salt",
    sizes: [
      { key: "1kg", label: "1 kg", mrp: 750, price: 600, front: "images/sambar-masala-1kg-front.jpeg", back: "images/sambar-masala-1kg-back.jpeg" },
      { key: "500g", label: "500 g", mrp: 380, price: 304, front: "images/sambar-masala-500g-front.jpeg", back: "images/sambar-masala-500g-back.jpeg" },
      { key: "200g", label: "200 g", mrp: 190, price: 152, front: "images/sambar-masala-200g-front.jpeg", back: "images/sambar-masala-200g-back.jpeg" }
    ]
  },
  {
    id: "chaat-masala",
    name: "Chaat Masala",
    category: "special",
    categoryLabel: "Special Products",
    desc: "A tangy, smoky finishing sprinkle for chaats, fruit, salads and snacks — black salt and dry mango give it that unmistakable zing.",
    ingredients: "Black Salt, Dried Mango Powder, Cumin, Coriander, Black Pepper, Dry Ginger, Mint Leaves, Citric Acid, Asafoetida & Salt",
    sizes: [
      { key: "1kg", label: "1 kg", mrp: 750, price: 600, front: "images/chaat-masala-1kg-front.jpeg", back: "images/chaat-masala-1kg-back.jpeg" },
      { key: "500g", label: "500 g", mrp: 380, price: 304, front: "images/chaat-masala-500g-front.jpeg", back: "images/chaat-masala-500g-back.jpeg" },
      { key: "200g", label: "200 g", mrp: 190, price: 152, front: "images/chaat-masala-200g-front.jpeg", back: "images/chaat-masala-200g-back.jpeg" }
    ]
  },
  {
    id: "egg-curry-masala",
    name: "Egg Curry Masala",
    category: "special",
    categoryLabel: "Special Products",
    desc: "A well-balanced curry blend made to complement egg curry's simplicity — warm, gently spiced and rounded.",
    ingredients: "Coriander, Cumin, Dry Mango, Pomegranate, Black Pepper, Bay Leaf, Cinnamon, Clove, Cardamom, Caraway, Dry Ginger, Garlic, Onion & Spices",
    sizes: [
      { key: "1kg", label: "1 kg", mrp: 750, price: 600, front: "images/egg-curry-masala-1kg-front.png", back: "images/egg-curry-masala-1kg-back.png" },
      { key: "500g", label: "500 g", mrp: 380, price: 304, front: "images/egg-curry-masala-500g-front.png", back: "images/egg-curry-masala-500g-back.png" },
      { key: "200g", label: "200 g", mrp: 190, price: 152, front: "images/egg-curry-masala-200g-front.png", back: "images/egg-curry-masala-200g-back.png" }
    ]
  },
  {
    id: "chicken-masala",
    name: "Chicken Masala",
    category: "special",
    categoryLabel: "Special Products",
    desc: "Our signature everyday chicken masala — a well-rounded blend that works equally well for dry preparations and gravies.",
    ingredients: "Coriander, Red Chilli, Cumin, Turmeric, Black Pepper, Cinnamon, Cardamom, Cloves, Dry Ginger, Garlic & Spices",
    sizes: [
      { key: "1kg", label: "1 kg", mrp: 620, price: 496, front: "images/chicken-masala-front.jpeg", back: "images/chicken-masala-back.jpeg" },
      { key: "500g", label: "500 g", mrp: 460, price: 368, front: "images/chicken-masala-500g-front.jpeg", back: "images/chicken-masala-500g-back.jpeg" },
      { key: "200g", label: "200 g", mrp: 390, price: 312, front: "images/chicken-masala-200g-front.jpeg", back: "images/chicken-masala-200g-back.jpeg" }
    ]
  },
  {
    id: "malvani-mix-masala",
    name: "Malvani Mix Masala",
    category: "special",
    categoryLabel: "Special Products",
    desc: "A fiery coastal Maharashtrian blend built on roasted coconut and red chillies — perfect for Malvani-style curries and seafood.",
    ingredients: "Coconut, Red Chilli, Coriander, Cumin, Black Pepper, Cinnamon, Cloves & Spices",
    sizes: [
      { key: "1kg", label: "1 kg", mrp: 830, price: 664, front: "images/malvani-mix-masala-front.png", back: "images/malvani-mix-masala-back.png" },
      { key: "500g", label: "500 g", mrp: 420, price: 336, front: "images/malvani-mix-masala-500g-front.png", back: "images/malvani-mix-masala-500g-back.png" },
      { key: "200g", label: "200 g", mrp: 210, price: 168, front: "images/malvani-mix-masala-200g-front.png", back: "images/malvani-mix-masala-200g-back.png" }
    ]
  },

  // ---------------- Cooking Oils (confirmed real pricing) ----------------
  {
    id: "sesame-oil",
    name: "Sesame Oil",
    category: "oils",
    categoryLabel: "Cooking Oils",
    desc: "Cold-pressed sesame oil with a rich, nutty aroma — ideal for tempering, finishing and traditional cooking.",
    ingredients: "100% Cold-Pressed Sesame Oil",
    sizes: [
      { key: "default", label: "1 Litre", mrp: 699, price: 559, front: "images/sesame-oil-front-nobg.png", back: "images/sesame-oil-back.png" }
    ]
  },
  {
    id: "mustard-oil",
    name: "Mustard Oil",
    category: "oils",
    categoryLabel: "Cooking Oils",
    desc: "Pungent, cold-pressed mustard oil that brings out authentic flavour in pickles, curries and everyday cooking.",
    ingredients: "100% Cold-Pressed Mustard Oil",
    sizes: [
      { key: "default", label: "1 Litre", mrp: 399, price: 319, front: "images/mustard-oil-front-nobg.png", back: "images/mustard-oil-back.png" }
    ]
  },
  {
    id: "coconut-oil",
    name: "Coconut Oil",
    category: "oils",
    categoryLabel: "Cooking Oils",
    desc: "Pure, cold-pressed coconut oil with a naturally sweet aroma — a coastal kitchen essential for cooking and tempering.",
    ingredients: "100% Cold-Pressed Coconut Oil",
    sizes: [
      { key: "default", label: "1 Litre", mrp: 599, price: 479, front: "images/coconut-oil-front-nobg.png", back: "images/coconut-oil-back.png" }
    ]
  },
  {
    id: "groundnut-oil",
    name: "Groundnut Oil",
    category: "oils",
    categoryLabel: "Cooking Oils",
    desc: "A light, everyday cooking oil with a mild nutty note and a high smoke point — great for frying and daily meals.",
    ingredients: "100% Groundnut Oil",
    sizes: [
      { key: "default", label: "1 Litre", mrp: 499, price: 399, front: "images/groundnut-oil-front-nobg.png", back: "images/groundnut-oil-back.png" }
    ]
  },
  {
    id: "safflower-oil",
    name: "Safflower Oil",
    category: "oils",
    categoryLabel: "Cooking Oils",
    desc: "A light, neutral-tasting oil that's easy on everyday cooking — a good everyday choice for a lighter kitchen.",
    ingredients: "100% Safflower Oil",
    sizes: [
      { key: "default", label: "1 Litre", mrp: 499, price: 399, front: "images/safflower-oil-front-nobg.png", back: "images/safflower-oil-back.png" }
    ]
  }
];
