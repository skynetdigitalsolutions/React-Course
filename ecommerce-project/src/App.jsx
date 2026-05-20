import { Routes, Route } from 'react-router'
import { HomePage } from './pages/Homepage.jsx'
import { CheckOut } from './pages/CheckoutPage/CheckoutPage.jsx'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage.jsx' 
import { ErrorPage } from './pages/Errorpage.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="checkout" element={<CheckOut />} />
      <Route path = 'orders' element = {<OrdersPage/>} />
      <Route path='tracking' element = {<TrackingPage/>} />
      <Route path='*' element = {<ErrorPage/>}/>
    </Routes>
  )
}

export default App
