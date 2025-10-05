# Bo Bassett's NIL Takedown - Project Overview & Technical Documentation

## 1. Project Summary

**Bo Bassett's NIL Takedown** is a satirical, narrative-driven choice-based RPG web game that simulates the experience of a college wrestling recruit navigating the NIL (Name, Image, Likeness) landscape. Players make strategic decisions to maximize their NIL earnings across four years of college eligibility while managing loyalty, social clout, and wrestling skills.

The game features a modern, animated user interface with a dark purple/pink gradient aesthetic, smooth transitions, and engaging visual feedback. It's built as a single-page application (SPA) with client-side state management and no backend requirements.

---

## 2. Game Concept Overview

### Core Mechanics
- **Player Character**: Bo Bassett, a five-star wrestling recruit
- **Objective**: Maximize NIL Bank Account earnings over 4 years of college eligibility
- **Game Flow**: Start Screen → Recruitment → School Selection → Gameplay Loop → Ending

### Key Stats (Tracked Throughout Game)
1. **NIL Bank Account** - Primary score metric (money earned)
2. **Loyalty Meter** - Inverse scoring (lower = more mercenary = better for earnings)
3. **Social Clout** - Follower count and social media influence
4. **Wrestling Skill** - Athletic ability percentage

### School Options (4 Total)
1. **University of Iowa Hawkeyes** 🦅 - Old-school, $25K starting bonus
2. **Penn State Nittany Lions** 🦁 - Influencer culture, $50K starting bonus
3. **Virginia Tech Hokies** 🦃 - Oil money, $100K starting bonus
4. **University of Nebraska Cornhuskers** 🌽 - Legacy deals, $15K starting bonus

### Game Events (6 Unique Events)
- Secret Meeting (rival coach bribery)
- Social Media Oops (Lamborghini scandal)
- Practice vs. Payday (mattress store nap deal)
- Booster Bidding War (live auction)
- Transfer Portal Temptation (school switching)
- Crypto Sponsorship (WrestleCoin disaster)

### Transfer Portal Mechanic
- Players can switch schools mid-game
- Transfer offers range from 1.5x to 3x the school's base bonus
- Severely impacts loyalty meter

### Endings (4 Tiers Based on Total Earnings)
1. **$10M+**: "The G.O.A.T." 🐐 - Ultimate NIL Champion
2. **$5M-$10M**: "The Influencer" 📱 - Social Media Mogul
3. **$1M-$5M**: "The Sellout" 💸 - Decent Payday
4. **<$1M**: "The Loyal Loser" 😢 - Principled but Poor

### Achievements System
- "The Mercenary" - Loyalty ≤ 10%
- "Millionaire" - NIL Bank ≥ $1,000,000

---

## 3. Technology Stack

### Frontend Framework & Libraries
- **React 18.3.1** - UI framework
- **TypeScript 5.5.3** - Type-safe JavaScript
- **React Router DOM 6.26.0** - Client-side routing
- **Zustand 4.4.7** - Lightweight state management
- **Framer Motion 12.23.11** - Animation library
- **Lucide React 0.540.0** - Icon library
- **React Hot Toast 2.5.2** - Toast notifications

### Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.21** - CSS vendor prefixing

### Build Tools & Development
- **Vite 5.4.2** - Build tool and dev server
- **@vitejs/plugin-react-swc 3.11.0** - Fast React refresh with SWC compiler
- **pnpm** - Package manager (evidenced by pnpm-lock.yaml)

### Code Quality
- **ESLint 9.9.1** - Linting
- **TypeScript ESLint 8.3.0** - TypeScript-specific linting
- **eslint-plugin-react-hooks** - React hooks linting
- **eslint-plugin-react-refresh** - React refresh linting

### Lumi Platform Dependencies ⚠️
- **@lumi.new/sdk 0.1.10** - Lumi proprietary SDK (CURRENTLY UNUSED IN CODE)

---

## 4. Project Structure

