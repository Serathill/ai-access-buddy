
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

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

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            🎉 New: AI-Powered Style Recommendations
          </Badge>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Your Personal
            <span className="text-primary block">AI Style Assistant</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform your wardrobe with AI-powered style recommendations. Get personalized outfit suggestions, 
            color matching, and fashion advice tailored to your unique taste and lifestyle.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="text-lg px-8 py-3" onClick={startTavusConversation}>
              Start Your Style Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <span>Free tier available • No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
};
