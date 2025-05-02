"use client"

import type { Postcard } from "@/types"
import { Copy, X, Share2 } from "lucide-react"
import { Button } from "./ui/button"

interface ShareModalProps {
  isOpen: boolean
  onClose: () => void
  postcard: Postcard
}

export function ShareModal({ isOpen, onClose, postcard }: ShareModalProps) {
  if (!isOpen) return null

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://postcard.app/p/${postcard.id}`)
    // You would add a toast notification here
  }

  const shareOptions = [
    { name: "Farcaster", icon: "🟣", action: () => console.log("Share to Farcaster") },
    { name: "Twitter", icon: "🐦", action: () => console.log("Share to Twitter") },
    { name: "Instagram", icon: "📸", action: () => console.log("Share to Instagram") },
    { name: "WhatsApp", icon: "💬", action: () => console.log("Share to WhatsApp") },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center">
      <div className="w-full max-w-md rounded-xl bg-white shadow-lg">
        <div className="flex items-center justify-between p-4">
          <h3 className="text-lg font-semibold">Share Postcard</h3>
          <button onClick={onClose} className="text-slate-500">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 pt-0">
          <div className="mb-4 flex items-center gap-2 rounded-lg border p-2">
            <input
              type="text"
              value={`https://postcard.app/p/${postcard.id}`}
              readOnly
              className="flex-1 bg-transparent text-sm outline-none"
            />
            <Button variant="ghost" size="sm" onClick={handleCopyLink}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {shareOptions.map((option) => (
              <button
                key={option.name}
                onClick={option.action}
                className="flex flex-col items-center gap-2 rounded-lg p-3 hover:bg-slate-50"
              >
                <span className="text-2xl">{option.icon}</span>
                <span className="text-xs">{option.name}</span>
              </button>
            ))}
          </div>

          <Button
            className="mt-4 w-full"
            onClick={() => {
              // This would trigger the native share dialog on mobile
              if (navigator.share) {
                navigator.share({
                  title: postcard.title,
                  text: `Check out this postcard: ${postcard.title}`,
                  url: `https://postcard.app/p/${postcard.id}`,
                })
              }
            }}
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>
    </div>
  )
}
