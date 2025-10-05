import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {Trophy, DollarSign, Users, TrendingDown} from 'lucide-react'
import { useGameStore } from '../store/gameStore'

const EndingScreen = () => {
  const navigate = useNavigate()
  const { player, resetGame } = useGameStore()

  const handleReset = () => {
    resetGame()
    navigate('/start')
  }

  const getEndingData = () => {
    const money = player.nilBankAccount
    
    if (money >= 10000000) {
      return {
        title: "THE G.O.A.T. 🐐",
        subtitle: "Ultimate NIL Champion",
        description: "You are the undisputed king of NIL! You never won a national title, but you own a private jet and are dating a celebrity. You are carried off the mat on a throne made of money.",
        color: "from-yellow-400 to-orange-500",
        bgColor: "from-yellow-900/50 to-orange-900/50",
        icon: Trophy
      }
    } else if (money >= 5000000) {
      return {
        title: "THE INFLUENCER 📱",
        subtitle: "Social Media Mogul",
        description: "Who needs wrestling? You have 20 million followers and your own line of terrible energy drinks. You lost your last match but immediately posted a video about it that got 5 million views.",
        color: "from-purple-400 to-pink-500",
        bgColor: "from-purple-900/50 to-pink-900/50",
        icon: Users
      }
    } else if (money >= 1000000) {
      return {
        title: "THE SELLOUT 💸",
        subtitle: "Decent Payday",
        description: "You made a decent chunk of change but compromised so much you were benched for the final championship. Who cares, you're driving a Porsche.",
        color: "from-green-400 to-blue-500",
        bgColor: "from-green-900/50 to-blue-900/50",
        icon: DollarSign
      }
    } else {
      return {
        title: "THE LOYAL LOSER 😢",
        subtitle: "Principled but Poor",
        description: "You stuck with one school out of 'principle.' The game shows a sad cutscene of you working a 9-to-5 job while your rivals are on a yacht.",
        color: "from-gray-400 to-gray-600",
        bgColor: "from-gray-900/50 to-slate-900/50",
        icon: TrendingDown
      }
    }
  }

  const ending = getEndingData()
  const EndingIcon = ending.icon

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              rotate: 0,
              opacity: 0.7
            }}
            animate={{ 
              y: -100,
              rotate: 360,
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {player.nilBankAccount >= 1000000 ? '💰' : player.nilBankAccount >= 500000 ? '💸' : '😢'}
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="text-center max-w-4xl mx-auto px-6 relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Game Over */}
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 text-white"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          GAME OVER
        </motion.h1>

        {/* Ending Title */}
        <motion.div 
          className={`bg-gradient-to-r ${ending.bgColor} backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-center mb-4">
            <EndingIcon className={`w-16 h-16 bg-gradient-to-r ${ending.color} bg-clip-text text-transparent`} />
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${ending.color} bg-clip-text text-transparent`}>
            {ending.title}
          </h2>
          
          <h3 className="text-2xl text-white mb-6">
            {ending.subtitle}
          </h3>
          
          <p className="text-lg text-gray-200 leading-relaxed">
            {ending.description}
          </p>
        </motion.div>

        {/* Final Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-green-900/50 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
            <h4 className="text-green-400 font-semibold mb-1">NIL Bank</h4>
            <p className="text-2xl font-bold text-white">
              ${player.nilBankAccount.toLocaleString()}
            </p>
          </div>
          
          <div className="bg-red-900/50 backdrop-blur-sm rounded-xl p-4 border border-red-500/30">
            <h4 className="text-red-400 font-semibold mb-1">Loyalty</h4>
            <p className="text-2xl font-bold text-white">
              {player.loyaltyMeter}%
            </p>
          </div>
          
          <div className="bg-blue-900/50 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
            <h4 className="text-blue-400 font-semibold mb-1">Social Clout</h4>
            <p className="text-2xl font-bold text-white">
              {player.socialClout.toLocaleString()}
            </p>
          </div>
          
          <div className="bg-purple-900/50 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
            <h4 className="text-purple-400 font-semibold mb-1">Wrestling</h4>
            <p className="text-2xl font-bold text-white">
              {player.wrestlingSkill}%
            </p>
          </div>
        </motion.div>

        {/* Achievements */}
        {player.achievements.length > 0 && (
          <motion.div 
            className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-6 mb-8 border border-purple-500/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-4">🏆 Achievements Unlocked</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {player.achievements.map((achievement, index) => (
                <p key={index} className="text-gray-200">
                  • {achievement}
                </p>
              ))}
            </div>
          </motion.div>
        )}

        {/* Final Message */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {player.nilBankAccount < 1000000 ? (
            <p className="text-3xl font-bold text-red-400">LOL.</p>
          ) : (
            <p className="text-2xl text-green-400">💰 MONEY TALKS! 💰</p>
          )}
        </motion.div>

        {/* Play Again Button */}
        <motion.button
          onClick={handleReset}
          className="px-12 py-4 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          HUSTLE AGAIN 🔄
        </motion.button>
      </motion.div>
    </div>
  )
}

export default EndingScreen