# Bo Basset's NIL Takedown - Game Data Reference

This document provides a complete reference of all game data, mechanics, and balance information for development and expansion purposes.

---

## Schools Data

### 1. University of Iowa Hawkeyes 🦅
- **ID:** `iowa`
- **Coach:** Tom Brands
- **Coach Description:** "A grumbling legend who thinks NIL stands for 'Nonsense, Idiocy, and Laziness.'"
- **Vibe:** "Old-school, blue-collar powerhouse. The wrestling room smells like sweat and tradition."
- **NIL Specialty:** Small-town local deals
- **Starting Bonus:** $25,000
- **Color Theme:** Yellow

### 2. Penn State Nittany Lions 🦁
- **ID:** `pennstate`
- **Coach:** "Coach" Kale
- **Coach Description:** "A 38-year-old influencer and 'brand synergist' who vapes during practice."
- **Vibe:** "Beach party meets tech startup. Wrestling mats on a rooftop overlooking the ocean."
- **NIL Specialty:** Cringey influencer deals
- **Starting Bonus:** $50,000
- **Color Theme:** Blue

### 3. Virginia Tech Hokies 🦃
- **ID:** `virginiatech`
- **Coach:** Tex Exxon
- **Coach Description:** "A slick salesman in a cowboy hat who calls you 'son' and promises a 'fleet of drilling rigs.'"
- **Vibe:** "Windswept campus funded by a billionaire oil tycoon. Absurdly luxurious facilities."
- **NIL Specialty:** Oil money deals
- **Starting Bonus:** $100,000
- **Color Theme:** Orange

### 4. University of Nebraska Cornhuskers 🌽
- **ID:** `nebraska`
- **Coach:** Dr. Alistair Finch
- **Coach Description:** "Quotes dead philosophers and sees wrestling as 'a physical expression of Hegelian dialectics.'"
- **Vibe:** "Stuffy, pretentious, obsessed with 'the brand of the institution.'"
- **NIL Specialty:** Legacy deals
- **Starting Bonus:** $15,000
- **Color Theme:** Red

---

## Game Events (6 Total)

### Event 1: The Secret Meeting
**Description:** "A rival coach texts you: 'Meet me behind the bleachers. I've got a duffel bag with your name on it. Literally. We had it embroidered.'"

**Choices:**
1. **Take the meeting (and the bag)**
   - Money: +$75,000
   - Loyalty: -30%
   - Clout: +5,000
   - Consequence: "You pocket the cash but your current school is suspicious. Worth it!"

2. **Report it to your coach**
   - Loyalty: +20%
   - Skill: +10%
   - Consequence: "Coach is proud but you missed out on easy money. Sucker."

3. **Negotiate for more money**
   - Money: +$125,000
   - Loyalty: -50%
   - Clout: +10,000
   - Consequence: "You drive a hard bargain! But now everyone knows you're for sale."

---

### Event 2: Social Media Oops
**Description:** "You accidentally post a picture of yourself in the Lamborghini a rival booster 'lent' you. Your current school's fans are furious!"

**Choices:**
1. **Delete and deny everything**
   - Loyalty: -10%
   - Clout: -2,000
   - Consequence: "Nobody believes you, but the damage is minimal."

2. **Own it and post more flex pics**
   - Money: +$25,000
   - Loyalty: -40%
   - Clout: +15,000
   - Consequence: "You become a viral sensation! Haters gonna hate."

3. **Blame it on your "little brother"**
   - Loyalty: -5%
   - Clout: +5,000
   - Consequence: "Classic excuse. Some people buy it."

---

### Event 3: Practice vs. Payday
**Description:** "Coach wants you to drill takedowns for 3 hours. But a local mattress store is offering $20,000 to take a nap in their showroom window for 30 minutes."

**Choices:**
1. **Hit the mats with the team**
   - Skill: +25%
   - Loyalty: +10%
   - Consequence: "You're getting better, but your wallet isn't getting fatter."

2. **Take the nap money**
   - Money: +$20,000
   - Loyalty: -15%
   - Clout: +8,000
   - Consequence: "Easy money! The photos of you sleeping go viral."

3. **Negotiate to do both somehow**
   - Money: +$10,000
   - Skill: +10%
   - Loyalty: -5%
   - Consequence: "You rush through practice then sprint to the mattress store. Exhausting but profitable!"

---

### Event 4: Booster Bidding War
**Description:** "At the annual team gala, two boosters get into a live auction for your services, holding up paddles and screaming at each other."

**Choices:**
1. **Encourage the bidding war**
   - Money: +$150,000
   - Loyalty: -60%
   - Clout: +20,000
   - Consequence: "You walk away with a massive payday! Everyone knows you're a mercenary now."

2. **Try to calm them down**
   - Money: +$50,000
   - Loyalty: +5%
   - Clout: +5,000
   - Consequence: "You get a modest deal and maintain some dignity."

3. **Start your own counter-auction**
   - Money: +$200,000
   - Loyalty: -80%
   - Clout: +30,000
   - Consequence: "You auction yourself to the highest bidder! Shameless but profitable."

---