```
Bo Bassett NIL Takedown Game/
├── index.html                 # Entry HTML file (contains Lumi favicon reference)
├── package.json               # Dependencies and scripts
├── pnpm-lock.yaml            # Package lock file
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript root config
├── tsconfig.app.json         # App-specific TypeScript config
├── tsconfig.node.json        # Node-specific TypeScript config
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── eslint.config.js          # ESLint configuration
└── src/
    ├── main.tsx              # Application entry point
    ├── App.tsx               # Root component with routing
    ├── index.css             # Global styles (Tailwind imports)
    ├── vite-env.d.ts         # Vite type definitions
    ├── lib/
    │   └── lumi.ts           # Lumi SDK client (UNUSED)
    ├── store/
    │   └── gameStore.ts      # Zustand state management (368 lines)
    ├── pages/
    │   ├── StartScreen.tsx   # Game start/player name entry
    │   ├── RecruitmentScreen.tsx  # Recruitment phase narrative
    │   ├── SchoolSelection.tsx    # School choice screen
    │   ├── GameScreen.tsx    # Main gameplay loop
    │   └── EndingScreen.tsx  # Game over/results screen
    └── components/
        ├── GameLayout.tsx    # Layout wrapper with decorative elements
        ├── StatsPanel.tsx    # Player stats display
        ├── EventCard.tsx     # Event presentation and choice UI
        ├── SchoolCard.tsx    # School selection card
        └── TransferPortal.tsx # Transfer portal UI
```

### Key Files Analysis

**gameStore.ts (368 lines)** - Contains:
- All game data (schools, events)
- Player state management
- Game logic (choice processing, year advancement, achievements)
- No external API calls or backend dependencies

**App.tsx** - Implements:
- React Router with 5 routes
- Phase-based navigation
- Toast notification setup
- No Lumi SDK usage

---

## 5. Lumi-Specific Dependencies

### Critical Findings

#### ✅ GOOD NEWS: Minimal Lumi Integration
The project has **very minimal** Lumi dependencies and is **already 99% independent**:

1. **src/lib/lumi.ts** (10 lines)
   - Creates Lumi SDK client
   - **COMPLETELY UNUSED** - No imports found anywhere in the codebase
   - Project ID: `p365300054943068160`
   - API endpoints: `https://api.lumi.new` and `https://auth.lumi.new`
   - **Status**: Dead code, safe to delete

2. **package.json**
   - Dependency: `"@lumi.new/sdk": "0.1.10"`
   - **COMPLETELY UNUSED** - Only imported in the unused lumi.ts file
   - **Status**: Safe to remove

3. **index.html** (Line 5)
   - Favicon reference: `<link rel="icon" href="https://lumi.new/lumi.ing/logo.png" />`
   - **Status**: External CDN reference, should be replaced with local favicon

### What Lumi Likely Provided
Based on the code structure, Lumi appears to have scaffolded:
- Initial project structure (Vite + React + TypeScript + Tailwind)
- Standard configuration files (tsconfig, eslint, vite.config)
- The lumi.ts client file (unused boilerplate)
- Favicon reference in HTML

### What Lumi Did NOT Control
- **All game logic** - Completely custom, no Lumi APIs used
- **All UI components** - Custom React components
- **State management** - Pure Zustand, no Lumi integration
- **Routing** - Standard React Router
- **Build process** - Standard Vite, no Lumi-specific build steps

---

## 6. Required Refactoring

### Priority: CRITICAL
**None** - The application is already fully functional without Lumi dependencies.

### Priority: HIGH
1. **Remove Lumi SDK Dependency**
   - **File**: `package.json`
   - **Action**: Remove `"@lumi.new/sdk": "0.1.10"` from dependencies
   - **Command**: `pnpm remove @lumi.new/sdk`
   - **Impact**: None - package is unused
   - **Effort**: 1 minute

2. **Delete Lumi Client File**
   - **File**: `src/lib/lumi.ts`
   - **Action**: Delete entire file
   - **Impact**: None - file is never imported
   - **Effort**: 1 minute

3. **Replace Favicon Reference**
   - **File**: `index.html` (line 5)
   - **Current**: `<link rel="icon" href="https://lumi.new/lumi.ing/logo.png" />`
   - **Action**: Replace with local favicon or remove
   - **Suggested**: Create a custom wrestling/money-themed favicon
   - **Impact**: Visual only - external CDN dependency removed
   - **Effort**: 5-10 minutes

