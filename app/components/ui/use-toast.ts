import { useState } from "react"

export interface Toast {
  id?: string
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = (toast: Toast) => {
    const id = Date.now().toString()
    setToasts((prev) => [...prev, { ...toast, id }])
    
    // Auto dismiss after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 5000)
  }

  const dismiss = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return {
    toast,
    dismiss,
    toasts,
  }
}
