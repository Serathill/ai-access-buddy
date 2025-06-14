
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "How accurate are the AI style recommendations?",
    answer: "Our AI has been trained on millions of fashion combinations and user preferences, achieving a 94% satisfaction rate. The system continuously learns from your feedback to provide increasingly personalized recommendations."
  },
  {
    question: "Can I use StyleAI if I'm not fashion-savvy?",
    answer: "Absolutely! StyleAI is designed for everyone, regardless of fashion experience. Our AI guides you through the process step-by-step, explaining why certain combinations work and helping you build confidence in your style choices."
  },
  {
    question: "How does the virtual try-on feature work?",
    answer: "Our AR technology uses your uploaded photos to create a virtual representation of how clothes will look on you. Simply upload a full-body photo, and our AI will map clothing items to your body type and proportions."
  },
  {
    question: "Is my personal data and photos secure?",
    answer: "Yes, we take privacy seriously. All photos and personal data are encrypted and stored securely. We never share your information with third parties, and you can delete your data at any time."
  },
  {
    question: "Can I integrate StyleAI with my existing wardrobe?",
    answer: "Yes! You can upload photos of your current clothes, and our AI will incorporate them into outfit recommendations. This helps you maximize your existing wardrobe while identifying strategic pieces to add."
  },
  {
    question: "What happens if I'm not satisfied with the recommendations?",
    answer: "We offer a 30-day money-back guarantee. Additionally, our AI learns from your feedback, so the more you use it, the better it becomes at understanding your preferences."
  },
  {
    question: "Do you offer styling for special occasions?",
    answer: "Yes! StyleAI can create outfit recommendations for any occasion - from casual daily wear to formal events, job interviews, dates, and seasonal celebrations. Just specify the occasion and dress code."
  },
  {
    question: "Can I collaborate with personal stylists through the platform?",
    answer: "Our Style Studio plan includes access to human stylists who can review your AI recommendations and provide additional personalized advice. It's the perfect blend of AI efficiency and human expertise."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about StyleAI and how it works.
          </p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 rounded-2xl p-8 border border-white/20 dark:border-gray-800/20 shadow-xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
