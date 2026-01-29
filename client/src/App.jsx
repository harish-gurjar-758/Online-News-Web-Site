import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NevBar/NavBar'
import LatestNews from './pages/LatestNews'
import TechnologiesNews from './pages/TechnologiesNews'
// import Sport from './pages/Sport'
// import Premium from './pages/Premium'

function App() {
  return (
    <>
      {/* Navbar always visible */}
      <NavBar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<LatestNews />} />
        <Route path="/technologies" element={<TechnologiesNews />} />
        {/* <Route path="/sport" element={<Sport />} /> */}
        {/* <Route path="/premium" element={<Premium />} /> */}
      </Routes>
    </>
  )
}

export default App