### Event 5: The Transfer Portal Beckons
**Description:** "The magical, glowing Transfer Portal appears before you. Three schools are offering insane deals to poach you."

**Choices:**
1. **Enter the portal immediately**
   - Money: +$100,000
   - Loyalty: -100%
   - Clout: +25,000
   - Consequence: "You're officially a mercenary! Your loyalty meter hits rock bottom."

2. **Use it as leverage with current school**
   - Money: +$75,000
   - Loyalty: -30%
   - Skill: +5%
   - Consequence: "Your school panics and throws money at you to stay."

3. **Resist the temptation**
   - Loyalty: +30%
   - Skill: +15%
   - Consequence: "You show loyalty but wonder what could have been..."

---

### Event 6: Crypto Deal Gone Wrong
**Description:** "Your crypto sponsorship coin 'WrestleCoin' just crashed 90%. The company wants you to promote their 'comeback' with a new coin called 'WrestleCoin2.'"

**Choices:**
1. **Double down on crypto**
   - Money: -$25,000
   - Clout: -10,000
   - Consequence: "You lose money and credibility. Shoulda stuck to wrestling."

2. **Publicly distance yourself**
   - Clout: +5,000
   - Loyalty: +10%
   - Consequence: "Smart move. You avoid the crypto crash backlash."

3. **Start your own "BoCoin"**
   - Money: +$80,000
   - Loyalty: -20%
   - Clout: +15,000
   - Consequence: "Somehow people actually buy your coin. Capitalism is wild."

---

## Player Stats

### Initial Values
- **Name:** Player-chosen (default: "Bo Basset")
- **NIL Bank Account:** $0
- **Loyalty Meter:** 50%
- **Social Clout:** 1,000 followers
- **Wrestling Skill:** 50%
- **Current School:** null
- **Year:** 1
- **Achievements:** []

### Stat Constraints
- **NIL Bank Account:** Min = $0, Max = unlimited
- **Loyalty Meter:** Min = 0%, Max = 100%
- **Social Clout:** Min = 0, Max = unlimited
- **Wrestling Skill:** Min = 0%, Max = 100%
- **Year:** Min = 1, Max = 4

---

## Achievements

### 1. The Mercenary
- **Trigger:** Loyalty Meter ≤ 10%
- **Description:** You've become a true mercenary

### 2. Millionaire
- **Trigger:** NIL Bank Account ≥ $1,000,000
- **Description:** You've reached millionaire status

### Potential Future Achievements (Not Implemented)
- **Transfer King:** Transfer schools 3+ times
- **Influencer Elite:** Social Clout ≥ 100,000
- **Wrestling Prodigy:** Wrestling Skill = 100%
- **Loyalty Legend:** Complete game with Loyalty ≥ 80%
- **Balanced Athlete:** All stats above 50% at graduation
- **Crypto Bro:** Complete crypto event with positive outcome
- **Portal Veteran:** Enter transfer portal 5+ times
- **Event Collector:** Experience all unique events in one playthrough

---

## Endings

### Tier 1: The G.O.A.T. 🐐
- **Requirement:** NIL Bank ≥ $10,000,000
- **Title:** "Ultimate NIL Champion"
- **Description:** "You are the undisputed king of NIL! You never won a national title, but you own a private jet and are dating a celebrity. You are carried off the mat on a throne made of money."
- **Color:** Yellow to Orange gradient

### Tier 2: The Influencer 📱
- **Requirement:** $5,000,000 ≤ NIL Bank < $10,000,000
- **Title:** "Social Media Mogul"
- **Description:** "Who needs wrestling? You have 20 million followers and your own line of terrible energy drinks. You lost your last match but immediately posted a video about it that got 5 million views."
- **Color:** Purple to Pink gradient

### Tier 3: The Sellout 💸
- **Requirement:** $1,000,000 ≤ NIL Bank < $5,000,000
- **Title:** "Decent Payday"
- **Description:** "You made a decent chunk of change but compromised so much you were benched for the final championship. Who cares, you're driving a Porsche."
- **Color:** Green to Blue gradient

### Tier 4: The Loyal Loser 😢
- **Requirement:** NIL Bank < $1,000,000
- **Title:** "Principled but Poor"
- **Description:** "You stuck with one school out of 'principle.' The game shows a sad cutscene of you working a 9-to-5 job while your rivals are on a yacht."
- **Color:** Gray gradient

---

## Transfer Portal Mechanics

### Transfer Offer Calculation
```javascript
baseOffer = school.startingBonus
multiplier = 1.5 + Math.random() * 1.5  // Range: 1.5x to 3x
transferOffer = Math.floor(baseOffer * multiplier)
```

### Transfer Offer Ranges
- **Iowa:** $37,500 - $75,000
- **Penn State:** $75,000 - $150,000
- **Virginia Tech:** $150,000 - $300,000
- **Nebraska:** $22,500 - $45,000

### Transfer Impact
- Adds transfer bonus to NIL Bank Account
- Changes current school
- Displays toast notification
- No direct loyalty penalty (handled by event choices)

---

## Game Balance Analysis

### Money-Making Potential

