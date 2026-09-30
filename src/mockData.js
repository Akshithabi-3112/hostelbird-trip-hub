// ─── Trip ─────────────────────────────────────────────────────────────────────
export const trip = {
  hostelName: 'The Social Stays Goa Morjim',
  location: 'Goa, India',
  checkIn: '2026-10-12',
  checkOut: '2026-10-15',
  nights: 3,
  bookingRef: 'HB-20261012-GOA',
  status: 'confirmed',
  address: '279, New Wada, Pernem, Morjim, Goa 403512',
  checkInTime: '2:00 PM',
  checkOutTime: '11:00 AM',
  cancellationDeadline: '2026-10-09',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=The+Social+Stays+Goa+Morjim%2C+279%2C+New+Wada%2C+Pernem%2C+Morjim%2C+Goa+403512',
}

// ─── Pre-arrival checklist ────────────────────────────────────────────────────
export const checklist = [
  { id: 'booking',       label: 'Booking confirmed',              done: true  },
  { id: 'instructions',  label: 'Check-in instructions available', done: true  },
  { id: 'group',         label: 'Join traveller group',            done: false },
  { id: 'emergency',     label: 'Add emergency contact',           done: false },
]

// ─── Community ────────────────────────────────────────────────────────────────
export const community = {
  name: 'Goa Morjim Traveller Group',
  members: 23,
  description:
    'Connect with fellow travellers staying at The Social Stays Goa Morjim. Share tips, plan outings, and make friends before you even arrive!',
}

// ─── Events ───────────────────────────────────────────────────────────────────
export const events = [
  {
    id: 'ev1',
    title: 'Sunset Meetup',
    time: 'Today at 6:00 PM',
    location: 'Morjim Beach',
    emoji: '🌅',
    spotsLeft: 8,
  },
  {
    id: 'ev2',
    title: 'Beach Walk',
    time: 'Tomorrow at 8:00 AM',
    location: 'Morjim Beach',
    emoji: '🏖️',
    spotsLeft: 12,
  },
]

// ─── BirdCoins ────────────────────────────────────────────────────────────────
export const birdCoins = {
  balance: 300,
  inrValue: 30,
  history: [
    { label: 'Booking reward',        coins: +200, date: 'Sep 28' },
    { label: 'Early check-in bonus',  coins: +100, date: 'Sep 28' },
  ],
}

// ─── Important info ───────────────────────────────────────────────────────────
export const importantInfo = [
  {
    id: 'cancel',
    icon: '📅',
    label: 'Cancellation deadline',
    value: '9 October 2026 (free cancellation)',
  },
  {
    id: 'checkin',
    icon: '🕐',
    label: 'Check-in time',
    value: '2:00 PM – 11:00 PM',
  },
  {
    id: 'address',
    icon: '📍',
    label: 'Hostel address',
    value: '279, New Wada, Pernem, Morjim, Goa 403512',
  },
]

// ─── Notifications ────────────────────────────────────────────────────────────
export const notifications = [
  {
    id: 'n1',
    text: 'Check-in instructions are now available.',
    time: '2h ago',
    read: false,
  },
  {
    id: 'n2',
    text: 'New event: Sunset Meetup added at Morjim Beach.',
    time: '5h ago',
    read: false,
  },
  {
    id: 'n3',
    text: 'You earned 300 BirdCoins for your Goa booking!',
    time: '2d ago',
    read: true,
  },
]
