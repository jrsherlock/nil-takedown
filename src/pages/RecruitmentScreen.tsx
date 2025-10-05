import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useGameStore } from '../store/gameStore'

const RecruitmentScreen = () => {
  const navigate = useNavigate()
  const { setGamePhase, player } = useGameStore()

  const recruitmentMessages = [
    "📞 *Phone rings* - 'Son, we've been watching your highlights...'",
    "📧 Email flood: 47 new messages from college coaches",
    "🏆 'You're exactly what our program needs to win a championship!'",
    "💰 'Let's talk about your... financial future...'",
    "🎯 'We have some very generous boosters who would love to meet you...'"
  ]

  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div 
        className="text-center mb-12"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
      >
        <h1 className="text-5xl font-bold text-white mb-4">
          RECRUITMENT FRENZY
        </h1>
        <p className="text-xl text-gray-300">
          Welcome to the circus, <span className="text-yellow-400 font-bold">{player.name || 'Bo Bassett'}</span>!
        </p>
      </motion.div>

      {/* Recruitment Messages */}
      <div className="space-y-6 mb-12">
        {recruitmentMessages.map((message, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            <p className="text-lg text-white">{message}</p>
          </motion.div>
        ))}
      </div>

      {/* Recruitment Pitch */}
      <motion.div 
        className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-yellow-500/30"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">The Pitch</h2>
        <div className="space-y-4 text-gray-200">
          <p>
            "Listen kid, you're the hottest recruit in the country. Your cauliflower ears are only matched by your potential for cold, hard cash."
          </p>
          <p>
            "Every school wants you, and they're willing to pay. Big time. We're talking NIL deals that'll make your head spin faster than a wrestling takedown."
          </p>
          <p className="text-yellow-300 font-semibold">
            "The question is: How much is your loyalty worth? And more importantly... how little?"
          </p>
        </div>
      </motion.div>

      {/* Continue Button */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <button
          onClick={() => {
            setGamePhase('school-selection')
            navigate('/school-selection')
          }}
          className="px-10 py-4 text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          SHOW ME THE MONEY 💸
        </button>
      </motion.div>

      {/* Background Animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              rotate: 0 
            }}
            animate={{ 
              y: -100,
              rotate: 360 
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            💰
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default RecruitmentScreen