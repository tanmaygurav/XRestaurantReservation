# XRestaurantReservation 🍽️

An intuitive, responsive React web application that allows users to find restaurants in specific states and cities across the United States and reserve tables for free with instant confirmation.

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Preview-blue?style=for-the-badge&logo=vercel)](https://x-restaurant-reservation-tanmaygura.vercel.app/)
[![Repository](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/tanmaygurav/XRestaurantReservation)

---

## 🚀 Features

- **State & City Filtering:** Real-time dropdown selection dynamically fetched from the restaurant backend API.
- **Search Results & Restaurant Listings:** Displays total matching restaurants available in the selected city with ratings, addresses, and instant booking availability.
- **Interactive Calendar & Slot Booking:**
  - Book tables up to a week in advance.
  - Slot selection organized cleanly into **Morning**, **Afternoon**, and **Evening** periods.
  - Interactive booking modal with confirmation and email notification.
- **Persistent Bookings Management (`/my-bookings`):**
  - View all active reservations on a dedicated page.
  - Retains booking data across browser refreshes using `localStorage`.
- **Carousel & Promotional Sliders:** Built using the Swiper library for hero banners and special dining deals.
- **Fully Responsive:** Optimized for mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

- **Frontend Library:** React JS (v18)
- **UI & Component System:** Material UI (MUI v5) & Emotion
- **Routing:** React Router DOM (v6)
- **Sliders & Carousels:** Swiper.js
- **Date Utilities:** `date-fns`
- **HTTP Client:** Axios
- **E2E Testing:** Cypress

---

## 📡 API Endpoints

- **Get all states:**  
  `GET https://restaurantdata.onrender.com/states`
- **Get cities in a state:**  
  `GET https://restaurantdata.onrender.com/cities/:state`
- **Get restaurants by location:**  
  `GET https://restaurantdata.onrender.com/restaurants?state=:state&city=:city`

---

## 💻 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/tanmaygurav/XRestaurantReservation.git
cd XRestaurantReservation
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm start
```
The application will launch and be available at [http://localhost:3000](http://localhost:3000).

---

## 🧪 Running Cypress Tests

Ensure your development server is running on `http://localhost:3000`, then run:

```bash
cd assessment
npx cypress run --spec "cypress/e2e/spec.cy.js"
```

To open the Cypress interactive test runner:
```bash
cd assessment
npx cypress open
```

---

## 🔗 Links

- **Live Deployment:** [https://x-restaurant-reservation-tanmaygura.vercel.app/](https://x-restaurant-reservation-tanmaygura.vercel.app/)
- **GitHub Repository:** [https://github.com/tanmaygurav/XRestaurantReservation](https://github.com/tanmaygurav/XRestaurantReservation)

