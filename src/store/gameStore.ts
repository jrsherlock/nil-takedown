import { create } from 'zustand'

export interface School {
  id: string
  name: string
  mascot: string
  coach: string
  coachDescription: string
  vibe: string
  nilSpecialty: string
  startingBonus: number
  color: string
}

export interface Player {
  name: string
  nilBankAccount: number
  loyaltyMeter: number
  socialClout: number
  wrestlingSkill: number
  currentSchool: string | null
  year: number
  achievements: string[]
}

export interface GameEvent {
  id: string
  title: string
  description: string
  choices: {
    text: string
    effects: {
      money?: number
      loyalty?: number
      clout?: number
      skill?: number
    }
    consequence: string
  }[]
}

interface GameStore {
  gamePhase: 'start' | 'recruitment' | 'school-selection' | 'playing' | 'ended'
  player: Player
  schools: School[]
  currentEvent: GameEvent | null
  eventHistory: string[]
  
  // Actions
  setGamePhase: (phase: GameStore['gamePhase']) => void
  initializePlayer: (name: string) => void
  selectSchool: (schoolId: string) => void
  processChoice: (choiceIndex: number) => void
  generateRandomEvent: () => void
  advanceYear: () => void
  resetGame: () => void
  addAchievement: (achievement: string) => void
}

const schools: School[] = [
  {
    id: 'iowa',
    name: 'University of Iowa Hawkeyes',
    mascot: '🦅',
    coach: 'Tom Brands',
    coachDescription: 'A grumbling legend who thinks NIL stands for "Nonsense, Idiocy, and Laziness."',
    vibe: 'Old-school, blue-collar powerhouse. The wrestling room smells like sweat and tradition.',
    nilSpecialty: 'Small-town local deals',
    startingBonus: 25000,
    color: 'yellow'
  },
  {
    id: 'pennstate',
    name: 'Penn State Nittany Lions',
    mascot: '🦁',
    coach: '"Coach" Kale',
    coachDescription: 'A 38-year-old influencer and "brand synergist" who vapes during practice.',
    vibe: 'Beach party meets tech startup. Wrestling mats on a rooftop overlooking the ocean.',
    nilSpecialty: 'Cringey influencer deals',
    startingBonus: 50000,
    color: 'blue'
  },
  {
    id: 'virginiatech',
    name: 'Virginia Tech Hokies',
    mascot: '🦃',
    coach: 'Tex Exxon',
    coachDescription: 'A slick salesman in a cowboy hat who calls you "son" and promises a "fleet of drilling rigs."',
    vibe: 'Windswept campus funded by a billionaire oil tycoon. Absurdly luxurious facilities.',
    nilSpecialty: 'Oil money deals',
    startingBonus: 100000,
    color: 'orange'
  },
  {
    id: 'nebraska',
    name: 'University of Nebraska Cornhuskers',
    mascot: '🌽',
    coach: 'Dr. Alistair Finch',
    coachDescription: 'Quotes dead philosophers and sees wrestling as "a physical expression of Hegelian dialectics."',
    vibe: 'Stuffy, pretentious, obsessed with "the brand of the institution."',
    nilSpecialty: 'Legacy deals',
    startingBonus: 15000,
    color: 'red'
  }
]

