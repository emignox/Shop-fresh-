export interface Product {
  title: string;
  photoUrl: string;
  category: string;
  price: number;
  description: string; // New property for description
}

export const Products: Product[] = [
  {
    title: "Tomato",
    photoUrl:
      "https://img.freepik.com/free-photo/top-view-fresh-tomatoes-surface_176474-767.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Vegetable",
    price: 2.49,
    description: "Fresh tomatoes for salads and summer sauces.",
  },
  {
    title: "Apple",
    photoUrl:
      "https://img.freepik.com/free-photo/side-view-apple-mix-green-yellow-red-apples-background_141793-6853.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Fruit",
    price: 1.99,
    description: "Ripe and crisp apples for healthy snacks.",
  },
  {
    title: "Almonds",
    photoUrl:
      "https://img.freepik.com/free-photo/organic-almonds-background_158595-6289.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Dried Fruit",
    price: 5.99,
    description: "Nutritious almonds for a quick and healthy snack.",
  },
  {
    title: "Cucumber",
    photoUrl:
      "https://img.freepik.com/free-photo/green-cucumber_144627-21625.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Vegetable",
    price: 1.99,
    description: "Fresh cucumbers, perfect for salads and snacking.",
  },

  {
    title: "Banana",
    photoUrl:
      "https://img.freepik.com/free-photo/front-close-view-delicious-bananas-exotic-food_140725-23062.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Fruit",
    price: 1.79,
    description: "Sweet and ripe bananas, a classic favorite fruit.",
  },
  {
    title: "Walnuts",
    photoUrl:
      "https://img.freepik.com/free-photo/organic-walnuts-background_158595-6284.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Dried Fruit",
    price: 4.79,
    description: "Organic walnuts, a healthy and delicious snack option.",
  },
  {
    title: "Carrot",
    photoUrl:
      "https://img.freepik.com/free-photo/carrot-table_144627-17524.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Vegetable",
    price: 1.29,
    description: "Fresh and crunchy carrots, great for salads and cooking.",
  },
  {
    title: "Orange",
    photoUrl:
      "https://img.freepik.com/free-photo/top-view-many-round-orange-slices_74855-5425.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Fruit",
    price: 2.29,
    description: "Juicy and flavorful oranges, packed with vitamin C.",
  },
  {
    title: "Pistachios",
    photoUrl:
      "https://img.freepik.com/free-photo/bowl-full-pistachios_1127-263.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Dried Fruit",
    price: 6.49,
    description: "Crack and enjoy these premium pistachios for a tasty treat.",
  },
  {
    title: "Spinach",
    photoUrl:
      "https://img.freepik.com/free-photo/fresh-spinach-leaves-bowl_53876-138223.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Vegetable",
    price: 2.99,
    description: "Nutrient-rich spinach, ideal for salads and cooking.",
  },

  {
    title: "Pear",
    photoUrl:
      "https://img.freepik.com/free-photo/front-view-single-whole-ripe-yellow-with-red-pears-lying-black-background-with-free-space_179666-19941.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Fruit",
    price: 2.09,
    description:
      "Ripe and juicy pears, a delightful addition to your fruit basket.",
  },
  {
    title: "Hazelnuts",
    photoUrl:
      "https://img.freepik.com/free-photo/organic-hazelnuts-background_158595-6286.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Dried Fruit",
    price: 3.99,
    description: "Organic hazelnuts, a tasty and nutritious snack option.",
  },
  {
    title: "Zucchini",
    photoUrl:
      "https://img.freepik.com/free-photo/realistic-image-courgette-green-coloured-background_125540-3810.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Vegetable",
    price: 2.79,
    description:
      "Fresh zucchini, versatile and perfect for various culinary dishes.",
  },
  {
    title: "Grape",
    photoUrl:
      "https://img.freepik.com/free-photo/grapes-vineyards-plant-sunny-day_1398-5016.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Fruit",
    price: 3.99,
    description: "Bunches of sweet grapes, ideal for snacking and desserts.",
  },
  {
    title: "Raisins",
    photoUrl:
      "https://img.freepik.com/free-photo/dried-raisins-bowl-table_1150-27260.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Dried Fruit",
    price: 2.89,
    description:
      "Plump and sweet raisins, perfect for adding natural sweetness.",
  },
  {
    title: "Pepper",
    photoUrl:
      "https://img.freepik.com/free-photo/front-view-colorful-bell-peppers-with-peppers-brown-background-vegetable-color_140725-23097.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Vegetable",
    price: 3.49,
    description: "Colorful bell peppers, excellent for cooking and salads.",
  },
  {
    title: "Strawberry",
    photoUrl:
      "https://img.freepik.com/free-photo/strawberries_1194-2304.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Fruit",
    price: 4.49,
    description: "Juicy strawberries, a classic and refreshing berry choice.",
  },
  {
    title: "Prunes",
    photoUrl:
      "https://img.freepik.com/free-photo/dried-black-plums-ceramic-dish_114579-25166.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=ais",
    category: "Dried Fruit",
    price: 4.29,
    description: "Dried black plums (prunes), a nutritious and sweet snack.",
  },
  {
    title: "Broccoli",
    photoUrl:
      "https://img.freepik.com/free-photo/broccoli-ceramic-bowl-pink-cloth_176474-353.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Vegetable",
    price: 2.89,
    description:
      "Fresh broccoli, a versatile and healthy vegetable for various dishes.",
  },
  {
    title: "Kiwi",
    photoUrl:
      "https://img.freepik.com/free-photo/ripe-fruits-kiwi-cut-whole-close-up_169016-27543.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Fruit",
    price: 2.99,
    description: "Sliced kiwi, a vibrant and flavorful tropical fruit.",
  },

  {
    title: "Dates",
    photoUrl:
      "https://img.freepik.com/free-photo/sweet-dates-out-wooden-bowl-marble-surface_114579-73230.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Dried Fruit",
    price: 7.99,
    description:
      "Sweet and succulent dates, a natural source of energy and nutrients.",
  },
  {
    title: "Potato",
    photoUrl:
      "https://img.freepik.com/free-photo/top-view-raw-potatoes-table_23-2148540406.jpg?w=1800&t=st=1706643278~exp=1706643878~hmac=f30385d68b6598ce988ef40a033d869c163ad74f35ce5c673f2da45247acc9ad",
    category: "Vegetable",
    price: 1.59,
    description: "Fresh potatoes, versatile and a staple in various cuisines.",
  },
  {
    title: "Pineapple",
    photoUrl:
      "https://img.freepik.com/free-photo/still-life-pineapple-fruit-with-stem-leaves_23-2150325482.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Fruit",
    price: 3.79,
    description:
      "Whole pineapple, a tropical delight with a perfect blend of sweetness and tartness.",
  },
  {
    title: "Dried Coconut",
    photoUrl:
      "https://img.freepik.com/free-photo/high-angle-coconut-with-spoon-burlap_23-2148452936.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=ais",
    category: "Dried Fruit",
    price: 5.49,
    description:
      "Dried coconut, a flavorful and nutritious addition to snacks and desserts.",
  },
  {
    title: "Cauliflower",
    photoUrl:
      "https://img.freepik.com/free-photo/cauliflower-wooden-floor_1150-9743.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Vegetable",
    price: 3.19,
    description:
      "Fresh cauliflower, a versatile and healthy vegetable for various dishes.",
  },
  {
    title: "Peach",
    photoUrl:
      "https://img.freepik.com/free-photo/top-view-delicious-juicy-peaches-bucket-wood_141793-17153.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Fruit",
    price: 2.49,
    description:
      "Juicy peaches, a delightful summer fruit known for its sweet and aromatic flavor.",
  },
  {
    title: "Dried Mango",
    photoUrl:
      "https://img.freepik.com/free-photo/close-up-orange-turkish-delights_23-2148263785.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=ais",
    category: "Dried Fruit",
    price: 6.99,
    description:
      "Dried mango, a tropical and chewy snack bursting with natural sweetness.",
  },
  {
    title: "Onion",
    photoUrl:
      "https://img.freepik.com/free-photo/side-view-basket-full-red-onions-wooden-background_141793-5655.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Vegetable",
    price: 1.39,
    description:
      "Fresh red onions, a versatile ingredient for enhancing the flavor of various dishes.",
  },
  {
    title: "Lemon",
    photoUrl:
      "https://img.freepik.com/free-photo/close-up-bunch-raw-lemons_23-2148317753.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=sph",
    category: "Fruit",
    price: 1.89,
    description:
      "Fresh lemons, a zesty addition to both sweet and savory recipes.",
  },
  {
    title: "Dried Banana",
    photoUrl:
      "https://img.freepik.com/free-photo/top-view-recipe-with-plantain-banana_23-2151127757.jpg?size=626&ext=jpg&ga=GA1.1.1702596433.1693488652&semt=ais",
    category: "Dried Fruit",
    price: 3.49,
    description:
      "Dried banana slices, a delicious and convenient on-the-go snack.",
  },
];
