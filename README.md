# 🧑‍💻 Robert Antwi — Developer Portfolio

Welcome to my personal developer portfolio — a fully responsive, modern, and performance-optimized site showcasing my best projects, technical skills, and hands-on experience across real-world applications.

This portfolio is built with a strong focus on **clean UI**, **smooth animations**, **accessibility**, and **production-grade workflows**, reflecting how I approach professional engineering work.

---

## 🚀 Tech Stack

- **React** — Hooks, Component Architecture, Performance Optimization  
- **TypeScript** — Type-safe development  
- **Tailwind CSS** — Utility-first styling with custom animations  
- **Three.js & GSAP** — Smooth transitions & micro-interactions  
- **Sentry** — Real-time error monitoring & diagnostics  
- **Vercel** — Deployment & CI/CD  
- **Component-driven architecture** for scalability and clarity  

---

## 🖥️ Featured Projects

### 🔹 **AgentMeet AI**
AgentMeet AI is a next-generation video calling platform where every meeting includes a real-time AI agent trained for a specific role.

**Features:**
- Start meetings with AI agents that interact live using Stream Video SDK and OpenAI Realtime API.
- Meetings can be created, scheduled, cancelled, or started later. Upcoming meetings stay in a pending state until you join.
- Create agents with custom names, personalities, tones, and behaviors.
- After a meeting ends, background jobs (via Ingest and AgentKit) automatically:
  - Fetch transcripts
  - Summarize content with AI
  - Generate structured insights
  - Save everything to the database
  - Mark the meeting as **Completed**

- Every completed meeting includes:

  **✅ Summary**  
  A clean AI-generated breakdown of discussion topics with timestamps.

  **💬 Transcript**  
  A fully searchable transcript with keyword highlighting.

  **🎞️ Recording**  
  A complete replay of the entire call.

**Live Demo:** *[AgentMeet AI](https://agent-meet-ai.vercel.app/)*

---

### 🔹 **TripControl**
TripControl is a modern travel agency platform featuring an AI-powered trip itinerary generator, a public booking website, and a robust admin dashboard.

**Features:**
- AI-powered trip itinerary generator: Personalized itineraries based on country, travel style, interests, group type, and budget.
- Trip management: Add, edit, or delete trips with detailed overviews.
- Smooth UI with location previews
- Interactive analytics: Charts and tables showing user activity, trip trends, and insights

**Live Demo:** *[TripControl](https://trip-control-ai.vercel.app/)*

---

### 🔹 **Lynq**
Lynq is a modern, full-stack social media platform built with Next.js, designed to deliver a seamless, fast, and secure social experience. It supports real-time interactions, user-generated content, notifications, authentication, and profile management — all wrapped in a clean, responsive UI.

**Features:**
- Sign up / log in using Google OAuth or Email + Password
- Create posts with image uploads using UploadThing
- Like and comment on posts with instant UI updates
- Follow and unfollow users
- Intelligent random user suggestions to follow
- Get immediate notifications when:
  - Someone follows you
  - Someone likes your post
  - Someone comments on your post
  - Comment notifications link directly to:
    - The post
    - The specific comment

**Live Demo:** *[Lynq](https://lynq-social.vercel.app/)*


---

## ✨ Highlights of the Portfolio

- **Smooth animated hero section** with strong personal branding  
- **Professional project cards** with interactive previews  
- **Responsive design** optimized for all screen sizes  
- **Dedicated contact section** for direct communication  
- **Performance-focused** build with Lighthouse-friendly practices  

---

## 📦 Installation (For Local Development)

```bash
git clone https://github.com/antwirobert/portfolio.git
cd portfolio
```
```bash
npm install
```

🧩 Environment Variables

Create a .env file:
```bash
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
```
```bash
npm run dev
```

📬 Contact

If you want to collaborate, hire me, or discuss an opportunity — reach out anytime.

Email: robertantwi84@gmail.com


Portfolio: https://robertantwi.vercel.app

GitHub: https://github.com/antwirobert

LinkedIn: https://www.linkedin.com/in/antwirobert/

⭐️ Acknowledgements
<br />
If this project inspires you, please leave a star on the repo! It helps more developers discover it.
<br />
Thanks for checking out my portfolio.
<br />
I’m continuously improving this project and adding new work — stay tuned!
