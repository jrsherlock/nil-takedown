import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useGameStore } from './store/gameStore'
import StartScreen from './pages/StartScreen'
import RecruitmentScreen from './pages/RecruitmentScreen'
import SchoolSelection from './pages/SchoolSelection'
import GameScreen from './pages/GameScreen'
import EndingScreen from './pages/EndingScreen'
import GameLayout from './components/GameLayout'

function App() {
  const { gamePhase } = useGameStore()

  const getRouteForPhase = () => {
    switch (gamePhase) {
      case 'start': return '/start'
      case 'recruitment': return '/recruitment'
      case 'school-selection': return '/school-selection'
      case 'playing': return '/game'
      case 'ended': return '/ending'
      default: return '/start'
    }
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#1e293b',
              color: '#f1f5f9',
              border: '1px solid #7c3aed'
            }
          }}
        />
        
        <Routes>
          <Route path="/start" element={<StartScreen />} />
          <Route path="/recruitment" element={
            <GameLayout>
              <RecruitmentScreen />
            </GameLayout>
          } />
          <Route path="/school-selection" element={
            <GameLayout>
              <SchoolSelection />
            </GameLayout>
          } />
          <Route path="/game" element={
            <GameLayout>
              <GameScreen />
            </GameLayout>
          } />
          <Route path="/ending" element={<EndingScreen />} />
          <Route path="*" element={<Navigate to={getRouteForPhase()} replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App