import { Routes, Route } from 'react-router'
import { HomePage } from './pages/Homepage.jsx'
import { CheckOut } from './pages/CheckoutPage.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckOut />} />
    </Routes>
  )
}

export default App
