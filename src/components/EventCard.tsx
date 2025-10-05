import React from 'react'
import { motion } from 'framer-motion'
import {DollarSign, Heart, Users, Trophy, TrendingUp, TrendingDown} from 'lucide-react'
import { GameEvent, useGameStore } from '../store/gameStore'

interface EventCardProps {
  event: GameEvent
}

const EventCard = ({ event }: EventCardProps) => {
  const { processChoice } = useGameStore()

  const getEffectIcon = (effects: any) => {
    if (effects.money && effects.money > 0) return <DollarSign className="w-4 h-4 text-green-400" />
    if (effects.money && effects.money < 0) return <TrendingDown className="w-4 h-4 text-red-400" />
    if (effects.loyalty && effects.loyalty > 0) return <Heart className="w-4 h-4 text-red-400" />
    if (effects.loyalty && effects.loyalty < 0) return <TrendingDown className="w-4 h-4 text-green-400" />
    if (effects.clout && effects.clout > 0) return <Users className="w-4 h-4 text-blue-400" />
    if (effects.skill && effects.skill > 0) return <Trophy className="w-4 h-4 text-purple-400" />
    return <TrendingUp className="w-4 h-4 text-gray-400" />
  }

  const formatEffect = (key: string, value: number) => {
    const prefix = value > 0 ? '+' : ''
    switch (key) {
      case 'money':
        return `${prefix}$${value.toLocaleString()}`
      case 'loyalty':
        return `${prefix}${value}% Loyalty`
      case 'clout':
        return `${prefix}${value.toLocaleString()} Followers`
      case 'skill':
        return `${prefix}${value}% Wrestling`
      default:
        return `${prefix}${value}`
    }
  }

  const getEffectColor = (key: string, value: number) => {
    if (key === 'money') return value > 0 ? 'text-green-400' : 'text-red-400'
    if (key === 'loyalty') return value > 0 ? 'text-red-400' : 'text-green-400' // Lower loyalty is better!
    if (key === 'clout') return 'text-blue-400'
    if (key === 'skill') return 'text-purple-400'
    return 'text-gray-400'
  }

  return (
    <motion.div 
      className="bg-gradient-to-br from-slate-900/80 to-purple-900/80 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Event Header */}
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-white mb-3">
          {event.title}
        </h2>
        <p className="text-lg text-gray-200 leading-relaxed">
          {event.description}
        </p>
      </motion.div>

      {/* Choices */}
      <div className="space-y-4">
        {event.choices.map((choice, index) => (
          <motion.button
            key={index}
            onClick={() => processChoice(index)}
            className="w-full text-left p-4 bg-gradient-to-r from-slate-800/50 to-gray-800/50 hover:from-slate-700/50 hover:to-gray-700/50 rounded-lg border border-gray-600/30 hover:border-purple-500/50 transition-all duration-200 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex justify-between items-start mb-2">
              <p className="text-white font-semibold group-hover:text-yellow-300 transition-colors">
                {choice.text}
              </p>
              <div className="flex space-x-2">
                {Object.entries(choice.effects).map(([key, value]) => (
                  <div key={key} className="flex items-center space-x-1">
                    {getEffectIcon(choice.effects)}
                    <span className={`text-sm font-semibold ${getEffectColor(key, value as number)}`}>
                      {formatEffect(key, value as number)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-sm text-gray-400 italic">
              "{choice.consequence}"
            </p>
          </motion.button>
        ))}
      </div>

      {/* Event Flavor */}
      <motion.div 
        className="mt-6 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-yellow-300 text-sm italic text-center">
          💡 Remember: Every choice shapes your NIL empire. Choose wisely... or don't! 💰
        </p>
      </motion.div>
    </motion.div>
  )
}

export default EventCard