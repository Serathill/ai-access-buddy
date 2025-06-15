import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Star } from "lucide-react";
import { TavusDemo } from "./TavusDemo";

export const Hero = () => {
  const handleWatchDemo = () => {
    const demoSection = document.getElementById('demo-section');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            🎉 New: AI-Powered Style Recommendations
          </Badge>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Your Personal
            <span className="text-primary block">AI Style Assistant</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform your wardrobe with AI-powered style recommendations. Get personalized outfit suggestions, 
            color matching, and fashion advice tailored to your unique taste and lifestyle.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="text-lg px-8 py-3">
              Start Your Style Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3" onClick={handleWatchDemo}>
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2">4.9/5 from 10,000+ users</span>
            </div>
            <span>•</span>
            <span>Free tier available • No credit card required</span>
          </div>
        </div>
        
        <div id="demo-section" className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-pink-500/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-card rounded-3xl p-8 border shadow-2xl">
            <TavusDemo />
          </div>
        </div>
      </div>
    </section>
  );
};
