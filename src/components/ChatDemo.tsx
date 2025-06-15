
import React from 'react';
import { ChatInterface } from './ChatInterface';

export const ChatDemo = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading-1 mb-6">
            Try Our <span className="gradient-primary bg-clip-text text-transparent">AI Chat</span>
          </h2>
          <p className="text-body-large max-w-2xl mx-auto">
            Experience our intelligent chat interface with photo attachment capabilities. 
            Send messages, share images, and get instant AI responses.
          </p>
        </div>

        {/* Chat Interface Demo */}
        <div className="flex justify-center">
          <ChatInterface />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-heading-3 mb-2">Smart Conversations</h3>
            <p className="text-body text-muted-foreground">
              Natural language processing for meaningful interactions
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-heading-3 mb-2">Photo Attachments</h3>
            <p className="text-body text-muted-foreground">
              Share images instantly with drag-and-drop support
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-heading-3 mb-2">Instant Responses</h3>
            <p className="text-body text-muted-foreground">
              Lightning-fast AI responses with perfect icon alignment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
