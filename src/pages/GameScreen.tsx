import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useGameStore } from '../store/gameStore'
import StatsPanel from '../components/StatsPanel'
import EventCard from '../components/EventCard'
import TransferPortal from '../components/TransferPortal'

const GameScreen = () => {
  const navigate = useNavigate()
  const {
    player,
    currentEvent,
    generateRandomEvent,
    advanceYear,
    schools,
    gamePhase
  } = useGameStore()

  const currentSchool = schools.find(s => s.id === player.currentSchool)

  useEffect(() => {
    // Navigate to ending screen when game ends
    if (gamePhase === 'ended') {
      navigate('/ending')
    }
  }, [gamePhase, navigate])

  useEffect(() => {
    // Generate initial event if none exists
    if (!currentEvent) {
      const timer = setTimeout(() => {
        generateRandomEvent()
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [currentEvent, generateRandomEvent])

  const handleNextEvent = () => {
    generateRandomEvent()
  }

  const handleAdvanceYear = () => {
    advanceYear()
    generateRandomEvent()
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          Year {player.year} - {currentSchool?.name}
        </h1>
        <p className="text-xl text-gray-300">
          {currentSchool?.mascot} Making that NIL money! {currentSchool?.mascot}
        </p>
      </motion.div>

      {/* Stats Panel */}
      <StatsPanel />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Events Column */}
        <div className="lg:col-span-2 space-y-6">
          {currentEvent ? (
            <EventCard event={currentEvent} />
          ) : (
            <motion.div 
              className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                📚 Studying... Just Kidding!
              </h3>
              <p className="text-gray-300 mb-6">
                You're taking a break from the NIL hustle. Time to generate your next money-making opportunity!
              </p>
              <button
                onClick={handleNextEvent}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200"
              >
                Find Next Opportunity 💰
              </button>
            </motion.div>
          )}

          {/* Year Progression */}
          <motion.div 
            className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-xl font-bold text-yellow-400 mb-3">Academic Progress</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white">Year {player.year} of 4</p>
                <p className="text-gray-300 text-sm">
                  {player.year === 4 ? 'Final year - make it count!' : 'Still time to maximize those earnings!'}
                </p>
              </div>
              <button
                onClick={handleAdvanceYear}
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                disabled={player.year >= 4}
              >
                {player.year >= 4 ? 'Graduate' : 'Next Year'}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Transfer Portal Column */}
        <div className="space-y-6">
          <TransferPortal />
          
          {/* Current School Info */}
          <motion.div 
            className="bg-gradient-to-br from-gray-900/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-500/30"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-xl font-bold text-white mb-3">Current School</h3>
            {currentSchool && (
              <div className="space-y-2">
                <p className="text-lg font-semibold text-white">
                  {currentSchool.mascot} {currentSchool.name}
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Coach:</strong> {currentSchool.coach}
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Specialty:</strong> {currentSchool.nilSpecialty}
                </p>
                <p className="text-xs text-gray-400 italic">
                  {currentSchool.vibe}
                </p>
              </div>
            )}
          </motion.div>

          {/* Achievements */}
          {player.achievements.length > 0 && (
            <motion.div 
              className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-xl font-bold text-purple-400 mb-3">🏆 Achievements</h3>
              <div className="space-y-1">
                {player.achievements.map((achievement, index) => (
                  <p key={index} className="text-sm text-gray-300">
                    • {achievement}
                  </p>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GameScreen