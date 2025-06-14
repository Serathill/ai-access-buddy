
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      <Navbar />
      <div className="relative">
        {/* Hero with enhanced gradient */}
        <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900">
          <Hero />
        </div>
        
        {/* Features with diagonal gradient */}
        <div className="relative bg-gradient-to-r from-indigo-100 via-slate-50 to-blue-100 dark:from-indigo-900 dark:via-slate-950 dark:to-blue-900">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent dark:via-black/20"></div>
          <Features />
        </div>
        
        {/* How It Works with strong accent */}
        <div className="bg-gradient-to-l from-blue-100 via-indigo-100 to-slate-100 dark:from-blue-900 dark:via-indigo-900 dark:to-slate-900">
          <HowItWorks />
        </div>
        
        {/* Pricing with subtle pattern */}
        <div className="relative bg-gradient-to-br from-indigo-50 via-slate-50 to-blue-50 dark:from-indigo-950 dark:via-slate-950 dark:to-blue-950">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(99,102,241,0.3),transparent)]"></div>
          <Pricing />
        </div>
        
        {/* Testimonials with warm gradient */}
        <div className="bg-gradient-to-r from-slate-100 via-blue-100 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
          <Testimonials />
        </div>
        
        {/* FAQ with enhanced muted style */}
        <div className="relative bg-gradient-to-br from-indigo-100/50 via-slate-100/50 to-blue-100/50 dark:from-indigo-900/50 dark:via-slate-900/50 dark:to-blue-900/50">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent dark:via-black/10"></div>
          <FAQ />
        </div>
        
        {/* CTA with seamless gradient transition */}
        <div className="bg-gradient-to-br from-indigo-100/70 via-slate-100/70 to-blue-100/70 dark:from-indigo-900/70 dark:via-slate-900/70 dark:to-blue-900/70">
          <CTA />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
