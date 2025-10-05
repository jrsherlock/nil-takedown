import React from 'react'
import { motion } from 'framer-motion'
import { useGameStore } from '../store/gameStore'
import SchoolCard from '../components/SchoolCard'

const SchoolSelection = () => {
  const { schools, selectSchool, player } = useGameStore()

  return (
    <motion.div 
      className="max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div 
        className="text-center mb-12"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
      >
        <h1 className="text-5xl font-bold text-white mb-4">
          CHOOSE YOUR PAYMASTER
        </h1>
        <p className="text-xl text-gray-300 mb-2">
          Where will <span className="text-yellow-400 font-bold">{player.name || 'Bo Basset'}</span> begin the money hunt?
        </p>
        <p className="text-lg text-gray-400 italic">
          Remember: This is just your "soft" commitment... 😉
        </p>
      </motion.div>

      {/* School Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {schools.map((school, index) => (
          <motion.div
            key={school.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <SchoolCard 
              school={school} 
              onSelect={() => selectSchool(school.id)}
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom Disclaimer */}
      <motion.div 
        className="bg-red-900/30 backdrop-blur-sm rounded-xl p-6 border border-red-500/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h3 className="text-xl font-bold text-red-400 mb-2">⚠️ Disclaimer</h3>
        <p className="text-gray-300">
          Your choice here is totally binding and permanent... just kidding! The Transfer Portal exists for a reason. 
          Loyalty is optional, money is not.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default SchoolSelection