
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100 dark:from-purple-950 dark:via-pink-950 dark:to-indigo-950">
      <Navbar />
      <div className="relative">
        {/* Hero with enhanced gradient */}
        <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-200 dark:from-purple-900 dark:via-pink-900 dark:to-indigo-900">
          <Hero />
        </div>
        
        {/* Features with diagonal gradient */}
        <div className="relative bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100 dark:from-indigo-900 dark:via-purple-950 dark:to-pink-900">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent dark:via-black/20"></div>
          <Features />
        </div>
        
        {/* How It Works with strong accent */}
        <div className="bg-gradient-to-l from-pink-100 via-purple-100 to-indigo-100 dark:from-pink-900 dark:via-purple-900 dark:to-indigo-900">
          <HowItWorks />
        </div>
        
        {/* Pricing with subtle pattern */}
        <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(120,119,198,0.3),transparent)]"></div>
          <Pricing />
        </div>
        
        {/* Testimonials with warm gradient */}
        <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 dark:from-pink-900 dark:via-purple-900 dark:to-indigo-900">
          <Testimonials />
        </div>
        
        {/* FAQ with enhanced muted style */}
        <div className="relative bg-gradient-to-br from-purple-100/50 via-pink-100/50 to-indigo-100/50 dark:from-purple-900/50 dark:via-pink-900/50 dark:to-indigo-900/50">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent dark:via-black/10"></div>
          <FAQ />
        </div>
        
        {/* CTA with dramatic gradient */}
        <div className="bg-gradient-to-br from-purple-200 via-pink-200 to-indigo-200 dark:from-purple-800 dark:via-pink-800 dark:to-indigo-800">
          <CTA />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
