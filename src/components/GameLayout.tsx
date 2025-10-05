import React from 'react'
import { motion } from 'framer-motion'

interface GameLayoutProps {
  children: React.ReactNode
}

const GameLayout = ({ children }: GameLayoutProps) => {
  return (
    <motion.div 
      className="min-h-screen p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
      
      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 z-50" />
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 z-50" />
    </motion.div>
  )
}

export default GameLayout