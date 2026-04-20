# Restaurant Dubrovnik — Website

![preview](public/img/preview.png)

Production website for **Restaurant Dubrovnik**, a fine dining restaurant located on a rooftop terrace in the Old Town of Dubrovnik, Croatia.

**Live site:** [restorandubrovnik.com](https://restorandubrovnik.com)

---

## Tech Stack

- **React 18** + React Router v6
- **TailwindCSS** + Material Tailwind
- **Framer Motion** — page transitions and animations
- **Yet Another React Lightbox** — photo gallery
- **React Phone Input 2** + google-libphonenumber — international phone validation
- **React Tailwind Datepicker** — availability calendar
- **React Toastify** — toast notifications

---

## Features

- **Table reservations** — date/time picker with blocked-date validation, group size limits, and real-time availability fetched from the backend API
- **Tasting menus** — full dish descriptions and seasonal pricing for multiple menus
- **Wine list** — categorized wine selections with descriptions
- **Photo gallery** — fullscreen lightbox viewer
- **Chef & team profiles** — staff showcase with carousel
- **Catering inquiries** — separate form for large group/event bookings
- **Location page** — address, hours, and closed seasons
- **Reservation confirmation page** — guests confirm or cancel their booking via email link

---

## Architecture

This is the frontend only. It communicates with a custom **.NET Core REST API** (separate private repository) that handles reservation storage, availability checks, and transactional email via Mailgun.

```
Browser → React App → .NET Core API → MySQL (DigitalOcean)
                                     → Mailgun (email confirmations)
```

The API base URL is configured via `.env`:

```
REACT_APP_API_URL=https://restorandubrovnikapi.online
```
