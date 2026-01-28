import { Routes, Route } from 'react-router-dom'
import NavBar from './pages/NevBar/NavBar'
import LatestNews from './pages/LatestNews'
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
        {/* <Route path="/sport" element={<Sport />} /> */}
        {/* <Route path="/premium" element={<Premium />} /> */}
      </Routes>
    </>
  )
}

export default App
