import { Routes, Route } from 'react-router'
import { HomePage } from './pages/Homepage.jsx'
import { CheckOut } from './pages/CheckoutPage.jsx'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage.jsx' 
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="checkout" element={<CheckOut />} />
      <Route path = 'orders' element = {<OrdersPage/>} />
      <Route path='tracking' element = {<TrackingPage/>} />
    </Routes>
  )
}

export default App
