# 🧩 Skillora — A Local Skill-Exchange Platform

**Live Site:** [https://skillora-505c9.web.app/](https://skillora-505c9.web.app/)  
**GitHub Repository:** [https://github.com/mahdi9162/Skillora](https://github.com/mahdi9162/Skillora)

---

## 🚀 Overview

**Skillora** is a local **1-on-1 skill exchange and learning platform** that connects learners with real-life mentors in their area.  
Whether you want to learn guitar, cooking, or web development — Skillora helps you find verified mentors who teach in your local language and schedule.

This project is built as part of the **Programming Hero Assignment (Module 63)** and demonstrates mastery of React, Firebase, Routing, Authentication, and Animation integration (Framer Motion + AOS).

---

## ✨ Core Features

- 🎯 **Local Mentors:**  
  Learn from mentors who understand your culture, language, and context.

- 🕓 **Flexible Sessions:**  
  Choose your schedule — evenings, weekends, or after work.

- 🧠 **Goal-based Learning:**  
  Focus on real-life outcomes and hands-on skill building.

- 🔐 **Secure Authentication:**  
  Login via Email-Password or Google OAuth.

- 🧭 **Protected Routes:**  
  Access profile and booking pages only after authentication.

- 📱 **Fully Responsive:**  
  Optimized for desktop, tablet, and mobile.

- ⚡ **Modern Animations:**  
  Smooth page transitions using **Framer Motion** and section reveals via **AOS**.

---

## 🧰 Tech Stack

| Category            | Technologies                                  |
| ------------------- | --------------------------------------------- |
| **Frontend**        | React.js, React Router DOM                    |
| **Styling**         | Tailwind CSS                                  |
| **Animation**       | Framer Motion, AOS                            |
| **Auth & Hosting**  | Firebase Authentication & Firebase Hosting    |
| **UI Enhancements** | React Icons, Lottie Animation, React Toastify |

---

## ⚙️ Project Setup

To run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/mahdi9162/Skillora.git

# 2. Navigate to project folder
cd Skillora

# 3. Install dependencies
npm install

# 4. Create .env.local file and add your Firebase config keys

# 5. Start the development server
npm run dev
```

## 🗂️ Project Structure

```bash
Skillora/
│
├── .firebase/                 # Firebase deployment configs
├── public/                    # Public assets (favicon, index.html)
├── src/
│   ├── assets/                # Static assets (Lottie files, images, JSON)
│   │
│   ├── Components/            # Reusable UI components
│   │   ├── Container/         # Layout container (max-width, padding)
│   │   ├── Footer/            # Global footer section
│   │   ├── HeroSec/           # Home hero section
│   │   ├── Loading/           # Loading animation
│   │   ├── Navbar/            # Main navigation bar
│   │   └── PopulerSkills/     # Home “Popular Skills” cards
│   │
│   ├── Firebase/
│   │   └── firebase.config.js # Firebase configuration setup
│   │
│   ├── hooks/
│   │   └── useFetch.js        # Custom hook for fetching local JSON data
│   │
│   ├── HowSkilloraWorks/
│   │   └── HowSkilloraWorks.jsx
│   │
│   ├── Layout/
│   │   └── MainLayout.jsx     # Root layout (Navbar + animated Outlet + Footer)
│   │
│   ├── Pages/
│   │   ├── ForgotPassword.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── MyProfile.jsx
│   │   ├── Signup.jsx
│   │   └── SkillDetails.jsx
│   │
│   ├── Provider/
│   │   ├── AuthProvider.jsx   # Handles user authentication state
│   │   ├── PrivateRoute.jsx   # Guards private routes
│   │   └── SkillProvider.jsx  # Provides skill data globally
│   │
│   ├── Router/
│   │   └── Router.jsx         # React Router configuration
│   │
│   ├── TopMentors/
│   │   └── TopMentors.jsx     # Top mentors display section
│   │
│   ├── WhyLearnersLoveSkillora/
│   │   └── WhyLearnersLoveSkillora.jsx  # Feature highlights section
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── .firebaserc
├── eslint.config.js
├── package.json
└── vite.config.js
```

## 🧭 Pages Overview

### 🏠 Home Page

The landing experience of **Skillora** combines smooth Lottie animations and well-structured sections designed for clarity and engagement.  
It includes:

- A visually rich **Hero Section** with motion effects
- The **“Why Learners Love Skillora”** feature highlights
- A dynamic **“Popular Skills Around You”** section powered by local JSON data
- An engaging **Top Mentors** carousel showcasing community experts
- The **“How Skillora Works”** step-by-step explanation

---

### 🔐 Authentication Pages

Skillora offers a secure and seamless authentication flow using **Firebase Authentication**.  
Included pages:

- **Login Page:** Supports both email/password and Google Sign-in
- **Signup Page:** Creates new Firebase users instantly
- **Forgot Password:** Sends reset link via email
- **PrivateRoute:** Redirects unauthenticated users to the login page, then back to their intended route after login

---

### 👤 My Profile Page

Displays user information including profile **photo, name, and email**.  
Users can securely **log out** with a toast confirmation message.

---

### 📘 Skill Detail Page

- Uses a **dynamic route**: `/skill-details/:id`
- Loads skill data from a local JSON file
- Includes a **Booking Form** (name + email input)
- “Back to Popular Skills” button smoothly scrolls to the relevant section

---

### 🔑 Authentication Flow

1. **Signup →** Creates new Firebase user → Toast: _“Signup Successful!”_
2. **Login →**
   - ✅ Valid credentials → Redirects to desired route
   - ❌ Invalid credentials → Toast: _“Invalid credentials or user not found!”_
3. **Logout →** Clears session → Toast: _“Logout Successful!”_
4. **Private Route Logic →**
   - If not logged in → Redirects to `/login`
   - After login → Returns to the originally requested page

```md
🎬 **Animations**

Used animation libraries:

- **Framer Motion**
- **AOS (Animate On Scroll)**
- **Animate.css**
```

---

🧪 **Extra Functionalities**

✅ Toast Notifications for every user action (Login, Signup, Logout)  
✅ Smooth scroll linking (via useRef) between sections  
✅ Custom 404 handling (“Skill Not Found” message)  
✅ Mobile-optimized Navbar with toggle  
✅ Clean and consistent theme throughout

📦 **Deployment**

Hosted on Firebase Hosting.

Live: [https://skillora-505c9.web.app/](https://skillora-505c9.web.app/)

---

🏁 **Conclusion**

Skillora delivers a clean, interactive, and user-friendly way to connect local mentors with learners.  
It demonstrates the perfect balance of React fundamentals, state management, authentication, and animation-driven UI design.

> “Learn what you love. Teach what you know.” 💙

Developed by: **Mahdi Hasan**  
© 2025 Skillora | All rights reserved.

```

```
