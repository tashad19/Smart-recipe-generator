import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { DietaryPreference, DifficultyLevel } from "@/types/recipe";

interface FilterBarProps {
  dietaryPreference: DietaryPreference;
  onDietaryPreferenceChange: (value: DietaryPreference) => void;
  maxCookingTime: number;
  onMaxCookingTimeChange: (value: number) => void;
  difficulty: DifficultyLevel | "all";
  onDifficultyChange: (value: DifficultyLevel | "all") => void;
  servingSize: number;
  onServingSizeChange: (value: number) => void;
}

export const FilterBar = ({
  dietaryPreference,
  onDietaryPreferenceChange,
  maxCookingTime,
  onMaxCookingTimeChange,
  difficulty,
  onDifficultyChange,
  servingSize,
  onServingSizeChange,
}: FilterBarProps) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-card space-y-6">
      <h3 className="text-lg font-semibold">Filters & Preferences</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="dietary">Dietary Preference</Label>
          <Select value={dietaryPreference} onValueChange={(value) => onDietaryPreferenceChange(value as DietaryPreference)}>
            <SelectTrigger id="dietary">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No Preference</SelectItem>
              <SelectItem value="vegetarian">Vegetarian</SelectItem>
              <SelectItem value="vegan">Vegan</SelectItem>
              <SelectItem value="gluten-free">Gluten-Free</SelectItem>
              <SelectItem value="dairy-free">Dairy-Free</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="difficulty">Difficulty Level</Label>
          <Select value={difficulty} onValueChange={(value) => onDifficultyChange(value as DifficultyLevel | "all")}>
            <SelectTrigger id="difficulty">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="cooking-time">
            Max Cooking Time: {maxCookingTime} minutes
          </Label>
          <Slider
            id="cooking-time"
            min={10}
            max={120}
            step={5}
            value={[maxCookingTime]}
            onValueChange={(value) => onMaxCookingTimeChange(value[0])}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="servings">
            Serving Size: {servingSize} people
          </Label>
          <Slider
            id="servings"
            min={1}
            max={8}
            step={1}
            value={[servingSize]}
            onValueChange={(value) => onServingSizeChange(value[0])}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
