import { ChefHat } from "lucide-react";

export const Hero = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-accent py-16 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="inline-flex items-center justify-center mb-6 animate-fade-in">
          <ChefHat className="h-16 w-16 text-white" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-slide-up">
          Smart Recipe Generator
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-fade-in">
          Transform your ingredients into delicious meals with AI-powered recipe suggestions
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_50%)]" />
    </header>
  );
};
