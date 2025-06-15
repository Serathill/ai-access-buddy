
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Paperclip, Send, Image, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  attachment?: {
    type: 'image';
    url: string;
    name: string;
  };
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hi! I'm your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [attachedImage, setAttachedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageAttach = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setAttachedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeAttachment = () => {
    setAttachedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSendMessage = () => {
    if (!inputText.trim() && !attachedImage) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isUser: true,
      timestamp: new Date(),
      attachment: attachedImage && imagePreview ? {
        type: 'image',
        url: imagePreview,
        name: attachedImage.name
      } : undefined
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');
    removeAttachment();

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: attachedImage 
          ? "I can see your image! That's a great photo. How can I help you with it?"
          : "Thanks for your message! I'm here to help you with anything you need.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-card rounded-xl shadow-lg border border-border overflow-hidden">
      {/* Chat Header */}
      <div className="bg-primary/5 border-b border-border px-6 py-4">
        <h3 className="text-heading-3 text-foreground">AI Chat Assistant</h3>
        <p className="text-body-small text-muted-foreground">Send messages and attach photos</p>
      </div>

      {/* Messages Container */}
      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-surface/30">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex items-start gap-3 max-w-[80%]",
              message.isUser ? "ml-auto flex-row-reverse" : "mr-auto"
            )}
          >
            {/* Avatar */}
            <div
              className={cn(
                "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium",
                message.isUser
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {message.isUser ? "U" : "AI"}
            </div>

            {/* Message Content */}
            <div
              className={cn(
                "rounded-lg px-4 py-3 shadow-sm",
                message.isUser
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border"
              )}
            >
              {/* Attached Image */}
              {message.attachment && (
                <div className="mb-2">
                  <img
                    src={message.attachment.url}
                    alt={message.attachment.name}
                    className="max-w-full h-auto rounded-md max-h-48 object-cover"
                  />
                </div>
              )}
              
              {/* Message Text */}
              {message.text && (
                <p className={cn(
                  "text-sm leading-relaxed",
                  message.isUser ? "text-primary-foreground" : "text-foreground"
                )}>
                  {message.text}
                </p>
              )}

              {/* Timestamp */}
              <p
                className={cn(
                  "text-xs mt-1 opacity-70",
                  message.isUser ? "text-primary-foreground" : "text-muted-foreground"
                )}
              >
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t border-border bg-card p-4">
        {/* Image Preview */}
        {imagePreview && (
          <div className="mb-3 relative inline-block">
            <img
              src={imagePreview}
              alt="Preview"
              className="max-h-20 rounded-md border border-border"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={removeAttachment}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        )}

        {/* Input Row */}
        <div className="flex items-end gap-2">
          {/* File Input (Hidden) */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageAttach}
            className="hidden"
          />

          {/* Attach Button */}
          <Button
            size="icon"
            variant="ghost"
            onClick={() => fileInputRef.current?.click()}
            className="flex-shrink-0 h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-accent"
          >
            <Image className="h-4 w-4" />
          </Button>

          {/* Text Input */}
          <div className="flex-1 relative">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 max-h-32 min-h-[44px]"
              rows={1}
            />
          </div>

          {/* Send Button */}
          <Button
            size="icon"
            onClick={handleSendMessage}
            disabled={!inputText.trim() && !attachedImage}
            className="flex-shrink-0 h-10 w-10"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
