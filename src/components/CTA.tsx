
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Heart, Users } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          {/* Modern glass morphism background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-pink-500/10 to-orange-400/10 rounded-3xl blur-3xl"></div>
          <div className="relative glass glass-dark rounded-3xl p-12 border shadow-2xl hover-lift">
            <Badge variant="secondary" className="mb-6 btn-modern">
              <Heart className="w-4 h-4 mr-2 text-primary" />
              Join the Style Revolution
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="gradient-text">Ready to discover your perfect style?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join over <span className="font-semibold text-primary">50,000+ style enthusiasts</span> who've transformed their wardrobes with AI. 
              Start your journey today - completely free! ✨
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" className="text-lg px-8 py-3 btn-modern hover:glow-sm">
                Start Your Style Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 hover-lift">
                <Users className="mr-2 h-5 w-5" />
                See Success Stories
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-sm">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Free tier forever</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Heart className="h-4 w-4 text-primary" />
                <span>Setup in 2 minutes</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Users className="h-4 w-4 text-primary" />
                <span>No credit card needed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
