import React, { useState, useEffect, useRef } from 'react'
import { notifications as initialNotifications } from '../mockData'

export default function Header({ showToast }) {
  const [notifOpen,   setNotifOpen]   = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [notifs,      setNotifs]      = useState(initialNotifications)

  const notifRef   = useRef(null)
  const profileRef = useRef(null)

  const unreadCount = notifs.filter((n) => !n.read).length

  function markAllRead() {
    setNotifs(notifs.map((n) => ({ ...n, read: true })))
    showToast('All notifications marked as read', 'info')
  }

  // ── Outside-click helper ───────────────────────────────────
  function useOutsideClick(ref, isOpen, setOpen) {
    useEffect(() => {
      if (!isOpen) return
      function handler(e) {
        if (ref.current && !ref.current.contains(e.target)) setOpen(false)
      }
      document.addEventListener('mousedown', handler)
      return () => document.removeEventListener('mousedown', handler)
    }, [isOpen])
  }

  // ── Escape key helper ──────────────────────────────────────
  function useEscKey(isOpen, setOpen) {
    useEffect(() => {
      if (!isOpen) return
      function handler(e) { if (e.key === 'Escape') setOpen(false) }
      document.addEventListener('keydown', handler)
      return () => document.removeEventListener('keydown', handler)
    }, [isOpen])
  }

  useOutsideClick(notifRef,   notifOpen,   setNotifOpen)
  useOutsideClick(profileRef, profileOpen, setProfileOpen)
  useEscKey(notifOpen,   setNotifOpen)
  useEscKey(profileOpen, setProfileOpen)

  return (
    <header className="header">
      <div className="header-inner">
        {/* Brand */}
        <div className="header-brand">
          <span className="header-logo" aria-hidden="true">🐦</span>
          <div>
            <span className="header-title">HostelBird</span>
            <span className="header-subtitle">Trip Hub</span>
          </div>
        </div>

        <div className="header-controls">
          {/* ── Notification bell ──────────────────────────── */}
          <div className="notif-wrapper" ref={notifRef}>
            <button
              className="icon-btn"
              aria-label={`Notifications – ${unreadCount} unread`}
              aria-expanded={notifOpen}
              aria-haspopup="true"
              onClick={() => { setNotifOpen((o) => !o); setProfileOpen(false) }}
            >
              🔔
              {unreadCount > 0 && (
                <span className="notif-badge" aria-hidden="true">{unreadCount}</span>
              )}
            </button>

            {notifOpen && (
              <div className="notif-dropdown" role="dialog" aria-label="Notifications">
                <div className="notif-header">
                  <span>Notifications</span>
                  {unreadCount > 0 && (
                    <button className="notif-mark-read" onClick={markAllRead}>
                      Mark all read
                    </button>
                  )}
                </div>
                <ul className="notif-list">
                  {notifs.map((n) => (
                    <li
                      key={n.id}
                      className={`notif-item${n.read ? '' : ' notif-item--unread'}`}
                    >
                      <p className="notif-text">{n.text}</p>
                      <span className="notif-time">{n.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* ── Profile avatar ─────────────────────────────── */}
          <div className="profile-wrapper" ref={profileRef}>
            <button
              className="avatar-btn"
              aria-label="Profile menu"
              aria-expanded={profileOpen}
              aria-haspopup="true"
              onClick={() => { setProfileOpen((o) => !o); setNotifOpen(false) }}
            >
              <span className="avatar-initials">AK</span>
            </button>

            {profileOpen && (
              <div className="profile-dropdown" role="dialog" aria-label="Profile menu">
                {/* User info */}
                <div className="profile-info">
                  <div className="profile-avatar-lg">AK</div>
                  <div>
                    <p className="profile-name">Aryan Kumar</p>
                    <p className="profile-email">aryan.kumar@email.com</p>
                  </div>
                </div>

                <ul className="profile-menu">
                  <li>
                    <button
                      className="profile-menu-item"
                      onClick={() => { setProfileOpen(false); showToast('My Profile – coming soon!', 'info') }}
                    >
                      👤 My Profile
                    </button>
                  </li>
                  <li>
                    <button
                      className="profile-menu-item"
                      onClick={() => { setProfileOpen(false); showToast('My Bookings – coming soon!', 'info') }}
                    >
                      📋 My Bookings
                    </button>
                  </li>
                  <li>
                    <button
                      className="profile-menu-item"
                      onClick={() => { setProfileOpen(false); showToast('Settings – coming soon!', 'info') }}
                    >
                      ⚙️ Settings
                    </button>
                  </li>
                  <li className="profile-menu-divider" role="separator" />
                  <li>
                    <button
                      className="profile-menu-item profile-menu-item--danger"
                      onClick={() => { setProfileOpen(false); showToast('Signed out (mock)', 'info') }}
                    >
                      🚪 Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
