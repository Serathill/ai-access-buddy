
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, PhoneOff } from 'lucide-react';

export const TavusDemo = () => {
  const [isRinging, setIsRinging] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [conversationUrl, setConversationUrl] = useState<string | null>(null);

  const declineCall = () => {
    setIsRinging(false);
  };

  const acceptCall = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.tavus.io/v2/conversations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': '34effabf4cfb4437bc04a87c5f33fef5'
        },
        body: JSON.stringify({
          persona_id: 'p869ead8c67b'
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setConversationUrl(data.share_url);
    } catch (err) {
      setError('Failed to connect to the AI stylist. Please try again.');
      console.error('Tavus API error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // If we have a conversation URL, show the iframe
  if (conversationUrl) {
    return (
      <div className="relative w-full max-w-4xl mx-auto bg-black rounded-lg overflow-hidden shadow-2xl">
        <iframe
          src={conversationUrl}
          className="w-full h-[600px] border-0"
          allow="camera; microphone; fullscreen; display-capture; autoplay"
          title="AI Stylist Video Call"
        />
      </div>
    );
  }

  if (!isRinging) {
    return (
      <div className="flex items-center justify-center min-h-[600px] bg-gray-100 rounded-lg">
        <p className="text-gray-600">Call ended</p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-black rounded-lg overflow-hidden shadow-2xl">
      {/* Background with stylist avatar */}
      <div className="relative h-[600px] flex items-center justify-center">
        <img
          src="/stylist-avatar.png"
          alt="AI Stylist"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Incoming call UI */}
        <div className="relative z-10 text-center text-white">
          {/* Caller info */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/20">
              <img
                src="/anddrew.png"
                alt="Andrew"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Andrew</h2>
            <p className="text-lg text-white/80">Incoming video call...</p>
          </div>

          {/* Ringing animation */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto border-4 border-white/30 rounded-full animate-pulse" />
          </div>

          {/* Call controls */}
          <div className="flex justify-center space-x-8">
            {/* Decline button */}
            <Button
              onClick={declineCall}
              variant="destructive"
              size="lg"
              className="w-16 h-16 rounded-full p-0 bg-red-500 hover:bg-red-600"
              disabled={isLoading}
            >
              <PhoneOff className="w-6 h-6" />
            </Button>

            {/* Accept button */}
            <Button
              onClick={acceptCall}
              size="lg"
              className="w-16 h-16 rounded-full p-0 bg-green-500 hover:bg-green-600"
              disabled={isLoading}
            >
              <Phone className="w-6 h-6" />
            </Button>
          </div>

          {/* Loading state */}
          {isLoading && (
            <div className="mt-4">
              <p className="text-white/80">Connecting...</p>
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="mt-4">
              <p className="text-red-400">{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
