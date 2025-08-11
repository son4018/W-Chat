import LandingPage from './pages/LandingPage'
import Chat from './pages/Chat'
import {BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
