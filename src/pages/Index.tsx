
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
      {/* Sophisticated neutral gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-900 dark:via-gray-900 dark:to-zinc-900"></div>
      </div>
      
      <Navbar />
      
      <div className="relative">
        {/* Hero section with refined gradient */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-white/70 to-teal-50/30 dark:from-emerald-950/30 dark:via-slate-900/70 dark:to-teal-950/30"></div>
          <div className="relative z-10">
            <Hero />
          </div>
          {/* Smooth transition */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-slate-50/70 dark:to-slate-800/70"></div>
        </div>
        
        {/* Features section with clean aesthetic */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 via-gray-50/90 to-stone-50/70 dark:from-slate-800/70 dark:via-gray-800/90 dark:to-stone-800/70"></div>
          <div className="relative z-10 pt-12">
            <Features />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-neutral-50/70 dark:to-neutral-800/70"></div>
        </div>
        
        {/* How It Works section with elegant tones */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/70 via-zinc-50/90 to-gray-50/70 dark:from-neutral-800/70 dark:via-zinc-800/90 dark:to-gray-800/70"></div>
          <div className="relative z-10 pt-12">
            <HowItWorks />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-cyan-50/40 dark:to-cyan-950/40"></div>
        </div>
        
        {/* Pricing section with sophisticated cyan accent */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/40 via-teal-50/60 to-emerald-50/40 dark:from-cyan-950/40 dark:via-teal-950/60 dark:to-emerald-950/40"></div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(20,184,166,0.15),transparent)]"></div>
          <div className="relative z-10 pt-12">
            <Pricing />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-slate-50/70 dark:to-slate-800/70"></div>
        </div>
        
        {/* Testimonials section with refined elegance */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 via-gray-50/90 to-stone-50/70 dark:from-slate-800/70 dark:via-gray-800/90 dark:to-stone-800/70"></div>
          <div className="relative z-10 pt-12">
            <Testimonials />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-emerald-50/40 dark:to-emerald-950/40"></div>
        </div>
        
        {/* FAQ section with subtle sophistication */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-teal-50/60 to-cyan-50/40 dark:from-emerald-950/40 dark:via-teal-950/60 dark:to-cyan-950/40"></div>
          <div className="relative z-10 pt-12">
            <FAQ />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-gray-50/70 dark:to-gray-800/70"></div>
        </div>
        
        {/* CTA section with modern elegance */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/70 via-slate-50/90 to-zinc-50/70 dark:from-gray-800/70 dark:via-slate-800/90 dark:to-zinc-800/70"></div>
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
