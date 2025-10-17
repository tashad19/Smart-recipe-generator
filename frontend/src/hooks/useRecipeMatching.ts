import { useState, useMemo } from "react";
import { Recipe, RecipeMatchScore, DietaryPreference, DifficultyLevel } from "@/types/recipe";
import { RECIPES } from "@/data/recipes";

export const useRecipeMatching = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [dietaryPreference, setDietaryPreference] = useState<DietaryPreference>("none");
  const [maxCookingTime, setMaxCookingTime] = useState<number>(120);
  const [difficulty, setDifficulty] = useState<DifficultyLevel | "all">("all");
  const [servingSize, setServingSize] = useState<number>(4);

  const calculateMatchScore = (recipe: Recipe, ingredients: string[]): RecipeMatchScore => {
    const recipeIngredients = recipe.ingredients.map(i => i.toLowerCase());
    const userIngredients = ingredients.map(i => i.toLowerCase());

    const matchedIngredients = userIngredients.filter(userIng =>
      recipeIngredients.some(recipeIng => recipeIng === userIng)
    );

    const matchScore = (matchedIngredients.length / recipeIngredients.length) * 100;

    const missingIngredients = recipeIngredients.filter(recipeIng =>
      !userIngredients.some(userIng => userIng === recipeIng)
    );

    return {
      recipe,
      matchScore,
      matchedIngredients,
      missingIngredients,
    };
  };

  const matchedRecipes = useMemo(() => {
    if (selectedIngredients.length === 0) {
      return [];
    }

    let filteredRecipes = RECIPES;

    // Apply dietary filter
    if (dietaryPreference !== "none") {
      filteredRecipes = filteredRecipes.filter(recipe =>
        recipe.dietaryTags.includes(dietaryPreference)
      );
    }

    // Apply cooking time filter
    filteredRecipes = filteredRecipes.filter(recipe => recipe.cookingTime <= maxCookingTime);

    // Apply difficulty filter
    if (difficulty !== "all") {
      filteredRecipes = filteredRecipes.filter(recipe => recipe.difficulty === difficulty);
    }

    // Calculate match scores
    const scoredRecipes = filteredRecipes
      .map(recipe => calculateMatchScore(recipe, selectedIngredients))
      .filter(scored => scored.matchScore > 0)
      .sort((a, b) => b.matchScore - a.matchScore);

    return scoredRecipes.slice(0, 3);
  }, [selectedIngredients, dietaryPreference, maxCookingTime, difficulty]);

  const adjustServingSize = (recipe: Recipe, newServingSize: number) => {
    const ratio = newServingSize / recipe.servings;
    return {
      ...recipe,
      servings: newServingSize,
      nutritionalInfo: {
        calories: Math.round(recipe.nutritionalInfo.calories * ratio),
        protein: Math.round(recipe.nutritionalInfo.protein * ratio),
        carbs: Math.round(recipe.nutritionalInfo.carbs * ratio),
        fat: Math.round(recipe.nutritionalInfo.fat * ratio),
        fiber: Math.round(recipe.nutritionalInfo.fiber * ratio),
      },
    };
  };

  return {
    selectedIngredients,
    setSelectedIngredients,
    dietaryPreference,
    setDietaryPreference,
    maxCookingTime,
    setMaxCookingTime,
    difficulty,
    setDifficulty,
    servingSize,
    setServingSize,
    matchedRecipes,
    adjustServingSize,
  };
};
