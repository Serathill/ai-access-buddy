
import { Badge } from "@/components/ui/badge";
import { Sparkles, Users, Zap } from "lucide-react";

export const Overview = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Why Choose Our AI Stylist</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Fashion meets artificial intelligence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our advanced AI technology analyzes millions of style combinations to deliver 
            personalized recommendations that match your unique taste, lifestyle, and budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Analysis</h3>
            <p className="text-muted-foreground">
              AI-powered style analysis considers your preferences, body type, and lifestyle
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Curated</h3>
            <p className="text-muted-foreground">
              Recommendations backed by fashion experts and trending style insights
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
            <p className="text-muted-foreground">
              Get personalized outfit suggestions in seconds, not hours of browsing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
