
"use client"

import { useState, useEffect } from "react"
import { Phone, PhoneOff } from "lucide-react"
import { cn } from "@/lib/utils"

export const TavusDemo = () => {
  const [isRinging, setIsRinging] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [conversationUrl, setConversationUrl] = useState<string | null>(null)
  const [showCreateAccount, setShowCreateAccount] = useState(false)

  const handleAcceptCall = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch("https://api.tavus.io/v2/conversations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "34effabf4cfb4437bc04a87c5f33fef5",
        },
        body: JSON.stringify({ persona_id: "p869ead8c67b" }),
      })
      if (!response.ok) throw new Error("Failed to start conversation.")
      const data = await response.json()
      setConversationUrl(data.share_url)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeclineCall = () => {
    setIsRinging(false)
  }

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (conversationUrl) {
      timer = setTimeout(() => {
        setConversationUrl(null)
        setShowCreateAccount(true)
      }, 240000) // 4 minutes
    }
    return () => clearTimeout(timer)
  }, [conversationUrl])

  if (conversationUrl) {
    return <iframe src={conversationUrl} className="fixed inset-0 z-[1000] w-full h-full border-0" />
  }

  if (showCreateAccount) {
    return (
      <div className="fixed inset-0 z-[999] bg-black flex items-center justify-center text-center p-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Your demo has ended.</h2>
          <p className="text-lg text-white/70 mb-8">Create an account to continue your style journey.</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg">Create Account</button>
            <button onClick={() => { setIsRinging(true); setShowCreateAccount(false); }} className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg">Call Again</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("transition-opacity duration-300", isRinging ? "opacity-100" : "opacity-0 pointer-events-none")}>
      <div className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center text-white">
        {/* AI Stylist Header */}
        <div className="absolute top-8 left-8 flex items-center gap-2 text-white/50">
          <img src="/stylist-avatar.png" alt="AI Stylist" className="w-6 h-6 rounded-full" />
          <span>AI Stylist</span>
        </div>

        {/* Ringing Animation */}
        <div className="absolute">
          <div className="absolute -inset-48 border border-white/10 rounded-full animate-ping"></div>
          <div className="absolute -inset-40 border border-white/20 rounded-full animate-ping" style={{ animationDelay: "0.5s" }}></div>
        </div>

        {/* Call Info */}
        <div className="relative text-center flex flex-col items-center">
          <div className="w-32 h-32 rounded-full border-2 border-white/20 mb-6 flex items-center justify-center bg-black">
            <span className="text-2xl font-medium">Andrew</span>
          </div>
          <h1 className="text-4xl font-bold">Andrew</h1>
          <p className="text-white/70 mt-2">Incoming video call...</p>
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-24 flex items-center justify-center gap-16">
          <div className="text-center">
            <button
              onClick={handleDeclineCall}
              disabled={isLoading}
              className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-all disabled:opacity-50"
              aria-label="Decline call"
            >
              <PhoneOff className="w-7 h-7" />
            </button>
            <span className="mt-2 block text-sm">Decline</span>
          </div>
          <div className="text-center">
            <button
              onClick={handleAcceptCall}
              disabled={isLoading}
              className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition-all disabled:opacity-50"
              aria-label="Accept call"
            >
              {isLoading ? <div className="w-6 h-6 border-2 border-white/50 border-t-white rounded-full animate-spin"></div> : <Phone className="w-7 h-7" />}
            </button>
            <span className="mt-2 block text-sm">Accept</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TavusDemo;
