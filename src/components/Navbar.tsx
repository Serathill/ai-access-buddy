
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const startTavusConversation = async () => {
  try {
    const response = await fetch('https://tavusapi.com/v2/conversations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '34effabf4cfb4437bc04a87c5f33fef5'
      },
      body: JSON.stringify({
        replica_id: "",
        persona_id: "p869ead8c67b",
        custom_greeting: "Hello! I am Andrew, your personal AI-Stylist!",
        properties: {
          max_call_duration: 180,
          participant_left_timeout: 1,
          participant_absent_timeout: 30,
          enable_recording: false,
          enable_closed_captions: true
        }
      })
    });
    
    const data = await response.json();
    console.log('Tavus conversation started:', data);
    
    if (data.conversation_url) {
      window.open(data.conversation_url, '_blank');
    }
  } catch (error) {
    console.error('Error starting Tavus conversation:', error);
  }
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity" onClick={handleLogoClick}>
            <img src="/lovable-uploads/2e5bdad4-2da5-46e5-b0b5-f8bcd78f9683.png" alt="StyleAI Logo" className="h-8 w-8" />
            <span className="text-xl font-bold">StyleAI</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors" onClick={(e) => handleNavClick(e, 'features')}>Features</a>
            <a href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors" onClick={(e) => handleNavClick(e, 'how-it-works')}>How it Works</a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</a>
            <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors" onClick={(e) => handleNavClick(e, 'faq')}>FAQ</a>
            <Button size="sm" onClick={startTavusConversation}>Get Started</Button>
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
            <a href="#features" className="block text-foreground/80 hover:text-foreground transition-colors" onClick={(e) => handleNavClick(e, 'features')}>Features</a>
            <a href="#how-it-works" className="block text-foreground/80 hover:text-foreground transition-colors" onClick={(e) => handleNavClick(e, 'how-it-works')}>How it Works</a>
            <a href="#pricing" className="block text-foreground/80 hover:text-foreground transition-colors" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</a>
            <a href="#faq" className="block text-foreground/80 hover:text-foreground transition-colors" onClick={(e) => handleNavClick(e, 'faq')}>FAQ</a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button size="sm" onClick={startTavusConversation}>Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
