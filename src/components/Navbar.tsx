
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity" onClick={handleLogoClick}>
            <Sparkles className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">StyleAI</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">How it Works</a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">Pricing</a>
            <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors">FAQ</a>
            <Button variant="outline" size="sm">Sign In</Button>
            <Button size="sm">Get Started</Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#features" className="block text-foreground/80 hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="block text-foreground/80 hover:text-foreground transition-colors">How it Works</a>
            <a href="#pricing" className="block text-foreground/80 hover:text-foreground transition-colors">Pricing</a>
            <a href="#faq" className="block text-foreground/80 hover:text-foreground transition-colors">FAQ</a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
