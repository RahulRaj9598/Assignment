# Activity Booking API

This is a RESTful API for managing user registrations, activity listings, and bookings. The API is built using Node.js, Express, and MongoDB.

## Features

- **User Authentication**: Register and login functionality with JWT-based authentication.
- **Activity Management**: Create and list activities with details like title, description, location, and date/time.
- **Booking System**: Book activities and view user-specific bookings.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd intern
2. Install dependencies
    npm install
3. Create a .env file in the root directory and add the following:
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/activity-booking
   JWT_SECRET=your_jwt_secret

4. start the server
   npm start

Authentication
POST /api/auth/register
Register a new user.
Body: { name, email, phone, password }

POST /api/auth/login
Login and receive a JWT token.
Body: { email, password }

Activities
POST /api/activities
Create a new activity.
Body: { title, description, location, dateTime }
Validation: Title, description (min 10 chars), location, and valid ISO date required.

GET /api/activities
List all activities.

Bookings
POST /api/bookings
Book an activity.
Body: { activityId }
Headers: Authorization: Bearer <token>

GET /api/bookings/my
Get bookings for the logged-in user.
Headers: Authorization: Bearer <token>
