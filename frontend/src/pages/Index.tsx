import { Hero } from "@/components/Hero";
import { IngredientSelector } from "@/components/IngredientSelector";
import { FilterBar } from "@/components/FilterBar";
import { RecipeCard } from "@/components/RecipeCard";
import { useRecipeMatching } from "@/hooks/useRecipeMatching";
import { Loader2, UtensilsCrossed } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const {
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
  } = useRecipeMatching();

  const [isGenerating, setIsGenerating] = useState(false);
  const [showRecipes, setShowRecipes] = useState(false);

  useEffect(() => {
    if (selectedIngredients.length > 0) {
      setIsGenerating(true);
      setShowRecipes(false);

      const timer = setTimeout(() => {
        setIsGenerating(false);
        setShowRecipes(true);
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      setShowRecipes(false);
    }
  }, [selectedIngredients, dietaryPreference, maxCookingTime, difficulty]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      <Hero />

      <main className="container mx-auto max-w-7xl px-4 py-8 space-y-8">
        <section className="animate-slide-up">
          <h2 className="text-2xl font-bold mb-4">Your Ingredients</h2>
          <IngredientSelector
            selectedIngredients={selectedIngredients}
            onIngredientsChange={setSelectedIngredients}
          />
        </section>

        {selectedIngredients.length > 0 && (
          <section className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Customize Your Search</h2>
            <FilterBar
              dietaryPreference={dietaryPreference}
              onDietaryPreferenceChange={setDietaryPreference}
              maxCookingTime={maxCookingTime}
              onMaxCookingTimeChange={setMaxCookingTime}
              difficulty={difficulty}
              onDifficultyChange={setDifficulty}
              servingSize={servingSize}
              onServingSizeChange={setServingSize}
            />
          </section>
        )}

        {isGenerating && (
          <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
            <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
            <p className="text-lg font-medium">Finding perfect recipes for you...</p>
            <p className="text-muted-foreground">Analyzing ingredients and preferences</p>
          </div>
        )}

        {showRecipes && matchedRecipes.length > 0 && (
          <section className="animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <UtensilsCrossed className="h-8 w-8 text-primary" />
              <div>
                <h2 className="text-2xl font-bold">Your Top Recipe Matches</h2>
                <p className="text-muted-foreground">
                  We found {matchedRecipes.length} perfect {matchedRecipes.length === 1 ? 'recipe' : 'recipes'} for you
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchedRecipes.map((recipeMatch, index) => (
                <div
                  key={recipeMatch.recipe.id}
                  style={{ animationDelay: `${index * 150}ms` }}
                  className="animate-fade-in"
                >
                  <RecipeCard recipeMatch={recipeMatch} servingSize={servingSize} />
                </div>
              ))}
            </div>
          </section>
        )}

        {showRecipes && matchedRecipes.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <UtensilsCrossed className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No recipes found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters or adding more ingredients
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
