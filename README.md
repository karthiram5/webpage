# Karthikeyan Ramalingam — Portfolio

Personal portfolio website built with CDN-based React, Three.js 3D background, and CSS animations. No build tool or bundler required — runs entirely in the browser.

**Live site:** https://karthiram5.github.io/webpage

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18 (UMD CDN) |
| JSX Compiler | Babel Standalone (in-browser) |
| 3D Background | Three.js r0.160.0 |
| Styling | Vanilla CSS + CSS animations |
| Hosting | GitHub Pages |

---

## Sections

- **Hero** — Animated intro with name, role, and 3D canvas background
- **About** — Summary cards with years of experience
- **Skills** — Categorised skill grid (Frontend, Backend, Database, DevOps & Cloud, AI)
- **Tools** — Tools I work with (IDEs, version control, cloud, database, AI tools)
- **Projects** — Key projects with tech stack and domain glossary
- **Experience** — Work timeline
- **Education** — Degree cards
- **Contact** — Contact info cards

---

## Features

- **3D animated background** — Stars, spiral galaxy, energy pulse rings, floating orbs, wireframe shapes, shooting stars (Three.js)
- **Scroll reveal** — Bidirectional IntersectionObserver animations (elements animate in/out as you scroll)
- **3D card tilt** — Smooth mouse-tracked perspective tilt on all cards (desktop only)
- **Synthwave grid + aurora glow** — CSS pseudo-element animations in the hero section
- **Mobile responsive** — Flat 2D animations on mobile, 2-column tools grid, 3D effects disabled on touch devices
- **Welcome splash** — Animated loading screen before the portfolio renders

---

## Project Structure

```
webpage/
├── index.html              # Entry point — loads all CDN scripts and components
├── styles.css              # All styles including animations and mobile responsive
├── js/
│   ├── data.js             # Central data file (skills, tools, projects, experience, education)
│   ├── ThreeBackground.js  # Three.js 3D canvas scene
│   ├── App.js              # Root React component
│   ├── WelcomeSplash.js    # Loading splash screen
│   ├── Navbar.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Tools.js
│   ├── Projects.js
│   ├── Experience.js
│   ├── Education.js
│   ├── Contact.js
│   └── Footer.js
```

---

## How It Works

No build step needed. All components are plain JS files with `type="text/babel"` and follow the IIFE pattern, exposing themselves via `window.ComponentName`. `data.js` is a plain `<script>` tag loaded before all components.

```
index.html
  └── loads Three.js, React, ReactDOM, Babel (CDN)
  └── loads data.js (global vars: SKILLS, TOOLS, PROJECTS, EXPERIENCE, EDUCATION)
  └── loads each component (text/babel) → compiled in-browser by Babel
  └── loads App.js → renders into #root
```

---

## Local Development

No install required. Just open `index.html` in a browser, or serve it with any static server:

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .
```

Then visit `http://localhost:8080`.

---

## Deployment

Push to the `main` branch — GitHub Pages serves the repo root automatically.

```bash
git add .
git commit -m "your message"
git push origin main
```

---

## Skills Showcased

**Frontend:** HTML / CSS / JS · Angular · React · Three.js

**Backend:** .NET / C# · Node.js · PHP · REST APIs

**Database:** PostgreSQL · MySQL

**DevOps & Cloud:** Azure · Docker · Git & Version Control

**AI Tools:** Claude AI · GitHub Copilot · ChatGPT · DeepSeek · Gemini AI · Perplexity AI · Gamma AI · Claude CLI

---

## Author

**Karthikeyan Ramalingam** — Full Stack Developer

- Company: Different Hair Pvt. Ltd, Chennai, Tamil Nadu, India
- GitHub: [karthiram5](https://github.com/karthiram5)
