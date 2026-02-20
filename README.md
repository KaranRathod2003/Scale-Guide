# ScaleGuide AI

An intelligent, interactive guide that helps you choose the right **Kubernetes scaling strategy** and **deployment approach** for your workload. Powered by a **decision-tree AI assistant** — no external API required.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwind-css)
![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-black?logo=vercel)

**🌐 Live Demo:** [https://scale-guide.vercel.app/](https://scale-guide.vercel.app/)

---

## ✨ Features

### 🧠 AI-Powered Recommendations (Decision Tree Based)
The built-in AI assistant uses a **rule-based decision tree** to analyze your workload and provide tailored recommendations:

- **Scaling Advisor**: Recommends HPA, VPA, KEDA, or Cluster Autoscaler based on:
  - Workload type (web API, workers, ML inference, databases, etc.)
  - Traffic patterns (steady, spiky, periodic, event-driven)
  - Scaling triggers (CPU, memory, queue depth, custom metrics)
  - Scale-to-zero requirements

- **Deployment Advisor**: Suggests deployment strategies including:
  - Blue-Green, Canary, Rolling Update, Recreate, A/B Testing, Shadow
  - Based on industry type, risk tolerance, deploy frequency, and statefulness

### 📊 Interactive Visualizations
- Animated scaling strategy comparisons
- Real-time deployment strategy breakdowns
- Beautiful, responsive UI with dark mode support

### 🚀 Zero External Dependencies
- **No API calls** — all AI logic runs locally using decision-tree rules
- Fast, private, and cost-free to run

---

## 🏗️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| UI Library | React 19 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Content | MDX (next-mdx-remote) |
| Theme | next-themes (dark/light mode) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd doccument-guide

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 📖 How It Works

### AI Assistant Architecture

The AI assistant is **not an LLM or API-based chatbot**. Instead, it uses a **deterministic decision tree** implemented in TypeScript:

```
User Input → Keyword Matching → Decision Rules → Recommendation
```

**Example Flow:**

1. **Step 1**: User describes workload → System detects workload type (e.g., "web API", "background worker")
2. **Step 2**: User mentions scaling triggers → System identifies CPU/memory/queue-based scaling
3. **Step 3**: User specifies constraints → System checks scale-to-zero needs, complexity tolerance
4. **Step 4**: Decision engine applies rules → Returns recommendation with confidence score

**Decision Rule Example:**
```typescript
if (scalingTrigger === 'queue-length' || trafficPattern === 'event-driven') {
  return { primary: 'keda', confidence: 90 };
}
```

This approach ensures:
- ✅ **Predictable** recommendations
- ✅ **No API costs** or rate limits
- ✅ **Instant** responses
- ✅ **Full control** over logic

---

## 🎯 Use Cases

| Industry | Scaling Recommendation | Deployment Strategy |
|----------|----------------------|---------------------|
| E-commerce | HPA + Cluster Autoscaler | Canary |
| Finance | VPA (for databases) | Blue-Green |
| ML/AI | KEDA (event-driven) | Shadow → Canary |
| SaaS | HPA (request-based) | Rolling Update |
| IoT/Edge | KEDA (custom metrics) | Recreate |

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # (future) API routes
│   ├── docs/              # Documentation pages
│   ├── visualize/         # Interactive visualizations
│   └── page.tsx           # Landing page
├── components/
│   ├── assistant/         # AI chat interface
│   ├── landing/           # Landing page sections
│   ├── visualizations/    # Scaling/deployment diagrams
│   └── ui/                # Reusable UI components
├── lib/
│   ├── assistant-logic.ts         # Scaling AI decision tree
│   ├── deployment-assistant-logic.ts  # Deployment AI decision tree
│   └── constants.ts               # Configuration
└── types/
    ├── assistant.ts         # AI assistant types
    └── deployment.ts        # Deployment types
```

---

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel auto-detects Next.js settings
4. Click **Deploy**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

### Other Platforms

Also works on:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any Node.js hosting

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Add new decision rules for edge cases
- Expand workload type coverage
- Improve visualizations
- Add more documentation

---

## 📄 License

MIT License — feel free to use this project for learning or production.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

**Built with ❤️ for the Kubernetes community**
