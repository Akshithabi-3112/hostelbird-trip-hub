import React, { useState, useCallback } from 'react'
import Header from './components/Header'
import TripSummary from './components/TripSummary'
import Checklist from './components/Checklist'
import CommunityCard from './components/CommunityCard'
import EventsCard from './components/EventsCard'
import BirdCoinsCard from './components/BirdCoinsCard'
import InfoCard from './components/InfoCard'
import Toast from './components/Toast'
import { checklist as initialChecklist } from './mockData'

let toastCounter = 0

export default function App() {
  // ── Toast ──────────────────────────────────────────────────
  const [toasts, setToasts] = useState([])

  const showToast = useCallback((message, type = 'info') => {
    const id = ++toastCounter
    setToasts((prev) => [...prev, { id, message, type }])
  }, [])

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  // ── Checklist ──────────────────────────────────────────────
  const [checklistItems, setChecklistItems] = useState(initialChecklist)

  function handleChecklistToggle(id) {
    setChecklistItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    )
  }

  // ── Community ──────────────────────────────────────────────
  const [joined, setJoined] = useState(false)

  function handleJoin() {
    setJoined(true)
    setChecklistItems((prev) =>
      prev.map((item) => (item.id === 'group' ? { ...item, done: true } : item))
    )
    showToast('You joined the Goa Morjim Traveller Group! 🎉', 'success')
  }

  // ── Events ─────────────────────────────────────────────────
  const [attending, setAttending] = useState([])

  function handleAttend(id, title) {
    setAttending((prev) => {
      const nowAttending = !prev.includes(id)
      if (nowAttending) {
        showToast(`You're attending: ${title} 🎉`, 'success')
        return [...prev, id]
      }
      showToast(`Removed from: ${title}`, 'info')
      return prev.filter((e) => e !== id)
    })
  }

  return (
    <div className="app">
      <Header showToast={showToast} />

      <main className="main">
        <div className="container">
          {/* Welcome banner */}
          <div className="welcome-banner">
            <span className="welcome-wave">👋</span>
            <div>
              <h1 className="welcome-heading">Your Goa trip is all set!</h1>
              <p className="welcome-sub">Everything you need, right here.</p>
            </div>
          </div>

          {/* Dashboard grid */}
          <div className="dashboard-grid">
            <div className="grid-col-full">
              <TripSummary showToast={showToast} />
            </div>

            <div className="grid-col">
              <Checklist items={checklistItems} onToggle={handleChecklistToggle} />
            </div>
            <div className="grid-col">
              <CommunityCard joined={joined} onJoin={handleJoin} />
            </div>

            <div className="grid-col-full">
              <EventsCard attending={attending} onAttend={handleAttend} />
            </div>

            <div className="grid-col">
              <BirdCoinsCard showToast={showToast} />
            </div>
            <div className="grid-col">
              <InfoCard showToast={showToast} />
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 HostelBird · Built for the Build &amp; Break Hackathon 🚀</p>
      </footer>

      {/* Global toast layer */}
      <Toast toasts={toasts} onDismiss={dismissToast} />
    </div>
  )
}
