
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1494790108755-2616b9214b51?w=64&h=64&fit=crop&crop=face",
    content: "StyleAI completely transformed my wardrobe confidence. The AI recommendations are spot-on and helped me discover styles I never thought would work for me.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    content: "As someone who travels frequently, having an AI stylist that understands my lifestyle and creates versatile outfits is invaluable. Game-changer!",
    rating: 5
  },
  {
    name: "Emma Thompson",
    role: "Fashion Blogger",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    content: "The virtual try-on feature saved me so much time and money. I can experiment with different looks before committing to purchases.",
    rating: 5
  },
  {
    name: "David Park",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    content: "I was skeptical about AI fashion advice, but StyleAI proved me wrong. It's like having a personal stylist who actually understands my preferences.",
    rating: 5
  },
  {
    name: "Lisa Wang",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face",
    content: "The color analysis feature is incredible. I finally understand which colors make me vibrant and confident. My style has never been better!",
    rating: 5
  },
  {
    name: "James Mitchell",
    role: "Consultant",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
    content: "StyleAI helped me build a professional wardrobe that reflects my personality. The outfit suggestions for different occasions are always perfect.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Loved by fashion enthusiasts worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who've transformed their style with our AI-powered platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur-sm dark:bg-gray-900/90 border-white/30 dark:border-gray-800/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <p className="text-muted-foreground italic pl-6">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
