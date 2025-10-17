import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Plus, Upload, Search } from "lucide-react";
import { AVAILABLE_INGREDIENTS } from "@/data/ingredients";
import { toast } from "@/hooks/use-toast";

interface IngredientSelectorProps {
  selectedIngredients: string[];
  onIngredientsChange: (ingredients: string[]) => void;
}

export const IngredientSelector = ({ selectedIngredients, onIngredientsChange }: IngredientSelectorProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const filteredIngredients = AVAILABLE_INGREDIENTS.filter(
    ingredient =>
      ingredient.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedIngredients.includes(ingredient)
  );

  const addIngredient = (ingredient: string) => {
    if (!selectedIngredients.includes(ingredient)) {
      onIngredientsChange([...selectedIngredients, ingredient]);
      setSearchTerm("");
    }
  };

  const removeIngredient = (ingredient: string) => {
    onIngredientsChange(selectedIngredients.filter(i => i !== ingredient));
  };

  // ✅ UPDATED: Connects to Flask backend for prediction
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("image", files[0]); // Use the first selected image

      const response = await fetch("https://smart-recipe-generator-lexl.onrender.com/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.predicted_label) {
        const detectedIngredient = data.predicted_label;
        const newIngredients = [...new Set([...selectedIngredients, detectedIngredient])];
        onIngredientsChange(newIngredients);

        toast({
          title: "Ingredient detected!",
          description: `Detected: ${detectedIngredient}`,
        });
      } else {
        toast({
          title: "Detection failed",
          description: data.error || "Could not detect ingredient.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast({
        title: "Error",
        description: "Failed to connect to the detection server.",
        variant: "destructive",
      });
    }

    setIsUploading(false);
  };

  return (
    <Card className="p-6 shadow-card hover:shadow-elevated transition-all">
      <div className="space-y-4">
        <div>
          <Label htmlFor="ingredient-search" className="text-lg font-semibold">
            Add Ingredients
          </Label>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="ingredient-search"
              placeholder="Search ingredients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
          {searchTerm && filteredIngredients.length > 0 && (
            <div className="mt-2 max-h-48 overflow-y-auto border rounded-md p-2 space-y-1">
              {filteredIngredients.slice(0, 10).map(ingredient => (
                <button
                  key={ingredient}
                  onClick={() => addIngredient(ingredient)}
                  className="w-full text-left px-3 py-2 rounded hover:bg-accent transition-colors flex items-center justify-between"
                >
                  <span>{ingredient}</span>
                  <Plus className="h-4 w-4" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <Label htmlFor="image-upload" className="text-sm font-medium">
            Or Upload Images
          </Label>
          <div className="mt-2">
            <label htmlFor="image-upload" className="cursor-pointer">
              <div className="border-2 border-dashed rounded-lg p-6 hover:border-primary transition-colors text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  {isUploading ? "Processing images..." : "Click to upload ingredient images"}
                </p>
              </div>
              <Input
                id="image-upload"
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isUploading}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {selectedIngredients.length > 0 && (
          <div>
            <Label className="text-sm font-medium mb-2 block">
              Selected Ingredients ({selectedIngredients.length})
            </Label>
            <div className="flex flex-wrap gap-2">
              {selectedIngredients.map(ingredient => (
                <Badge key={ingredient} variant="secondary" className="px-3 py-1">
                  {ingredient}
                  <button
                    onClick={() => removeIngredient(ingredient)}
                    className="ml-2 hover:text-destructive"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
