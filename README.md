# Bo Basset's NIL Takedown 💰🤼

> *"Loyalty is for losers."*

A satirical choice-based RPG where you navigate the wild world of college wrestling NIL (Name, Image, Likeness) deals. Make strategic decisions to maximize your earnings across four years of college eligibility. Will you become a millionaire mercenary or a loyal loser?

![Game Status](https://img.shields.io/badge/status-playable-success)
![Lumi Independent](https://img.shields.io/badge/lumi-independent-blue)
![License](https://img.shields.io/badge/license-not%20specified-lightgrey)

---

## 🎮 Game Overview

Play as **Bo Basset**, a five-star wrestling recruit, and navigate:
- 🏫 **4 unique schools** with different NIL opportunities
- 💸 **6 satirical events** with multiple choice outcomes
- 📊 **4 key stats** to manage (Money, Loyalty, Clout, Skill)
- 🌀 **Transfer Portal** mechanic for school switching
- 🏆 **4 different endings** based on your total earnings
- ⭐ **Achievement system** for special accomplishments

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation & Running

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
# Opens at http://localhost:5173

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## 📚 Documentation

This repository includes comprehensive documentation:

### 📖 [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)
**Complete technical documentation including:**
- Detailed project summary and game mechanics
- Full technology stack breakdown
- Project structure and architecture
- Lumi dependency analysis
- Current implementation status
- Development setup instructions
- Deployment recommendations
- Future enhancement roadmap

### ✅ [LUMI_REMOVAL_CHECKLIST.md](LUMI_REMOVAL_CHECKLIST.md)
**Step-by-step guide to remove Lumi dependencies:**
- 3 simple steps (5-10 minutes total)
- Verification procedures
- Troubleshooting tips
- The project is already 99% Lumi-independent!

### 🎲 [GAME_DATA_REFERENCE.md](GAME_DATA_REFERENCE.md)
**Complete game data reference:**
- All 4 schools with stats and descriptions
- All 6 events with choices and consequences
- Achievement triggers and requirements
- Ending tiers and thresholds
- Game balance analysis
- Expansion ideas and suggestions

---

## 🎯 Key Features

### ✅ Fully Implemented
- Complete 5-screen game flow
- Player name customization
- School selection with unique attributes
- Event system with meaningful choices
- Real-time stats tracking
- Transfer portal mechanic
- Year progression (4 years)
- Multiple endings based on performance
- Smooth animations and transitions
- Toast notifications for feedback
- Responsive design

### 🔄 Potential Enhancements
- Game save/load functionality
- Additional events and achievements
- Sound effects and music
- Mobile optimization
- Accessibility improvements
- Leaderboard system
- Social sharing features

---

## 🛠️ Technology Stack

**Frontend:**
- React 18.3.1 + TypeScript 5.5.3
- Vite 5.4.2 (build tool)
- Tailwind CSS 3.4.17 (styling)
- Zustand 4.4.7 (state management)
- Framer Motion 12.23.11 (animations)
- React Router DOM 6.26.0 (routing)

**No Backend Required** - Fully client-side application

---

## 📁 Project Structure

```
Bo Basset NIL Takedown Game/
├── src/
│   ├── pages/           # 5 game screens
│   ├── components/      # Reusable UI components
│   ├── store/          # Zustand state management
│   └── lib/            # Utilities (contains unused Lumi file)
├── public/             # Static assets (to be created)
├── index.html          # Entry point
└── [config files]      # Vite, TypeScript, Tailwind, ESLint
```

---

## 🎮 How to Play

1. **Start Screen** - Enter your wrestler name (or use "Bo Basset")
2. **Recruitment** - Experience the recruitment frenzy
3. **School Selection** - Choose from 4 schools with different NIL opportunities
4. **Gameplay** - Navigate events, make choices, manage stats
5. **Transfer Portal** - Switch schools for bigger paydays (optional)
6. **Ending** - See your final ranking based on total earnings

### Schools

| School | Mascot | Starting Bonus | Specialty |
|--------|--------|----------------|-----------|
| Iowa Hawkeyes | 🦅 | $25,000 | Small-town deals |
| Penn State Lions | 🦁 | $50,000 | Influencer deals |
| Virginia Tech Hokies | 🦃 | $100,000 | Oil money |
| Nebraska Cornhuskers | 🌽 | $15,000 | Legacy deals |

### Stats to Manage

- 💰 **NIL Bank Account** - Your total earnings (main score)
- ❤️ **Loyalty Meter** - Lower is better (mercenary mode!)
- 👥 **Social Clout** - Follower count and influence
- 🏆 **Wrestling Skill** - Athletic ability

---

## 🏆 Endings

| Tier | Requirement | Title | Description |
|------|-------------|-------|-------------|
| 1 | $10M+ | The G.O.A.T. 🐐 | Ultimate NIL Champion |
| 2 | $5M-$10M | The Influencer 📱 | Social Media Mogul |
| 3 | $1M-$5M | The Sellout 💸 | Decent Payday |
| 4 | <$1M | The Loyal Loser 😢 | Principled but Poor |

---

## 🔧 Development

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm build:dev    # Build for development (unminified)
pnpm preview      # Preview production build
pnpm lint         # Run ESLint
```

### Code Quality
- TypeScript for type safety
- ESLint for code quality
- Strict mode enabled
- Modern React patterns (hooks, functional components)

---

## 🚀 Deployment

The game is a static site and can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**
- Any static hosting service

### Deploy to Vercel (Example)
```bash
# Build the project
pnpm build

# Deploy (if using Vercel CLI)
npx vercel

# Or connect GitHub repo to Vercel dashboard
```

See [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) section 10 for detailed deployment instructions.

---

## 🧹 Removing Lumi Dependencies

The project currently has minimal Lumi dependencies that are **completely unused**:

1. `@lumi.new/sdk` package (never imported)
2. `src/lib/lumi.ts` file (dead code)
3. Favicon reference in `index.html`

**To remove:** Follow the [LUMI_REMOVAL_CHECKLIST.md](LUMI_REMOVAL_CHECKLIST.md) (5-10 minutes)

---

## 🎨 Design Philosophy

This game is a **satirical commentary** on:
- The commercialization of college athletics
- NIL deal culture in college sports
- The tension between loyalty and financial opportunity
- Social media influence in sports
- The absurdity of modern college recruiting

The humor is intentionally over-the-top and self-aware.

---

## 📝 License

No license currently specified. Consider adding MIT or GPL if open-sourcing.

---

## 🤝 Contributing

This project was initially scaffolded by Lumi AI and is now being transitioned to independent development.

### Future Contribution Guidelines (To Be Established)
- Code style: Follow existing TypeScript/React patterns
- Testing: Add tests for new features
- Documentation: Update relevant .md files
- Game balance: Discuss major changes to events/stats

---

## 📞 Support & Questions

For technical questions or issues:
1. Check the documentation files in this repository
2. Review the troubleshooting section in LUMI_REMOVAL_CHECKLIST.md
3. Examine the codebase (well-commented and structured)

---

## 🎯 Roadmap

### Immediate (Week 1)
- [x] Complete Lumi dependency analysis
- [ ] Remove Lumi SDK and unused files
- [ ] Create custom favicon
- [ ] Deploy to production

### Short-term (Month 1)
- [ ] Add localStorage for game saves
- [ ] Create 10+ additional events
- [ ] Expand achievement system
- [ ] Mobile optimization
- [ ] Add sound effects

### Long-term (Month 2+)
- [ ] Leaderboard system (requires backend)
- [ ] Social sharing features
- [ ] User-submitted events (moderated)
- [ ] Multiple game modes
- [ ] Expanded school roster

---

## 🙏 Acknowledgments

- **Lumi AI** - Initial project scaffolding and structure
- **Framer Motion** - Smooth animations
- **Tailwind CSS** - Rapid UI development
- **Zustand** - Simple state management

---

## 📊 Project Stats

- **Total Lines of Code:** ~1,500+ (excluding config files)
- **Components:** 5 pages + 5 components
- **Game Events:** 6 unique events with 18 total choices
- **Schools:** 4 with unique attributes
- **Endings:** 4 tiers
- **Development Time:** Scaffolded by Lumi, customized for game
- **Dependencies:** 11 production, 11 development
- **Lumi Dependencies:** 1 (unused, ready for removal)

---

## 🎮 Play Now!

Once deployed, share the link and let players experience the satirical world of college wrestling NIL deals!

**Remember:** In this game, loyalty is for losers, and money talks! 💰

---

*This project is a work of satire and parody. Any resemblance to real persons, schools, or events is purely coincidental and intended for comedic purposes.*

