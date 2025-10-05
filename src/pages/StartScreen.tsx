import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {Trophy, DollarSign, Users, TrendingUp} from 'lucide-react'
import { useGameStore } from '../store/gameStore'

const StartScreen = () => {
  const [playerName, setPlayerName] = useState('')
  const navigate = useNavigate()
  const { initializePlayer, setGamePhase } = useGameStore()

  const handleStart = () => {
    const finalName = playerName.trim() || 'Bo Basset'
    initializePlayer(finalName)
    setGamePhase('recruitment')
    navigate('/recruitment')
  }

  const floatingIcons = [
    { icon: DollarSign, delay: 0, x: 100, y: 50 },
    { icon: Trophy, delay: 0.5, x: -80, y: 80 },
    { icon: Users, delay: 1, x: 120, y: -60 },
    { icon: TrendingUp, delay: 1.5, x: -100, y: -40 }
  ]

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-purple-500/20"
          initial={{ opacity: 0, x: item.x, y: item.y }}
          animate={{ 
            opacity: [0, 0.3, 0],
            x: [item.x, item.x + 50, item.x],
            y: [item.y, item.y - 30, item.y],
            rotate: [0, 360]
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <item.icon size={48} />
        </motion.div>
      ))}

      <motion.div 
        className="text-center max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          BO BASSET'S
        </motion.h1>
        
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-8 text-white"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          NIL TAKEDOWN
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          "Loyalty is for losers."
        </motion.p>

        {/* Description */}
        <motion.div 
          className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-purple-500/30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            In the wild world of D1 college wrestling, you are <span className="text-yellow-400 font-bold">Bo Basset</span>, 
            a five-star recruit on a mission to secure the biggest payday by any means necessary.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed">
            Navigate shady boosters, slick coaches, and absurd sponsorship deals to maximize your earnings. 
            Can you pin down the perfect payday, or will you get left with an empty wallet and a useless degree?
          </p>
        </motion.div>

        {/* Player Name Input */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <label className="block text-white text-lg mb-4">
            Enter your wrestler name (or stick with Bo Basset):
          </label>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Bo Basset"
            className="w-full max-w-md mx-auto px-6 py-3 text-xl text-center bg-white/10 backdrop-blur-sm border border-purple-500/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50"
          />
        </motion.div>

        {/* Start Button */}
        <motion.button
          onClick={handleStart}
          className="px-12 py-4 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          START THE HUSTLE 💰
        </motion.button>

        {/* Warning */}
        <motion.p 
          className="text-sm text-gray-400 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          Warning: This game may cause excessive greed and questionable moral decisions
        </motion.p>
      </motion.div>
    </div>
  )
}

export default StartScreen