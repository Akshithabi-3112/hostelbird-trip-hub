import React from 'react'
import { events } from '../mockData'

export default function EventsCard({ attending, onAttend }) {
  return (
    <section className="card" aria-label="Upcoming Events">
      <div className="card-header">
        <h3 className="card-title">🎉 Upcoming Events</h3>
      </div>

      <ul className="events-list">
        {events.map((ev) => {
          const isAttending = attending.includes(ev.id)
          return (
            <li key={ev.id} className="event-item">
              <div className="event-emoji" aria-hidden="true">{ev.emoji}</div>
              <div className="event-info">
                <span className="event-title">{ev.title}</span>
                <span className="event-time">🕐 {ev.time}</span>
                <span className="event-location">📍 {ev.location}</span>
                {!isAttending && (
                  <span className="event-spots">{ev.spotsLeft} spots left</span>
                )}
                {isAttending && (
                  <span className="event-attending-label">You're attending ✓</span>
                )}
              </div>
              <button
                className={`btn btn--sm ${isAttending ? 'btn--success' : 'btn--primary'}`}
                onClick={() => onAttend(ev.id, ev.title)}
                aria-pressed={isAttending}
                aria-label={`${isAttending ? 'Cancel attendance for' : 'Attend'} ${ev.title}`}
              >
                {isAttending ? '✓ Attending' : 'Attend'}
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
