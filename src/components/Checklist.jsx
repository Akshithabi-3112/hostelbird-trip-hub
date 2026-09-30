import React, { useState } from 'react'

export default function Checklist({ items, onToggle }) {
  const [emergencyNote, setEmergencyNote] = useState(false)

  const doneCount = items.filter((i) => i.done).length
  const total     = items.length
  const pct       = Math.round((doneCount / total) * 100)

  function handleItemClick(item) {
    // "Add emergency contact" – show coming-soon note instead of silently toggling
    if (item.id === 'emergency' && !item.done) {
      setEmergencyNote(true)
      return
    }
    setEmergencyNote(false)
    onToggle(item.id)
  }

  return (
    <section className="card" aria-label="Pre-arrival checklist">
      <div className="card-header">
        <h3 className="card-title">🗒️ Pre-arrival Checklist</h3>
        <span className="checklist-progress-text">{doneCount}/{total}</span>
      </div>

      {/* Progress bar */}
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${pct}% complete`}
      >
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>

      <ul className="checklist-list">
        {items.map((item) => (
          <li key={item.id} className="checklist-item">
            <button
              className={`check-box${item.done ? ' check-box--done' : ''}`}
              onClick={() => handleItemClick(item)}
              aria-label={`${item.done ? 'Unmark' : 'Mark'} "${item.label}"`}
              aria-pressed={item.done}
            >
              {item.done ? '✓' : ''}
            </button>
            <span className={`check-label${item.done ? ' check-label--done' : ''}`}>
              {item.label}
            </span>
            {/* Coming-soon badge on emergency contact */}
            {item.id === 'emergency' && !item.done && (
              <span className="coming-soon-badge">Coming soon</span>
            )}
          </li>
        ))}
      </ul>

      {/* Inline coming-soon message for emergency contact */}
      {emergencyNote && (
        <div className="checklist-note" role="alert">
          <span>📞</span>
          <span>
            Emergency contact management is coming soon. You can add contacts
            directly at the property on arrival.
          </span>
          <button
            className="checklist-note-close"
            onClick={() => setEmergencyNote(false)}
            aria-label="Dismiss"
          >
            ×
          </button>
        </div>
      )}
    </section>
  )
}
