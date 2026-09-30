import React, { useState } from 'react'
import { importantInfo } from '../mockData'

export default function InfoCard({ showToast }) {
  const [supportOpen, setSupportOpen] = useState(false)

  function handleSupport() {
    setSupportOpen((v) => !v)
    if (!supportOpen) {
      showToast('Support panel opened', 'info')
    }
  }

  return (
    <section className="card info-card" aria-label="Important information">
      <div className="card-header">
        <h3 className="card-title">ℹ️ Important Information</h3>
      </div>

      <ul className="info-list">
        {importantInfo.map((item) => (
          <li key={item.id} className="info-item">
            <span className="info-icon" aria-hidden="true">{item.icon}</span>
            <div className="info-content">
              <span className="info-label">{item.label}</span>
              <span className="info-value">{item.value}</span>
            </div>
          </li>
        ))}
      </ul>

      <button
        className="btn btn--outline info-support-btn"
        onClick={handleSupport}
        aria-expanded={supportOpen}
      >
        💬 {supportOpen ? 'Hide Support' : 'Contact Support'}
      </button>

      {/* Inline support panel */}
      {supportOpen && (
        <div className="support-panel" role="region" aria-label="Support options">
          <p className="support-panel-title">How can we help?</p>
          <ul className="support-options">
            <li className="support-option">
              <span className="support-option-icon">📧</span>
              <div>
                <span className="support-option-label">Email support</span>
                <span className="support-option-value">support@hostelbird.com</span>
              </div>
            </li>
            <li className="support-option">
              <span className="support-option-icon">📞</span>
              <div>
                <span className="support-option-label">Phone (24/7)</span>
                <span className="support-option-value">+91 98765 43210</span>
              </div>
            </li>
            <li className="support-option">
              <span className="support-option-icon">💬</span>
              <div>
                <span className="support-option-label">Live chat</span>
                <span className="support-option-value">Available 8 AM – 10 PM IST</span>
              </div>
            </li>
          </ul>
          <p className="support-ref">
            Reference your booking: <strong>{'\u00A0'}HB-20261012-GOA</strong>
          </p>
        </div>
      )}
    </section>
  )
}
