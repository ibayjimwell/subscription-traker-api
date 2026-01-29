# 💳 Subscription Tracker API

**Track subscriptions, control request limits, and send email reminders**

A backend API for managing user subscriptions, built with scalability in mind.
This system is designed to help users monitor recurring payments and handle usage limits with automated workflows.

> ⚠️ **Project Status:** In Development (Core features working, more endpoints coming)

---

## 🚀 Features (Current & Planned)

### ✅ Authentication System

* User sign-up
* User sign-in
* JWT-based authentication

### ✅ Subscription Management

* Create subscriptions
* Track subscription details (price, category, billing cycle)
* Associate subscriptions with users

### 🔄 In Progress

* Request usage limits
* Email reminders before renewal
* Automated workflows
* Subscription expiration tracking

---

## 🧱 Tech Stack

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge\&logo=javascript\&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge\&logo=express\&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge\&logo=mongodb\&logoColor=white)

* **Express.js** — REST API framework
* **MongoDB** — Database
* **JWT Auth** — Secure authentication
* **Arcjet Middleware** — Security & request protection

---

## 🌍 Base URL

```
http://localhost:3000/api/v1
```

---

# 🔐 Authentication Endpoints

### 📝 Sign Up

```
POST /auth/sign-up
```

```json
{
  "name": "John Doe",
  "email": "doejohn@gmail.com",
  "password": "john123"
}
```

---

### 🔑 Sign In

```
POST /auth/sign-in
```

```json
{
  "name": "John Doe",
  "email": "doejohn@gmail.com",
  "password": "john123"
}
```

Returns a JWT token used for protected routes.

---

# 📦 Subscription Endpoints

### ➕ Create Subscription

```
POST /subscriptions
Authorization: Bearer <token>
```

```json
{
  "name": "Elite Membership",
  "price": 139.00,
  "currency": "USD",
  "frequency": "monthly",
  "category": "entertainment",
  "startDate": "2025-01-20T00:00:00.000Z",
  "paymentMethod": "credit card"
}
```

---

### 📋 Get User Subscriptions

```
GET /subscriptions/user/:userId
Authorization: Bearer <token>
```

---

## 🛠 Project Structure Overview

```
routes/
 ├── auth.routes.js
 ├── user.routes.js
 ├── subscription.routes.js
 └── workflow.routes.js

middlewares/
 ├── error.middleware.js
 └── arcjet.middleware.js

database/
 └── mongodb.js
```

---

## ⚙️ Running Locally

### 1️⃣ Clone repository

```bash
git clone <repo-url>
cd subscription-tracker-api
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
```

### 4️⃣ Start server

```bash
npm run dev
```

---

## 🔮 Planned Improvements

* Email reminder system
* Subscription dashboard analytics
* Rate limiting per subscription tier
* Payment gateway integration
* Webhooks support

---

## 👨‍💻 Author

**Jimwell Ibay**
Backend Developer
