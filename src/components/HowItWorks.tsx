
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Webcam, Brain, Shirt, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Webcam,
    title: "Live Webcam Analysis",
    description: "Our AI analyzes you in real-time through your webcam to understand your body type, style preferences, and current look.",
    step: "01"
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Our advanced AI analyzes your body type, color preferences, and style personality to create your profile.",
    step: "02"
  },
  {
    icon: Shirt,
    title: "Get Recommendations",
    description: "Receive personalized outfit suggestions for any occasion, complete with styling tips and alternatives.",
    step: "03"
  },
  {
    icon: Sparkles,
    title: "Perfect Your Style",
    description: "Refine your look with continuous AI learning and build a wardrobe that truly represents you.",
    step: "04"
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">How It Works</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            From photos to perfect outfits in 4 steps
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our simple process transforms your fashion journey with the power of AI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