const gameEvents: GameEvent[] = [
  {
    id: 'secret-meeting',
    title: 'The Secret Meeting',
    description: 'A rival coach texts you: "Meet me behind the bleachers. I\'ve got a duffel bag with your name on it. Literally. We had it embroidered."',
    choices: [
      {
        text: 'Take the meeting (and the bag)',
        effects: { money: 75000, loyalty: -30, clout: 5000 },
        consequence: 'You pocket the cash but your current school is suspicious. Worth it!'
      },
      {
        text: 'Report it to your coach',
        effects: { loyalty: 20, skill: 10 },
        consequence: 'Coach is proud but you missed out on easy money. Sucker.'
      },
      {
        text: 'Negotiate for more money',
        effects: { money: 125000, loyalty: -50, clout: 10000 },
        consequence: 'You drive a hard bargain! But now everyone knows you\'re for sale.'
      }
    ]
  },
  {
    id: 'social-media-gaffe',
    title: 'Social Media Oops',
    description: 'You accidentally post a picture of yourself in the Lamborghini a rival booster "lent" you. Your current school\'s fans are furious!',
    choices: [
      {
        text: 'Delete and deny everything',
        effects: { loyalty: -10, clout: -2000 },
        consequence: 'Nobody believes you, but the damage is minimal.'
      },
      {
        text: 'Own it and post more flex pics',
        effects: { money: 25000, loyalty: -40, clout: 15000 },
        consequence: 'You become a viral sensation! Haters gonna hate.'
      },
      {
        text: 'Blame it on your "little brother"',
        effects: { loyalty: -5, clout: 5000 },
        consequence: 'Classic excuse. Some people buy it.'
      }
    ]
  },
  {
    id: 'practice-vs-payday',
    title: 'Practice vs. Payday',
    description: 'Coach wants you to drill takedowns for 3 hours. But a local mattress store is offering $20,000 to take a nap in their showroom window for 30 minutes.',
    choices: [
      {
        text: 'Hit the mats with the team',
        effects: { skill: 25, loyalty: 10 },
        consequence: 'You\'re getting better, but your wallet isn\'t getting fatter.'
      },
      {
        text: 'Take the nap money',
        effects: { money: 20000, loyalty: -15, clout: 8000 },
        consequence: 'Easy money! The photos of you sleeping go viral.'
      },
      {
        text: 'Negotiate to do both somehow',
        effects: { money: 10000, skill: 10, loyalty: -5 },
        consequence: 'You rush through practice then sprint to the mattress store. Exhausting but profitable!'
      }
    ]
  },
  {
    id: 'booster-bidding-war',
    title: 'Booster Bidding War',
    description: 'At the annual team gala, two boosters get into a live auction for your services, holding up paddles and screaming at each other.',
    choices: [
      {
        text: 'Encourage the bidding war',
        effects: { money: 150000, loyalty: -60, clout: 20000 },
        consequence: 'You walk away with a massive payday! Everyone knows you\'re a mercenary now.'
      },
      {
        text: 'Try to calm them down',
        effects: { money: 50000, loyalty: 5, clout: 5000 },
        consequence: 'You get a modest deal and maintain some dignity.'
      },
      {
        text: 'Start your own counter-auction',
        effects: { money: 200000, loyalty: -80, clout: 30000 },
        consequence: 'You auction yourself to the highest bidder! Shameless but profitable.'
      }
    ]
  },
  {
    id: 'transfer-portal-temptation',
    title: 'The Transfer Portal Beckons',
    description: 'The magical, glowing Transfer Portal appears before you. Three schools are offering insane deals to poach you.',
    choices: [
      {
        text: 'Enter the portal immediately',
        effects: { money: 100000, loyalty: -100, clout: 25000 },
        consequence: 'You\'re officially a mercenary! Your loyalty meter hits rock bottom.'
      },
      {
        text: 'Use it as leverage with current school',
        effects: { money: 75000, loyalty: -30, skill: 5 },
        consequence: 'Your school panics and throws money at you to stay.'
      },
      {
        text: 'Resist the temptation',
        effects: { loyalty: 30, skill: 15 },
        consequence: 'You show loyalty but wonder what could have been...'
      }
    ]
  },
  {
    id: 'crypto-sponsorship',
    title: 'Crypto Deal Gone Wrong',
    description: 'Your crypto sponsorship coin "WrestleCoin" just crashed 90%. The company wants you to promote their "comeback" with a new coin called "WrestleCoin2."',
    choices: [
      {
        text: 'Double down on crypto',
        effects: { money: -25000, clout: -10000 },
        consequence: 'You lose money and credibility. Shoulda stuck to wrestling.'
      },
      {
        text: 'Publicly distance yourself',
        effects: { clout: 5000, loyalty: 10 },
        consequence: 'Smart move. You avoid the crypto crash backlash.'
      },
      {
        text: 'Start your own "BoCoin"',
        effects: { money: 80000, loyalty: -20, clout: 15000 },
        consequence: 'Somehow people actually buy your coin. Capitalism is wild.'
      }
    ]
  }
]

