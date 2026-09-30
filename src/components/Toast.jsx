import React, { useEffect } from 'react'

/**
 * Toast – lightweight in-app notification strip.
 * Props:
 *   toasts  : [{ id, message, type }]   type = 'success' | 'info' | 'error'
 *   onDismiss: (id) => void
 */
export default function Toast({ toasts, onDismiss }) {
  return (
    <div className="toast-container" aria-live="polite" aria-atomic="false">
      {toasts.map((t) => (
        <ToastItem key={t.id} toast={t} onDismiss={onDismiss} />
      ))}
    </div>
  )
}

function ToastItem({ toast, onDismiss }) {
  // Auto-dismiss after 3 s
  useEffect(() => {
    const id = setTimeout(() => onDismiss(toast.id), 3000)
    return () => clearTimeout(id)
  }, [toast.id, onDismiss])

  const icon = { success: '✓', info: 'ℹ️', error: '✕' }[toast.type] ?? 'ℹ️'

  return (
    <div className={`toast toast--${toast.type}`} role="status">
      <span className="toast-icon" aria-hidden="true">{icon}</span>
      <span className="toast-msg">{toast.message}</span>
      <button
        className="toast-close"
        onClick={() => onDismiss(toast.id)}
        aria-label="Dismiss notification"
      >
        ×
      </button>
    </div>
  )
}