### Priority: MEDIUM
4. **Add Local Favicon Asset**
   - **Location**: `public/` directory (needs to be created)
   - **Action**: Create `public/favicon.ico` or `public/favicon.svg`
   - **Suggested Design**: Wrestling mat + dollar sign icon
   - **Effort**: 15-30 minutes (including design)

### Priority: LOW
5. **Clean Up Empty lib Directory**
   - **File**: `src/lib/` directory
   - **Action**: Delete directory after removing lumi.ts (if no other files planned)
   - **Alternative**: Keep for future utility functions
   - **Effort**: 1 minute

---

## 7. Current State Assessment

### ✅ Fully Implemented Features
- [x] Complete game flow (5 screens)
- [x] Player name customization
- [x] School selection (4 schools with unique attributes)
- [x] Event system (6 unique events with 3 choices each)
- [x] Stats tracking (4 key metrics)
- [x] Transfer portal mechanic
- [x] Year progression (4 years)
- [x] Achievement system (2 achievements)
- [x] Multiple endings (4 tiers)
- [x] Responsive UI with animations
- [x] Toast notifications for feedback
- [x] State persistence during session (Zustand)

### ⚠️ Partially Implemented / Could Be Enhanced
- [ ] **Data Persistence** - No localStorage/sessionStorage (game resets on refresh)
- [ ] **Additional Events** - Only 6 events (could add more variety)
- [ ] **More Achievements** - Only 2 achievements defined
- [ ] **Sound Effects** - No audio implementation
- [ ] **Mobile Optimization** - Responsive but could be tested/improved
- [ ] **Accessibility** - No ARIA labels or keyboard navigation
- [ ] **Analytics** - No tracking of player choices/outcomes

### ❌ Not Implemented (Based on Game Concept)
- [ ] **Save/Load Game** - No game state persistence
- [ ] **Leaderboard** - No score comparison system
- [ ] **Social Sharing** - No share functionality for endings
- [ ] **Tutorial/Help** - No in-game instructions
- [ ] **Settings** - No volume controls, difficulty settings, etc.

### 🎯 Game Balance Observations
- Transfer portal offers are randomized (1.5x-3x multiplier)
- Events don't repeat (tracked in eventHistory)
- Loyalty meter is capped at 0-100%
- Wrestling skill is capped at 0-100%
- NIL Bank Account has no upper limit
- No negative money allowed (Math.max(0, ...))

---

## 8. Development Setup

### Prerequisites
- **Node.js** - Version 18+ recommended (for ES2020+ support)
- **pnpm** - Package manager (or npm/yarn as alternatives)

### Installation
```bash
# Install dependencies
pnpm install

# Alternative with npm
npm install
```

### Development Commands
```bash
# Start development server (with hot reload)
pnpm dev
# Runs on http://localhost:5173 by default

# Build for production
pnpm build
# Outputs to ./dist directory

# Build for development (unminified)
pnpm build:dev

# Preview production build
pnpm preview

# Run linter
pnpm lint
```

### Environment
- **No environment variables required** - All configuration is hardcoded
- **No backend required** - Fully client-side application
- **No database required** - All data is in-memory

### Browser Compatibility
- Modern browsers supporting ES2020
- Tested targets: Chrome, Firefox, Safari, Edge (latest versions)

---

## 9. Next Steps: Transitioning Away from Lumi

### Immediate Actions (< 5 minutes)
1. ✅ **Remove Lumi SDK package**
   ```bash
   pnpm remove @lumi.new/sdk
   ```

2. ✅ **Delete unused Lumi client file**
   ```bash
   rm src/lib/lumi.ts
   ```

3. ✅ **Update favicon in index.html**
   - Option A: Remove the line entirely (browser will use default)
   - Option B: Replace with placeholder: `<link rel="icon" href="/favicon.ico" />`

### Short-term Enhancements (1-2 hours)
4. **Create custom favicon**
   - Design a wrestling/money-themed icon
   - Add to `public/favicon.ico`
   - Update index.html reference

