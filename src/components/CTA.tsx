
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-card rounded-3xl p-12 border shadow-xl">
            <Badge variant="secondary" className="mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to Transform Your Style?
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Join 50,000+ users who've discovered their perfect style
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start using StyleAI today with our free tier and experience the future of personal styling. 
              No credit card required, start instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-lg px-8 py-3">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Learn More
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              ✨ Free tier available • 🚀 Setup in under 5 minutes • 💳 No credit card required
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
