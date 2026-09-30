# 🐦 HostelBird Trip Hub

> Built for the **HostelBird Build & Break Hackathon 2026**

---

## The Problem

After booking a hostel on HostelBird, travellers must hunt through different parts of the product to find:

- Their booking confirmation and dates
- Check-in instructions
- The traveller community group for their property
- Upcoming local events
- Directions to the hostel
- Their BirdCoins balance and rewards

This fragmentation creates friction and anxiety — especially for first-time solo travellers who need confidence and clarity before they arrive.

---

## The Solution

**HostelBird Trip Hub** is a single-screen post-booking dashboard that surfaces every piece of trip-relevant information in one place, organised by the traveller's natural pre-arrival journey.

From the moment a booking is confirmed to the day of check-in, the hub acts as a personal travel companion — showing countdown timers, a pre-arrival checklist, the traveller community, events at the destination, BirdCoins, and all the important property details.

---

## Features

| Feature | Details |
|---|---|
| **Trip Summary** | Hostel name, location, check-in / check-out dates, booking status badge, live countdown timer |
| **View Booking** | Button to access full booking details |
| **Get Directions** | Opens Google Maps for the hostel address |
| **Pre-arrival Checklist** | Four-step checklist with animated progress bar; items toggle via click |
| **Community Card** | Traveller group name, member count, avatar stack, Join / Joined toggle |
| **Upcoming Events** | Event list with time/location; Attend / Attending toggle per event |
| **BirdCoins Wallet** | Balance, INR value, transaction history, View Rewards CTA |
| **Important Info** | Cancellation deadline, check-in time, hostel address, Contact Support |
| **Notifications** | Bell icon with unread badge, dropdown panel, Mark all read action |
| **Responsive layout** | Mobile-first single-column → two-column grid on ≥ 680 px |

---

## Tech Stack

- **React 18** — component model and hooks (`useState`, `useEffect`)
- **Vite 5** — dev server and bundler
- **Plain CSS** — no UI library; custom design tokens via CSS variables
- **Google Fonts** — Inter + Poppins (loaded from CDN in `index.html`)

---

## Project Structure

```
hostelbird-trip-hub/
├── index.html
├── vite.config.js
├── package.json
├── README.md
└── src/
    ├── main.jsx               # React root mount
    ├── App.jsx                # Root component + shared state
    ├── index.css              # Global styles & design tokens
    ├── mockData.js            # All mock data (single source of truth)
    └── components/
        ├── Header.jsx         # Sticky header, notifications, profile
        ├── TripSummary.jsx    # Trip card with live countdown
        ├── Checklist.jsx      # Pre-arrival checklist with progress bar
        ├── CommunityCard.jsx  # Traveller group + join toggle
        ├── EventsCard.jsx     # Events list + attend toggle
        ├── BirdCoinsCard.jsx  # Coins balance, history, rewards CTA
        └── InfoCard.jsx       # Important info + support CTA
```

---

## Setup & Running

### Prerequisites

- **Node.js** v18 or later  
- **npm** v9 or later

### Steps

```bash
# 1. Clone / open the project folder
cd hostelbird-trip-hub

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

---

## Known Limitations

- **Mock data only** — no backend, database, or real API calls; all data lives in `src/mockData.js`.
- **No authentication** — the profile avatar is decorative; there is no login/signup flow.
- **No real payments** — BirdCoins balances are static; redemption is not implemented.
- **Directions open Google Maps** — a real implementation would integrate a maps SDK.
- **Fonts require internet** — Google Fonts are loaded from CDN; offline users see system fonts.
- **No persistence** — checklist ticks, joined state, and attending state reset on page refresh (no localStorage or server sync).

---

## Future Improvements

1. **Real-time data** — connect to a REST / GraphQL API for live bookings, events, and coins.
2. **Push notifications** — replace the mock dropdown with web push / in-app notifications from a backend.
3. **Persistent state** — sync checklist and community state to user profile via API + optimistic UI.
4. **Maps SDK integration** — embed an interactive map (Mapbox / Google Maps JS) directly in the trip card.
5. **Dark mode** — add a `prefers-color-scheme` media query variant using the existing CSS token system.
6. **Internationalisation** — add i18n support for dates, currencies, and UI strings.
7. **Accessibility audit** — conduct full WCAG 2.1 AA review with screen-reader testing.
8. **PWA / offline support** — add a service worker so the hub works without connectivity at the destination.
9. **Animated transitions** — use Framer Motion for card entrance animations and state change feedback.
10. **Social sharing** — let travellers share their trip card or invite friends to the community group.

---

*Made with ❤️ for the HostelBird Build & Break Hackathon · September 2026*

## Hackathon Submission

Built for the HostelBird Build & Break Hackathon 2026.

This submission improves the post-booking experience for solo travellers by
unifying booking details, preparation tasks, community discovery, events,
directions, support, and BirdCoins in one Trip Hub.

The current version is a functional frontend MVP using mock data. It does not
connect to private HostelBird authentication, booking, payment, rewards, or
community APIs.

