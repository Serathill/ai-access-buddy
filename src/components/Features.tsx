
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Palette, Camera, Users, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Recommendations",
    description: "Get personalized outfit suggestions based on your style preferences, body type, and lifestyle.",
    badge: "Most Popular"
  },
  {
    icon: Palette,
    title: "Smart Color Matching",
    description: "Discover perfect color combinations that complement your skin tone and existing wardrobe.",
    badge: null
  },
  {
    icon: Camera,
    title: "Virtual Try-On",
    description: "See how outfits look on you with our advanced AR technology before making purchases.",
    badge: "New"
  },
  {
    icon: Users,
    title: "Style Community",
    description: "Connect with fashion enthusiasts and get inspiration from trending styles worldwide.",
    badge: null
  },
  {
    icon: Zap,
    title: "Instant Styling",
    description: "Get outfit recommendations in seconds for any occasion, weather, or event.",
    badge: null
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your style data is encrypted and never shared. Complete control over your fashion profile.",
    badge: null
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Features</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything you need for perfect style
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful AI features designed to revolutionize how you discover, create, and wear fashion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 border-white/20 dark:border-gray-800/20">
              {feature.badge && (
                <Badge className="absolute -top-2 -right-2 z-10" variant="default">
                  {feature.badge}
                </Badge>
              )}
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-pink-500/30 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
