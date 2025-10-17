export type DietaryPreference = 
  | "vegetarian" 
  | "vegan" 
  | "gluten-free" 
  | "dairy-free" 
  | "none";

export type DifficultyLevel = "easy" | "medium" | "hard";

export interface NutritionalInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  steps: string[];
  nutritionalInfo: NutritionalInfo;
  cookingTime: number; // in minutes
  difficulty: DifficultyLevel;
  cuisine: string;
  dietaryTags: DietaryPreference[];
  servings: number;
}

export interface RecipeMatchScore {
  recipe: Recipe;
  matchScore: number;
  matchedIngredients: string[];
  missingIngredients: string[];
}
