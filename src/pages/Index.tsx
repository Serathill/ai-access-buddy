
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { ChatDemo } from "@/components/ChatDemo";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Modern warm background with subtle patterns */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-rose-50 dark:from-orange-950 dark:via-pink-950 dark:to-rose-950"></div>
        {/* Subtle noise texture for depth */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_400px_at_50%_300px,rgba(255,107,107,0.1),transparent)]"></div>
      </div>
      
      <Navbar />
      
      <div className="relative">
        {/* Hero section with warm coral accents */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-coral-50/50 via-white/80 to-peach-50/50 dark:from-coral-950/50 dark:via-slate-900/80 dark:to-peach-950/50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_50%_-20%,rgba(255,107,107,0.15),transparent)]"></div>
          <div className="relative z-10">
            <Hero />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-orange-50/80 dark:to-orange-950/80"></div>
        </div>
        
        {/* Features section with gentle warmth */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-pink-50/90 to-rose-50/80 dark:from-orange-950/80 dark:via-pink-950/90 dark:to-rose-950/80"></div>
          <div className="relative z-10 pt-12">
            <Features />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-peach-50/80 dark:to-peach-950/80"></div>
        </div>
        
        {/* How It Works with sophisticated gradients */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-peach-50/80 via-coral-50/90 to-orange-50/80 dark:from-peach-950/80 dark:via-coral-950/90 dark:to-orange-950/80"></div>
          <div className="relative z-10 pt-12">
            <HowItWorks />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-violet-50/60 dark:to-violet-950/60"></div>
        </div>
        
        {/* Chat Demo with premium violet accents */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50/60 via-purple-50/80 to-indigo-50/60 dark:from-violet-950/60 dark:via-purple-950/80 dark:to-indigo-950/60"></div>
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_600px_at_50%_50%,rgba(139,92,246,0.12),transparent)]"></div>
          <div className="relative z-10 pt-12">
            <ChatDemo />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-rose-50/60 dark:to-rose-950/60"></div>
        </div>
        
        {/* Pricing with warm rose accents */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50/60 via-pink-50/80 to-coral-50/60 dark:from-rose-950/60 dark:via-pink-950/80 dark:to-coral-950/60"></div>
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_600px_at_50%_50%,rgba(255,107,107,0.12),transparent)]"></div>
          <div className="relative z-10 pt-12">
            <Pricing />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-orange-50/80 dark:to-orange-950/80"></div>
        </div>
        
        {/* Testimonials with elegant warmth */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-peach-50/90 to-pink-50/80 dark:from-orange-950/80 dark:via-peach-950/90 dark:to-pink-950/80"></div>
          <div className="relative z-10 pt-12">
            <Testimonials />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-coral-50/60 dark:to-coral-950/60"></div>
        </div>
        
        {/* FAQ with sophisticated coral tones */}
        <div className="relative -mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-coral-50/60 via-rose-50/80 to-pink-50/60 dark:from-coral-950/60 dark:via-rose-950/80 dark:to-pink-950/60"></div>
          <div className="relative z-10 pt-12">
            <FAQ />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-orange-50/80 dark:to-orange-950/80"></div>
        </div>
        
        {/* CTA with modern warmth */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-pink-50/90 to-peach-50/80 dark:from-orange-950/80 dark:via-pink-950/90 dark:to-peach-950/80"></div>
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
