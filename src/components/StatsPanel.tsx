import React from 'react'
import { motion } from 'framer-motion'
import {DollarSign, Heart, Users, Trophy} from 'lucide-react'
import { useGameStore } from '../store/gameStore'

const StatsPanel = () => {
  const { player } = useGameStore()

  const stats = [
    {
      icon: DollarSign,
      label: 'NIL Bank Account',
      value: `$${player.nilBankAccount.toLocaleString()}`,
      color: 'text-green-400',
      bgColor: 'bg-green-900/50',
      borderColor: 'border-green-500/30'
    },
    {
      icon: Heart,
      label: 'Loyalty Meter',
      value: `${player.loyaltyMeter}%`,
      color: player.loyaltyMeter <= 20 ? 'text-red-400' : player.loyaltyMeter <= 50 ? 'text-yellow-400' : 'text-green-400',
      bgColor: player.loyaltyMeter <= 20 ? 'bg-red-900/50' : player.loyaltyMeter <= 50 ? 'bg-yellow-900/50' : 'bg-green-900/50',
      borderColor: player.loyaltyMeter <= 20 ? 'border-red-500/30' : player.loyaltyMeter <= 50 ? 'border-yellow-500/30' : 'border-green-500/30',
      subtitle: player.loyaltyMeter <= 10 ? '🎯 MERCENARY MODE!' : player.loyaltyMeter <= 30 ? 'Getting shady...' : 'Still has some principles'
    },
    {
      icon: Users,
      label: 'Social Clout',
      value: `${player.socialClout.toLocaleString()} followers`,
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/50',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: Trophy,
      label: 'Wrestling Skill',
      value: `${player.wrestlingSkill}%`,
      color: 'text-purple-400',
      bgColor: 'bg-purple-900/50',
      borderColor: 'border-purple-500/30',
      subtitle: player.wrestlingSkill <= 30 ? 'Who needs skills?' : player.wrestlingSkill >= 80 ? 'Actually good!' : 'Decent wrestler'
    }
  ]

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {stats.map((stat, index) => {
        const StatIcon = stat.icon
        return (
          <motion.div
            key={stat.label}
            className={`${stat.bgColor} backdrop-blur-sm rounded-xl p-4 border ${stat.borderColor}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-3 mb-2">
              <StatIcon className={`w-6 h-6 ${stat.color}`} />
              <h3 className="text-sm font-semibold text-gray-300">{stat.label}</h3>
            </div>
            
            <p className={`text-2xl font-bold ${stat.color} mb-1`}>
              {stat.value}
            </p>
            
            {stat.subtitle && (
              <p className="text-xs text-gray-400 italic">
                {stat.subtitle}
              </p>
            )}

            {/* Progress Bar for Percentage Stats */}
            {(stat.label.includes('Loyalty') || stat.label.includes('Wrestling')) && (
              <div className="mt-3">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div 
                    className={`h-2 rounded-full ${stat.label.includes('Loyalty') 
                      ? player.loyaltyMeter <= 20 ? 'bg-red-500' : player.loyaltyMeter <= 50 ? 'bg-yellow-500' : 'bg-green-500'
                      : 'bg-purple-500'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${stat.label.includes('Loyalty') ? player.loyaltyMeter : player.wrestlingSkill}%` 
                    }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            )}
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default StatsPanel