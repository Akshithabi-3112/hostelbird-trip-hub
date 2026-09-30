import React, { useState } from 'react'
import { birdCoins } from '../mockData'

export default function BirdCoinsCard() {
  const [rewardsOpen, setRewardsOpen] = useState(false)

  return (
    <section className="card birdcoins-card" aria-label="BirdCoins wallet">
      {/* Header row */}
      <div className="card-header">
        <h3 className="card-title">🪙 BirdCoins</h3>
        <span className="birdcoins-badge">Wallet</span>
      </div>

      {/* Balance hero */}
      <div className="birdcoins-hero">
        <span className="birdcoins-amount">{birdCoins.balance}</span>
        <span className="birdcoins-label">BirdCoins</span>
      </div>

      <p className="birdcoins-value">
        ≈ <strong>₹{birdCoins.inrValue}</strong> redeemable value
      </p>

      {/* History */}
      <ul className="birdcoins-history">
        {birdCoins.history.map((h, i) => (
          <li key={i} className="birdcoins-row">
            <span className="birdcoins-row-label">{h.label}</span>
            <span className="birdcoins-row-meta">{h.date}</span>
            <span className={`birdcoins-row-coins birdcoins-row-coins--${h.coins > 0 ? 'pos' : 'neg'}`}>
              {h.coins > 0 ? '+' : ''}{h.coins}
            </span>
          </li>
        ))}
      </ul>

      <button
        className="btn btn--primary birdcoins-cta"
        onClick={() => setRewardsOpen((v) => !v)}
        aria-expanded={rewardsOpen}
      >
        🎁 {rewardsOpen ? 'Hide Rewards' : 'View Rewards'}
      </button>

      {rewardsOpen && (
        <div className="rewards-panel">
          <p className="rewards-title">Available Rewards</p>
          <ul className="rewards-list">
            <li className="rewards-item">
              <span>🍽️ Free breakfast upgrade</span>
              <span className="rewards-cost">200 coins</span>
            </li>
            <li className="rewards-item">
              <span>🛏️ Late check-out (2 PM)</span>
              <span className="rewards-cost">150 coins</span>
            </li>
            <li className="rewards-item">
              <span>🎒 Locker rental</span>
              <span className="rewards-cost">50 coins</span>
            </li>
          </ul>
          <p className="rewards-note">Redeem at the property during your stay.</p>
        </div>
      )}
    </section>
  )
}
