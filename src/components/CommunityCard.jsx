import React from 'react'
import { community } from '../mockData'

export default function CommunityCard({ joined, onJoin }) {
  return (
    <section className="card" aria-label="Community">
      <div className="card-header">
        <h3 className="card-title">👥 Community</h3>
      </div>

      <div className="community-inner">
        {/* Avatar stack */}
        <div className="avatar-stack" aria-hidden="true">
          {['AS', 'KP', 'RV', 'MJ', 'TN'].map((init) => (
            <span key={init} className="avatar-stack-item">{init}</span>
          ))}
          <span className="avatar-stack-more">+{community.members - 5}</span>
        </div>

        <h4 className="community-name">{community.name}</h4>
        <p className="community-meta">
          {joined ? community.members + 1 : community.members} members travelling to Goa
        </p>
        <p className="community-desc">{community.description}</p>

        {/* Success banner shown after joining */}
        {joined && (
          <div className="community-success" role="status">
            <span>🎉</span>
            <span>You're in! Say hi to your fellow travellers.</span>
          </div>
        )}

        <button
          className={`btn ${joined ? 'btn--success' : 'btn--primary'} community-btn`}
          onClick={joined ? undefined : onJoin}
          disabled={joined}
          aria-pressed={joined}
        >
          {joined ? '✓ Joined' : '🤝 Join Group'}
        </button>
      </div>
    </section>
  )
}
