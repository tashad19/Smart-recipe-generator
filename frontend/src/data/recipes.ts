import { Recipe } from "@/types/recipe";

export const RECIPES: Recipe[] = [
  {
    id: "1",
    name: "Classic Chicken Stir Fry",
    description: "A quick and flavorful Asian-inspired dish with tender chicken and crisp vegetables",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80",
    ingredients: ["Chicken", "Bell Peppers", "Onions", "Garlic", "Soy Sauce", "Ginger", "Rice"],
    steps: [
      "Cut chicken into bite-sized pieces and marinate with soy sauce",
      "Heat oil in a wok or large pan over high heat",
      "Add chicken and cook until golden brown",
      "Add garlic and ginger, stir fry for 30 seconds",
      "Add vegetables and stir fry for 3-4 minutes",
      "Serve hot over rice"
    ],
    nutritionalInfo: { calories: 420, protein: 35, carbs: 45, fat: 12, fiber: 4 },
    cookingTime: 25,
    difficulty: "easy",
    cuisine: "Asian",
    dietaryTags: ["none"],
    servings: 4
  },
  {
    id: "2",
    name: "Creamy Mushroom Pasta",
    description: "Rich and indulgent pasta with a velvety mushroom cream sauce",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80",
    ingredients: ["Pasta", "Mushrooms", "Cream", "Garlic", "Butter", "Cheese", "Parsley"],
    steps: [
      "Cook pasta according to package directions",
      "Sauté mushrooms in butter until golden",
      "Add minced garlic and cook for 1 minute",
      "Pour in cream and simmer for 5 minutes",
      "Add cheese and stir until melted",
      "Toss pasta with sauce and garnish with parsley"
    ],
    nutritionalInfo: { calories: 520, protein: 18, carbs: 62, fat: 24, fiber: 3 },
    cookingTime: 20,
    difficulty: "easy",
    cuisine: "Italian",
    dietaryTags: ["vegetarian"],
    servings: 4
  },
  {
    id: "3",
    name: "Spicy Shrimp Tacos",
    description: "Zesty shrimp tacos with fresh toppings and a kick of spice",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
    ingredients: ["Shrimp", "Lettuce", "Tomatoes", "Avocado", "Lime", "Chili Powder", "Cumin"],
    steps: [
      "Season shrimp with chili powder, cumin, salt and pepper",
      "Cook shrimp in a hot pan for 2-3 minutes per side",
      "Warm tortillas in a dry pan",
      "Chop lettuce, tomatoes, and avocado",
      "Assemble tacos with shrimp and toppings",
      "Squeeze fresh lime juice over tacos"
    ],
    nutritionalInfo: { calories: 320, protein: 28, carbs: 32, fat: 10, fiber: 6 },
    cookingTime: 15,
    difficulty: "easy",
    cuisine: "Mexican",
    dietaryTags: ["none"],
    servings: 3
  },
  {
    id: "4",
    name: "Mediterranean Chickpea Salad",
    description: "Fresh and healthy salad packed with protein and Mediterranean flavors",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    ingredients: ["Chickpeas", "Cucumber", "Tomatoes", "Onions", "Lemon", "Olive Oil", "Parsley"],
    steps: [
      "Drain and rinse chickpeas",
      "Dice cucumber, tomatoes, and onions",
      "Combine all vegetables in a large bowl",
      "Whisk together lemon juice, olive oil, salt and pepper",
      "Pour dressing over salad and toss",
      "Garnish with fresh parsley"
    ],
    nutritionalInfo: { calories: 280, protein: 12, carbs: 38, fat: 10, fiber: 10 },
    cookingTime: 10,
    difficulty: "easy",
    cuisine: "Mediterranean",
    dietaryTags: ["vegetarian", "vegan"],
    servings: 4
  },
  {
    id: "5",
    name: "Beef and Broccoli",
    description: "Tender beef strips with crisp broccoli in a savory sauce",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80",
    ingredients: ["Beef", "Broccoli", "Garlic", "Ginger", "Soy Sauce", "Rice"],
    steps: [
      "Slice beef thinly against the grain",
      "Blanch broccoli in boiling water for 2 minutes",
      "Stir-fry beef in hot oil until browned",
      "Add garlic and ginger, cook for 30 seconds",
      "Add broccoli and soy sauce, toss to combine",
      "Serve over steamed rice"
    ],
    nutritionalInfo: { calories: 450, protein: 38, carbs: 42, fat: 14, fiber: 5 },
    cookingTime: 20,
    difficulty: "medium",
    cuisine: "Asian",
    dietaryTags: ["none"],
    servings: 4
  },
  {
    id: "6",
    name: "Vegetarian Buddha Bowl",
    description: "Colorful and nutritious bowl with quinoa, roasted vegetables, and tahini dressing",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    ingredients: ["Rice", "Chickpeas", "Spinach", "Carrots", "Avocado", "Lemon", "Olive Oil"],
    steps: [
      "Cook rice according to package directions",
      "Roast chickpeas and carrots with olive oil",
      "Sauté spinach until wilted",
      "Slice avocado",
      "Arrange all ingredients in a bowl",
      "Drizzle with lemon and olive oil"
    ],
    nutritionalInfo: { calories: 420, protein: 14, carbs: 58, fat: 16, fiber: 12 },
    cookingTime: 30,
    difficulty: "easy",
    cuisine: "Fusion",
    dietaryTags: ["vegetarian", "vegan"],
    servings: 2
  },
  {
    id: "7",
    name: "Classic Margherita Pizza",
    description: "Simple yet delicious pizza with fresh mozzarella and basil",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
    ingredients: ["Flour", "Tomatoes", "Cheese", "Basil", "Olive Oil", "Garlic"],
    steps: [
      "Prepare pizza dough and let it rise",
      "Make tomato sauce with crushed tomatoes and garlic",
      "Roll out dough and spread sauce",
      "Add sliced mozzarella cheese",
      "Bake at 450°F for 12-15 minutes",
      "Top with fresh basil and drizzle olive oil"
    ],
    nutritionalInfo: { calories: 580, protein: 22, carbs: 68, fat: 24, fiber: 4 },
    cookingTime: 45,
    difficulty: "medium",
    cuisine: "Italian",
    dietaryTags: ["vegetarian"],
    servings: 4
  },
  {
    id: "8",
    name: "Lemon Garlic Salmon",
    description: "Perfectly cooked salmon with a bright lemon garlic butter sauce",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
    ingredients: ["Fish", "Lemon", "Garlic", "Butter", "Parsley", "Olive Oil"],
    steps: [
      "Season salmon with salt and pepper",
      "Sear salmon skin-side down in olive oil",
      "Flip and cook until just done",
      "Make sauce with butter, lemon juice, and garlic",
      "Pour sauce over salmon",
      "Garnish with fresh parsley"
    ],
    nutritionalInfo: { calories: 380, protein: 34, carbs: 4, fat: 26, fiber: 0 },
    cookingTime: 15,
    difficulty: "medium",
    cuisine: "American",
    dietaryTags: ["none"],
    servings: 2
  },
  {
    id: "9",
    name: "Thai Coconut Curry",
    description: "Aromatic and creamy curry with vegetables and fragrant spices",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80",
    ingredients: ["Coconut Milk", "Bell Peppers", "Onions", "Garlic", "Ginger", "Curry Powder", "Rice"],
    steps: [
      "Sauté onions, garlic, and ginger in oil",
      "Add curry powder and toast for 1 minute",
      "Pour in coconut milk and bring to simmer",
      "Add vegetables and cook until tender",
      "Season with salt and sugar to taste",
      "Serve over jasmine rice"
    ],
    nutritionalInfo: { calories: 450, protein: 8, carbs: 52, fat: 24, fiber: 6 },
    cookingTime: 25,
    difficulty: "easy",
    cuisine: "Thai",
    dietaryTags: ["vegetarian", "vegan"],
    servings: 4
  },
  {
    id: "10",
    name: "Greek Yogurt Parfait",
    description: "Healthy and delicious breakfast with layers of yogurt, fruit, and honey",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
    ingredients: ["Yogurt", "Honey", "Berries"],
    steps: [
      "Layer yogurt in a glass",
      "Add fresh berries",
      "Drizzle with honey",
      "Repeat layers",
      "Top with extra berries",
      "Serve immediately"
    ],
    nutritionalInfo: { calories: 220, protein: 15, carbs: 34, fat: 4, fiber: 3 },
    cookingTime: 5,
    difficulty: "easy",
    cuisine: "Greek",
    dietaryTags: ["vegetarian"],
    servings: 1
  },
  {
    id: "11",
    name: "Spicy Tofu Scramble",
    description: "Plant-based breakfast with seasoned tofu and vegetables",
    image: "https://images.unsplash.com/photo-1546069901-5ec6a79120b0?w=800&q=80",
    ingredients: ["Tofu", "Bell Peppers", "Onions", "Spinach", "Garlic", "Cumin", "Chili Powder"],
    steps: [
      "Crumble tofu into small pieces",
      "Sauté onions and bell peppers",
      "Add crumbled tofu and spices",
      "Cook until tofu is golden",
      "Add spinach and cook until wilted",
      "Serve hot with toast"
    ],
    nutritionalInfo: { calories: 260, protein: 20, carbs: 18, fat: 14, fiber: 6 },
    cookingTime: 15,
    difficulty: "easy",
    cuisine: "American",
    dietaryTags: ["vegetarian", "vegan"],
    servings: 2
  },
  {
    id: "12",
    name: "Honey Mustard Chicken",
    description: "Sweet and tangy glazed chicken thighs",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&q=80",
    ingredients: ["Chicken", "Honey", "Garlic", "Olive Oil"],
    steps: [
      "Mix honey, mustard, and garlic for glaze",
      "Season chicken with salt and pepper",
      "Sear chicken in olive oil until golden",
      "Brush with honey mustard glaze",
      "Bake at 375°F for 20 minutes",
      "Glaze once more before serving"
    ],
    nutritionalInfo: { calories: 380, protein: 32, carbs: 28, fat: 14, fiber: 1 },
    cookingTime: 35,
    difficulty: "easy",
    cuisine: "American",
    dietaryTags: ["none"],
    servings: 4
  },
  {
    id: "13",
    name: "Caprese Salad",
    description: "Classic Italian salad with tomatoes, mozzarella, and basil",
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800&q=80",
    ingredients: ["Tomatoes", "Cheese", "Basil", "Olive Oil", "Vinegar"],
    steps: [
      "Slice tomatoes and mozzarella",
      "Arrange alternating slices on a plate",
      "Tuck basil leaves between slices",
      "Drizzle with olive oil and balsamic vinegar",
      "Season with salt and pepper",
      "Let sit for 5 minutes before serving"
    ],
    nutritionalInfo: { calories: 280, protein: 14, carbs: 12, fat: 20, fiber: 2 },
    cookingTime: 10,
    difficulty: "easy",
    cuisine: "Italian",
    dietaryTags: ["vegetarian"],
    servings: 2
  },
  {
    id: "14",
    name: "Pork Fried Rice",
    description: "Classic takeout-style fried rice with tender pork and vegetables",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80",
    ingredients: ["Pork", "Rice", "Eggs", "Carrots", "Peas", "Soy Sauce", "Garlic"],
    steps: [
      "Cook rice and let it cool completely",
      "Dice pork and stir-fry until cooked",
      "Push pork aside, scramble eggs",
      "Add vegetables and stir-fry",
      "Add rice and break up clumps",
      "Season with soy sauce and toss well"
    ],
    nutritionalInfo: { calories: 520, protein: 28, carbs: 62, fat: 16, fiber: 3 },
    cookingTime: 20,
    difficulty: "medium",
    cuisine: "Asian",
    dietaryTags: ["none"],
    servings: 4
  },
  {
    id: "15",
    name: "Lentil Soup",
    description: "Hearty and comforting soup packed with protein and vegetables",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
    ingredients: ["Lentils", "Carrots", "Onions", "Garlic", "Tomatoes", "Cumin", "Olive Oil"],
    steps: [
      "Sauté onions, carrots, and garlic in olive oil",
      "Add cumin and cook for 1 minute",
      "Add lentils, tomatoes, and water",
      "Bring to boil, then simmer for 30 minutes",
      "Season with salt and pepper",
      "Blend partially for creamy texture"
    ],
    nutritionalInfo: { calories: 320, protein: 18, carbs: 52, fat: 6, fiber: 16 },
    cookingTime: 40,
    difficulty: "easy",
    cuisine: "Mediterranean",
    dietaryTags: ["vegetarian", "vegan"],
    servings: 6
  },
  {
    id: "16",
    name: "Egg Fried Rice",
    description: "Simple and satisfying fried rice with scrambled eggs",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    ingredients: ["Rice", "Eggs", "Soy Sauce", "Garlic", "Onions", "Vegetable Oil"],
    steps: [
      "Cook rice and let cool",
      "Scramble eggs and set aside",
      "Stir-fry onions and garlic",
      "Add rice and break up clumps",
      "Add eggs back and mix well",
      "Season with soy sauce"
    ],
    nutritionalInfo: { calories: 380, protein: 14, carbs: 58, fat: 10, fiber: 2 },
    cookingTime: 15,
    difficulty: "easy",
    cuisine: "Asian",
    dietaryTags: ["vegetarian"],
    servings: 3
  },
  {
    id: "17",
    name: "Garlic Butter Shrimp",
    description: "Quick and elegant shrimp in a rich garlic butter sauce",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800&q=80",
    ingredients: ["Shrimp", "Butter", "Garlic", "Lemon", "Parsley", "Chili Powder"],
    steps: [
      "Melt butter in a large pan",
      "Add minced garlic and cook until fragrant",
      "Add shrimp and cook for 2 minutes per side",
      "Squeeze fresh lemon juice over shrimp",
      "Sprinkle with chili powder",
      "Garnish with parsley and serve"
    ],
    nutritionalInfo: { calories: 280, protein: 32, carbs: 4, fat: 16, fiber: 0 },
    cookingTime: 10,
    difficulty: "easy",
    cuisine: "American",
    dietaryTags: ["none"],
    servings: 2
  },
  {
    id: "18",
    name: "Vegetable Stir Fry",
    description: "Colorful mix of crisp vegetables in a savory sauce",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    ingredients: ["Broccoli", "Bell Peppers", "Carrots", "Mushrooms", "Garlic", "Soy Sauce", "Ginger"],
    steps: [
      "Chop all vegetables into bite-sized pieces",
      "Heat oil in wok over high heat",
      "Add garlic and ginger, stir for 30 seconds",
      "Add harder vegetables first (carrots, broccoli)",
      "Add softer vegetables (peppers, mushrooms)",
      "Toss with soy sauce and serve"
    ],
    nutritionalInfo: { calories: 180, protein: 6, carbs: 28, fat: 6, fiber: 8 },
    cookingTime: 15,
    difficulty: "easy",
    cuisine: "Asian",
    dietaryTags: ["vegetarian", "vegan"],
    servings: 4
  },
  {
    id: "19",
    name: "Bean and Cheese Quesadilla",
    description: "Crispy tortilla filled with beans and melted cheese",
    image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=800&q=80",
    ingredients: ["Beans", "Cheese", "Onions", "Bell Peppers", "Cumin", "Chili Powder"],
    steps: [
      "Mash beans with cumin and chili powder",
      "Spread bean mixture on tortilla",
      "Add cheese, onions, and peppers",
      "Fold tortilla in half",
      "Cook in a pan until golden and crispy",
      "Cut into wedges and serve"
    ],
    nutritionalInfo: { calories: 420, protein: 18, carbs: 48, fat: 18, fiber: 10 },
    cookingTime: 10,
    difficulty: "easy",
    cuisine: "Mexican",
    dietaryTags: ["vegetarian"],
    servings: 2
  },
  {
    id: "20",
    name: "Creamy Tomato Basil Soup",
    description: "Smooth and comforting soup with rich tomato flavor",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
    ingredients: ["Tomatoes", "Cream", "Basil", "Garlic", "Onions", "Olive Oil"],
    steps: [
      "Sauté onions and garlic in olive oil",
      "Add tomatoes and cook until soft",
      "Add basil and simmer for 15 minutes",
      "Blend until smooth",
      "Stir in cream",
      "Season with salt and pepper"
    ],
    nutritionalInfo: { calories: 240, protein: 4, carbs: 22, fat: 16, fiber: 4 },
    cookingTime: 30,
    difficulty: "easy",
    cuisine: "Italian",
    dietaryTags: ["vegetarian"],
    servings: 4
  },
  {
    id: "21",
    name: "Garlic Parmesan Chicken",
    description: "Crispy chicken with a savory garlic parmesan crust",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&q=80",
    ingredients: ["Chicken", "Cheese", "Garlic", "Flour", "Eggs", "Butter", "Parsley"],
    steps: [
      "Mix flour with grated parmesan and minced garlic",
      "Dip chicken in beaten eggs",
      "Coat chicken with flour mixture",
      "Pan-fry in butter until golden",
      "Bake at 375°F for 15 minutes",
      "Garnish with parsley"
    ],
    nutritionalInfo: { calories: 480, protein: 42, carbs: 18, fat: 28, fiber: 1 },
    cookingTime: 30,
    difficulty: "medium",
    cuisine: "Italian",
    dietaryTags: ["none"],
    servings: 4
  },
  {
    id: "22",
    name: "Avocado Toast",
    description: "Simple and trendy breakfast with creamy avocado on crispy bread",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&q=80",
    ingredients: ["Avocado", "Bread", "Lemon", "Olive Oil", "Salt", "Pepper"],
    steps: [
      "Toast bread until golden and crispy",
      "Mash avocado with lemon juice",
      "Season with salt and pepper",
      "Spread avocado on toast",
      "Drizzle with olive oil",
      "Add toppings of choice"
    ],
    nutritionalInfo: { calories: 320, protein: 8, carbs: 32, fat: 18, fiber: 10 },
    cookingTime: 5,
    difficulty: "easy",
    cuisine: "American",
    dietaryTags: ["vegetarian", "vegan"],
    servings: 1
  }
];