**Maximum Possible Earnings (Theoretical):**
- Starting bonus (Virginia Tech): $100,000
- Event 1 (Choice 3): +$125,000
- Event 2 (Choice 2): +$25,000
- Event 3 (Choice 2): +$20,000
- Event 4 (Choice 3): +$200,000
- Event 5 (Choice 1): +$100,000
- Event 6 (Choice 3): +$80,000
- Transfer Portal (multiple transfers): Variable, potentially +$500,000+
- **Theoretical Max:** ~$1,150,000+ (without transfers)
- **With Transfers:** $5,000,000+ possible

**Minimum Possible Earnings:**
- Starting bonus (Nebraska): $15,000
- All loyalty-focused choices: $0 from events
- Event 6 (Choice 1): -$25,000
- **Theoretical Min:** -$10,000 (but capped at $0)

### Loyalty Meter Dynamics

**Maximum Loyalty Loss (Single Playthrough):**
- Event 1 (Choice 3): -50%
- Event 2 (Choice 2): -40%
- Event 3 (Choice 2): -15%
- Event 4 (Choice 3): -80%
- Event 5 (Choice 1): -100%
- Event 6 (Choice 3): -20%
- **Total Possible Loss:** -305% (but capped at 0%)

**Maximum Loyalty Gain:**
- Event 1 (Choice 2): +20%
- Event 3 (Choice 1): +10%
- Event 4 (Choice 2): +5%
- Event 5 (Choice 3): +30%
- Event 6 (Choice 2): +10%
- **Total Possible Gain:** +75% (starting at 50% = max 125%, capped at 100%)

### Event Frequency
- Events don't repeat (tracked in eventHistory)
- 6 unique events total
- 4 years of gameplay
- Players will see all events if they play long enough
- Random selection from available (unseen) events

---

## UI/UX Design Patterns

### Color Scheme
- **Primary Background:** Gradient from slate-900 via purple-900 to slate-900
- **Accent Colors:** Purple-600, Pink-600, Yellow-400
- **Success/Money:** Green-400
- **Loyalty (High):** Red-400 (ironic - high loyalty is "bad")
- **Loyalty (Low):** Green-400 (low loyalty is "good")
- **Clout:** Blue-400
- **Skill:** Purple-400

### Animation Patterns
- **Page Transitions:** Fade in with opacity 0→1
- **Cards:** Slide up with y: 30→0
- **Buttons:** Scale on hover (1.05), scale on tap (0.95)
- **Portal:** Continuous rotation (360° every 3s)
- **Background Icons:** Floating money emojis

### Typography
- **Headings:** Bold, large (4xl-8xl)
- **Body:** Regular, medium (lg-xl)
- **Stats:** Bold, colored by type
- **Consequences:** Italic, gray-400

---

## Future Expansion Ideas

### New Events (Suggestions)
1. **NIL Audit** - IRS investigates your deals
2. **Injury Scare** - Miss season, lose sponsorships
3. **Rival Trash Talk** - Social media beef opportunity
4. **Championship Match** - Win for skill, throw for money
5. **Documentary Offer** - Netflix wants your story
6. **Endorsement Deal** - Major brand (Nike, Gatorade)
7. **Academic Scandal** - Tutor offers to write papers
8. **Fan Meet & Greet** - Charge for autographs
9. **Podcast Appearance** - Joe Rogan invites you
10. **Gambling Scandal** - Bet on your own matches

### New Schools (Suggestions)
- **Oklahoma State Cowboys** - Traditional powerhouse
- **Michigan Wolverines** - Big Ten rival
- **Arizona State Sun Devils** - Party school vibe
- **Ohio State Buckeyes** - Corporate sponsorship focus

### New Mechanics (Suggestions)
- **Injury System** - Random injuries affect skill
- **Reputation System** - Affects deal quality
- **Coach Relationships** - Unlock special events
- **Rival System** - Recurring antagonist
- **Season Performance** - Win/loss record affects clout
- **Draft System** - Professional wrestling offers

---

## Technical Notes for Developers

### Adding New Events
1. Add event object to `gameEvents` array in `gameStore.ts`
2. Follow existing structure (id, title, description, choices)
3. Each choice needs: text, effects, consequence
4. Effects can include: money, loyalty, clout, skill
5. Event IDs must be unique

### Adding New Schools
1. Add school object to `schools` array in `gameStore.ts`
2. Required fields: id, name, mascot, coach, coachDescription, vibe, nilSpecialty, startingBonus, color
3. Update `getColorClasses` in `SchoolCard.tsx` if adding new color

### Adding New Achievements
1. Add trigger logic in `processChoice` function
2. Check if achievement already exists before adding
3. Use `addAchievement` action
4. Display in `EndingScreen.tsx` and `GameScreen.tsx`

### Modifying Endings
1. Update `getEndingData` function in `EndingScreen.tsx`
2. Adjust money thresholds as needed
3. Update title, subtitle, description, colors, icon

---

## Data Export Format

All game data is currently hardcoded in `src/store/gameStore.ts`. For easier management, consider extracting to JSON files:

```
src/data/
  ├── schools.json
  ├── events.json
  ├── achievements.json
  └── endings.json
```

This would allow non-developers to modify game content without touching TypeScript code.

