
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
      {/* Unified flowing pastel rainbow gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-purple-50 via-emerald-50 via-orange-50 via-sky-50 via-yellow-50 to-pink-50 dark:from-pink-950 dark:via-purple-950 dark:via-emerald-950 dark:via-orange-950 dark:via-sky-950 dark:via-yellow-950 dark:to-pink-950"></div>
      </div>
      
      <Navbar />
      
      <div className="relative">
        {/* Hero section with soft pink to lavender gradient */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-100/80 via-purple-100/60 to-transparent dark:from-pink-900/80 dark:via-purple-900/60 dark:to-transparent"></div>
          <div className="relative z-10">
            <Hero />
          </div>
          {/* Transition overlay to mint */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-emerald-100/40 dark:to-emerald-900/40"></div>
        </div>
        
        {/* Features section with lavender to mint transition */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/40 via-teal-100/60 to-transparent dark:from-emerald-900/40 dark:via-teal-900/60 dark:to-transparent"></div>
          <div className="relative z-10 pt-12">
            <Features />
          </div>
          {/* Transition overlay to peach */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-orange-100/40 dark:to-orange-900/40"></div>
        </div>
        
        {/* How It Works section with mint to peach gradient */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-100/40 via-amber-100/60 to-transparent dark:from-orange-900/40 dark:via-amber-900/60 dark:to-transparent"></div>
          <div className="relative z-10 pt-12">
            <HowItWorks />
          </div>
          {/* Transition overlay to sky blue */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-sky-100/40 dark:to-sky-900/40"></div>
        </div>
        
        {/* Pricing section with peach to sky blue gradient */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-100/40 via-cyan-100/60 to-transparent dark:from-sky-900/40 dark:via-cyan-900/60 dark:to-transparent"></div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(14,165,233,0.3),transparent)]"></div>
          <div className="relative z-10 pt-12">
            <Pricing />
          </div>
          {/* Transition overlay to warm yellow */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-yellow-100/40 dark:to-yellow-900/40"></div>
        </div>
        
        {/* Testimonials section with sky blue to warm yellow */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-100/40 via-amber-100/60 to-transparent dark:from-yellow-900/40 dark:via-amber-900/60 dark:to-transparent"></div>
          <div className="relative z-10 pt-12">
            <Testimonials />
          </div>
          {/* Transition overlay back to soft pink */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-pink-100/40 dark:to-pink-900/40"></div>
        </div>
        
        {/* FAQ section with warm yellow to soft pink */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-100/40 via-rose-100/60 to-transparent dark:from-pink-900/40 dark:via-rose-900/60 dark:to-transparent"></div>
          <div className="relative z-10 pt-12">
            <FAQ />
          </div>
          {/* Transition overlay for final CTA blend */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-purple-100/40 dark:to-purple-900/40"></div>
        </div>
        
        {/* CTA section with rainbow blend finale */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-100/40 via-pink-100/60 to-orange-100/40 dark:from-purple-900/40 dark:via-pink-900/60 dark:to-orange-900/40"></div>
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
