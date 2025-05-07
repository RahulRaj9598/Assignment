# 🎯 Activity Booking API

A backend RESTful API for user registration, login, listing activities, and booking them. Built using **Node.js**, **Express**, **MongoDB**, **JWT**, and **bcrypt** for MeetX internship assignment.

---

## 🚀 Features

- User Registration & Login with JWT authentication
- Public endpoint to list available activities
- Authenticated activity booking
- View your own bookings
- Input validation with `express-validator`
- Clean MVC-based code structure

---

## ⚙️ Local Installation

1. First, ensure you have **Node.js** and **MongoDB** installed on your machine.
2. Clone this repository to your local system.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install all the required dependencies.
5. Create a `.env` file in the project root and add the following:
   - PORT=5000
   - MONGO_URI=mongodb://localhost:27017/activity-booking
   - JWT_SECRET=your_jwt_secret
6. Make sure your MongoDB server is running (`mongod` command if you're using local).
7. Start the server by running `npm start`.
8. The API will be available locally at `http://localhost:5000`.

---

## 📮 API Endpoints

### 🔐 Authentication

- **POST** `/api/auth/register`  
  Registers a new user.  
  Requires `name`, `email`, `phone`, and `password` in the body.

- **POST** `/api/auth/login`  
  Logs in a user and returns a JWT token.  
  Requires `email` and `password` in the body.

---

### 🗓️ Activities

- **GET** `/api/activities`  
  Public endpoint to list all activities.  
  Each activity includes: `id`, `title`, `description`, `location`, `dateTime`.

- **POST** `/api/activities`  
  (Protected) Creates a new activity.  
  Requires a valid JWT token and the following in body:
  - `title`
  - `description` (minimum 10 characters)
  - `location`
  - `dateTime` (ISO 8601 format)

---

### 📌 Bookings

- **POST** `/api/bookings`  
  (Protected) Books an activity.  
  Requires `activityId` in body and a valid JWT token in the header.

- **GET** `/api/bookings/my`  
  (Protected) Retrieves all bookings made by the currently logged-in user.

---

## 🧪 Postman Collection

- A ready-to-use Postman collection is available in the `postman/` folder.
- You can import it into Postman to test all endpoints quickly.
- After login, copy your token and use it as a `Bearer` token in the headers.

---

## ✅ Sample Flow

1. Register using `/api/auth/register`
2. Login with `/api/auth/login` to receive a JWT token
3. Use `/api/activities` to view activities
4. Book an activity using `/api/bookings`
5. View your bookings at `/api/bookings/my`

---

## 👨‍💻 Developed For

**MeetX Internship Assignment**  
by **Altrodav Technologies Pvt. Ltd.**

