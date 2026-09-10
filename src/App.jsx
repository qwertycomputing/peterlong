import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import HomePage from './pages/HomePage'
import KeepMovingPage from './pages/KeepMovingPage'

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#111714',
            color: '#b0b8b4',
            border: '1px solid rgba(74,140,63,0.3)',
          },
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/keep-moving" element={<KeepMovingPage />} />
      </Routes>
    </>
  )
}

export default App
