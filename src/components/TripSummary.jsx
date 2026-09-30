import React, { useEffect, useState } from 'react'
import { trip } from '../mockData'

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function useCountdown(targetDateStr) {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })

  useEffect(() => {
    function calc() {
      const now = new Date()
      const target = new Date(targetDateStr + 'T14:00:00')
      const diff = target - now
      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, mins: 0, secs: 0 })
        return
      }
      setCountdown({
        days:  Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins:  Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        secs:  Math.floor((diff % (1000 * 60)) / 1000),
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [targetDateStr])

  return countdown
}

export default function TripSummary({ showToast }) {
  const { days, hours, mins, secs } = useCountdown(trip.checkIn)
  const [bookingExpanded, setBookingExpanded] = useState(false)

  function handleDirections() {
    const hostelAddress =
      'The Social Stays Goa Morjim, 279, New Wada, Pernem, Morjim, Goa 403512'
    const mapsUrl =
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hostelAddress)}`
    showToast('Opening directions to ' + trip.hostelName + ' …', 'info')
    window.open(mapsUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="card trip-card" aria-label="Trip Summary">
      {/* Status row */}
      <div className="trip-status-row">
        <span className="badge badge--confirmed">✓ Booking Confirmed</span>
        <span className="trip-ref">{trip.bookingRef}</span>
      </div>

      {/* Hostel */}
      <h2 className="trip-hostel">{trip.hostelName}</h2>
      <p className="trip-location">📍 {trip.location}</p>

      {/* Dates */}
      <div className="trip-dates">
        <div className="date-box">
          <span className="date-label">Check-in</span>
          <span className="date-value">{formatDate(trip.checkIn)}</span>
          <span className="date-time">{trip.checkInTime}</span>
        </div>
        <div className="date-sep" aria-hidden="true">
          <span className="nights-pill">{trip.nights} nights</span>
        </div>
        <div className="date-box date-box--right">
          <span className="date-label">Check-out</span>
          <span className="date-value">{formatDate(trip.checkOut)}</span>
          <span className="date-time">{trip.checkOutTime}</span>
        </div>
      </div>

      {/* Countdown */}
      <div className="countdown" aria-label="Time until check-in">
        <p className="countdown-label">Check-in countdown</p>
        <div className="countdown-tiles">
          {[
            { val: days,  unit: 'Days'  },
            { val: hours, unit: 'Hours' },
            { val: mins,  unit: 'Mins'  },
            { val: secs,  unit: 'Secs'  },
          ].map(({ val, unit }) => (
            <div key={unit} className="countdown-tile">
              <span className="countdown-num">{String(val).padStart(2, '0')}</span>
              <span className="countdown-unit">{unit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Inline booking detail */}
      {bookingExpanded && (
        <div className="booking-detail" role="region" aria-label="Booking details">
          <div className="booking-detail-grid">
            <span className="bd-label">Booking ref</span>
            <span className="bd-value">{trip.bookingRef}</span>

            <span className="bd-label">Guest</span>
            <span className="bd-value">Aryan Kumar</span>

            <span className="bd-label">Property</span>
            <span className="bd-value">{trip.hostelName}</span>

            <span className="bd-label">Address</span>
            <span className="bd-value">{trip.address}</span>

            <span className="bd-label">Check-in</span>
            <span className="bd-value">{formatDate(trip.checkIn)} · {trip.checkInTime}</span>

            <span className="bd-label">Check-out</span>
            <span className="bd-value">{formatDate(trip.checkOut)} · {trip.checkOutTime}</span>

            <span className="bd-label">Duration</span>
            <span className="bd-value">{trip.nights} nights</span>

            <span className="bd-label">Status</span>
            <span className="bd-value bd-value--green">Confirmed ✓</span>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="trip-actions">
        <button
          className="btn btn--primary"
          onClick={() => setBookingExpanded((v) => !v)}
          aria-expanded={bookingExpanded}
        >
          📄 {bookingExpanded ? 'Hide Booking' : 'View Booking'}
        </button>
        <button
          className="btn btn--outline"
          onClick={handleDirections}
          aria-label="Open The Social Stays Goa Morjim in Google Maps"
        >
          🗺️ Get Directions
        </button>
      </div>
    </section>
  )
}
