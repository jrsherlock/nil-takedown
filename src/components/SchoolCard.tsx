import React from 'react'
import { motion } from 'framer-motion'
import {DollarSign, User, MapPin} from 'lucide-react'
import { School } from '../store/gameStore'

interface SchoolCardProps {
  school: School
  onSelect: () => void
}

const SchoolCard = ({ school, onSelect }: SchoolCardProps) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'yellow':
        return {
          gradient: 'from-yellow-600 to-amber-600',
          border: 'border-yellow-500/50',
          bg: 'from-yellow-900/30 to-amber-900/30'
        }
      case 'blue':
        return {
          gradient: 'from-blue-600 to-indigo-600',
          border: 'border-blue-500/50',
          bg: 'from-blue-900/30 to-indigo-900/30'
        }
      case 'orange':
        return {
          gradient: 'from-orange-600 to-red-600',
          border: 'border-orange-500/50',
          bg: 'from-orange-900/30 to-red-900/30'
        }
      case 'red':
        return {
          gradient: 'from-red-600 to-rose-600',
          border: 'border-red-500/50',
          bg: 'from-red-900/30 to-rose-900/30'
        }
      default:
        return {
          gradient: 'from-purple-600 to-pink-600',
          border: 'border-purple-500/50',
          bg: 'from-purple-900/30 to-pink-900/30'
        }
    }
  }

  const colors = getColorClasses(school.color)

  return (
    <motion.div
      className={`bg-gradient-to-br ${colors.bg} backdrop-blur-sm rounded-xl p-6 border ${colors.border} cursor-pointer group hover:scale-105 transition-all duration-300`}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
    >
      {/* School Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-4xl">{school.mascot}</span>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
              {school.name}
            </h3>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-400">Starting Bonus</p>
          <p className={`text-2xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
            ${school.startingBonus.toLocaleString()}
          </p>
        </div>
      </div>

      {/* School Vibe */}
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <MapPin className="w-4 h-4 text-gray-400" />
          <h4 className="text-sm font-semibold text-gray-300">The Vibe</h4>
        </div>
        <p className="text-sm text-gray-200 leading-relaxed">
          {school.vibe}
        </p>
      </div>

      {/* Coach Info */}
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <User className="w-4 h-4 text-gray-400" />
          <h4 className="text-sm font-semibold text-gray-300">The Coach</h4>
        </div>
        <p className="text-sm font-semibold text-white mb-1">{school.coach}</p>
        <p className="text-xs text-gray-300 leading-relaxed">
          {school.coachDescription}
        </p>
      </div>

      {/* NIL Specialty */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <DollarSign className="w-4 h-4 text-gray-400" />
          <h4 className="text-sm font-semibold text-gray-300">NIL Specialty</h4>
        </div>
        <p className="text-sm text-gray-200">
          {school.nilSpecialty}
        </p>
      </div>

      {/* Select Button */}
      <motion.button
        className={`w-full py-3 px-4 bg-gradient-to-r ${colors.gradient} text-white font-bold rounded-lg hover:shadow-lg transition-all duration-200`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        COMMIT TO THE BAG 💰
      </motion.button>
    </motion.div>
  )
}

export default SchoolCard