export const useGameStore = create<GameStore>((set, get) => ({
  gamePhase: 'start',
  player: {
    name: '',
    nilBankAccount: 0,
    loyaltyMeter: 50,
    socialClout: 1000,
    wrestlingSkill: 50,
    currentSchool: null,
    year: 1,
    achievements: []
  },
  schools,
  currentEvent: null,
  eventHistory: [],

  setGamePhase: (phase) => set({ gamePhase: phase }),

  initializePlayer: (name) => set({
    player: {
      name,
      nilBankAccount: 0,
      loyaltyMeter: 50,
      socialClout: 1000,
      wrestlingSkill: 50,
      currentSchool: null,
      year: 1,
      achievements: []
    }
  }),

  selectSchool: (schoolId) => {
    const school = schools.find(s => s.id === schoolId)
    if (school) {
      set(state => ({
        player: {
          ...state.player,
          currentSchool: schoolId,
          nilBankAccount: state.player.nilBankAccount + school.startingBonus
        },
        gamePhase: 'playing'
      }))
    }
  },

  processChoice: (choiceIndex) => {
    const { currentEvent, player } = get()
    if (!currentEvent) return

    const choice = currentEvent.choices[choiceIndex]
    const effects = choice.effects

    set(state => ({
      player: {
        ...state.player,
        nilBankAccount: Math.max(0, state.player.nilBankAccount + (effects.money || 0)),
        loyaltyMeter: Math.max(0, Math.min(100, state.player.loyaltyMeter + (effects.loyalty || 0))),
        socialClout: Math.max(0, state.player.socialClout + (effects.clout || 0)),
        wrestlingSkill: Math.max(0, Math.min(100, state.player.wrestlingSkill + (effects.skill || 0)))
      },
      eventHistory: [...state.eventHistory, `${currentEvent.title}: ${choice.consequence}`],
      currentEvent: null
    }))

    // Check for achievements
    const newPlayer = {
      ...player,
      loyaltyMeter: Math.max(0, Math.min(100, player.loyaltyMeter + (effects.loyalty || 0))),
      nilBankAccount: Math.max(0, player.nilBankAccount + (effects.money || 0))
    }

    if (newPlayer.loyaltyMeter <= 10 && !player.achievements.includes('The Mercenary')) {
      get().addAchievement('The Mercenary')
    }
    if (newPlayer.nilBankAccount >= 1000000 && !player.achievements.includes('Millionaire')) {
      get().addAchievement('Millionaire')
    }
  },

  generateRandomEvent: () => {
    const availableEvents = gameEvents.filter(event => 
      !get().eventHistory.some(history => history.includes(event.title))
    )
    
    if (availableEvents.length > 0) {
      const randomEvent = availableEvents[Math.floor(Math.random() * availableEvents.length)]
      set({ currentEvent: randomEvent })
    }
  },

  advanceYear: () => {
    set(state => {
      const newYear = state.player.year + 1
      if (newYear > 4) {
        return { gamePhase: 'ended' }
      }
      return {
        player: { ...state.player, year: newYear }
      }
    })
  },

  addAchievement: (achievement) => {
    set(state => ({
      player: {
        ...state.player,
        achievements: [...state.player.achievements, achievement]
      }
    }))
  },

  resetGame: () => set({
    gamePhase: 'start',
    player: {
      name: '',
      nilBankAccount: 0,
      loyaltyMeter: 50,
      socialClout: 1000,
      wrestlingSkill: 50,
      currentSchool: null,
      year: 1,
      achievements: []
    },
    currentEvent: null,
    eventHistory: []
  })
}))