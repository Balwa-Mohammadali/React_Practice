<div align="center">

# ⚛️ React Practice Projects

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=61DAFB&center=true&vCenter=true&width=600&lines=Learning+React+One+Project+at+a+Time;Hooks+%7C+State+%7C+Firebase+%7C+Vite;Built+with+%E2%9D%A4%EF%B8%8F+and+curiosity" alt="Typing SVG" />

<br/>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

<br/>

> 🚀 **A curated collection of React mini-projects** built while mastering the fundamentals of modern front-end development — from core hooks to Firebase cloud integrations.

</div>

---

## 📁 Projects Overview

<table>
  <thead>
    <tr>
      <th>🗂️ Project</th>
      <th>📝 Description</th>
      <th>🛠️ Key Concepts</th>
      <th>⚙️ Stack</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>🎨 BgChanger</b></td>
      <td>Instantly change the entire background color of the page by clicking color buttons.</td>
      <td><code>useState</code>, Event Handling, Inline Styles</td>
      <td>React + Vite + Tailwind CSS</td>
    </tr>
    <tr>
      <td><b>🔐 passwordGenerator</b></td>
      <td>Generate cryptographically strong passwords with customizable length, numbers & special characters, with one-click clipboard copy.</td>
      <td><code>useState</code>, <code>useCallback</code>, <code>useEffect</code>, <code>useRef</code></td>
      <td>React + Vite + Tailwind CSS</td>
    </tr>
    <tr>
      <td><b>🔥 firebase</b></td>
      <td>Explore Firebase Cloud Messaging (FCM) push notification integration — request browser permissions and generate unique device tokens.</td>
      <td>Firebase SDK, <code>useEffect</code>, Async/Await, Browser Notifications API</td>
      <td>React + Vite + Firebase</td>
    </tr>
    <tr>
      <td><b>🔢 reactProject</b></td>
      <td>A foundational counter app demonstrating React's state batching mechanism — multiple <code>setState</code> calls batched in a single render cycle.</td>
      <td><code>useState</code>, Functional Updates, State Batching</td>
      <td>React + Vite</td>
    </tr>
  </tbody>
</table>

---

## 🔍 Project Deep Dives

### 🎨 BgChanger
> **Concept:** Dynamic UI state with real-time visual feedback.

An interactive full-screen app that allows users to change the background color by clicking color buttons. Demonstrates the simplest and most powerful concept in React — **reactive state**.

**What I learned:**
- How `useState` drives UI re-renders
- Applying inline styles dynamically using JavaScript objects
- Smooth CSS `duration-200` transitions for a polished feel

```jsx
const [color, setColor] = useState("olive")
// Clicking a button calls setColor("red") -> React re-renders instantly!
```

---

### 🔐 Password Generator
> **Concept:** Performance optimization with advanced React Hooks.

A fully functional password generator that creates secure passwords on the fly. Users can configure length (6–20 chars), toggle numeric characters, and toggle special symbols — all with a one-click copy to clipboard.

**What I learned:**
- `useCallback` — memoize the generator function to avoid unnecessary re-creation
- `useEffect` — auto-regenerate password whenever settings change
- `useRef` — directly access the DOM input element for text selection before copying

```jsx
const passwordGenerator = useCallback(() => {
  // Logic runs only when [length, numAllow, charAllow] change
}, [length, numAllow, charAllow, setPassword])

useEffect(() => {
  passwordGenerator() // Auto-run on setting change
}, [length, numAllow, charAllow, passwordGenerator])
```

---

### 🔥 Firebase Cloud Messaging
> **Concept:** Real-world cloud integration with push notifications.

A proof-of-concept React app that integrates **Firebase Cloud Messaging (FCM)**. It requests the user's browser notification permission and, upon approval, generates a unique FCM token that can be sent to a backend server for targeted push notifications.

**What I learned:**
- Setting up Firebase SDK in a React + Vite environment
- Using `Notification.requestPermission()` browser API
- Generating and managing FCM device tokens using `getToken()`
- Handling async permission flows inside `useEffect`

```jsx
useEffect(() => {
  requestPermission() // Request notification access on mount
}, [])
```

---

### 🔢 React Counter (State Batching)
> **Concept:** Understanding React's internal rendering and state batching.

A simple counter that goes beyond the basics. The `add` function calls `setCounter` **three times** in a row using **functional updates** — showcasing how React batches these into a single re-render in React 18+.

**What I learned:**
- The difference between `setState(value)` and `setState(prev => prev + 1)`
- React 18's automatic state batching
- Preventing state mutation bugs with functional updater pattern

```jsx
const add = () => {
  setCounter(prev => prev + 1) // Queued update 1
  setCounter(prev => prev + 1) // Queued update 2
  setCounter(prev => prev + 1) // Queued update 3 → React batches all 3!
}
```

---

## 🧠 Concepts Covered

| Concept | Project(s) |
|---|---|
| `useState` Hook | All Projects |
| `useEffect` Hook | passwordGenerator, firebase |
| `useCallback` Hook | passwordGenerator |
| `useRef` Hook | passwordGenerator |
| State Batching & Functional Updates | reactProject |
| Tailwind CSS Utility Classes | BgChanger, passwordGenerator |
| Firebase SDK & Cloud Messaging | firebase |
| Clipboard API | passwordGenerator |
| Browser Notifications API | firebase |
| Vite Build Tooling | All Projects |

---

## 🛠️ Getting Started

Each project is a **standalone Vite + React app**. Follow these steps to run any project:

### Prerequisites
```bash
Node.js >= 18.x
npm >= 9.x
```

### Run a Project Locally
```bash
# 1. Navigate into any project folder
cd BgChanger       # or passwordGenerator, firebase, reactProject

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

---

## 📂 Repository Structure

```
React_Practice/
│
├── 🎨 BgChanger/              → Background color changer app
│   ├── src/
│   │   └── App.jsx
│   ├── index.html
│   └── package.json
│
├── 🔐 passwordGenerator/      → Secure password generator app
│   ├── src/
│   │   └── App.jsx
│   ├── index.html
│   └── package.json
│
├── 🔥 firebase/               → Firebase Cloud Messaging integration
│   ├── src/
│   │   ├── App.jsx
│   │   └── firebase.js
│   ├── firebase.json
│   └── package.json
│
├── 🔢 reactProject/           → Counter app with state batching demo
│   ├── src/
│   │   ├── App.jsx
│   │   └── Chai.jsx
│   └── package.json
│
└── 📄 README.md
```

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI Component Library |
| **Vite** | Ultra-fast Build Tool & Dev Server |
| **Tailwind CSS** | Utility-First CSS Styling |
| **Firebase** | Cloud Messaging & Backend Services |
| **JavaScript (ES6+)** | Core Programming Language |

---

## 📈 Learning Journey

```
useState  →  useEffect  →  useCallback  →  useRef  →  Firebase  →  Advanced Patterns
  ✅              ✅              ✅             ✅          ✅               🔄
```

---

## 👨‍💻 Author

<div align="center">

**Mohammadali Balwa**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Balwa-Mohammadali)

*"Code is like humor. When you have to explain it, it's bad." – Cory House*

</div>

---

<div align="center">

⭐ **If you find this helpful, give it a star!** ⭐

![React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat-square&logo=react)
![Love](https://img.shields.io/badge/Built%20with-%E2%9D%A4%EF%B8%8F-red?style=flat-square)

</div>
