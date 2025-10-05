import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {Zap, DollarSign, AlertTriangle} from 'lucide-react'
import { useGameStore } from '../store/gameStore'
import toast from 'react-hot-toast'

const TransferPortal = () => {
  const [isPortalOpen, setIsPortalOpen] = useState(false)
  const { player, schools, selectSchool } = useGameStore()
  
  const currentSchool = schools.find(s => s.id === player.currentSchool)
  const otherSchools = schools.filter(s => s.id !== player.currentSchool)

  const handleEnterPortal = () => {
    setIsPortalOpen(true)
    toast('🌀 The Transfer Portal beckons...', {
      icon: '✨',
      style: { background: '#7c3aed', color: 'white' }
    })
  }

  const handleTransfer = (schoolId: string) => {
    const newSchool = schools.find(s => s.id === schoolId)
    if (newSchool) {
      selectSchool(schoolId)
      setIsPortalOpen(false)
      toast(`💸 Transferred to ${newSchool.name}! Loyalty is overrated anyway...`, {
        icon: '🏃‍♂️',
        duration: 4000
      })
    }
  }

  const getTransferOffer = (school: any) => {
    // Generate random transfer offer based on school's starting bonus
    const baseOffer = school.startingBonus
    const multiplier = 1.5 + Math.random() * 1.5 // 1.5x to 3x
    return Math.floor(baseOffer * multiplier)
  }

  return (
    <motion.div 
      className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-purple-400 mb-2 flex items-center justify-center space-x-2">
          <Zap className="w-6 h-6" />
          <span>Transfer Portal</span>
          <Zap className="w-6 h-6" />
        </h3>
        <p className="text-sm text-gray-300">
          The magical, glowing doorway to bigger paychecks
        </p>
      </div>

      {!isPortalOpen ? (
        <motion.div className="text-center">
          {/* Portal Animation */}
          <motion.div 
            className="relative mx-auto mb-4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center cursor-pointer"
            animate={{ 
              rotate: 360,
              boxShadow: [
                '0 0 20px rgba(168, 85, 247, 0.5)',
                '0 0 40px rgba(168, 85, 247, 0.8)',
                '0 0 20px rgba(168, 85, 247, 0.5)'
              ]
            }}
            transition={{ 
              rotate: { duration: 3, repeat: Infinity, ease: "linear" },
              boxShadow: { duration: 2, repeat: Infinity }
            }}
            onClick={handleEnterPortal}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>

          <button
            onClick={handleEnterPortal}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-semibold"
          >
            Enter Portal ✨
          </button>

          <div className="mt-4 p-3 bg-yellow-900/30 border border-yellow-500/30 rounded-lg">
            <div className="flex items-center justify-center space-x-2 mb-1">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-400">Loyalty Impact</span>
            </div>
            <p className="text-xs text-gray-300">
              Transferring will tank your loyalty meter, but who cares about loyalty when there's money to be made?
            </p>
          </div>
        </motion.div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <h4 className="text-lg font-bold text-white mb-4 text-center">
              🔥 TRANSFER OFFERS 🔥
            </h4>
            
            <div className="space-y-3 mb-4">
              {otherSchools.map((school, index) => {
                const offer = getTransferOffer(school)
                return (
                  <motion.button
                    key={school.id}
                    onClick={() => handleTransfer(school.id)}
                    className="w-full p-3 bg-gradient-to-r from-slate-800/50 to-gray-800/50 hover:from-slate-700/50 hover:to-gray-700/50 rounded-lg border border-gray-600/30 hover:border-green-500/50 transition-all duration-200 text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-semibold text-sm">
                          {school.mascot} {school.name.split(' ').slice(-1)[0]}
                        </p>
                        <p className="text-xs text-gray-400">
                          {school.coach}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4 text-green-400" />
                          <span className="text-green-400 font-bold">
                            ${offer.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400">Transfer Bonus</p>
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </div>

            <button
              onClick={() => setIsPortalOpen(false)}
              className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Close Portal
            </button>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  )
}

export default TransferPortal