5. **Add localStorage persistence**
   - Save game state on each action
   - Load saved game on app start
   - Add "Continue Game" option to start screen

6. **Improve mobile experience**
   - Test on various screen sizes
   - Adjust font sizes and spacing for mobile
   - Optimize animations for performance

### Medium-term Improvements (1-2 days)
7. **Expand game content**
   - Add 10-15 more unique events
   - Create more achievements (10-15 total)
   - Add random event variations

8. **Add quality-of-life features**
   - Game settings (animation speed, etc.)
   - Tutorial/help screen
   - Event history viewer
   - Statistics dashboard

9. **Implement analytics** (optional)
   - Track player choices (privacy-friendly)
   - Analyze ending distribution
   - Use for game balance adjustments

### Long-term Considerations (1+ weeks)
10. **Deployment options**
    - **Static hosting**: Netlify, Vercel, GitHub Pages, Cloudflare Pages
    - **Custom domain**: Purchase and configure DNS
    - **CI/CD**: Automated builds on git push

11. **Monetization** (if desired)
    - Ad integration (Google AdSense)
    - Premium version with more content
    - Merchandise (satirical wrestling/NIL themed)

12. **Community features**
    - Leaderboard (requires backend)
    - Social sharing of endings
    - User-submitted events (moderated)

---

## 10. Deployment Recommendations

### Best Options for Static Hosting (No Backend Needed)

1. **Vercel** (Recommended)
   - Automatic builds from Git
   - Free tier includes custom domains
   - Excellent performance
   - Setup: Connect GitHub repo, auto-detects Vite

2. **Netlify**
   - Similar to Vercel
   - Drag-and-drop deployment option
   - Free tier with custom domains

3. **GitHub Pages**
   - Free for public repos
   - Requires build script adjustment
   - Good for open-source projects

4. **Cloudflare Pages**
   - Fast global CDN
   - Generous free tier
   - Good DDoS protection

### Deployment Steps (Vercel Example)
```bash
# 1. Build the project
pnpm build

# 2. Test the build locally
pnpm preview

# 3. Deploy to Vercel (if using Vercel CLI)
npx vercel

# Or connect GitHub repo to Vercel dashboard for auto-deployment
```

---

## 11. Technical Debt & Code Quality

### Strengths
- ✅ TypeScript for type safety
- ✅ Clean component structure
- ✅ Centralized state management
- ✅ Consistent naming conventions
- ✅ Good separation of concerns
- ✅ Modern React patterns (hooks, functional components)

### Areas for Improvement
- ⚠️ No unit tests (consider Vitest + React Testing Library)
- ⚠️ No E2E tests (consider Playwright or Cypress)
- ⚠️ Magic numbers in code (e.g., achievement thresholds)
- ⚠️ No error boundaries for React error handling
- ⚠️ No loading states (though not needed for current implementation)
- ⚠️ Inline styles in some components (could extract to Tailwind config)

### Suggested Refactors (Optional)
- Extract game data to separate JSON files
- Create constants file for magic numbers
- Add PropTypes or stricter TypeScript interfaces
- Implement error boundaries
- Add unit tests for game logic functions

---

## 12. License & Legal Considerations

### Current Status
- No LICENSE file present
- No copyright notices
- No terms of service

### Recommendations
- Add MIT or GPL license if open-sourcing
- Add disclaimer about satirical nature
- Consider NCAA/NIL trademark implications (parody/satire protection)
- Add privacy policy if collecting any data

---

## Conclusion

**The project is in excellent shape and requires minimal work to be fully independent from Lumi.** The Lumi SDK is already completely unused in the codebase, making the transition trivial. The game is feature-complete for its core concept and ready for deployment with just 3 simple cleanup tasks (removing SDK, deleting unused file, replacing favicon).

The codebase is well-structured, modern, and maintainable. Lumi provided a solid foundation with the initial scaffolding, but all game-specific logic and features are custom-built and Lumi-independent.

**Estimated time to complete Lumi removal: 5-10 minutes**
**Estimated time to deploy: 15-30 minutes (including favicon creation)**

