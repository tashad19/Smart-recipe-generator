import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Clock, TrendingUp, Star, Heart, ChefHat } from "lucide-react";
import { RecipeMatchScore } from "@/types/recipe";
import { toast } from "@/hooks/use-toast";

interface RecipeCardProps {
  recipeMatch: RecipeMatchScore;
  servingSize: number;
}

export const RecipeCard = ({ recipeMatch, servingSize }: RecipeCardProps) => {
  const { recipe, matchScore, matchedIngredients, missingIngredients } = recipeMatch;
  const [rating, setRating] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleRating = (value: number) => {
    setRating(value);
    toast({
      title: "Rating saved!",
      description: `You rated ${recipe.name} ${value} stars`,
    });
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: recipe.name,
    });
  };

  const ratio = servingSize / recipe.servings;
  const adjustedNutrition = {
    calories: Math.round(recipe.nutritionalInfo.calories * ratio),
    protein: Math.round(recipe.nutritionalInfo.protein * ratio),
    carbs: Math.round(recipe.nutritionalInfo.carbs * ratio),
    fat: Math.round(recipe.nutritionalInfo.fat * ratio),
    fiber: Math.round(recipe.nutritionalInfo.fiber * ratio),
  };

  return (
    <Card className="overflow-hidden hover:shadow-elevated transition-all duration-300 animate-fade-in">
      <div className="relative h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <Badge className="bg-primary/90 backdrop-blur-sm">
            {Math.round(matchScore)}% Match
          </Badge>
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full"
            onClick={toggleFavorite}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-primary text-primary' : ''}`} />
          </Button>
        </div>
      </div>

      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{recipe.name}</CardTitle>
            <CardDescription className="mt-1">{recipe.description}</CardDescription>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {recipe.cookingTime} min
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <ChefHat className="h-3 w-3" />
            {recipe.difficulty}
          </Badge>
          <Badge variant="outline">{recipe.cuisine}</Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium">Ingredient Match</span>
            <span className="text-muted-foreground">{matchedIngredients.length}/{recipe.ingredients.length}</span>
          </div>
          <Progress value={matchScore} className="h-2" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Rate this recipe:</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRating(star)}
                className="hover:scale-110 transition-transform"
              >
                <Star
                  className={`h-5 w-5 ${star <= rating ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
                />
              </button>
            ))}
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full" variant="default">
              View Full Recipe
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{recipe.name}</DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-64 object-cover rounded-lg"
              />

              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Nutritional Information
                  <span className="text-sm text-muted-foreground font-normal">
                    (per serving)
                  </span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center p-3 bg-accent rounded-lg">
                    <div className="text-2xl font-bold text-primary">{adjustedNutrition.calories}</div>
                    <div className="text-xs text-muted-foreground">Calories</div>
                  </div>
                  <div className="text-center p-3 bg-accent rounded-lg">
                    <div className="text-2xl font-bold text-primary">{adjustedNutrition.protein}g</div>
                    <div className="text-xs text-muted-foreground">Protein</div>
                  </div>
                  <div className="text-center p-3 bg-accent rounded-lg">
                    <div className="text-2xl font-bold text-primary">{adjustedNutrition.carbs}g</div>
                    <div className="text-xs text-muted-foreground">Carbs</div>
                  </div>
                  <div className="text-center p-3 bg-accent rounded-lg">
                    <div className="text-2xl font-bold text-primary">{adjustedNutrition.fat}g</div>
                    <div className="text-xs text-muted-foreground">Fat</div>
                  </div>
                  <div className="text-center p-3 bg-accent rounded-lg">
                    <div className="text-2xl font-bold text-primary">{adjustedNutrition.fiber}g</div>
                    <div className="text-xs text-muted-foreground">Fiber</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Ingredients</h3>
                <div className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 p-2 rounded ${
                        matchedIngredients.some(m => m.toLowerCase() === ingredient.toLowerCase())
                          ? 'bg-green-500/10'
                          : 'bg-muted/50'
                      }`}
                    >
                      <div className={`h-2 w-2 rounded-full ${
                        matchedIngredients.some(m => m.toLowerCase() === ingredient.toLowerCase())
                          ? 'bg-green-500'
                          : 'bg-muted-foreground'
                      }`} />
                      <span>{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              {missingIngredients.length > 0 && (
                <div className="bg-amber-500/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                    Missing Ingredients:
                  </h4>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    {missingIngredients.join(", ")}
                  </p>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold mb-3">Instructions</h3>
                <ol className="space-y-3">
                  {recipe.steps.map((step, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};
