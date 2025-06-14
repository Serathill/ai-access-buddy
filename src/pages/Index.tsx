
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
      {/* Modern sophisticated gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-slate-50 to-gray-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800"></div>
      </div>
      
      <Navbar />
      
      <div className="relative">
        {/* Hero section with elegant gradient */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-100/40 via-white/60 to-indigo-50/40 dark:from-violet-950/40 dark:via-slate-900/60 dark:to-indigo-950/40"></div>
          <div className="relative z-10">
            <Hero />
          </div>
          {/* Subtle transition */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-slate-50/60 dark:to-slate-800/60"></div>
        </div>
        
        {/* Features section with clean gradient */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/60 via-gray-50/80 to-zinc-50/60 dark:from-slate-800/60 dark:via-gray-800/80 dark:to-zinc-800/60"></div>
          <div className="relative z-10 pt-12">
            <Features />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-neutral-50/60 dark:to-neutral-800/60"></div>
        </div>
        
        {/* How It Works section with sophisticated tone */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/60 via-stone-50/80 to-gray-50/60 dark:from-neutral-800/60 dark:via-stone-800/80 dark:to-gray-800/60"></div>
          <div className="relative z-10 pt-12">
            <HowItWorks />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-blue-50/40 dark:to-blue-950/40"></div>
        </div>
        
        {/* Pricing section with premium feel */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-indigo-50/60 to-violet-50/40 dark:from-blue-950/40 dark:via-indigo-950/60 dark:to-violet-950/40"></div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(99,102,241,0.15),transparent)]"></div>
          <div className="relative z-10 pt-12">
            <Pricing />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-slate-50/60 dark:to-slate-800/60"></div>
        </div>
        
        {/* Testimonials section with refined elegance */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/60 via-gray-50/80 to-zinc-50/60 dark:from-slate-800/60 dark:via-gray-800/80 dark:to-zinc-800/60"></div>
          <div className="relative z-10 pt-12">
            <Testimonials />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-violet-50/40 dark:to-violet-950/40"></div>
        </div>
        
        {/* FAQ section with subtle sophistication */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50/40 via-purple-50/60 to-indigo-50/40 dark:from-violet-950/40 dark:via-purple-950/60 dark:to-indigo-950/40"></div>
          <div className="relative z-10 pt-12">
            <FAQ />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-gray-50/60 dark:to-gray-800/60"></div>
        </div>
        
        {/* CTA section with modern elegance */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/60 via-slate-50/80 to-zinc-50/60 dark:from-gray-800/60 dark:via-slate-800/80 dark:to-zinc-800/60"></div>
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
