
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
    <div className="min-h-screen relative">
      {/* Unified flowing gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-blue-50 via-indigo-50 via-slate-50 via-blue-50 via-indigo-50 to-slate-50 dark:from-slate-950 dark:via-blue-950 dark:via-indigo-950 dark:via-slate-950 dark:via-blue-950 dark:via-indigo-950 dark:to-slate-950"></div>
      </div>
      
      <Navbar />
      
      <div className="relative">
        {/* Hero section with gradient overlay */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100/80 via-indigo-100/60 to-transparent dark:from-blue-900/80 dark:via-indigo-900/60 dark:to-transparent"></div>
          <div className="relative z-10">
            <Hero />
          </div>
          {/* Transition overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-indigo-100/40 dark:to-indigo-900/40"></div>
        </div>
        
        {/* Features section with seamless transition */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/40 via-slate-100/60 to-transparent dark:from-indigo-900/40 dark:via-slate-900/60 dark:to-transparent"></div>
          <div className="relative z-10 pt-12">
            <Features />
          </div>
          {/* Transition overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-blue-100/40 dark:to-blue-900/40"></div>
        </div>
        
        {/* How It Works section */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100/40 via-indigo-100/60 to-transparent dark:from-blue-900/40 dark:via-indigo-900/60 dark:to-transparent"></div>
          <div className="relative z-10 pt-12">
            <HowItWorks />
          </div>
          {/* Transition overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-slate-100/40 dark:to-slate-900/40"></div>
        </div>
        
        {/* Pricing section */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-100/40 via-indigo-100/60 to-transparent dark:from-slate-900/40 dark:via-indigo-900/60 dark:to-transparent"></div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(99,102,241,0.3),transparent)]"></div>
          <div className="relative z-10 pt-12">
            <Pricing />
          </div>
          {/* Transition overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-blue-100/40 dark:to-blue-900/40"></div>
        </div>
        
        {/* Testimonials section */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100/40 via-slate-100/60 to-transparent dark:from-blue-900/40 dark:via-slate-900/60 dark:to-transparent"></div>
          <div className="relative z-10 pt-12">
            <Testimonials />
          </div>
          {/* Transition overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-indigo-100/40 dark:to-indigo-900/40"></div>
        </div>
        
        {/* FAQ section */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/40 via-slate-100/60 to-transparent dark:from-indigo-900/40 dark:via-slate-900/60 dark:to-transparent"></div>
          <div className="relative z-10 pt-12">
            <FAQ />
          </div>
          {/* Transition overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-blue-100/40 dark:to-blue-900/40"></div>
        </div>
        
        {/* CTA section with final gradient */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100/40 via-indigo-100/60 to-slate-100/40 dark:from-blue-900/40 dark:via-indigo-900/60 dark:to-slate-900/40"></div>
          <div className="relative z-10 pt-12">
            <CTA />
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
