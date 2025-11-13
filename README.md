# 🥗 PlateShare — Community Food Sharing Platform

## 📖 About the Project

**PlateShare** is a community-driven food sharing platform built with the **MERN Stack** (MongoDB, Express.js, React, Node.js).  

It allows users to donate surplus food, browse available items, and request food donations — reducing waste and promoting community support.
The platform features **secure Firebase authentication**, **CRUD operations**, and a **modern, responsive design** powered by TailwindCSS and DaisyUI.

---

## 🚀 Key Features

- 🥘 **Food Donation System:** Logged-in users can add, manage, update, and delete donated foods.  
- 🍱 **Browse & Request Foods:** Anyone can view all available food donations and submit requests easily.  
- 🔁 **Food Request Management:** Donors can accept or reject food requests directly from their dashboard.  
- 🔐 **Firebase Authentication:** Email/password and Google login with protected private routes.  
- 🗄️ **MongoDB Integration:** All food and request data are securely stored and managed via MongoDB Atlas.  
- 💫 **Responsive & Animated UI:** Optimized for mobile, tablet, and desktop with smooth transitions.

---

## ⚙️ Core Functionalities

### 🏠 Home Page
- Dynamic **Hero Section** with CTA ("View All Foods").
- **Popular Foods Section:** Displays top 6 available foods.
- **Two Informative Sections:** “How It Works” and “Our Mission”.


### 👥 Authentication (Firebase)
- User registration with **name, photo URL, email, and password validation**.
- **Google Sign-In** integration.
- Real-time **Notifications** for success/error feedback.
- Redirects users to intended route after login.

### 🍛 Food Management (CRUD)
- **Add Food (Private):** Logged-in users can upload new food data (with imgbb image link).
- **Available Foods (Public):** View all food donations with “Available” status.
- **Food Details (Private):** Detailed view with “Request Now” form.
- **Manage My Foods (Private):** Update or delete foods with confirmation alerts.

### 📬 Food Request System
- Users can **request food** with pickup location and reason.
- Donors can **accept or reject** requests in real time.
- When accepted, food status automatically changes to **“Donated”**.

### 🧭 Additional Features
- Protected routes using Firebase Auth state.
- **React Hook Form** for advanced validation.
- **SweetAlert2** for alerts and confirmations.
- **404 Page** with a creative design and redirect to Home.
- **Dynamic Page Titles** for better SEO and UX.
- Environment variables (`.env`) for Firebase keys.

---

## 🧩 Technologies Used

| Category | Tools & Libraries |
|-----------|-------------------|
| **Frontend** | React.js, React Router DOM, TanStack Query, Axios, React Hook Form |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Authentication** | Firebase (Email/Password + Google Sign-In) |
| **Hosting** | Netlify / Surge (Client), Vercel (Server) |
| **UI & Styling** | TailwindCSS, DaisyUI, SweetAlert2 |
| **Image Hosting** | imgbb API |

---


**Live Site:** https://plate-share-client2.vercel.app/
**Client Repo:**  https://github.com/RayhanRK/plate-share-client.git

**Server Repo:** https://github.com/RayhanRK/plate-share-server

---
## 👨‍💻 Author

**Developer:** M. Rayhan Khan  
**Project:** PlateShare — MERN Stack Food Sharing Platform  

